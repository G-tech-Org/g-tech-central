import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAppDispatch from '@hooks/useAppDispatch';
import { openQuoteModal, toggleDarkMode } from '@store/uiSlice';
import { Button } from '@components/ui';
import useAppSelector from '@hooks/useAppSelector';
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
  const darkMode = useAppSelector((state) => state.ui.darkMode);

  const handleOpenQuote = () => {
    dispatch(openQuoteModal());
    setMenuOpen(false);
  };

  const themeToggle = (
    <button
      type="button"
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-pressed={darkMode}
      onClick={() => dispatch(toggleDarkMode())}
      className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-on-primary hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary-fixed"
    >
      {darkMode ? (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42" strokeLinecap="round" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
          <path d="M20.5 15.5A8.5 8.5 0 0 1 8.5 3.5 8.5 8.5 0 1 0 20.5 15.5Z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </button>
  );

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
        <div className="hidden md:flex items-center gap-2">
          {themeToggle}
          <Button type="button" variant="primary" size="sm" onClick={handleOpenQuote}>Get a Quote</Button>
        </div>
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
          <div className="mt-2 flex justify-center">{themeToggle}</div>
        </div>
      )}
    </header>
  );
}
