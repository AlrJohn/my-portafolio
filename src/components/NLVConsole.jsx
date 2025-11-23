// src/components/NLVConsole.jsx
import { useCallback, useEffect, useRef, useState } from "react";
import createModule from "../wasm/nlv.mjs";
import wasmUrl from "../wasm/nlv.wasm?url";

export default function NLVConsole() {
  const [status, setStatus] = useState("Idle");
  const [ready, setReady] = useState(false);       // input enabled?
  const [output, setOutput] = useState("");
  const [line, setLine] = useState("");
  const [bootId, setBootId] = useState(() => Date.now());

  const outQueueRef = useRef([]);
  const flushScheduledRef = useRef(false);
  const inputQueueRef = useRef([]);
  const startedRef = useRef(false);
  const completedRef = useRef(false);
  const exitCodeRef = useRef(null);                // last exit code (null while running)

  const scheduleFlush = () => {
    if (flushScheduledRef.current) return;
    flushScheduledRef.current = true;
    setTimeout(() => {
      flushScheduledRef.current = false;
      if (!outQueueRef.current.length) return;
      const chunk = outQueueRef.current.join("");
      outQueueRef.current.length = 0;
      setOutput(prev => {
        const combined = prev ? prev + chunk : chunk;
        return combined.length > 50000
          ? combined.slice(combined.length - 50000)
          : combined;
      });
    }, 80);
  };

  // byte-wise writers for FS.init
  const makeStdout = (prefix = "") => (byte) => {
    const ch = String.fromCharCode(byte & 0xff);
    if (prefix && (outQueueRef.current.length === 0 || outQueueRef.current[outQueueRef.current.length - 1].endsWith("\n"))) {
      outQueueRef.current.push(prefix);
    }
    outQueueRef.current.push(ch);
    scheduleFlush();
  };

  // stdin byte source for FS.init
  const stdinByte = () => {
    // If program already finished with code 0, report EOF so no more reads
    if (exitCodeRef.current === 0) return -1; // EOF after successful completion
    // While running: wait for input when empty
    if (inputQueueRef.current.length === 0) return null;
    const ch = inputQueueRef.current.shift();
    const code = ch.codePointAt(0) ?? 0;
    return code & 0xff;
  };

  const start = useCallback(async () => {
    try {
      // reset UI state
      setOutput("");
      setStatus("Initializing…");
      setReady(false);
      inputQueueRef.current.length = 0;
      completedRef.current = false;
      exitCodeRef.current = null;

      // fetch wasm (cache-busted)
      const url = `${wasmUrl}${wasmUrl.includes("?") ? "&" : "?"}v=${bootId}`;
      const resp = await fetch(url, { cache: "no-store" });
      if (!resp.ok) throw new Error(`WASM fetch failed: ${resp.status}`);
      const binary = await resp.arrayBuffer();
      const b = new Uint8Array(binary);
      if (!(b[0] === 0x00 && b[1] === 0x61 && b[2] === 0x73 && b[3] === 0x6d)) {
        throw new Error("Downloaded file is not a WASM binary.");
      }
      setStatus(`Instantiating… (${b.length} bytes)`);

      const common = {
        // let the runtime EXIT so we can read the true exit code
        noExitRuntime: false,
        noInitialRun: true,

        // Wire FS before runtime starts, so cin/cout use our handlers
        preRun: [function () {
          try {
            const FS = this.FS || (typeof FS !== "undefined" ? FS : null);
            if (!FS) {
              console.error("[FS.init] FS not found");
              return;
            }
            FS.init(stdinByte, makeStdout(""), makeStdout("[err] "));
          } catch (e) {
            console.error("[FS.init] error:", e);
          }
        }],

        print: (text) => {
          outQueueRef.current.push((outQueueRef.current.length ? "\n" : "") + text);
          scheduleFlush();
        },
        printErr: (text) => {
          outQueueRef.current.push("\n[err] " + text);
          scheduleFlush();
        },

        onAbort: (msg) => setStatus("Aborted: " + msg),

        // 🔑 Decide final UI state **based on exit code**
        onExit: (code) => {
          exitCodeRef.current = code;
          if (code === 0) {
            // success: stop accepting input and mark finished
            setReady(false);
            setStatus("Finished (exit 0)");
          } else {
            // non-zero: leave Restart available and show exit code
            setReady(false);
            setStatus(`Exited (code ${code}) — click Restart to run again`);
          }
        },
      };

      // Path A — explicit instantiate with our binary
      const pathA = (async () => {
        const p = createModule({
          ...common,
          instantiateWasm(imports, success) {
            WebAssembly.instantiate(binary, imports)
              .then((res) => {
                if (completedRef.current) return;
                completedRef.current = true;
                setStatus("Running…");
                success(res.instance, res.module);
              })
              .catch((err) => {
                if (!completedRef.current) setStatus("Instantiation failed (A): " + (err?.message || err));
                console.error("instantiateWasm (A) error:", err);
              });
            return {};
          },
        });
        const Module = await p;
        if (completedRef.current) {
          setReady(true);
          inputQueueRef.current.length = 0; // clean start
          Module.callMain([]);              // run once; onExit will capture code
        }
      })();

      // Path B — provide wasmBinary + locateFile (backup path)
      const pathB = (async () => {
        const p = createModule({
          ...common,
          wasmBinary: binary,
          locateFile: (p) => (p.endsWith(".wasm") ? url : p),
        });
        const Module = await p;
        if (!completedRef.current) {
          completedRef.current = true;
          setStatus("Running…");
          setReady(true);
          inputQueueRef.current.length = 0;
          Module.callMain([]);
        }
      })();

      await Promise.race([pathA, pathB]);
    } catch (e) {
      console.error("[init] error:", e);
      setStatus("Failed: " + (e?.message || String(e)));
      setReady(false);
    }
  }, [bootId]);

  useEffect(() => {
    if (startedRef.current) return; // StrictMode guard
    startedRef.current = true;
    start();
  }, [start]);

  const submit = () => {
    if (!ready) return;
    const s = (line ?? "") + "\n";
    for (const ch of s) inputQueueRef.current.push(ch);
    setLine("");
  };

  const restart = () => {
    startedRef.current = false;
    inputQueueRef.current.length = 0;
    exitCodeRef.current = null;
    setBootId(Date.now());          // cache-bust
    setStatus("Restarting…");
    setReady(false);
    setOutput("");
    start();
  };

  return (
    <div className="max-w-3xl mx-auto p-4 space-y-3">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Nittany Lion VA — Live (C++ → WASM)</h2>
        <button className="px-3 py-1.5 rounded-md border text-sm" onClick={restart}>
          Restart
        </button>
      </div>

      <div
        className="h-80 w-full rounded-xl p-3 overflow-auto border"
        style={{ whiteSpace: "pre-wrap", fontFamily: "ui-monospace, monospace", fontSize: "0.9rem" }}
        aria-label="console-output"
      >
        {!ready && exitCodeRef.current === null
          ? `[Status] ${status}`
          : output || "(no output yet)"}
      </div>

      <div className="flex gap-2">
        <input
          className="flex-1 border rounded-lg px-3 py-2"
          placeholder={exitCodeRef.current === 0 ? "Program finished" : "Type and press Enter…"}
          value={line}
          onChange={(e) => setLine(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && submit()}
          disabled={!ready}
        />
        <button className="px-4 py-2 rounded-lg border" onClick={submit} disabled={!ready}>
          Send
        </button>
      </div>
    </div>
  );
}
