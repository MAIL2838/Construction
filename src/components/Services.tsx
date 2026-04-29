import { Home, Building2, Hammer, ClipboardList, ArrowUpRight } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const services = [
  {
    icon: Home,
    title: 'Residential Construction',
    desc: 'High-quality residential builds executed with strict attention to detail, timelines, and long-term durability.',
    tag: 'Residential',
  },
  {
    icon: Building2,
    title: 'Commercial Projects',
    desc: 'Large-scale commercial construction delivered with precision planning, coordination, and execution.',
    tag: 'Commercial',
  },
  {
    icon: Hammer,
    title: 'Renovations & Extensions',
    desc: 'Seamless upgrades and extensions designed to integrate perfectly with existing structures.',
    tag: 'Renovation',
  },
  {
    icon: ClipboardList,
    title: 'Project Management',
    desc: 'End-to-end project oversight ensuring control, efficiency, and consistent build standards.',
    tag: 'Management',
  },
];

export function Services() {
  const { ref, visible } = useInView<HTMLElement>();

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" ref={ref} className="py-28 relative">
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(180deg, #0d0d0d 0%, #141410 50%, #0d0d0d 100%)
          `,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div
          className={`animate-on-enter ${visible ? 'visible' : ''} mb-16`}
        >
          <span className="section-label">Our Services</span>
          <div className="gold-line mt-3 mb-6" />
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-stone-100 max-w-lg leading-tight">
              What We{' '}
              <span className="text-shimmer-subtle">Build</span>
            </h2>
            <p className="font-sans font-light text-stone-500 text-sm leading-relaxed max-w-sm">
              Every engagement is approached with the same discipline, rigour, and commitment to quality, regardless of scale.
            </p>
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {services.map(({ icon: Icon, title, desc, tag }, i) => (
            <button
              key={title}
              onClick={scrollToContact}
              className={`animate-on-enter ${visible ? 'visible' : ''} glass-card glass-card-hover text-left p-8 rounded-none group relative overflow-hidden`}
              style={{ transitionDelay: `${100 + i * 120}ms` }}
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/0 to-transparent group-hover:via-gold-500/30 transition-all duration-500" />

              {/* Tag */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-[10px] font-sans tracking-[0.2em] uppercase text-gold-500/60 group-hover:text-gold-400 transition-colors">
                  {tag}
                </span>
                <ArrowUpRight
                  size={16}
                  className="text-stone-600 group-hover:text-gold-400 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  strokeWidth={1.5}
                />
              </div>

              {/* Icon */}
              <div className="mb-5">
                <div className="w-11 h-11 flex items-center justify-center border border-stone-700/50 group-hover:border-gold-500/30 transition-colors duration-300">
                  <Icon size={20} className="text-stone-400 group-hover:text-gold-400 transition-colors duration-300" strokeWidth={1.5} />
                </div>
              </div>

              {/* Content */}
              <h3 className="font-serif text-xl font-semibold text-stone-100 mb-3 group-hover:text-stone-50 transition-colors">
                {title}
              </h3>
              <p className="font-sans font-light text-stone-500 text-sm leading-relaxed group-hover:text-stone-400 transition-colors">
                {desc}
              </p>

              {/* Bottom CTA hint */}
              <div className="mt-6 flex items-center gap-2">
                <span className="text-xs font-sans tracking-[0.15em] uppercase text-stone-600 group-hover:text-gold-400 transition-colors duration-300">
                  Book a Consultation
                </span>
                <div className="h-px w-6 bg-stone-700 group-hover:bg-gold-500/50 group-hover:w-10 transition-all duration-300" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
