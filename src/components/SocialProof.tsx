import { Quote } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const projects = [
  {
    before: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
    after: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
    tag: 'Residential',
    outcome: 'Delivered ahead of schedule with zero defects at handover.',
  },
  {
    before: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800',
    after: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800',
    tag: 'Renovation',
    outcome: 'Full structural renovation completed with seamless integration.',
  },
  {
    before: 'https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg?auto=compress&cs=tinysrgb&w=800',
    after: 'https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=800',
    tag: 'Commercial',
    outcome: 'Commercial build executed with strict timeline control.',
  },
];

const testimonials = [
  {
    quote: 'Clear communication, no delays, and the finish exceeded expectations.',
    author: 'R. Hartley',
    role: 'Private Residential Client',
  },
  {
    quote: 'Everything was delivered exactly as agreed — no surprises.',
    author: 'M. Ashford',
    role: 'Commercial Developer',
  },
  {
    quote: 'Professional from start to finish, highly reliable team.',
    author: 'S. Whitmore',
    role: 'Property Investor',
  },
];

function ProjectCard({
  project,
  index,
  visible,
}: {
  project: (typeof projects)[0];
  index: number;
  visible: boolean;
}) {
  return (
    <div
      className={`animate-on-enter ${visible ? 'visible' : ''}`}
      style={{ transitionDelay: `${100 + index * 130}ms` }}
    >
      <div className="glass-card overflow-hidden group">
        {/* Images */}
        <div className="grid grid-cols-2 gap-px bg-stone-800/30">
          <div className="relative overflow-hidden">
            <img
              src={project.before}
              alt="Before"
              className="w-full h-48 object-cover grayscale opacity-60 group-hover:opacity-50 transition-all duration-500"
            />
            <span className="absolute top-3 left-3 text-[9px] font-sans tracking-[0.2em] uppercase text-stone-400 bg-charcoal-900/80 px-2 py-1">
              Before
            </span>
          </div>
          <div className="relative overflow-hidden">
            <img
              src={project.after}
              alt="After"
              className="w-full h-48 object-cover opacity-80 group-hover:opacity-90 group-hover:scale-[1.03] transition-all duration-500"
            />
            <span className="absolute top-3 left-3 text-[9px] font-sans tracking-[0.2em] uppercase text-gold-400 bg-charcoal-900/80 px-2 py-1">
              After
            </span>
          </div>
        </div>

        {/* Outcome */}
        <div className="p-6">
          <span className="text-[10px] font-sans tracking-[0.2em] uppercase text-gold-500/60 mb-3 block">
            {project.tag}
          </span>
          <p className="font-serif text-base font-medium text-stone-200 leading-snug">
            {project.outcome}
          </p>
        </div>
      </div>
    </div>
  );
}

export function SocialProof() {
  const { ref, visible } = useInView<HTMLElement>();

  return (
    <section id="social-proof" ref={ref} className="py-28 relative">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 70% 40% at 50% 0%, rgba(94, 78, 59, 0.07) 0%, transparent 65%),
            linear-gradient(180deg, #0d0d0d 0%, #111110 100%)
          `,
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className={`animate-on-enter ${visible ? 'visible' : ''} mb-16`}>
          <span className="section-label">Project Outcomes</span>
          <div className="gold-line mt-3 mb-6" />
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-stone-100 leading-tight max-w-xl">
            Results That{' '}
            <span className="text-shimmer-subtle">Speak</span>
          </h2>
        </div>

        {/* Before / After grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-20">
          {projects.map((p, i) => (
            <ProjectCard key={p.tag} project={p} index={i} visible={visible} />
          ))}
        </div>

        {/* Testimonials */}
        <div
          className={`animate-on-enter ${visible ? 'visible' : ''} mb-10`}
          style={{ transitionDelay: '80ms' }}
        >
          <span className="section-label">Client Feedback</span>
          <div className="gold-line mt-3" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map(({ quote, author, role }, i) => (
            <div
              key={author}
              className={`animate-on-enter ${visible ? 'visible' : ''} glass-card p-7 group hover:border-gold-500/20 transition-colors duration-300`}
              style={{ transitionDelay: `${200 + i * 120}ms` }}
            >
              <Quote
                size={18}
                className="text-gold-500/40 mb-5 group-hover:text-gold-400/60 transition-colors"
                strokeWidth={1.5}
              />
              <p className="font-serif text-base font-medium text-stone-200 leading-relaxed mb-6">
                "{quote}"
              </p>
              <div className="border-t border-stone-800/50 pt-4">
                <p className="font-sans text-sm font-medium text-stone-300">{author}</p>
                <p className="font-sans text-[11px] text-stone-600 tracking-wide mt-0.5">{role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
