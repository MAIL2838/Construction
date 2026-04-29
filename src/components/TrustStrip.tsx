import { Award, Shield, BarChart2 } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const pillars = [
  {
    icon: Award,
    title: 'Precision Craftsmanship',
    desc: 'Every detail executed to the highest standard, no shortcuts, no compromises.',
  },
  {
    icon: Shield,
    title: 'Reliable Delivery',
    desc: 'Commitments are kept. Timelines respected. Results consistently delivered.',
  },
  {
    icon: BarChart2,
    title: 'Structured Project Control',
    desc: 'Disciplined oversight at every phase, ensuring quality and consistency throughout.',
  },
];

export function TrustStrip() {
  const { ref, visible } = useInView<HTMLElement>();

  return (
    <section ref={ref} className="relative py-16 border-y border-stone-800/30">
      {/* Subtle gradient bar */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:divide-x md:divide-stone-800/40">
          {pillars.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className={`animate-on-enter ${visible ? 'visible' : ''} flex flex-col items-center text-center px-8 py-8 md:py-6`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="w-10 h-10 flex items-center justify-center mb-4">
                <Icon size={20} className="text-gold-400" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-lg font-semibold text-stone-100 mb-2">{title}</h3>
              <p className="font-sans font-light text-stone-500 text-sm leading-relaxed max-w-xs">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
