import { beforeEach, describe, expect, it, vi } from 'vitest';

describe('askChat', () => {
  beforeEach(() => {
    vi.resetModules();
    vi.stubEnv('VITE_CHAT_API_URL', 'https://pi.example.com/');
  });

  it('normalizes the API URL and returns a valid response', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ response: 'Hello from the Pi' }),
    });
    const { askChat } = await import('./chatApi.js');

    await expect(askChat('What do you build?')).resolves.toBe('Hello from the Pi');
    expect(fetch).toHaveBeenCalledWith(
      'https://pi.example.com/ask',
      expect.objectContaining({
        method: 'POST',
        body: JSON.stringify({ question: 'What do you build?' }),
      }),
    );
  });

  it('returns a safe error for malformed responses', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ unexpected: true }),
    });
    const { askChat, ChatApiError } = await import('./chatApi.js');

    await expect(askChat('Hello')).rejects.toBeInstanceOf(ChatApiError);
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
