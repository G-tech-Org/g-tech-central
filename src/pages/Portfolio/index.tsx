import { useState } from 'react';
import { PageCta } from '@components/ui';

type Category = 'All' | 'Design' | 'Professional Ads Campaign' | 'Social Media Growth' | 'Media' | 'Development' | 'Tech';

type Project = {
  title: string;
  category: Exclude<Category, 'All'>;
  image: string;
  alt: string;
};

const PROJECTS: Project[] = [
  {
    title: "Dzela's Beauty Services Flyer",
    category: 'Design',
    image: '/portfolio/dzelas-beauty-flyer.jpg',
    alt: "Dzela's Beauty Salon and Services promotional flyer design",
  },
  {
    title: "Assembly of God's People Flyer",
    category: 'Design',
    image: '/portfolio/assembly-of-gods-people-flyer.jpg',
    alt: "Assembly of God's People church conference and service flyer design",
  },
  {
    title: "Ella's Good Hair Masterclass Flyer",
    category: 'Design',
    image: '/portfolio/ellas-good-hair-flyer.jpg',
    alt: "Ella's Good Hair Mega Importation Master Class promotional flyer design",
  },
  {
    title: 'Brand Visibility & Promotional Ads Campaign',
    category: 'Professional Ads Campaign',
    image: '/portfolio/gtech-visibility-promotional-ads.jpg',
    alt: 'Earn the Visibility that you Deserve - G-Tech Promotional Ads Campaign across Facebook, YouTube, Google, Instagram, and Thread',
  },
  {
    title: 'Audience & Engagement Growth Campaign',
    category: 'Social Media Growth',
    image: '/portfolio/gtech-social-media-growth.jpg',
    alt: 'Boost your Followers and increase your online engagement - G-Tech Social Media Growth Campaign',
  },
  {
    title: 'Campus Network Upgrade',
    category: 'Tech',
    image: 'https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=1200&q=85',
    alt: 'Networking equipment and computer workspace',
  },
  {
    title: 'Product Launch Reel',
    category: 'Media',
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=85',
    alt: 'Camera and filming setup for a product video',
  },
  {
    title: 'Short Film Campaign',
    category: 'Media',
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=85',
    alt: 'Cinematic lighting setup on a film set',
  },
  {
    title: 'Instagram Growth Strategy',
    category: 'Social Media Growth',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=1200&q=85',
    alt: 'Social media engagement and analytics workspace',
  },
  {
    title: 'SaaS Landing Page',
    category: 'Development',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1200&q=85',
    alt: 'Modern website interface on laptop screen',
  },
  {
    title: 'Flutter Booking App',
    category: 'Development',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=85',
    alt: 'Mobile app interface on a smartphone',
  },
  {
    title: 'Inventory API Platform',
    category: 'Development',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85',
    alt: 'Data dashboards and system monitoring interfaces',
  },
  {
    title: 'Laptop & Gadget Storefront',
    category: 'Tech',
    image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=1200&q=85',
    alt: 'Laptop and gadget display on a clean desk',
  },
];

const FILTERS: Category[] = ['All', 'Design', 'Professional Ads Campaign', 'Social Media Growth', 'Media', 'Development', 'Tech'];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<Category>('All');
  const categoryCounts = FILTERS.reduce<Record<Category, number>>((acc, filter) => {
    acc[filter] = filter === 'All' ? PROJECTS.length : PROJECTS.filter((project) => project.category === filter).length;
    return acc;
  }, { All: 0, Design: 0, 'Professional Ads Campaign': 0, 'Social Media Growth': 0, Media: 0, Development: 0, Tech: 0 });

  const visibleProjects = activeFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter((project) => project.category === activeFilter);

  return (
    <main className="bg-surface min-h-screen">
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-16 md:pt-20 pb-12 text-center">
        <p className="font-label-md text-label-md text-teal font-bold uppercase tracking-widest mb-4">Selected work</p>
        <h1 className="font-headline-md text-headline-md md:font-display-lg-mobile md:text-display-lg-mobile text-primary-container mb-4">
          Portfolio of growth-focused work
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
          A look at our branding, media, digital, and technical work designed to help businesses look stronger and perform better.
        </p>
        <div className="flex flex-wrap justify-center gap-3 mt-10" role="group" aria-label="Filter projects">
          {FILTERS.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveFilter(filter)}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 font-label-md text-label-md transition-all duration-200 ${
                  isActive
                    ? 'border-primary-container bg-primary-container text-white shadow-[0_10px_25px_rgba(19,44,56,0.18)]'
                    : 'border-outline-variant bg-white text-primary-container hover:border-teal hover:text-teal hover:shadow-[0_8px_18px_rgba(22,162,149,0.12)]'
                }`}
              >
                <span>{filter}</span>
                <span
                  className={`inline-flex min-w-6 items-center justify-center rounded-full px-1.5 py-0.5 text-[11px] font-bold ${
                    isActive ? 'bg-white/15 text-white' : 'bg-surface-container-low text-on-surface-variant'
                  }`}
                >
                  {categoryCounts[filter]}
                </span>
              </button>
            );
          })}
        </div>
      </section>

      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pb-20" aria-live="polite">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {visibleProjects.map((project) => (
            <article key={project.title} className="group overflow-hidden rounded-2xl bg-white soft-shadow transition-transform duration-300 hover:-translate-y-1">
              <div className="aspect-[1.35] overflow-hidden bg-surface-container-low">
                <img
                  src={project.image}
                  alt={project.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center justify-between gap-4 px-5 py-4">
                <h2 className="font-headline-sm text-lg text-primary-container">{project.title}</h2>
                <span className="rounded-full border border-teal/30 bg-teal/10 px-2.5 py-1 font-label-md text-[11px] uppercase tracking-wider text-teal">
                  {project.category}
                </span>
              </div>
            </article>
          ))}
        </div>
        {visibleProjects.length === 0 && (
          <p className="py-16 text-center font-body-md text-body-md text-on-surface-variant">No projects in this category yet.</p>
        )}
      </section>

      <PageCta
        title="Have a project in mind?"
        body="Tell us what you want to launch, improve, or promote, and we will help you shape the right solution."
        actionLabel="Start a conversation"
      />
    </main>
  );
}
