import { env } from '../config/env.js';

export class ChatApiError extends Error {
  constructor(message, code = 'unavailable') {
    super(message);
    this.name = 'ChatApiError';
    this.code = code;
  }
}

export async function askChat(question, { signal, timeoutMs = 30_000 } = {}) {
  if (!env.chatApiUrl) {
    throw new ChatApiError('Chat is not configured.', 'not_configured');
  }

  const timeoutController = new AbortController();
  const timeoutId = setTimeout(() => timeoutController.abort(), timeoutMs);
  const combinedSignal = signal
    ? AbortSignal.any([signal, timeoutController.signal])
    : timeoutController.signal;

  try {
    const response = await fetch(`${env.chatApiUrl}/ask`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question }),
      signal: combinedSignal,
    });
    const data = await response.json().catch(() => null);

    if (!response.ok || typeof data?.response !== 'string' || !data.response.trim()) {
      throw new ChatApiError('The assistant returned an invalid response.');
    }

    return data.response.trim();
  } catch (error) {
    if (error instanceof ChatApiError) throw error;
    if (error?.name === 'AbortError') {
      throw new ChatApiError('The assistant took too long to respond.', 'timeout');
    }
    throw new ChatApiError('The assistant is currently unavailable.');
  } finally {
    clearTimeout(timeoutId);
  }
}
