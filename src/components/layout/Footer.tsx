import { Link } from 'react-router-dom';
import { SERVICES } from '@/data/services';
import { NAV_LINKS } from '@/data/nav';

export default function Footer() {
  return (
    <footer className="bg-surface w-full border-t border-white/8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 px-margin-mobile md:px-margin-desktop py-section-padding max-w-container-max mx-auto">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5 mb-5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal text-on-secondary font-bold text-sm">G</span>
            <h3 className="font-display text-2xl text-on-primary">G-Tech</h3>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant mb-6 max-w-sm">
            Design, media, software, and hardware for ambitious teams in Bamenda and beyond.
          </p>
          <a
            aria-label="Email G-Tech"
            className="inline-flex items-center gap-2 text-on-background hover:text-teal transition-colors"
            href="mailto:g.technologies237@gmail.com"
          >
            g.technologies237@gmail.com
          </a>
        </div>
        <div>
          <h4 className="font-label-md text-label-md text-on-background mb-6 uppercase tracking-[0.14em]">Services</h4>
          <ul className="space-y-3 font-body-md text-sm">
            {SERVICES.slice(0, 6).map((service) => (
              <li key={service.id}>
                <Link
                  className="text-on-surface-variant hover:text-teal transition-colors"
                  to={`/services#${service.id}`}
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-label-md text-label-md text-on-background mb-6 uppercase tracking-[0.14em]">Studio</h4>
          <ul className="space-y-3 font-body-md text-sm">
            {NAV_LINKS.filter((item) => item.href !== '/').map((item) => (
              <li key={item.href}>
                <Link className="text-on-surface-variant hover:text-teal transition-colors" to={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="px-margin-mobile md:px-margin-desktop py-6 max-w-container-max mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-t border-white/8">
        <p className="font-body-md text-sm text-on-surface-variant">
          © {new Date().getFullYear()} G-Tech. Bamenda, Cameroon.
        </p>
        <p className="font-label-md text-label-md text-teal uppercase tracking-[0.14em]">Studio v1.1</p>
      </div>
    </footer>
  );
}
