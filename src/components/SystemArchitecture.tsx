export default function SystemArchitecture() {
  const layers = [
    {
      title: "Attention Infrastructure",
      subtitle: "The Genesis Layer",
      description: "Proprietary AI Persona Engines that architect algorithm-native content cycles. Generating consistent, high-leverage attention without human intervention.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: "from-brand-primary to-brand-accent",
      border: "border-brand-primary/30",
    },
    {
      title: "Capture Protocol",
      subtitle: "The Intelligence Layer",
      description: "Advanced multi-channel capture nodes. Instantly identifying and categorizing high-value intent via AI-led conversational scripts.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
        </svg>
      ),
      color: "from-brand-secondary to-brand-primary",
      border: "border-brand-secondary/30",
    },
    {
      title: "Strategic Nurture Engine",
      subtitle: "The Trust Layer",
      description: "Autonomous psychological sequences. Building deep authority and removing friction through personalized hyper-education cycles.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      color: "from-brand-accent to-brand-secondary",
      border: "border-brand-accent/30",
    },
    {
      title: "Conversion Automation",
      subtitle: "The Revenue Layer",
      description: "AI-integrated sales orchestration. From seamless strategy call scheduling to automated administrative closure and payment processing.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      color: "from-brand-primary to-[#ff00ff]",
      border: "border-brand-primary/30",
    },
  ];

  return (
    <section id="system-architecture" className="py-32 relative overflow-hidden bg-brand-bg">
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-primary/30 rounded-full blur-[160px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-secondary/20 bg-brand-secondary/10 text-brand-secondary text-[10px] font-black uppercase tracking-[0.3em] mb-6">
            Structural Intelligence
          </div>
          <h2 className="text-5xl md:text-7xl font-display font-extrabold text-white mb-8 tracking-tighter">
            The Engine of <br />
            <span className="bg-gradient-to-r from-brand-primary via-brand-accent to-brand-secondary bg-clip-text text-transparent">Sovereignty.</span>
          </h2>
          <p className="text-white/40 text-xl font-light max-w-3xl mx-auto leading-relaxed">
            Our proprietary 5-stage architecture designed to detach revenue from human effort.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {layers.map((layer, i) => (
            <div
              key={i}
              className="group relative p-8 md:p-10 rounded-[2.5rem] border border-white/5 bg-white/[0.02] backdrop-blur-2xl transition-all duration-500 hover:border-brand-primary/40 hover:bg-white/[0.05] hover:-translate-y-2 overflow-hidden"
            >
              {/* Animated Inner Glow */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-brand-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${layer.color} text-white flex items-center justify-center mb-8 shadow-2xl shadow-brand-primary/20 transition-transform group-hover:scale-110 duration-500`}>
                  {layer.icon}
                </div>

                <p className="text-[10px] uppercase tracking-[0.4em] font-black text-brand-secondary/80 mb-3">
                  {layer.subtitle}
                </p>
                <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4 group-hover:text-brand-primary transition-colors">
                  {layer.title}
                </h3>
                <p className="text-white/40 text-base md:text-lg leading-relaxed font-light">
                  {layer.description}
                </p>
              </div>

              {/* Step indicator */}
              <div className="absolute top-8 right-8 text-4xl font-display font-black text-white/[0.02] group-hover:text-white/[0.05] transition-colors transition-size duration-500 group-hover:scale-150">
                0{i + 1}
              </div>
            </div>
          ))}
        </div>

        {/* Closing Handoff */}
        <div className="mt-32 relative text-center">
          <div className="absolute inset-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-1/2 bg-white/[0.03] blur-[100px] pointer-events-none" />
          <div className="relative bg-white/[0.03] border border-white/10 rounded-[3rem] p-10 md:p-20 overflow-hidden group">
            <div className="absolute top-0 right-0 p-12 text-brand-primary opacity-5">
              <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>

            <h3 className="text-3xl md:text-5xl font-display font-extrabold text-white mb-8">
              Ready to Decentralize <br className="hidden md:block" /> Your Growth?
            </h3>
            <a
              href="#book-call"
              className="inline-flex items-center gap-4 px-10 py-5 rounded-2xl bg-brand-primary text-white font-black text-lg uppercase tracking-widest transition-all duration-300 hover:scale-105 hover:shadow-[0_0_50px_rgba(139,92,246,0.5)] active:scale-95"
            >
              Start Implementation
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}