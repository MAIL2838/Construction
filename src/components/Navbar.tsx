import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Features', href: '#features' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleCTA = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-charcoal-900/95 backdrop-blur-md border-b border-stone-800/40 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex flex-col leading-none">
          <span className="font-serif text-xl font-semibold tracking-wide text-stone-100">
            AXIOM
          </span>
          <span className="text-[10px] font-sans tracking-[0.3em] uppercase text-gold-400 -mt-0.5">
            Build Group
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={(e) => handleNav(e, href)}
              className="text-xs font-sans font-medium tracking-[0.15em] uppercase text-stone-400 hover:text-stone-100 transition-colors duration-200"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <button onClick={handleCTA} className="btn-primary text-xs">
            Book Consultation
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-stone-300 hover:text-stone-100 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-charcoal-900/98 backdrop-blur-md border-t border-stone-800/40 px-6 py-6 flex flex-col gap-5">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={(e) => handleNav(e, href)}
              className="text-xs font-sans font-medium tracking-[0.15em] uppercase text-stone-400 hover:text-stone-100 transition-colors"
            >
              {label}
            </a>
          ))}
          <button onClick={handleCTA} className="btn-primary text-xs mt-2 self-start">
            Book Consultation
          </button>
        </div>
      </div>
    </header>
  );
}
