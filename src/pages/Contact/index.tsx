import { useState, type FormEvent } from 'react';
import { Input, Button, Textarea } from '@components/ui';
import useAppDispatch from '@hooks/useAppDispatch';
import { openQuoteModal } from '@store/uiSlice';
import type { ContactFormData } from '@app-types/index';
import { submitWeb3Form } from '@api/index';

export default function Contact() {
  const dispatch = useAppDispatch();
  const [form, setForm] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      await submitWeb3Form({
        from_name: 'G-Tech website contact form',
        ...form,
        subject: `New contact message from ${form.name}`,
        message: `${form.subject}\n\n${form.message}`,
      });
      setSubmitted(true);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'Unable to send your message.');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="bg-surface">
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <p className="eyebrow mb-4">Contact</p>
            <h1 className="font-headline-md text-headline-md md:font-display-lg-mobile md:text-display-lg-mobile text-on-background mb-5">
              Get in touch
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed mb-8">
              Use this form for general inquiries, partnerships, or new project discussions. If you already know what you need, request a quote and we will guide you from there.
            </p>
            <div className="flex flex-col gap-4 text-on-surface-variant mb-8">
              <a href="mailto:g.technologies237@gmail.com" className="inline-flex items-center gap-3 hover:text-teal transition-colors">
                g.technologies237@gmail.com
              </a>
              <p>Bamenda, Cameroon</p>
            </div>
            <Button type="button" variant="ghost" onClick={() => dispatch(openQuoteModal())}>
              Request a project quote
            </Button>
          </div>

          {submitted ? (
            <div className="flex flex-col items-center justify-center bg-surface-container-lowest border border-white/8 rounded-3xl p-12 text-center min-h-[320px]">
              <div className="w-14 h-14 rounded-full bg-teal text-on-secondary flex items-center justify-center mb-4">
                <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h2 className="font-headline-sm text-headline-sm text-on-background">Message sent</h2>
              <p className="font-body-md text-body-md text-on-surface-variant mt-2">We will be in touch soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 rounded-3xl border border-white/8 bg-surface-container-lowest p-6 md:p-8">
              {submitError && (
                <p className="rounded-xl bg-error-container px-4 py-3 text-sm text-on-error-container" role="alert">
                  {submitError}
                </p>
              )}
              <Input
                id="name"
                name="name"
                label="Full name"
                placeholder="Aminata N."
                value={form.name}
                onChange={handleChange}
                required
              />
              <Input
                id="email"
                name="email"
                type="email"
                label="Email"
                placeholder="you@company.cm"
                value={form.email}
                onChange={handleChange}
                required
              />
              <Input
                id="phone"
                name="phone"
                label="Phone (optional)"
                placeholder="6XX XX XX XX"
                value={form.phone}
                onChange={handleChange}
              />
              <Input
                id="subject"
                name="subject"
                label="Subject"
                placeholder="A question about working together"
                value={form.subject}
                onChange={handleChange}
                required
              />
              <Textarea
                id="message"
                name="message"
                label="Message"
                rows={5}
                placeholder="How can we help?"
                value={form.message}
                onChange={handleChange}
                required
              />
              <Button type="submit" variant="primary" size="lg" className="mt-2 w-full" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send message'}
              </Button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
