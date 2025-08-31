// src/pages/Contact.jsx
import { useState } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

// simple mount animation
const appear = (delay = 0) => ({
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.45, ease: 'easeOut', delay },
});

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState(null); // { type: 'success'|'error', msg: string }

  const onChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    setErrors((err) => ({ ...err, [e.target.name]: undefined }));
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = 'Please enter your name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Please enter a valid email.';
    if (form.message.trim().length < 10) next.message = 'Message should be at least 10 characters.';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);
    if (!validate()) return;

    setSending(true);
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        PUBLIC_KEY
      );
      setStatus({ type: 'success', msg: 'Message sent! I’ll get back to you soon.' });
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      console.error(err);
      setStatus({ type: 'error', msg: 'Failed to send. Please try again later or email me directly.' });
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="page py-16 md:py-20">
      <motion.h1 className="text-3xl md:text-4xl font-bold mb-2" {...appear(0)}>
        Contact
      </motion.h1>

      <motion.p className="text-gray-600 dark:text-gray-400 mb-8" {...appear(0.05)}>
        Want to chat about internships, projects, or AI ideas? Drop me a line.
      </motion.p>

      <motion.form
        onSubmit={onSubmit}
        className="max-w-xl rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 md:p-8 shadow-sm space-y-4"
        {...appear(0.1)}
      >
        {/* Name */}
        <div>
          <label className="block text-sm mb-1">Name</label>
          <input
            name="name"
            value={form.name}
            onChange={onChange}
            className={`w-full p-3 rounded-xl border bg-white dark:bg-gray-800 focus:outline-none focus:ring-2
              ${errors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 dark:border-gray-700 focus:ring-blue-500'}
            `}
            placeholder="Your name"
            autoComplete="name"
          />
          {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm mb-1">Email</label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={onChange}
            className={`w-full p-3 rounded-xl border bg-white dark:bg-gray-800 focus:outline-none focus:ring-2
              ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 dark:border-gray-700 focus:ring-blue-500'}
            `}
            placeholder="you@example.com"
            autoComplete="email"
          />
          {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm mb-1">Message</label>
          <textarea
            name="message"
            rows="6"
            value={form.message}
            onChange={onChange}
            className={`w-full p-3 rounded-xl border bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 resize-y
              ${errors.message ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 dark:border-gray-700 focus:ring-blue-500'}
            `}
            placeholder="Tell me a bit about what you're looking for…"
          />
          {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message}</p>}
        </div>

        {/* Actions */}
        <div className="pt-2 flex items-center gap-3">
          <button
            type="submit"
            disabled={sending}
            className="px-5 py-2.5 rounded-xl bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-60 transition-colors"
          >
            {sending ? 'Sending…' : 'Send'}
          </button>

          {/* Optional direct email fallback */}
          <a
            href={`mailto:joni17111@outlook.com?subject=Portfolio%20Inquiry&body=${encodeURIComponent(form.message)}`}
            className="text-sm underline"
          >
            or email me directly
          </a>
        </div>

        {/* Status */}
        {status && (
          <div className={`mt-3 text-sm ${status.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
            {status.msg}
          </div>
        )}
      </motion.form>
    </section>
  );
}

export default Contact;
