export default function ProblemSection() {
  const traditional = [
    "Competes for attention",
    "Misses leads",
    "Relies on manual follow-ups",
    "Stops when the team stops",
    "Inconsistent messaging",
    "High cost per acquisition",
  ];

  const neuraflow = [
    "Manufactures attention",
    "Captures instantly",
    "Nurtures automatically",
    "Converts systematically",
    "24/7 operation",
    "Predictable ROI",
  ];

  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 100% 60% at 50% 50%, rgba(109,40,217,0.07) 0%, transparent 70%)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-fuchsia-500/20 bg-fuchsia-500/10 text-fuchsia-300 text-xs font-medium uppercase tracking-widest mb-4">
            The Problem
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Traditional marketing is
            <span className="bg-gradient-to-r from-fuchsia-400 to-violet-400 bg-clip-text text-transparent"> broken</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Most marketing efforts fail because they rely on manual processes and compete for attention rather than creating it.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: Traditional Marketing */}
          <div className="group p-8 rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent hover:border-white/20 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center text-white">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.77-.833-2.54 0L4.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-bold text-xl">Traditional Marketing</h3>
                <p className="text-white/40 text-sm">The old way — manual, inconsistent, expensive</p>
              </div>
            </div>
            <ul className="space-y-3 mb-6">
              {traditional.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-white/50">
                  <div className="w-5 h-5 rounded-full border border-white/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <div className="pt-6 border-t border-white/10">
              <div className="text-white/30 text-sm italic">Outcome: High burnout, unpredictable results, wasted budget.</div>
            </div>
          </div>

          {/* Right: NeuraFlow */}
          <div className="group p-8 rounded-2xl border border-violet-500/30 bg-gradient-to-b from-violet-900/30 to-[#0a0a2f] hover:border-violet-500/50 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center text-white">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-bold text-xl">NeuraFlow System</h3>
                <p className="text-violet-300 text-sm">The new way — automated, systematic, scalable</p>
              </div>
            </div>
            <ul className="space-y-3 mb-6">
              {neuraflow.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-white/50">
                  <div className="w-5 h-5 rounded-full border border-violet-500/40 bg-violet-500/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <div className="pt-6 border-t border-violet-500/20">
              <div className="text-emerald-300 text-sm font-semibold">Outcome: Predictable growth, lower costs, 24/7 conversion engine.</div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-4 px-6 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
            <div className="text-white/60 text-sm">NeuraFlow installs automated growth infrastructure so leads are captured, answered, and converted 24/7.</div>
            <a href="#book-call" className="text-sm font-semibold px-4 py-2 rounded-lg bg-gradient-to-r from-violet-600 to-cyan-500 text-white hover:opacity-90 transition-opacity">
              Book a Strategy Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}