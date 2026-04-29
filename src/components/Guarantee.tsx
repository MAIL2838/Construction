import { ShieldCheck } from 'lucide-react';
import { useInView } from '../hooks/useInView';

export function Guarantee() {
  const { ref, visible } = useInView<HTMLElement>();

  return (
    <section id="guarantee" ref={ref} className="py-28 relative">
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 60% 50% at 50% 50%, rgba(184, 137, 26, 0.06) 0%, transparent 65%),
            linear-gradient(180deg, #111110 0%, #0d0d0d 100%)
          `,
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />

      <div className="relative max-w-3xl mx-auto px-6 lg:px-10 text-center">
        <div className={`animate-on-enter ${visible ? 'visible' : ''}`}>
          <div className="w-12 h-12 flex items-center justify-center border border-gold-500/30 mx-auto mb-8">
            <ShieldCheck size={22} className="text-gold-400" strokeWidth={1.5} />
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-stone-100 leading-tight mb-6">
            Built to Standard.
            <br />
            No Exceptions.
          </h2>
          <p className="font-sans font-light text-stone-500 text-sm leading-relaxed max-w-lg mx-auto">
            If any part of the project does not meet agreed standards, it is corrected. No delays. No compromises.
          </p>
        </div>
      </div>
    </section>
  );
}
