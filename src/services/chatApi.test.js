import { beforeEach, describe, expect, it, vi } from 'vitest';

describe('askChat', () => {
  beforeEach(() => {
    vi.resetModules();
    vi.stubEnv('VITE_CHAT_API_URL', 'https://pi.example.com/');
  });

  it('normalizes the API URL and returns a valid response', async () => {
    const responseHeaders = new Headers({ 'X-Request-ID': 'api-request-id' });
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      status: 200,
      headers: responseHeaders,
      json: async () => ({ response: 'Hello from the Pi' }),
    });
    const { askChat } = await import('./chatApi.js');

    await expect(askChat('What do you build?')).resolves.toEqual(expect.objectContaining({
      response: 'Hello from the Pi',
      requestId: 'api-request-id',
      durationMs: expect.any(Number),
    }));
    expect(fetch).toHaveBeenCalledWith(
      'https://pi.example.com/ask',
      expect.objectContaining({
        method: 'POST',
        body: JSON.stringify({ question: 'What do you build?' }),
        headers: expect.objectContaining({
          'X-Request-ID': expect.any(String),
        }),
      }),
    );
  });

  it('returns a safe error for malformed responses', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      status: 200,
      headers: new Headers(),
      json: async () => ({ unexpected: true }),
    });
    const { askChat, ChatApiError } = await import('./chatApi.js');

    await expect(askChat('Hello')).rejects.toBeInstanceOf(ChatApiError);
  });

  it('maps HTTP failures to metadata without retaining submitted content', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: false,
      status: 503,
      headers: new Headers({ 'X-Request-ID': 'failed-request' }),
      json: async () => ({ response: 'internal backend detail' }),
    });
    const { askChat } = await import('./chatApi.js');

    await expect(askChat('private question')).rejects.toMatchObject({
      code: 'http_error',
      diagnostics: {
        request_id: 'failed-request',
        status: 503,
      },
    });
  });

  it('reports a timeout when the request is aborted', async () => {
    global.fetch = vi.fn((url, options) => new Promise((resolve, reject) => {
      options.signal.addEventListener('abort', () => {
        reject(new DOMException('Aborted', 'AbortError'));
      });
    }));
    const { askChat } = await import('./chatApi.js');

    await expect(askChat('Hello', { timeoutMs: 1 })).rejects.toMatchObject({
      code: 'timeout',
    });
  });
});
