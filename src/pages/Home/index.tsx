import { Link } from 'react-router-dom';
import useAppDispatch from '@hooks/useAppDispatch';
import { openQuoteModal } from '@store/uiSlice';
import { Button, Card, PageCta, ServiceIcon } from '@components/ui';
import { SERVICES } from '@/data/services';

const VALUES = [
  { title: 'Creative impact', detail: 'Brand visuals that make your message memorable' },
  { title: 'Built to perform', detail: 'Digital systems, media, and tech that work reliably' },
  { title: 'Growth-ready', detail: 'Strategy and execution for visibility, reach, and sales' },
];

const STEPS = [
  {
    n: '01',
    title: 'Understand the real problem',
    label: 'Discover',
    body: 'We align on outcomes, users, risks, and the technical reality before recommending a solution.',
  },
  {
    n: '02',
    title: 'Deliver in useful steps',
    label: 'Build',
    body: 'You get visible progress, direct communication, and decisions that stay grounded in business value.',
  },
  {
    n: '03',
    title: 'Leave your team stronger',
    label: 'Strengthen',
    body: 'We document, secure, and support the work so it remains dependable after launch.',
  },
];

export default function Home() {
  const dispatch = useAppDispatch();

  return (
    <div className="w-full">
      <section className="relative overflow-hidden noise-bg">
        <div className="absolute inset-0 grid-fade opacity-70" aria-hidden="true" />
        <div className="absolute -top-24 right-0 h-[28rem] w-[28rem] rounded-full bg-teal/10 blur-3xl" aria-hidden="true" />
        <div className="relative max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-16 pb-20 lg:pt-24 lg:pb-28">
          <p className="eyebrow mb-6">Bamenda, Cameroon · Studio v1.1</p>
          <h1 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-on-background max-w-5xl">
            Design, media, and tech{' '}
            <em className="not-italic text-teal">that move your brand forward</em>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mt-8">
            We help businesses, startups, and creators grow through standout branding, strategic marketing, software development, networking, and reliable gadgets that support real-world operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-10">
            <Button type="button" variant="primary" size="md" onClick={() => dispatch(openQuoteModal())}>
              Get a Quote
            </Button>
            <Button to="/services" variant="ghost" size="md">
              Explore our services
              <span aria-hidden="true">→</span>
            </Button>
          </div>
          <dl className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/8 pt-8">
            <div>
              <dt className="font-label-md text-on-surface-variant uppercase">Services</dt>
              <dd className="font-display text-4xl mt-1">{SERVICES.length}</dd>
            </div>
            <div>
              <dt className="font-label-md text-on-surface-variant uppercase">Locations</dt>
              <dd className="font-display text-4xl mt-1">2</dd>
            </div>
            <div>
              <dt className="font-label-md text-on-surface-variant uppercase">Since</dt>
              <dd className="font-display text-4xl mt-1">2017</dd>
            </div>
            <div>
              <dt className="font-label-md text-on-surface-variant uppercase">Base</dt>
              <dd className="font-display text-4xl mt-1">CM</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="border-y border-white/8 bg-surface-container-lowest overflow-hidden py-4" aria-hidden="true">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...SERVICES, ...SERVICES].map((service, index) => (
            <span key={`${service.id}-${index}`} className="px-8 font-label-md uppercase tracking-[0.18em] text-on-surface-variant">
              {service.title} <span className="text-teal ml-8">●</span>
            </span>
          ))}
        </div>
      </section>

      <section className="py-section-padding">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {VALUES.map((item, index) => (
              <article key={item.title} className="rounded-3xl border border-white/8 bg-surface-container-lowest p-8">
                <p className="font-label-md text-teal uppercase mb-8">0{index + 1}</p>
                <h2 className="font-headline-sm text-headline-sm text-on-background mb-3">{item.title}</h2>
                <p className="font-body-md text-body-md text-on-surface-variant">{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-section-padding">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <p className="eyebrow mb-4">Capabilities</p>
              <h2 className="font-headline-md text-headline-md md:font-display-lg-mobile md:text-display-lg-mobile text-on-background">
                Built for the full brand journey
              </h2>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
              From visual identity and content production to software, networking, and gadget sales, we support the full path from visibility to conversion and growth.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {SERVICES.map((service) => (
              <Card key={service.id} className="group min-h-[240px] flex flex-col">
                <div className="w-11 h-11 rounded-xl bg-teal/10 text-teal flex items-center justify-center mb-6 group-hover:bg-teal group-hover:text-on-secondary transition-colors">
                  <ServiceIcon name={service.id} className="w-5 h-5" />
                </div>
                <h3 className="font-headline-sm text-xl text-on-background mb-3">{service.title}</h3>
                <p className="font-body-md text-sm text-on-surface-variant mb-6 flex-1">{service.preview}</p>
                <Link
                  className="font-label-md text-label-md text-teal flex items-center gap-1 group-hover:gap-2 transition-all uppercase"
                  to={`/services#${service.id}`}
                >
                  Learn more <span aria-hidden="true">→</span>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-section-padding">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <p className="eyebrow mb-4">Process</p>
          <h2 className="font-headline-md text-headline-md md:font-display-lg-mobile md:text-display-lg-mobile text-on-background max-w-2xl mb-12">
            From idea to execution
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/8 rounded-3xl overflow-hidden border border-white/8">
            {STEPS.map((step) => (
              <div key={step.n} className="bg-surface p-8 md:p-10">
                <p className="font-label-md text-teal uppercase mb-8">{step.n} / {step.label}</p>
                <h3 className="font-headline-sm text-headline-sm text-on-background mb-4">{step.title}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PageCta
        title="Tell us what you need to launch or improve"
        body="Share your vision, your audience, and your goals. We will help you choose the right mix of creative and technical support."
      />
    </div>
  );
}
