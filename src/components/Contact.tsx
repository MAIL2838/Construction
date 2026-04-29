import { useState } from 'react';
import { Send, Phone, Mail, MapPin } from 'lucide-react';
import { useInView } from '../hooks/useInView';

type FormState = {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
};

const projectTypes = [
  'Residential Construction',
  'Commercial Project',
  'Renovation & Extension',
  'Project Management',
  'Other',
];

export function Contact() {
  const { ref, visible } = useInView<HTMLElement>();
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 900));
    setSubmitting(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" ref={ref} className="py-28 relative">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 50% 100%, rgba(184, 137, 26, 0.05) 0%, transparent 65%),
            linear-gradient(180deg, #0d0d0d 0%, #111109 100%)
          `,
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left column */}
          <div className={`animate-on-enter ${visible ? 'visible' : ''}`}>
            <span className="section-label">Get Started</span>
            <div className="gold-line mt-3 mb-8" />
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight mb-6">
              <span className="text-stone-100">Book Your</span>
              <br />
              <span className="text-shimmer">Consultation</span>
            </h2>
            <p className="font-sans font-light text-stone-500 text-sm leading-relaxed mb-12 max-w-md">
              Tell us about your project. We'll respond within one business day to arrange a
              no-obligation consultation with our senior team.
            </p>

            {/* Contact details */}
            <div className="space-y-5">
              {[
                { icon: Phone, label: 'Call Us', value: '+44 20 7946 0000' },
                { icon: Mail, label: 'Email', value: 'enquiries@axiombuildgroup.com' },
                { icon: MapPin, label: 'Head Office', value: 'London, United Kingdom' },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-9 h-9 flex items-center justify-center border border-stone-700/50">
                    <Icon size={15} className="text-gold-400" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-[10px] font-sans tracking-[0.15em] uppercase text-stone-600 mb-0.5">
                      {label}
                    </p>
                    <p className="font-sans text-sm text-stone-300">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column — Form */}
          <div
            className={`animate-on-enter ${visible ? 'visible' : ''}`}
            style={{ transitionDelay: '150ms' }}
          >
            {submitted ? (
              <div className="glass-card p-10 flex flex-col items-center text-center">
                <div className="w-12 h-12 flex items-center justify-center border border-gold-500/30 mb-6">
                  <Send size={20} className="text-gold-400" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-stone-100 mb-3">
                  Consultation Request Received
                </h3>
                <p className="font-sans font-light text-stone-500 text-sm leading-relaxed">
                  Thank you for reaching out. A member of our senior team will contact you
                  within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-card p-8 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[10px] font-sans tracking-[0.15em] uppercase text-stone-500 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="w-full bg-charcoal-800/60 border border-stone-700/40 text-stone-200 font-sans text-sm px-4 py-3 outline-none focus:border-gold-500/40 transition-colors placeholder-stone-700"
                      placeholder="John Whitmore"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-sans tracking-[0.15em] uppercase text-stone-500 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full bg-charcoal-800/60 border border-stone-700/40 text-stone-200 font-sans text-sm px-4 py-3 outline-none focus:border-gold-500/40 transition-colors placeholder-stone-700"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[10px] font-sans tracking-[0.15em] uppercase text-stone-500 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full bg-charcoal-800/60 border border-stone-700/40 text-stone-200 font-sans text-sm px-4 py-3 outline-none focus:border-gold-500/40 transition-colors placeholder-stone-700"
                      placeholder="+44 7700 000000"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-sans tracking-[0.15em] uppercase text-stone-500 mb-2">
                      Project Type
                    </label>
                    <select
                      name="projectType"
                      value={form.projectType}
                      onChange={handleChange}
                      className="w-full bg-charcoal-800/60 border border-stone-700/40 text-stone-400 font-sans text-sm px-4 py-3 outline-none focus:border-gold-500/40 transition-colors appearance-none cursor-pointer"
                    >
                      <option value="" disabled>
                        Select type
                      </option>
                      {projectTypes.map((pt) => (
                        <option key={pt} value={pt} className="bg-charcoal-800">
                          {pt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-sans tracking-[0.15em] uppercase text-stone-500 mb-2">
                    Project Brief
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full bg-charcoal-800/60 border border-stone-700/40 text-stone-200 font-sans text-sm px-4 py-3 outline-none focus:border-gold-500/40 transition-colors resize-none placeholder-stone-700"
                    placeholder="Briefly describe your project, location, and timeline..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-primary w-full justify-center mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? 'Submitting...' : 'Book Consultation'}
                  {!submitting && <Send size={13} strokeWidth={2} />}
                </button>

                <p className="text-[10px] font-sans text-stone-600 text-center leading-relaxed">
                  We respect your privacy. Your details will never be shared with third parties.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
