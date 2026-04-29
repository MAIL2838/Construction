import { ArrowDown, CheckCircle2 } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const inclusions = [
  'Detailed scope of work and specification review',
  'Transparent line-item cost breakdown',
  'Project timeline with defined milestones',
  'Material and subcontractor allowances itemised',
  'No hidden fees or post-contract variations',
];

export function Pricing() {
  const { ref, visible } = useInView<HTMLElement>();

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="pricing" ref={ref} className="py-28 relative">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 70% 60% at 50% 100%, rgba(184, 137, 26, 0.04) 0%, transparent 65%),
            linear-gradient(180deg, #0d0d0d 0%, #0f0f0d 100%)
          `,
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/15 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className={`animate-on-enter ${visible ? 'visible' : ''} text-center mb-16`}>
          <span className="section-label">Pricing</span>
          <div className="gold-line mx-auto mt-3 mb-6" />
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-stone-100 leading-tight mb-6">
            Transparent{' '}
            <span className="text-shimmer-subtle">Quotes</span>
          </h2>
          <p className="font-sans font-light text-stone-500 text-sm leading-relaxed max-w-xl mx-auto">
            Every project is different. We provide detailed, transparent quotes following
            consultation to ensure accuracy and clarity from the outset.
          </p>
        </div>

        {/* Card */}
        <div
          className={`animate-on-enter ${visible ? 'visible' : ''} max-w-2xl mx-auto`}
          style={{ transitionDelay: '120ms' }}
        >
          <div className="glass-card p-10 relative overflow-hidden">
            {/* Top gold accent */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />

            <div className="flex flex-col items-center text-center mb-10">
              <p className="font-serif text-3xl sm:text-4xl font-semibold text-stone-100 mb-3">
                Bespoke Quotation
              </p>
              <p className="font-sans font-light text-stone-500 text-sm leading-relaxed max-w-md">
                After a no-obligation consultation, we produce a fully itemised quote scoped
                to your exact project requirements, no estimates, no guesswork.
              </p>
            </div>

            {/* Inclusions */}
            <div className="space-y-3 mb-10">
              {inclusions.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    size={15}
                    className="text-gold-400 flex-shrink-0 mt-0.5"
                    strokeWidth={1.5}
                  />
                  <span className="font-sans font-light text-stone-400 text-sm">{item}</span>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="border-t border-stone-800/50 pt-8">
              <p className="font-sans text-[11px] text-stone-600 text-center tracking-wide mb-6">
                Consultation is complimentary and carries no obligation.
              </p>
              <button onClick={scrollToContact} className="btn-primary w-full justify-center">
                Request a Quote
                <ArrowDown size={13} strokeWidth={2} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
