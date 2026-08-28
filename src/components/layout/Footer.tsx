import { Link } from 'react-router-dom';
import { SERVICES } from '@/data/services';

export default function Footer() {
  return (
    <footer className="bg-primary w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter px-margin-mobile md:px-margin-desktop py-section-padding max-w-container-max mx-auto border-b border-white/10">
        <div>
          <h3 className="font-headline-sm text-headline-sm text-on-primary mb-4">G-Tech</h3>
          <p className="font-body-md text-body-md text-on-primary opacity-80 mb-6">
            Websites, apps, brand, and hardware for ambitious teams.
          </p>
          <a
            aria-label="Email G-Tech"
            className="inline-flex items-center gap-2 text-on-primary opacity-80 hover:text-secondary-fixed transition-colors"
            href="mailto:g.technologies237@gmail.com"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="M3 7l9 7 9-7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            g.technologies237@gmail.com
          </a>
        </div>
        <div>
          <h4 className="font-label-md text-label-md text-on-primary mb-6 uppercase tracking-wider font-bold">Services</h4>
          <ul className="space-y-4 font-body-md text-body-md">
            {SERVICES.map((service) => (
              <li key={service.id}>
                <Link
                  className="text-on-primary opacity-80 hover:text-secondary-fixed transition-colors"
                  to={`/services#${service.id}`}
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-label-md text-label-md text-on-primary mb-6 uppercase tracking-wider font-bold">Company</h4>
          <ul className="space-y-4 font-body-md text-body-md">
            <li>
              <Link className="text-on-primary opacity-80 hover:text-secondary-fixed transition-colors" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="text-on-primary opacity-80 hover:text-secondary-fixed transition-colors" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="px-margin-mobile md:px-margin-desktop py-6 max-w-container-max mx-auto">
        <p className="font-body-md text-body-md text-on-primary opacity-70 text-sm">
          © {new Date().getFullYear()} G-Tech. Yaoundé, Cameroon.
        </p>
      </div>
    </footer>
  );
}
