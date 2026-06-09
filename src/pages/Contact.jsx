import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion as Motion } from 'framer-motion';
import { env, hasEmailConfig } from '../config/env.js';
import { site } from '../data/site.js';

const appear = (delay = 0) => ({
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.45, ease: 'easeOut', delay },
});

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState(null);

  const onChange = (event) => {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
    setErrors((current) => ({ ...current, [event.target.name]: undefined }));
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = 'Please enter your name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Please enter a valid email.';
    if (form.message.trim().length < 10) next.message = 'Message should be at least 10 characters.';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus(null);
    if (!hasEmailConfig || !validate()) return;

    setSending(true);
    try {
      await emailjs.send(
        env.emailjs.serviceId,
        env.emailjs.templateId,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        env.emailjs.publicKey,
      );
      setStatus({ type: 'success', message: "Message sent. I'll get back to you soon." });
      setForm({ name: '', email: '', message: '' });
    } catch {
      setStatus({ type: 'error', message: 'The form is unavailable. Please email me directly.' });
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="page py-16 md:py-20">
      <Motion.h1 className="text-3xl md:text-4xl font-bold mb-2" {...appear(0)}>Contact</Motion.h1>
      <Motion.p className="text-gray-600 dark:text-gray-400 mb-8" {...appear(0.05)}>
        Want to discuss a project, opportunity, or AI idea? Send me a message.
      </Motion.p>

      <Motion.form
        onSubmit={onSubmit}
        className="max-w-xl rounded-2xl border border-gray-200 bg-white p-6 shadow-sm space-y-4 dark:border-gray-800 dark:bg-gray-900 md:p-8"
        {...appear(0.1)}
        noValidate
      >
        {!hasEmailConfig && (
          <p className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-3 text-sm text-amber-800 dark:text-amber-200" role="status">
            The contact form is not configured. Please use the direct email link below.
          </p>
        )}

        <Field label="Name" name="name" value={form.name} error={errors.name} onChange={onChange} autoComplete="name" />
        <Field label="Email" name="email" type="email" value={form.email} error={errors.email} onChange={onChange} autoComplete="email" />

        <div>
          <label className="block text-sm mb-1" htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="6"
            value={form.message}
            onChange={onChange}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? 'message-error' : undefined}
            className={`w-full p-3 rounded-xl border bg-white focus:outline-none focus:ring-2 resize-y dark:bg-gray-800 ${
              errors.message ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500 dark:border-gray-700'
            }`}
            placeholder="Tell me what you are working on..."
          />
          {errors.message && <p id="message-error" className="mt-1 text-xs text-red-600">{errors.message}</p>}
        </div>

        <div className="pt-2 flex flex-wrap items-center gap-3">
          <button
            type="submit"
            disabled={sending || !hasEmailConfig}
            className="px-5 py-2.5 rounded-xl bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-60"
          >
            {sending ? 'Sending...' : 'Send'}
          </button>
          <a
            href={`mailto:${site.email}?subject=Portfolio%20Inquiry&body=${encodeURIComponent(form.message)}`}
            className="text-sm underline underline-offset-2"
          >
            Email me directly
          </a>
        </div>

        {status && (
          <div role="status" className={`text-sm ${status.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
            {status.message}
          </div>
        )}
      </Motion.form>
    </section>
  );
}

function Field({ label, name, type = 'text', value, error, onChange, autoComplete }) {
  return (
    <div>
      <label className="block text-sm mb-1" htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
        className={`w-full p-3 rounded-xl border bg-white focus:outline-none focus:ring-2 dark:bg-gray-800 ${
          error ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500 dark:border-gray-700'
        }`}
      />
      {error && <p id={`${name}-error`} className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  );
}
