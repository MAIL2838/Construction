import { ScanLine, Layers, GitBranch, Target } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const pillars = [
  {
    icon: Target,
    title: 'Structured Planning',
    desc: 'Every project begins with a rigorous pre-construction phase: scope validation, risk mapping, and milestone definition.',
  },
  {
    icon: Layers,
    title: 'Layered Quality Control',
    desc: 'Inspection checkpoints are embedded at every stage, not just at handover. Issues are caught before they compound.',
  },
  {
    icon: GitBranch,
    title: 'Clear Accountability',
    desc: 'Dedicated project leads own every phase. You always know who is responsible and who to contact.',
  },
  {
    icon: ScanLine,
    title: 'Final Handover Standard',
    desc: 'No project is signed off until it meets our internal defect-zero checklist, regardless of client pressure or deadlines.',
  },
];

export function Authority() {
  const { ref, visible } = useInView<HTMLElement>();

  return (
    <section id="authority" ref={ref} className="py-28 relative">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 20% 50%, rgba(94, 78, 59, 0.06) 0%, transparent 60%),
            linear-gradient(180deg, #111110 0%, #0d0d0d 100%)
          `,
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/15 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left copy */}
          <div className={`animate-on-enter ${visible ? 'visible' : ''}`}>
            <span className="section-label">Our Approach</span>
            <div className="gold-line mt-3 mb-8" />
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight mb-8">
              <span className="text-stone-100">Proven Construction</span>
              <br />
              <span className="text-shimmer">Expertise</span>
            </h2>
            <p className="font-sans font-light text-stone-400 text-sm leading-relaxed max-w-md">
              We don't rely on chance. Every project follows a structured system designed to
              control quality, eliminate delays, and deliver consistent results. From initial
              planning to final handover, every stage is executed with precision.
            </p>
          </div>

          {/* Right pillars */}
          <div className="space-y-px bg-stone-800/20 border border-stone-800/30">
            {pillars.map(({ icon: Icon, title, desc }, i) => (
              <div
                key={title}
                className={`animate-on-enter ${visible ? 'visible' : ''} bg-charcoal-900 p-6 group hover:bg-charcoal-800 transition-colors duration-300 flex items-start gap-5`}
                style={{ transitionDelay: `${100 + i * 100}ms` }}
              >
                <div className="flex-shrink-0 w-9 h-9 flex items-center justify-center border border-stone-700/50 group-hover:border-gold-500/30 transition-colors mt-0.5">
                  <Icon
                    size={16}
                    className="text-stone-500 group-hover:text-gold-400 transition-colors"
                    strokeWidth={1.5}
                  />
                </div>
                <div>
                  <h3 className="font-serif text-base font-semibold text-stone-100 mb-1.5 group-hover:text-stone-50 transition-colors">
                    {title}
                  </h3>
                  <p className="font-sans font-light text-stone-500 text-sm leading-relaxed">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
