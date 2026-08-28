import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAppDispatch from '@hooks/useAppDispatch';
import { openQuoteModal } from '@store/uiSlice';
import { Button } from '@components/ui';
import { NAV_LINKS } from '@/data/nav';

function navClassName({ isActive }: { isActive: boolean }) {
  return `font-label-md text-label-md transition-colors duration-200 ${
    isActive
      ? 'text-secondary-fixed font-bold border-b-2 border-secondary-fixed pb-1'
      : 'text-on-primary opacity-90 hover:text-secondary-fixed'
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
    <header className="bg-primary sticky top-0 w-full z-50 shadow-sm">
      <nav className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-3 max-w-container-max mx-auto" aria-label="Main">
        <Link className="text-lg md:text-xl font-extrabold text-on-primary tracking-tight" to="/">
          G-Tech
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((item) => (
            <NavLink key={item.href} className={navClassName} to={item.href} end={item.href === '/'}>
              {item.label}
            </NavLink>
          ))}
        </div>
        <Button type="button" variant="primary" size="sm" className="hidden md:inline-flex" onClick={handleOpenQuote}>
          Get a Quote
        </Button>
        <button
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-on-primary p-2 -mr-2"
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
        <div id="mobile-nav" className="md:hidden border-t border-white/10 bg-primary px-margin-mobile py-5 flex flex-col gap-1">
          {NAV_LINKS.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              end={item.href === '/'}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `py-3 font-label-md text-label-md ${isActive ? 'text-secondary-fixed font-bold' : 'text-on-primary'}`
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
