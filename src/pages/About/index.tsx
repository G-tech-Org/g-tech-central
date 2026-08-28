import { PageCta } from '@components/ui';

const MILESTONES = [
  { year: '2018', title: 'Foundation', body: 'G-Tech was established in Douala with a small team focused on practical digital solutions for local enterprises.', side: 'left' },
  { year: '2020', title: 'Regional Expansion', body: 'Expanded our footprint across Central Africa, securing major contracts in telecommunications and finance.', side: 'right' },
  { year: '2023', title: 'Global Reach', body: 'Launched international partnerships, working with teams across Europe and North America.', side: 'left' },
  { year: 'Present', title: 'Innovating the Future', body: 'Pioneering AI integration and scalable cloud architectures for enterprise clients worldwide.', side: 'right' },
] as const;

const LEADERS = [
  { name: 'Jean-Paul Kameni', role: 'Chief Executive Officer', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=85', alt: 'Jean-Paul Kameni, Chief Executive Officer' },
  { name: 'Marie T. Eboa', role: 'Chief Technology Officer', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=85', alt: 'Marie T. Eboa, Chief Technology Officer' },
  { name: 'David Njoya', role: 'Head of Product', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=85', alt: 'David Njoya, Head of Product' },
  { name: 'Sarah Bekolo', role: 'Director of Operations', image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=85', alt: 'Sarah Bekolo, Director of Operations' },
];

export default function About() {
  return (
    <main className="bg-surface">
      <section className="bg-surface-container-lowest">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-16 grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-10 lg:gap-16 items-center">
          <div>
            <p className="font-label-md text-label-md text-teal font-bold uppercase tracking-widest mb-4">Who we are</p>
            <h1 className="font-headline-md text-headline-md md:font-display-lg-mobile md:text-display-lg-mobile text-primary-container leading-tight mb-5">Architecting tomorrow&apos;s solutions today.</h1>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed max-w-xl">We are a team of visionary technologists, engineers, and strategists dedicated to transforming complex challenges into elegant, robust digital ecosystems. With roots in Cameroon and a global perspective, we blend institutional stability with modern technical agility.</p>
          </div>
          <div className="aspect-[1.35] overflow-hidden rounded-lg soft-shadow">
            <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=85" alt="G-Tech team collaborating in a bright office" />
          </div>
        </div>
      </section>

      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          <article className="relative overflow-hidden rounded-lg bg-white p-7 soft-shadow border border-surface-variant">
            <div className="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center text-primary-container mb-5" aria-hidden="true">✦</div>
            <h2 className="font-headline-sm text-headline-sm text-primary-container mb-3">Our Mission</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">To empower enterprises and communities globally by delivering scalable, secure, and innovative technology solutions that drive sustainable growth and operational excellence. We strive to be the trusted partner navigating the complexities of the digital age.</p>
          </article>
          <article className="relative overflow-hidden rounded-lg bg-white p-7 soft-shadow border border-surface-variant">
            <div className="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center text-primary-container mb-5" aria-hidden="true">◎</div>
            <h2 className="font-headline-sm text-headline-sm text-primary-container mb-3">Our Vision</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">To be the leading architect of Africa&apos;s technological renaissance, recognized internationally for engineering brilliance, unwavering reliability, and a profound commitment to developing future-ready digital infrastructures.</p>
          </article>
        </div>
      </section>

      <section className="bg-surface-container-low py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-10">
            <h2 className="font-headline-md text-headline-md text-primary-container mb-3">Our Story</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">A journey of continuous evolution and steadfast commitment to excellence.</p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-outline-variant -translate-x-1/2" aria-hidden="true" />
            <div className="space-y-5 md:space-y-8">
              {MILESTONES.map((milestone) => (
                <div key={milestone.year} className="relative grid grid-cols-2 gap-8 min-h-20">
                  <div className={milestone.side === 'left' ? 'text-right pr-4 md:pr-8' : 'col-start-2 pl-4 md:pl-8'}>
                    <article className="inline-block max-w-xs rounded-lg bg-white p-4 text-left soft-shadow">
                      <p className="font-label-md text-sm text-coral font-bold">{milestone.year}</p>
                      <h3 className="font-headline-sm text-lg text-primary-container mb-1">{milestone.title}</h3>
                      <p className="font-body-md text-sm text-on-surface-variant">{milestone.body}</p>
                    </article>
                  </div>
                  <span className={`absolute left-1/2 top-8 w-2 h-2 rounded-full -translate-x-1/2 ${milestone.side === 'left' ? 'bg-teal' : 'bg-primary'}`} aria-hidden="true" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-16 md:py-20">
        <div className="text-center mb-10">
          <h2 className="font-headline-md text-headline-md text-primary-container mb-3">Our Leadership Team</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">The minds architecting our vision and driving technical excellence.</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
          {LEADERS.map((leader) => (
            <article key={leader.name}>
              <div className="aspect-[0.8] overflow-hidden rounded-lg bg-surface-container-low mb-3">
                <img className="w-full h-full object-cover" src={leader.image} alt={leader.alt} loading="lazy" />
              </div>
              <h3 className="font-headline-sm text-base text-primary-container">{leader.name}</h3>
              <p className="font-label-md text-xs text-teal uppercase font-bold mt-1">{leader.role}</p>
            </article>
          ))}
        </div>
      </section>

      <PageCta title="Ready to build the future?" body="Let's discuss how our engineering expertise can accelerate your digital transformation." actionLabel="Get a Quote" />
    </main>
  );
}
