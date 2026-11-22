import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAppDispatch from '@hooks/useAppDispatch';
import { openQuoteModal } from '@store/uiSlice';
import { Button } from '@components/ui';
import { NAV_LINKS } from '@/data/nav';

function navClassName({ isActive }: { isActive: boolean }) {
  return `font-label-md text-label-md uppercase tracking-[0.14em] transition-colors duration-200 ${
    isActive
      ? 'text-teal'
      : 'text-on-surface-variant hover:text-on-background'
  }`;
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const dispatch = useAppDispatch();

  const handleOpenQuote = () => {
    dispatch(openQuoteModal());
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 w-full z-50 glass-panel">
      <nav className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-3.5 max-w-container-max mx-auto" aria-label="Main">
        <Link className="flex items-center gap-2.5 text-on-primary" to="/">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal text-on-secondary font-bold text-sm">G</span>
          <span className="font-display text-xl tracking-tight">G-Tech</span>
        </Link>
        <div className="hidden lg:flex items-center space-x-7">
          {NAV_LINKS.map((item) => (
            <NavLink key={item.href} className={navClassName} to={item.href} end={item.href === '/'}>
              {item.label}
            </NavLink>
          ))}
        </div>
        <Button type="button" variant="primary" size="sm" className="hidden lg:inline-flex" onClick={handleOpenQuote}>
          Get a Quote
        </Button>
        <button
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-on-primary p-2 -mr-2"
        >
          {menuOpen ? (
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </nav>
      {menuOpen && (
        <div id="mobile-nav" className="lg:hidden border-t border-white/8 px-margin-mobile py-5 flex flex-col gap-1">
          {NAV_LINKS.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              end={item.href === '/'}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `py-3 font-label-md text-label-md uppercase tracking-[0.14em] ${isActive ? 'text-teal' : 'text-on-background'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Button type="button" variant="primary" className="mt-3 w-full" onClick={handleOpenQuote}>
            Get a Quote
          </Button>
        </div>
      )}
    </header>
  );
}
