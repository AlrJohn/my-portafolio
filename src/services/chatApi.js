import { env } from '../config/env.js';

export class ChatApiError extends Error {
  constructor(message, code = 'unavailable', diagnostics = {}) {
    super(message);
    this.name = 'ChatApiError';
    this.code = code;
    this.diagnostics = diagnostics;
  }
}

export function createRequestId() {
  return crypto.randomUUID();
}

export async function askChat(question, { signal, timeoutMs = 30_000 } = {}) {
  if (!env.chatApiUrl) {
    throw new ChatApiError('Chat is not configured.', 'not_configured');
  }

  const requestId = createRequestId();
  const startedAt = performance.now();
  const timeoutController = new AbortController();
  const timeoutId = setTimeout(() => timeoutController.abort(), timeoutMs);
  const combinedSignal = signal
    ? AbortSignal.any([signal, timeoutController.signal])
    : timeoutController.signal;

  try {
    const response = await fetch(`${env.chatApiUrl}/ask`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Request-ID': requestId,
      },
      body: JSON.stringify({ question }),
      signal: combinedSignal,
    });
    const data = await response.json().catch(() => null);
    const durationMs = Math.round(performance.now() - startedAt);
    const responseRequestId = response.headers?.get?.('X-Request-ID') || requestId;

    if (!response.ok) {
      throw new ChatApiError('The assistant is currently unavailable.', 'http_error', {
        request_id: responseRequestId,
        status: response.status,
        duration_ms: durationMs,
      });
    }

    if (typeof data?.response !== 'string' || !data.response.trim()) {
      throw new ChatApiError('The assistant returned an invalid response.', 'invalid_response', {
        request_id: responseRequestId,
        status: response.status,
        duration_ms: durationMs,
      });
    }

    return {
      response: data.response.trim(),
      requestId: responseRequestId,
      durationMs,
    };
  } catch (error) {
    if (error instanceof ChatApiError) throw error;
    const diagnostics = {
      request_id: requestId,
      duration_ms: Math.round(performance.now() - startedAt),
    };
    if (error?.name === 'AbortError') {
      throw new ChatApiError('The assistant took too long to respond.', 'timeout', diagnostics);
    }
    throw new ChatApiError('The assistant is currently unavailable.', 'network', diagnostics);
  } finally {
    clearTimeout(timeoutId);
  }
}
