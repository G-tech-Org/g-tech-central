import { Link } from 'react-router-dom';
import useAppDispatch from '@hooks/useAppDispatch';
import { openQuoteModal } from '@store/uiSlice';
import { Button, Card, PageCta, ServiceIcon } from '@components/ui';
import { SERVICES } from '@/data/services';

const VALUES = [
  { title: 'Strategy first', detail: 'Clear goals and a practical plan' },
  { title: 'Built with care', detail: 'Work you can maintain' },
  { title: 'Ready to grow', detail: 'Designed for the next stage' },
];

function accentIconClass(accent: (typeof SERVICES)[number]['accent']) {
  if (accent === 'coral') return 'group-hover:bg-coral';
  if (accent === 'navy') return 'group-hover:bg-primary-container';
  return 'group-hover:bg-teal';
}

export default function Home() {
  const dispatch = useAppDispatch();

  return (
    <div className="w-full">
      <section className="relative bg-surface-container-lowest overflow-hidden">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-padding lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center">
          <div className="z-10 space-y-stack-lg pr-0 lg:pr-12">
            <p className="font-label-md text-label-md text-teal font-bold uppercase tracking-widest">
              Yaoundé, Cameroon
            </p>
            <h1 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-primary-container leading-tight">
              Reliable technology <br />
              <span className="text-teal">for ambitious teams</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
              We help Cameroonian and international organizations ship websites, apps, brand systems, and the hardware to run them.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button type="button" variant="primary" size="md" onClick={() => dispatch(openQuoteModal())}>
                Get a Quote
              </Button>
              <Button to="/services" variant="ghost" size="md">
                Explore our services
                <span aria-hidden="true">→</span>
              </Button>
            </div>
          </div>

          <div className="relative min-h-[360px] lg:min-h-[520px] w-full rounded-xl overflow-hidden bg-primary-container text-white p-8 md:p-10 flex flex-col justify-between mt-8 lg:mt-0">
            <div className="absolute inset-0 opacity-30" aria-hidden="true">
              <div className="absolute -top-16 -right-10 w-64 h-64 rounded-full bg-teal blur-3xl" />
              <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-coral/60 blur-3xl" />
            </div>
            <div className="relative">
              <p className="font-label-md text-label-md text-secondary-fixed font-bold uppercase tracking-widest mb-3">
                What we deliver
              </p>
              <p className="font-headline-sm text-headline-sm max-w-md">
                Practical digital work for teams that need to look credible and keep moving.
              </p>
            </div>
            <ul className="relative grid grid-cols-1 sm:grid-cols-2 gap-3">
              {SERVICES.map((service) => (
                <li key={service.id} className="glass-panel rounded-lg px-4 py-3 text-primary-container">
                  <p className="font-label-md text-label-md font-bold">{service.title}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-primary-container text-white py-12 relative z-20">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/20">
            {VALUES.map((item) => (
              <div key={item.title} className="py-4 md:py-0">
                <h2 className="font-headline-sm text-headline-sm text-secondary-fixed mb-2">{item.title}</h2>
                <p className="font-body-md text-body-md text-white/80">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-section-padding bg-surface">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="font-headline-md text-headline-md md:font-display-lg-mobile md:text-display-lg-mobile text-primary-container mb-4">
              What we can take on
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Four focused offers, from first digital presence to the equipment your people use every day.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
            {SERVICES.map((service) => (
              <Card key={service.id} className="group">
                <div
                  className={`w-14 h-14 rounded-lg bg-surface-container-low flex items-center justify-center text-primary-container mb-6 group-hover:text-white transition-colors ${accentIconClass(service.accent)}`}
                >
                  <ServiceIcon name={service.id} className="w-7 h-7" />
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary-container mb-3">{service.title}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6">{service.preview}</p>
                <Link
                  className="font-label-md text-label-md text-teal flex items-center gap-1 group-hover:gap-2 transition-all"
                  to={`/services#${service.id}`}
                >
                  Learn more <span aria-hidden="true">→</span>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-section-padding bg-surface-container-lowest">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="max-w-2xl mb-12">
            <h2 className="font-headline-md text-headline-md md:font-display-lg-mobile md:text-display-lg-mobile text-primary-container mb-4">
              A clearer path from idea to impact
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Every engagement is shaped around your goals, your constraints, and the people who will rely on the result.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            <div className="border-t-2 border-teal pt-6">
              <p className="font-label-md text-label-md text-teal font-bold mb-3">01 / Discover</p>
              <h3 className="font-headline-sm text-headline-sm text-primary-container mb-3">Understand the real problem</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                We align on outcomes, users, risks, and the technical reality before recommending a solution.
              </p>
            </div>
            <div className="border-t-2 border-teal pt-6">
              <p className="font-label-md text-label-md text-teal font-bold mb-3">02 / Build</p>
              <h3 className="font-headline-sm text-headline-sm text-primary-container mb-3">Deliver in useful steps</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                You get visible progress, direct communication, and decisions that stay grounded in business value.
              </p>
            </div>
            <div className="border-t-2 border-teal pt-6">
              <p className="font-label-md text-label-md text-teal font-bold mb-3">03 / Strengthen</p>
              <h3 className="font-headline-sm text-headline-sm text-primary-container mb-3">Leave your team stronger</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                We document, secure, and support the work so it remains dependable after launch.
              </p>
            </div>
          </div>
        </div>
      </section>

      <PageCta
        title="Tell us what you are building"
        body="Share the problem, the audience, and the timeline. We will help you find a practical next step."
      />
    </div>
  );
}
