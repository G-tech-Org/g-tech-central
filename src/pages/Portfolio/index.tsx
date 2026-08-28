import { useState } from 'react';
import { PageCta } from '@components/ui';

type Category = 'All' | 'Web' | 'App' | 'Graphics';

type Project = {
  title: string;
  category: Exclude<Category, 'All'>;
  image: string;
  alt: string;
};

const PROJECTS: Project[] = [
  {
    title: 'Operations Dashboard',
    category: 'Web',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85',
    alt: 'Analytics dashboard on a laptop',
  },
  {
    title: 'Field Service App',
    category: 'App',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1200&q=85',
    alt: 'Mobile app displayed on a smartphone',
  },
  {
    title: 'Aura Tech Identity',
    category: 'Graphics',
    image: 'https://images.unsplash.com/photo-1634942537034-2531766767d1?auto=format&fit=crop&w=1200&q=85',
    alt: 'Branded stationery and design materials',
  },
  {
    title: 'Responsive Commerce',
    category: 'Web',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1200&q=85',
    alt: 'Responsive website layouts on multiple screens',
  },
  {
    title: 'Team Workspace',
    category: 'App',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85',
    alt: 'Team collaborating around a table',
  },
  {
    title: 'Campaign System',
    category: 'Graphics',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=85',
    alt: 'Graphic design materials arranged on a desk',
  },
];

const FILTERS: Category[] = ['All', 'Web', 'App', 'Graphics'];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<Category>('All');
  const visibleProjects = activeFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter((project) => project.category === activeFilter);

  return (
    <main className="bg-surface min-h-screen">
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-16 md:pt-20 pb-12 text-center">
        <p className="font-label-md text-label-md text-teal font-bold uppercase tracking-widest mb-4">Selected work</p>
        <h1 className="font-headline-md text-headline-md md:font-display-lg-mobile md:text-display-lg-mobile text-primary-container mb-4">
          Our Work
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
          Explore digital solutions designed to make complex work clearer, faster, and more dependable.
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
                className={`min-w-16 rounded-full border px-5 py-2 font-label-md text-label-md transition-colors ${
                  isActive
                    ? 'border-primary-container bg-primary-container text-white'
                    : 'border-outline-variant text-primary-container hover:border-teal hover:text-teal'
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>
      </section>

      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pb-20" aria-live="polite">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {visibleProjects.map((project) => (
            <article key={project.title} className="group overflow-hidden rounded-lg bg-white soft-shadow">
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
                <span className="font-label-md text-sm text-teal">{project.category}</span>
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
        body="Tell us what you are trying to improve, and we will help you find a practical next step."
        actionLabel="Start a conversation"
      />
    </main>
  );
}
