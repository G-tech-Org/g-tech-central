import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import useAppDispatch from '@hooks/useAppDispatch';
import { openQuoteModal } from '@store/uiSlice';
import { PageCta, ServiceIcon } from '@components/ui';
import { SERVICES } from '@/data/services';

export default function Services() {
  const dispatch = useAppDispatch();
  const location = useLocation();

  useEffect(() => {
    const id = location.hash.replace('#', '');
    if (!id) return;

    const frame = requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    return () => cancelAnimationFrame(frame);
  }, [location.hash]);

  return (
    <main className="bg-surface min-h-screen">
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-16 pb-16 md:pt-24">
        <p className="eyebrow mb-4">What we do</p>
        <h1 className="font-headline-md text-headline-md md:font-display-lg-mobile md:text-display-lg-mobile text-on-background mb-5 max-w-3xl">
          Creative, digital, and technical services
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
          Support for your brand, online presence, and everyday business operations — designed as one connected practice.
        </p>
      </section>

      <div className="border-t border-white/8">
        {SERVICES.map((service, index) => (
          <section
            key={service.id}
            id={service.id}
            className="scroll-mt-28 border-b border-white/8"
          >
            <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-16 grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-start">
              <div className="rounded-3xl bg-surface-container-lowest border border-white/8 min-h-[220px] p-8 flex flex-col justify-between">
                <p className="font-label-md text-teal uppercase">
                  {String(index + 1).padStart(2, '0')} / {String(SERVICES.length).padStart(2, '0')}
                </p>
                <div>
                  <div className="text-teal mb-4">
                    <ServiceIcon name={service.id} className="w-12 h-12" />
                  </div>
                  <p className="font-headline-sm text-headline-sm text-on-background">{service.title}</p>
                </div>
              </div>
              <div>
                <h2 className="font-headline-sm text-headline-sm text-on-background">
                  {service.title}
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mt-5 mb-6">
                  {service.description}
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="font-body-md text-sm text-on-surface-variant flex items-start gap-2">
                      <span className="text-teal mt-0.5" aria-hidden="true">
                        ●
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  onClick={() => dispatch(openQuoteModal(service.id))}
                  className="font-label-md text-label-md font-bold text-teal uppercase hover:opacity-70 transition-opacity"
                >
                  Discuss this service <span aria-hidden="true">→</span>
                </button>
              </div>
            </div>
          </section>
        ))}
      </div>

      <PageCta
        title="Start your project today"
        body="Tell us what you are building, improving, or trying to solve. We will help you find the right next step."
        actionLabel="Request a consultation"
      />
    </main>
  );
}
