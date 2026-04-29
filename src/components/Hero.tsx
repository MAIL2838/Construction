import { ArrowDown } from 'lucide-react';
import { useEffect, useState } from 'react';

export function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 50% 0%, rgba(184, 137, 26, 0.07) 0%, transparent 60%),
            radial-gradient(ellipse 60% 80% at 80% 100%, rgba(94, 78, 59, 0.12) 0%, transparent 60%),
            linear-gradient(160deg, #0d0d0d 0%, #141414 40%, #1c1a16 70%, #141414 100%)
          `,
        }}
      />

      {/* Texture overlay */}
      <div
        className="absolute inset-0 z-0 opacity-[0.025]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(213, 204, 188, 0.5) 2px,
            rgba(213, 204, 188, 0.5) 3px
          )`,
        }}
      />

      {/* Decorative corner lines */}
      <div className="absolute top-24 left-10 w-px h-24 bg-gradient-to-b from-transparent via-gold-500/20 to-transparent hidden lg:block" />
      <div className="absolute top-24 right-10 w-px h-24 bg-gradient-to-b from-transparent via-gold-500/20 to-transparent hidden lg:block" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-10 text-center">
        {/* Label */}
        <div
          className={`animate-fade-in ${loaded ? 'visible' : ''}`}
          style={{ transitionDelay: '0ms' }}
        >
          <span className="section-label">Premium Construction</span>
          <span className="gold-line mx-auto mt-3 mb-8" />
        </div>

        {/* Headline */}
        <h1
          className={`animate-on-enter ${loaded ? 'visible' : ''} font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-semibold leading-[1.08] tracking-tight mb-8`}
          style={{ transitionDelay: '120ms' }}
        >
          <span className="text-shimmer">Built with Precision.</span>
          <br />
          <span className="text-stone-200">Delivered Without</span>
          <br />
          <span className="text-stone-300 italic font-normal">Compromise.</span>
        </h1>

        {/* Subtext */}
        <p
          className={`animate-on-enter ${loaded ? 'visible' : ''} font-sans font-light text-stone-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-12`}
          style={{ transitionDelay: '240ms' }}
        >
          From high-spec residential builds to complex commercial projects, we deliver
          structures engineered for longevity, efficiency, and exacting standards.
        </p>

        {/* CTA group */}
        <div
          className={`animate-on-enter ${loaded ? 'visible' : ''} flex flex-col sm:flex-row items-center justify-center gap-4`}
          style={{ transitionDelay: '360ms' }}
        >
          <button onClick={scrollToContact} className="btn-primary">
            Book Consultation
            <ArrowDown size={14} strokeWidth={2} />
          </button>
          <a
            href="#services"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-ghost text-xs"
          >
            View Services
          </a>
        </div>

        {/* Scroll indicator */}
        <div
          className={`animate-fade-in ${loaded ? 'visible' : ''} mt-20 flex flex-col items-center gap-2`}
          style={{ transitionDelay: '600ms' }}
        >
          <div className="w-px h-12 bg-gradient-to-b from-transparent via-gold-500/40 to-transparent" />
          <span className="text-[10px] font-sans tracking-[0.25em] uppercase text-stone-600">
            Scroll
          </span>
        </div>
      </div>
    </section>
  );
}
