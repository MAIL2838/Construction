import { ArrowDown } from 'lucide-react';
import { useInView } from '../hooks/useInView';

export function FinalCTA() {
  const { ref, visible } = useInView<HTMLElement>();

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={ref} className="py-28 relative">
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 50% 50%, rgba(184, 137, 26, 0.08) 0%, transparent 60%),
            linear-gradient(180deg, #0d0d0d 0%, #141410 100%)
          `,
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />

      <div className="relative max-w-3xl mx-auto px-6 lg:px-10 text-center">
        <div className={`animate-on-enter ${visible ? 'visible' : ''}`}>
          <span className="section-label">Get Started</span>
          <div className="gold-line mx-auto mt-3 mb-8" />
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-stone-100 leading-tight mb-6">
            Start Your Project
            <br />
            <span className="text-shimmer-subtle">with Confidence</span>
          </h2>
          <p className="font-sans font-light text-stone-500 text-sm leading-relaxed max-w-md mx-auto mb-10">
            Take the first step with a no-obligation consultation. We will discuss your vision, assess the scope, and provide clear next steps.
          </p>
          <button onClick={scrollToContact} className="btn-primary">
            Book Consultation
            <ArrowDown size={14} strokeWidth={2} />
          </button>
        </div>
      </div>
    </section>
  );
}
