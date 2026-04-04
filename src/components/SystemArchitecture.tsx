const layers = [
  {
    step: "01",
    title: "Attention Infrastructure",
    subtitle: "The Genesis Layer",
    description: "Proprietary AI Persona Engines that architect algorithm-native content cycles — generating consistent, high-leverage attention without human intervention.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    gradient: "from-brand-blue to-brand-accent",
    border: "border-brand-blue/30 hover:border-brand-blue/60",
    glow: "bg-brand-blue/10",
  },
  {
    step: "02",
    title: "Capture Protocol",
    subtitle: "The Intelligence Layer",
    description: "Advanced multi-channel capture nodes that instantly identify and categorise high-value intent via AI-led conversational scripts.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      </svg>
    ),
    gradient: "from-brand-accent to-brand-blue",
    border: "border-brand-accent/30 hover:border-brand-accent/60",
    glow: "bg-brand-accent/10",
  },
  {
    step: "03",
    title: "Strategic Nurture Engine",
    subtitle: "The Trust Layer",
    description: "Autonomous psychological sequences that build deep authority and remove friction through personalized hyper-education cycles.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    gradient: "from-brand-gold to-brand-accent",
    border: "border-brand-gold/30 hover:border-brand-gold/60",
    glow: "bg-brand-gold/10",
  },
  {
    step: "04",
    title: "Conversion Automation",
    subtitle: "The Revenue Layer",
    description: "AI-integrated sales orchestration — from seamless strategy call scheduling to automated administrative closure and payment processing.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    gradient: "from-brand-blue to-brand-gold",
    border: "border-brand-blue/30 hover:border-brand-blue/60",
    glow: "bg-brand-gold/10",
  },
];

export default function SystemArchitecture() {
  return (
    <section id="system-architecture" className="py-14 relative overflow-hidden bg-brand-navy">
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-brand-blue/30 rounded-full blur-[160px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-accent/20 bg-brand-accent/10 text-brand-accent text-[10px] font-black uppercase tracking-[0.3em] mb-5">
            Structural Intelligence
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-display font-extrabold text-white mb-5 tracking-tighter">
            The Engine of{" "}
            <span className="bg-gradient-to-r from-brand-blue via-brand-gold to-brand-accent bg-clip-text text-transparent">
              Sovereignty.
            </span>
          </h2>
          <p className="text-white/40 text-lg font-light max-w-2xl mx-auto leading-relaxed">
            Our proprietary 4-layer architecture designed to detach revenue from human effort.
          </p>
        </div>

        {/* Pipeline — horizontal on desktop, vertical on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-0 items-stretch mb-10">
          {layers.map((layer, i) => (
            <div key={i} className="relative flex lg:flex-col">
              {/* Card */}
              <div
                className={`group flex-1 relative p-5 rounded-2xl border ${layer.border} bg-white/[0.02] backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.05] hover:-translate-y-1 overflow-hidden lg:mx-1`}
              >
                {/* Hover glow */}
                <div className={`absolute -top-12 -right-12 w-32 h-32 ${layer.glow} rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative z-10">
                  {/* Step + icon row */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${layer.gradient} flex items-center justify-center text-white flex-shrink-0 shadow-lg`}>
                      {layer.icon}
                    </div>
                    <span className="text-2xl font-display font-black text-white/[0.06] group-hover:text-white/[0.12] transition-colors">
                      {layer.step}
                    </span>
                  </div>

                  <p className="text-[9px] uppercase tracking-[0.3em] font-black text-brand-accent/70 mb-1.5">
                    {layer.subtitle}
                  </p>
                  <h3 className="text-white font-bold text-base mb-2 group-hover:text-brand-blue transition-colors leading-snug">
                    {layer.title}
                  </h3>
                  <p className="text-white/40 text-xs leading-relaxed line-clamp-3">
                    {layer.description}
                  </p>
                </div>
              </div>

              {/* Connector arrow (between cards, not after last) */}
              {i < layers.length - 1 && (
                <div className="hidden lg:flex items-center justify-center absolute -right-1 top-1/2 -translate-y-1/2 z-20">
                  <div className="w-2 h-2 rotate-45 border-r border-t border-brand-blue/40" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section — Command Center */}
        <div className="relative rounded-3xl overflow-hidden border border-brand-blue/20">
          {/* Background glow layers */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/10 via-transparent to-brand-accent/10" />
          <div className="absolute inset-0 animate-pulse-soft">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-blue/15 rounded-full blur-[80px]" />
          </div>
          {/* Top gradient border */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-blue/60 to-transparent" />

          <div className="relative z-10 text-center px-8 py-16 md:py-20">
            <h3 className="text-2xl sm:text-3xl md:text-5xl font-display font-extrabold text-white mb-3 tracking-tight">
              Ready to Decentralize
            </h3>
            <h3 className="text-2xl sm:text-3xl md:text-5xl font-display font-extrabold mb-4 tracking-tight bg-gradient-to-r from-brand-blue via-brand-gold to-brand-accent bg-clip-text text-transparent">
              Your Growth?
            </h3>
            <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              Stop trading time for revenue. Install the machine that runs without you.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <a
                href="#book-call"
                className="group w-full sm:w-auto px-8 py-3 rounded-2xl bg-gradient-to-r from-brand-blue to-brand-accent text-white font-black text-sm uppercase tracking-widest transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(27,110,194,0.4)] active:scale-95 inline-flex items-center justify-center gap-3"
              >
                Start Implementation
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#book-call"
                className="w-full sm:w-auto px-8 py-3 rounded-2xl border border-white/15 bg-white/5 backdrop-blur-sm text-white font-bold text-sm uppercase tracking-widest hover:bg-white/10 hover:border-white/25 transition-all duration-300"
              >
                Book a Strategy Call
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-white/40">
              {["30-Day Implementation", "Done-For-You Setup", "ROI-Backed System"].map((badge, i) => (
                <div key={i} className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{badge}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
