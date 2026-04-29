import { CheckCircle2 } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const features = [
  {
    title: 'Engineered for Long-Term Durability',
    desc: 'We specify materials and methods that stand the test of time, no cost-cutting that compromises structural integrity.',
  },
  {
    title: 'Experienced, Controlled Execution',
    desc: 'Senior-led site teams operate under strict quality protocols at every stage of the build.',
  },
  {
    title: 'On-Time Project Delivery',
    desc: 'Milestone tracking, proactive risk management, and clear accountability keep projects on schedule.',
  },
  {
    title: 'Transparent Build Process',
    desc: 'Clients receive regular reporting, site access, and honest updates, no surprises, ever.',
  },
  {
    title: 'Scalable for Complex Projects',
    desc: 'From bespoke residences to multi-site commercial developments, our systems scale without losing precision.',
  },
];

export function Features() {
  const { ref, visible } = useInView<HTMLElement>();

  return (
    <section id="features" ref={ref} className="py-28 relative">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(94, 78, 59, 0.06) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div
          className={`animate-on-enter ${visible ? 'visible' : ''} text-center mb-16`}
        >
          <span className="section-label">Why Axiom</span>
          <div className="gold-line mx-auto mt-3 mb-6" />
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-shimmer-subtle max-w-2xl mx-auto leading-tight">
            The Standard We Build To
          </h2>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-stone-800/20 rounded-none overflow-hidden border border-stone-800/30">
          {features.map(({ title, desc }, i) => (
            <div
              key={title}
              className={`animate-on-enter ${visible ? 'visible' : ''} bg-charcoal-900 p-8 group hover:bg-charcoal-800 transition-colors duration-300 ${
                i === features.length - 1 && features.length % 2 !== 0 ? 'lg:col-span-2' : ''
              }`}
              style={{ transitionDelay: `${100 + i * 100}ms` }}
            >
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 mt-0.5">
                  <CheckCircle2
                    size={18}
                    className="text-gold-400 group-hover:text-gold-300 transition-colors"
                    strokeWidth={1.5}
                  />
                </div>
                <div>
                  <h3 className="font-serif text-lg sm:text-xl font-semibold text-stone-100 mb-2 group-hover:text-stone-50 transition-colors">
                    {title}
                  </h3>
                  <p className="font-sans font-light text-stone-500 text-sm leading-relaxed">
                    {desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
