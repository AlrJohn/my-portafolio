const normalizeUrl = (value) => value?.trim().replace(/\/+$/, '') || '';

export const env = {
  chatApiUrl: normalizeUrl(import.meta.env.VITE_CHAT_API_URL),
  emailjs: {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID?.trim() || '',
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID?.trim() || '',
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY?.trim() || '',
  },
};

export const hasEmailConfig = Object.values(env.emailjs).every(Boolean);
