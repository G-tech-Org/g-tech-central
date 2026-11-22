import { PageCta } from '@components/ui';

const MILESTONES = [
  { year: '2017', title: 'The beginning', body: 'G-Tech started as a practical digital partner focused on helping businesses and creators solve everyday communication and technology challenges.' },
  { year: '2019', title: 'Design & media growth', body: 'We expanded into branding, video, and digital campaigns to help businesses stand out in competitive markets.' },
  { year: '2023', title: 'Tech and systems', body: 'We added frontend, backend, mobile app, and networking expertise to support both digital growth and reliable business operations.' },
  { year: 'Now', title: 'Full-service partner', body: 'Today we help clients with design, media, growth, software development, networking, and gadget solutions under one roof.' },
] as const;

const LEADERS = [
  {
    name: 'Mbatifuh Gaston Ajeih',
    role: 'Chief Executive Officer',
    image: '/team/mbah-ajieh-gaston-ceo.jpg',
    bio: 'Leading G-Tech with a commitment to technical precision, business innovation, and transformative digital solutions across Cameroon and globally.',
  },
  {
    name: 'Abolaji Abiola',
    role: 'Product Lead',
    image: '/team/abiola-lead-product-design.jpg',
    bio: 'Crafting intuitive user interfaces, standout visual experiences, and high-impact design architectures across all digital platforms.',
  },
];

export default function About() {
  return (
    <main className="bg-surface">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-fade opacity-50" aria-hidden="true" />
        <div className="relative max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-16 md:py-24 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 lg:gap-16 items-end">
          <div>
            <p className="eyebrow mb-4">Who we are</p>
            <h1 className="font-headline-md text-headline-md md:font-display-lg-mobile md:text-display-lg-mobile text-on-background leading-tight mb-6">
              Design, media, tech, and growth support from one trusted partner.
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed max-w-xl">
              G-Tech is a creative and technical solutions company based in Bamenda, Cameroon. We help businesses, brands, and individuals grow through graphic design, media production, professional ads campaigns, social media growth, software development, and reliable tech sales.
            </p>
          </div>
          <div className="rounded-3xl border border-white/8 bg-surface-container-lowest p-8 min-h-[240px] flex flex-col justify-between">
            <div>
              <span className="eyebrow">Our philosophy</span>
              <h2 className="font-headline-sm text-headline-sm text-on-background mt-3 mb-3">Institutional stability and modern agility</h2>
              <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                We combine structured engineering, creative visual storytelling, and reliable delivery to help you lead in the digital era.
              </p>
            </div>
            <div className="pt-6 border-t border-white/8 flex items-center justify-between text-xs text-teal font-bold uppercase tracking-[0.12em]">
              <span>Trustworthy</span>
              <span>•</span>
              <span>Innovative</span>
              <span>•</span>
              <span>Approachable</span>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <article className="rounded-3xl bg-surface-container-lowest p-8 border border-white/8">
            <p className="eyebrow mb-5">Mission</p>
            <h2 className="font-headline-sm text-headline-sm text-on-background mb-3">Our Mission</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              To help brands and businesses grow with practical, modern solutions that connect creativity, technology, and measurable results. We focus on work that is useful, visually strong, and built for real-world performance.
            </p>
          </article>
          <article className="rounded-3xl bg-teal text-on-secondary p-8">
            <p className="font-label-md uppercase tracking-[0.16em] mb-5 opacity-70">Vision</p>
            <h2 className="font-headline-sm text-headline-sm mb-3">Our Vision</h2>
            <p className="font-body-md text-body-md opacity-80">
              To become the go-to creative and digital partner for businesses and creators across Cameroon and beyond, delivering quality, consistency, and results in every service we offer.
            </p>
          </article>
        </div>
      </section>

      <section className="py-16 md:py-20 border-y border-white/8">
        <div className="max-w-3xl mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="mb-12">
            <p className="eyebrow mb-4">Timeline</p>
            <h2 className="font-headline-md text-headline-md text-on-background mb-3">Our Story</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">A journey of continuous learning, creativity, and practical innovation.</p>
          </div>
          <ol className="space-y-0">
            {MILESTONES.map((milestone, index) => (
              <li key={milestone.year} className="grid grid-cols-[5rem_1fr] gap-6 border-t border-white/8 py-8">
                <p className="font-display text-2xl text-teal">{milestone.year}</p>
                <div>
                  <h3 className="font-headline-sm text-xl text-on-background mb-2">{milestone.title}</h3>
                  <p className="font-body-md text-sm text-on-surface-variant">{milestone.body}</p>
                  <span className="sr-only">Milestone {index + 1}</span>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-16 md:py-20">
        <div className="mb-12 max-w-xl">
          <p className="eyebrow mb-3">Leadership</p>
          <h2 className="font-headline-md text-headline-md text-on-background mb-3">Our Core Team</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            The minds architecting our vision, technical standards, and creative product experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl">
          {LEADERS.map((leader) => (
            <article
              key={leader.name}
              className="group overflow-hidden rounded-3xl bg-surface-container-lowest border border-white/8"
            >
              <div className="aspect-[3/4] overflow-hidden bg-surface-container">
                <img
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  src={leader.image}
                  alt={`${leader.name}, ${leader.role}`}
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="font-headline-sm text-xl text-on-background">{leader.name}</h3>
                <p className="font-label-md text-teal uppercase tracking-[0.14em] mt-1">
                  {leader.role}
                </p>
                <p className="font-body-md text-sm text-on-surface-variant mt-3 leading-relaxed">
                  {leader.bio}
                </p>
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
