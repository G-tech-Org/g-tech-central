import { useCallback, useEffect, useRef, useState, type FormEvent } from 'react';
import useAppDispatch from '@hooks/useAppDispatch';
import useAppSelector from '@hooks/useAppSelector';
import { closeQuoteModal, selectQuoteService } from '@store/uiSlice';
import { SERVICES } from '@/data/services';
import Button from './Button';
import Input from './Input';
import Textarea from './Textarea';
import { submitWeb3Form } from '@api/index';

const BUDGETS = [
  { value: 'under-500k', label: 'Under 500,000 XAF' },
  { value: '500k-2m', label: '500,000 – 2,000,000 XAF' },
  { value: '2m-5m', label: '2,000,000 – 5,000,000 XAF' },
  { value: 'over-5m', label: '5,000,000 XAF+' },
  { value: 'discuss', label: 'Prefer to discuss' },
];

export default function QuoteModal() {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.ui.isQuoteModalOpen);
  const selectedQuoteService = useAppSelector((state) => state.ui.selectedQuoteService);
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  const service = selectedQuoteService ?? SERVICES[0].id;
  const [budget, setBudget] = useState('discuss');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    details: '',
  });

  const handleClose = useCallback(() => {
    dispatch(closeQuoteModal());
    setSubmitted(false);
    setIsSubmitting(false);
    setSubmitError('');
    setBudget('discuss');
    setFormData({ name: '', email: '', phone: '', details: '' });
    triggerRef.current?.focus();
  }, [dispatch]);

  useEffect(() => {
    if (!isOpen) return;

    triggerRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose();
        return;
      }

      if (event.key !== 'Tab' || !panelRef.current) return;
      const focusable = Array.from(
        panelRef.current.querySelectorAll<HTMLElement>('button, [href], input, select, textarea'),
      ).filter((element) => !element.hasAttribute('disabled'));
      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const focusable = panelRef.current?.querySelector<HTMLElement>(
      'button, [href], input, select, textarea',
    );
    focusable?.focus();

    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, dispatch, handleClose]);

  if (!isOpen) return null;

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      await submitWeb3Form({
        subject: `New quote request from ${formData.name}`,
        from_name: 'G-Tech website quote form',
        ...formData,
        service,
        budget: BUDGETS.find((item) => item.value === budget)?.label ?? budget,
        message: formData.details,
      });
      setSubmitted(true);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'Unable to submit your quote request.');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn"
      onClick={handleClose}
      role="presentation"
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="quote-modal-title"
        className="bg-white w-full max-w-xl rounded-2xl shadow-2xl overflow-hidden border border-outline-variant/30 relative animate-scaleUp"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="bg-primary-container px-6 py-5 text-white flex items-center justify-between">
          <div>
            <h2 id="quote-modal-title" className="text-xl font-bold">
              Request a project quote
            </h2>
            <p className="text-xs text-white/70 mt-0.5">
              For a scoped estimate. General questions can go through Contact.
            </p>
          </div>
          <button
            type="button"
            onClick={handleClose}
            className="text-white/70 hover:text-white text-2xl font-bold p-1 transition-colors"
            aria-label="Close quote form"
          >
            ×
          </button>
        </div>

        <div className="p-6 max-h-[80vh] overflow-y-auto">
          {submitted ? (
            <div className="py-12 text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-teal/20 text-teal rounded-full flex items-center justify-center mb-4">
                <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-primary-container">Quote request received</h3>
              <p className="text-on-surface-variant mt-2 max-w-md">
                Thank you, <span className="font-semibold text-primary-container">{formData.name}</span>. We will review
                this and reply by email.
              </p>
              <Button variant="primary" className="mt-6" onClick={handleClose}>
                Done
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {submitError && (
                <p className="rounded-lg bg-coral/10 px-4 py-3 text-sm text-coral" role="alert">
                  {submitError}
                </p>
              )}
              <div>
                <p className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider block mb-2">
                  Service needed
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {SERVICES.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => dispatch(selectQuoteService(item.id))}
                      className={`p-3 rounded-lg border-2 text-xs font-bold text-left transition-all ${
                        service === item.id
                          ? 'border-teal bg-teal/10 text-secondary'
                          : 'border-outline-variant/50 text-on-surface-variant hover:border-teal/50'
                      }`}
                    >
                      {item.title}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  id="quote-name"
                  label="Full name"
                  placeholder="Aminata N."
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                <Input
                  id="quote-email"
                  label="Email"
                  type="email"
                  placeholder="you@company.cm"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  id="quote-phone"
                  label="Phone (optional)"
                  placeholder="6XX XX XX XX"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="quote-budget" className="text-sm font-semibold text-on-surface-variant tracking-wide">
                    Estimated budget
                  </label>
                  <select
                    id="quote-budget"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border-2 border-outline-variant bg-white text-on-surface text-sm outline-none transition-all focus:border-teal"
                  >
                    {BUDGETS.map((item) => (
                      <option key={item.value} value={item.value}>
                        {item.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <Textarea
                id="quote-details"
                label="Project overview"
                rows={4}
                required
                placeholder="What you need, who it is for, and when you want to start."
                value={formData.details}
                onChange={(e) => setFormData({ ...formData, details: e.target.value })}
              />

              <div className="flex justify-end gap-3 mt-2">
                <Button type="button" variant="ghost" onClick={handleClose}>
                  Cancel
                </Button>
                <Button type="submit" variant="primary" disabled={isSubmitting}>
                  {isSubmitting ? 'Submitting...' : 'Submit quote request'}
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
