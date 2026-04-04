const rows = [
  {
    problem: "Competes for attention",
    gap: "Attention is rented — the moment you stop paying, it vanishes",
    solution: "Manufactures attention",
  },
  {
    problem: "Misses leads",
    gap: "3–7 day response delays lose up to 80% of inbound leads",
    solution: "Captures instantly — every time",
  },
  {
    problem: "Manual follow-ups",
    gap: "Human-dependent sequences break on weekends, holidays, and sick days",
    solution: "Nurtures automatically",
  },
  {
    problem: "Stops when team stops",
    gap: "Revenue is tied to headcount — growth hits a human ceiling",
    solution: "Runs 24/7 — no dependencies",
  },
  {
    problem: "Inconsistent messaging",
    gap: "Brand drift across reps kills trust and conversion rates",
    solution: "Consistent, on-brand always",
  },
  {
    problem: "High cost per acquisition",
    gap: "Manual processes inflate CAC while returns compound slowly",
    solution: "Predictable, declining CAC",
  },
];

export default function ProblemSection() {
  return (
    <section className="py-14 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 100% 60% at 50% 50%, rgba(109,40,217,0.07) 0%, transparent 70%)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-fuchsia-500/20 bg-fuchsia-500/10 text-fuchsia-300 text-xs font-medium uppercase tracking-widest mb-4">
            The Problem
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-5">
            You're Not Failing.{" "}
            <span className="bg-gradient-to-r from-fuchsia-400 to-violet-400 bg-clip-text text-transparent">
              The System Is.
            </span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
            Every day you rely on manual outreach, inconsistent content, and human-dependent follow-ups, you're leaving compounding revenue on the table.{" "}
            <span className="text-white/70">The market has already moved.</span>
          </p>
        </div>

        {/* Comparison table */}
        <div className="rounded-2xl border border-white/8 overflow-hidden mb-10">
          {/* Header row */}
          <div className="grid grid-cols-3 text-xs uppercase tracking-widest font-bold border-b border-white/8">
            <div className="px-6 py-4 text-red-400/80 bg-red-500/5">Traditional Marketing</div>
            <div className="px-6 py-4 text-white/30 bg-white/2 text-center">The Gap</div>
            <div className="px-6 py-4 text-emerald-400/80 bg-emerald-500/5 text-right">NeuraFlow System</div>
          </div>

          {rows.map((row, i) => (
            <div
              key={i}
              className={`grid grid-cols-3 border-b border-white/5 last:border-0 transition-colors duration-200 hover:bg-white/2 ${i % 2 === 0 ? "bg-transparent" : "bg-white/[0.01]"}`}
            >
              {/* Problem */}
              <div className="px-6 py-4 flex items-center gap-2 bg-red-500/3">
                <svg className="w-4 h-4 text-red-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span className="text-white/50 text-sm">{row.problem}</span>
              </div>

              {/* Gap */}
              <div className="px-5 py-4 flex items-center justify-center">
                <span className="text-white/25 text-xs text-center leading-snug italic">{row.gap}</span>
              </div>

              {/* Solution */}
              <div className="px-6 py-4 flex items-center justify-end gap-2 bg-emerald-500/3">
                <span className="text-white/70 text-sm text-right">{row.solution}</span>
                <svg className="w-4 h-4 text-emerald-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Outcome row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          <div className="px-6 py-4 rounded-xl border border-red-500/15 bg-red-500/5 text-red-300/70 text-sm italic">
            Outcome: Human-rate growth ceiling. Burnout loop. Budget bleed.
          </div>
          <div className="px-6 py-4 rounded-xl border border-emerald-500/20 bg-emerald-500/5 text-emerald-300 text-sm font-medium">
            Outcome: Machine-rate growth. Zero dependency. Compounding returns.
          </div>
        </div>

        {/* CTA */}
        <div className="text-center flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#book-call"
            className="px-8 py-4 rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-bold text-sm hover:opacity-90 transition-opacity"
          >
            Break the Old Cycle →
          </a>
          <a
            href="#system-architecture"
            className="text-sm text-white/40 hover:text-white/70 transition-colors underline underline-offset-4"
          >
            See the system →
          </a>
        </div>
      </div>
    </section>
  );
}
