export function Footer() {
  return (
    <footer className="border-t border-stone-800/40 py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-col items-center md:items-start">
          <span className="font-serif text-lg font-semibold tracking-wide text-stone-300">AXIOM</span>
          <span className="text-[9px] font-sans tracking-[0.3em] uppercase text-gold-500/60">Build Group</span>
        </div>
        <p className="font-sans text-[11px] text-stone-600 tracking-wide">
          &copy; {new Date().getFullYear()} Axiom Build Group Ltd. All rights reserved.
        </p>
        <p className="font-sans text-[11px] text-stone-700 tracking-wide hidden md:block">
          Precision. Discipline. Delivery.
        </p>
      </div>
    </footer>
  );
}
