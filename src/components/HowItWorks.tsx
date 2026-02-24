const steps = [
  {
    number: "01",
    title: "Connect Your Tools",
    description: "Authenticate your apps in one click. NeuraFlow instantly maps all your data sources, APIs, and services into a unified graph.",
    color: "violet",
  },
  {
    number: "02",
    title: "Design Your Workflow",
    description: "Use the visual canvas or describe your automation in plain English. Our AI suggests the optimal flow architecture.",
    color: "fuchsia",
  },
  {
    number: "03",
    title: "Deploy AI Agents",
    description: "Assign intelligent agents to run your workflows 24/7. They learn, adapt, and handle exceptions autonomously.",
    color: "cyan",
  },
  {
    number: "04",
    title: "Scale & Optimize",
    description: "Monitor performance in real-time. NeuraFlow automatically scales resources and suggests improvements based on usage patterns.",
    color: "emerald",
  },
];

const colorMap: Record<string, { border: string; text: string; bg: string; glow: string }> = {
  violet: {
    border: "border-violet-500/40",
    text: "text-violet-400",
    bg: "bg-violet-500/10",
    glow: "shadow-violet-500/20",
  },
  fuchsia: {
    border: "border-fuchsia-500/40",
    text: "text-fuchsia-400",
    bg: "bg-fuchsia-500/10",
    glow: "shadow-fuchsia-500/20",
  },
  cyan: {
    border: "border-cyan-500/40",
    text: "text-cyan-400",
    bg: "bg-cyan-500/10",
    glow: "shadow-cyan-500/20",
  },
  emerald: {
    border: "border-emerald-500/40",
    text: "text-emerald-400",
    bg: "bg-emerald-500/10",
    glow: "shadow-emerald-500/20",
  },
};

export default function HowItWorks() {
  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 80% 50% at 50% 100%, rgba(6,182,212,0.06) 0%, transparent 70%)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-300 text-xs font-medium uppercase tracking-widest mb-4">
            How It Works
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Up and running in
            <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent"> minutes</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            From zero to fully automated workflows in four simple steps.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute top-12 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-violet-500/40 via-cyan-500/20 to-transparent hidden lg:block" />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => {
              const c = colorMap[step.color];
              return (
                <div key={i} className="relative">
                  {/* Card */}
                  <div className={`relative p-6 rounded-2xl border ${c.border} bg-white/3 backdrop-blur-sm hover:bg-white/5 transition-all duration-300 shadow-xl ${c.glow} group`}>
                    {/* Number badge */}
                    <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl ${c.bg} border ${c.border} ${c.text} font-bold text-sm mb-4`}>
                      {step.number}
                    </div>

                    <h3 className="text-white font-semibold text-lg mb-3">{step.title}</h3>
                    <p className="text-white/45 text-sm leading-relaxed">{step.description}</p>

                    {/* Arrow for desktop */}
                    {i < steps.length - 1 && (
                      <div className={`hidden lg:block absolute -right-4 top-10 ${c.text} z-10`}>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-20 relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-violet-900/30 via-[#0a0a2f] to-cyan-900/20 p-10 text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-violet-500/60 to-transparent" />
          <h3 className="text-3xl font-bold text-white mb-3">Ready to automate your first workflow?</h3>
          <p className="text-white/50 mb-6 max-w-lg mx-auto">Join 12,000+ teams already saving 20+ hours per week with NeuraFlow.</p>
          <a href="#" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-semibold hover:opacity-90 transition-opacity shadow-xl shadow-violet-500/30">
            Start Free — No Credit Card Required
          </a>
        </div>
      </div>
    </section>
  );
}
