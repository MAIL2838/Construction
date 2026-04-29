import { ArrowDown, Phone, Mail, MapPin } from 'lucide-react';

const footerLinks = [
  { label: 'Services', href: '#services' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export function Footer() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-stone-800/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand + CTA */}
          <div>
            <div className="flex flex-col mb-6">
              <span className="font-serif text-xl font-semibold tracking-wide text-stone-100">
                AXIOM
              </span>
              <span className="text-[10px] font-sans tracking-[0.3em] uppercase text-gold-400 -mt-0.5">
                Build Group
              </span>
            </div>
            <p className="font-sans font-light text-stone-500 text-sm leading-relaxed mb-6 max-w-xs">
              Premium construction delivered with precision, discipline, and accountability.
            </p>
            <button onClick={scrollToContact} className="btn-primary text-xs">
              Book Consultation
              <ArrowDown size={12} strokeWidth={2} />
            </button>
          </div>

          {/* Links */}
          <div>
            <p className="text-[10px] font-sans tracking-[0.2em] uppercase text-stone-600 mb-4">
              Navigation
            </p>
            <nav className="flex flex-col gap-3">
              {footerLinks.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  onClick={(e) => handleNav(e, href)}
                  className="font-sans text-sm text-stone-400 hover:text-stone-100 transition-colors"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact info */}
          <div>
            <p className="text-[10px] font-sans tracking-[0.2em] uppercase text-stone-600 mb-4">
              Contact
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone size={13} className="text-gold-400/60" strokeWidth={1.5} />
                <span className="font-sans text-sm text-stone-400">+44 20 7946 0000</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={13} className="text-gold-400/60" strokeWidth={1.5} />
                <span className="font-sans text-sm text-stone-400">enquiries@axiombuildgroup.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={13} className="text-gold-400/60" strokeWidth={1.5} />
                <span className="font-sans text-sm text-stone-400">London, United Kingdom</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-stone-800/30 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-sans text-[11px] text-stone-600 tracking-wide">
            &copy; {new Date().getFullYear()} Axiom Build Group Ltd. All rights reserved.
          </p>
          <p className="font-sans text-[11px] text-stone-700 tracking-wide">
            Precision. Discipline. Delivery.
          </p>
        </div>
      </div>
    </footer>
  );
}
