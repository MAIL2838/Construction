import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const faqs = [
  {
    q: 'How long does a project take?',
    a: 'Timelines vary by scope, but every project is planned with clear milestones and strict delivery targets.',
  },
  {
    q: 'How are costs determined?',
    a: 'Costs are based on scope, materials, and complexity. All pricing is clearly outlined before work begins.',
  },
  {
    q: 'Do you manage the full project?',
    a: 'Yes. From planning to completion, all stages are managed to maintain consistency and control.',
  },
  {
    q: 'What ensures build quality?',
    a: 'Strict processes, experienced teams, and continuous oversight at every stage.',
  },
];

function AccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-stone-800/40 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-6 text-left group"
        aria-expanded={isOpen}
      >
        <span className="font-serif text-base sm:text-lg font-semibold text-stone-100 group-hover:text-stone-50 transition-colors pr-4">
          {question}
        </span>
        <ChevronDown
          size={18}
          className={`text-stone-500 group-hover:text-gold-400 transition-all duration-300 flex-shrink-0 ${
            isOpen ? 'rotate-180 text-gold-400' : ''
          }`}
          strokeWidth={1.5}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="font-sans font-light text-stone-500 text-sm leading-relaxed pb-6 pr-8">
          {answer}
        </p>
      </div>
    </div>
  );
}

export function FAQ() {
  const { ref, visible } = useInView<HTMLElement>();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" ref={ref} className="py-28 relative">
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 70% 50% at 50% 50%, rgba(94, 78, 59, 0.05) 0%, transparent 70%),
            linear-gradient(180deg, #0d0d0d 0%, #111110 100%)
          `,
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/15 to-transparent" />

      <div className="relative max-w-3xl mx-auto px-6 lg:px-10">
        <div className={`animate-on-enter ${visible ? 'visible' : ''} text-center mb-14`}>
          <span className="section-label">FAQ</span>
          <div className="gold-line mx-auto mt-3 mb-6" />
          <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-stone-100 leading-tight">
            Common Questions
          </h2>
        </div>

        <div
          className={`animate-on-enter ${visible ? 'visible' : ''} glass-card px-8`}
          style={{ transitionDelay: '100ms' }}
        >
          {faqs.map((faq, i) => (
            <AccordionItem
              key={faq.q}
              question={faq.q}
              answer={faq.a}
              isOpen={openIndex === i}
              onToggle={() => handleToggle(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
