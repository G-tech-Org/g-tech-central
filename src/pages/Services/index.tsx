import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import useAppDispatch from '@hooks/useAppDispatch';
import { openQuoteModal } from '@store/uiSlice';
import { PageCta, ServiceIcon } from '@components/ui';
import { SERVICES } from '@/data/services';

function accentClass(accent: (typeof SERVICES)[number]['accent']) {
  if (accent === 'coral') return 'text-coral border-coral';
  if (accent === 'navy') return 'text-primary-container border-primary-container';
  return 'text-teal border-teal';
}

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
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-16 pb-20 text-center">
        <p className="font-label-md text-label-md text-teal font-bold uppercase tracking-widest mb-4">What we do</p>
        <h1 className="font-headline-md text-headline-md md:font-display-lg-mobile md:text-display-lg-mobile text-primary-container mb-4">
          Our Services
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
          Web, mobile, brand, and hardware support—so your digital work and day-to-day tools stay in one place.
        </p>
      </section>

      <div className="border-t border-outline-variant/30">
        {SERVICES.map((service, index) => {
          const accent = accentClass(service.accent);

          return (
            <section
              key={service.id}
              id={service.id}
              className={`scroll-mt-28 ${index % 2 === 0 ? 'bg-surface' : 'bg-surface-container-low'} border-b border-outline-variant/20`}
            >
              <div
                className={`max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20 items-center ${
                  index % 2 === 1 ? 'md:[&>div:first-child]:order-2' : ''
                }`}
              >
                <div className="relative overflow-hidden rounded-xl bg-primary-container min-h-[240px] md:min-h-[320px] p-8 flex flex-col justify-between text-white">
                  <p className="font-label-md text-label-md text-secondary-fixed font-bold">
                    0{index + 1} / {SERVICES.length}
                  </p>
                  <div>
                    <div className="text-secondary-fixed mb-4">
                      <ServiceIcon name={service.id} className="w-14 h-14" />
                    </div>
                    <p className="font-headline-sm text-headline-sm">{service.title}</p>
                    <p className="font-body-md text-body-md text-white/70 mt-2">{service.preview}</p>
                  </div>
                </div>
                <div>
                  <h2 className={`border-l-2 pl-3 font-headline-sm text-headline-sm font-bold text-left ${accent}`}>
                    {service.title}
                  </h2>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mt-5 mb-5">
                    {service.description}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-5 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="font-body-md text-sm text-on-surface-variant flex items-start gap-2">
                        <span className={accent.split(' ')[0]} aria-hidden="true">
                          ○
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    onClick={() => dispatch(openQuoteModal())}
                    className={`font-label-md text-label-md font-bold ${accent.split(' ')[0]} hover:opacity-70 transition-opacity`}
                  >
                    Discuss this service <span aria-hidden="true">→</span>
                  </button>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      <PageCta
        title="Start your project today"
        body="Tell us what you are building, improving, or trying to solve. We will help you find the right next step."
        actionLabel="Request a consultation"
      />
    </main>
  );
}
