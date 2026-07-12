import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion as Motion } from 'framer-motion';
import { ExternalLink, FileText, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { env, hasEmailConfig } from '../config/env.js';
import { site } from '../data/site.js';
import { addBreadcrumb, reportError } from '../observability/telemetry.js';

const appear = (delay = 0) => ({
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.45, ease: 'easeOut', delay },
});

const contactLinks = [
  { label: 'Email', href: `mailto:${site.email}`, icon: <Mail size={16} aria-hidden="true" /> },
  { label: 'LinkedIn', href: site.linkedinUrl, icon: <Linkedin size={16} aria-hidden="true" /> },
  { label: 'GitHub', href: site.githubUrl, icon: <Github size={16} aria-hidden="true" /> },
  { label: 'Resume', href: site.resumeUrl, icon: <FileText size={16} aria-hidden="true" /> },
];

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
    const startedAt = performance.now();
    addBreadcrumb('contact', 'Contact submission started');
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
      addBreadcrumb('contact', 'Contact submission succeeded', {
        duration_ms: Math.round(performance.now() - startedAt),
      });
    } catch (error) {
      const incidentId = reportError(new Error('Email provider request failed'), 'contact_submit', {
        error_code: 'provider_error',
        provider: 'emailjs',
        provider_status: error?.status || 'unknown',
        duration_ms: Math.round(performance.now() - startedAt),
        route: window.location.pathname,
      });
      setStatus({
        type: 'error',
        message: `The form is unavailable. Please email me directly.${incidentId ? ` Reference: ${incidentId}` : ''}`,
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="page py-16 md:py-20">
      <Motion.h1 className="text-3xl md:text-4xl font-bold mb-2" {...appear(0)}>Contact</Motion.h1>
      <Motion.p className="text-gray-600 dark:text-gray-400 mb-8" {...appear(0.05)}>
        Reach out about AI engineering, FDE work, internships, research, or product collaborations.
      </Motion.p>

      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_20rem]">
        <Motion.form
          onSubmit={onSubmit}
          className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm space-y-4 dark:border-gray-800 dark:bg-gray-900 md:p-8"
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

        <Motion.aside
          className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900"
          {...appear(0.15)}
        >
          <h2 className="font-semibold">Professional Links</h2>
          <p className="mt-2 flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <MapPin size={16} aria-hidden="true" /> {site.location}
          </p>
          <div className="mt-5 grid gap-3">
            {contactLinks.map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noreferrer' : undefined}
                className="flex items-center justify-between rounded-xl border border-gray-200 px-3 py-2 text-sm hover:bg-gray-50 dark:border-gray-800 dark:hover:bg-gray-800"
              >
                <span className="inline-flex items-center gap-2">
                  {icon}
                  {label}
                </span>
                {href.startsWith('http') && <ExternalLink size={14} aria-hidden="true" />}
              </a>
            ))}
          </div>
        </Motion.aside>
      </div>
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
