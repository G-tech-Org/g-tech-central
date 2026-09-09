import { PageCta } from '@components/ui';

const MILESTONES = [
  { year: '2017', title: 'The beginning', body: 'G-Tech started as a practical digital partner focused on helping businesses and creators solve everyday communication and technology challenges.', side: 'left' },
  { year: '2019', title: 'Design & media growth', body: 'We expanded into branding, video, and digital campaigns to help businesses stand out in competitive markets.', side: 'right' },
  { year: '2023', title: 'Tech and systems', body: 'We added frontend, backend, mobile app, and networking expertise to support both digital growth and reliable business operations.', side: 'left' },
  { year: 'Now', title: 'Full-service partner', body: 'Today we help clients with design, media, growth, software development, networking, and gadget solutions under one roof.', side: 'right' },
] as const;

const LEADERS = [
  {
    name: 'Mbah Ajieh Gaston',
    role: 'Founder & Chief Executive Officer',
    image: '/team/mbah-ajieh-gaston-ceo.jpg',
    bio: 'Leading G-Tech with a commitment to technical precision, business innovation, and transformative digital solutions across Cameroon and globally.',
  },
  {
    name: 'Abiola',
    role: 'Lead, Product Design',
    image: '/team/abiola-lead-product-design.jpg',
    bio: 'Crafting intuitive user interfaces, standout visual experiences, and high-impact design architectures across all digital platforms.',
  },
];

export default function About() {
  return (
    <main className="bg-surface">
      {/* Hero Section */}
      <section className="bg-surface-container-lowest">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-16 grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-10 lg:gap-16 items-center">
          <div>
            <p className="font-label-md text-label-md text-teal font-bold uppercase tracking-widest mb-4">Who we are</p>
            <h1 className="font-headline-md text-headline-md md:font-display-lg-mobile md:text-display-lg-mobile text-primary-container leading-tight mb-5">
              Design, media, tech, and growth support from one trusted partner.
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed max-w-xl">
              G-Tech is a creative and technical solutions company based in Yaoundé, Cameroon. We help businesses, brands, and individuals grow through graphic design, media production, professional ads campaigns, social media growth, software development, and reliable tech sales.
            </p>
          </div>
          <div className="rounded-2xl bg-primary-container p-8 text-white soft-shadow relative overflow-hidden flex flex-col justify-between min-h-[260px]">
            <div className="absolute inset-0 opacity-20 pointer-events-none" aria-hidden="true">
              <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-teal blur-2xl" />
              <div className="absolute bottom-0 left-0 w-60 h-60 rounded-full bg-coral blur-3xl" />
            </div>
            <div className="relative z-10">
              <span className="font-label-md text-xs text-secondary-fixed uppercase tracking-wider font-bold">Our Philosophy</span>
              <h3 className="font-headline-sm text-xl text-white mt-2 mb-3">Institutional Stability & Modern Agility</h3>
              <p className="font-body-md text-sm text-white/80 leading-relaxed">
                We combine structured engineering, creative visual storytelling, and reliable delivery to help you lead in the digital era.
              </p>
            </div>
            <div className="relative z-10 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-secondary-fixed font-bold">
              <span>Trustworthy</span>
              <span>•</span>
              <span>Innovative</span>
              <span>•</span>
              <span>Approachable</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          <article className="relative overflow-hidden rounded-lg bg-white p-7 soft-shadow border border-surface-variant">
            <div className="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center text-primary-container mb-5" aria-hidden="true">✦</div>
            <h2 className="font-headline-sm text-headline-sm text-primary-container mb-3">Our Mission</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              To help brands and businesses grow with practical, modern solutions that connect creativity, technology, and measurable results. We focus on work that is useful, visually strong, and built for real-world performance.
            </p>
          </article>
          <article className="relative overflow-hidden rounded-lg bg-white p-7 soft-shadow border border-surface-variant">
            <div className="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center text-primary-container mb-5" aria-hidden="true">◎</div>
            <h2 className="font-headline-sm text-headline-sm text-primary-container mb-3">Our Vision</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              To become the go-to creative and digital partner for businesses and creators across Cameroon and beyond, delivering quality, consistency, and results in every service we offer.
            </p>
          </article>
        </div>
      </section>

      {/* Story Timeline */}
      <section className="bg-surface-container-low py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-10">
            <h2 className="font-headline-md text-headline-md text-primary-container mb-3">Our Story</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">A journey of continuous learning, creativity, and practical innovation.</p>
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

      {/* Leadership Section */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-16 md:py-20">
        <div className="text-center mb-12">
          <p className="font-label-md text-label-md text-teal font-bold uppercase tracking-widest mb-3">Leadership &amp; Team</p>
          <h2 className="font-headline-md text-headline-md text-primary-container mb-3">Our Core Team</h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-xl mx-auto">
            The minds architecting our vision, technical standards, and creative product experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {LEADERS.map((leader) => (
            <article
              key={leader.name}
              className="group overflow-hidden rounded-2xl bg-white soft-shadow border border-surface-variant transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col"
            >
              <div className="aspect-[3/4] overflow-hidden bg-surface-container-low">
                <img
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  src={leader.image}
                  alt={`${leader.name}, ${leader.role}`}
                  loading="lazy"
                />
              </div>
              <div className="p-6 text-center flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-headline-sm text-xl text-primary-container font-bold">{leader.name}</h3>
                  <p className="font-label-md text-sm text-teal uppercase font-bold tracking-wider mt-1">
                    {leader.role}
                  </p>
                  <p className="font-body-md text-sm text-on-surface-variant mt-3 leading-relaxed">
                    {leader.bio}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <PageCta
        title="Ready to grow your brand or business?"
        body="Let’s talk about the creative, digital, and technical support that will help you move forward with confidence."
        actionLabel="Get a Quote"
      />
    </main>
  );
}
