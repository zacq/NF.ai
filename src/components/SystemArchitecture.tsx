export default function SystemArchitecture() {
  const layers = [
    {
      title: "Attention Infrastructure (AI Influencers)",
      description: "Hyperrealistic AI personas that create algorithm-native content, driving continuous traffic flow.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      color: "from-violet-600 to-purple-700",
      border: "border-violet-500/40",
    },
    {
      title: "Capture Layer",
      description: "WhatsApp, landing pages, and conversational AI that instantly capture leads 24/7.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      ),
      color: "from-cyan-600 to-blue-700",
      border: "border-cyan-500/40",
    },
    {
      title: "AI Nurture Engine",
      description: "Personalized sequences that build trust, educate, and move leads toward conversion.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
      color: "from-emerald-600 to-teal-700",
      border: "border-emerald-500/40",
    },
    {
      title: "Conversion Automation",
      description: "AI-driven sales calls, payment processing, and onboarding automation.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
      color: "from-orange-600 to-red-700",
      border: "border-orange-500/40",
    },
    {
      title: "Retention & Reputation Layer",
      description: "Automated follow-ups, review generation, and customer reactivation systems.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      color: "from-fuchsia-600 to-pink-700",
      border: "border-fuchsia-500/40",
    },
  ];

  return (
    <section id="system-architecture" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 100% 60% at 50% 50%, rgba(6,182,212,0.06) 0%, transparent 70%)" }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-500/20 bg-violet-500/10 text-violet-300 text-xs font-medium uppercase tracking-widest mb-4">
            System Architecture
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            The complete
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent"> growth infrastructure</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Our intellectual property framework that becomes your automated growth engine.
          </p>
        </div>

        <div className="relative">
          {/* Vertical connecting line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/40 via-cyan-500/30 to-fuchsia-500/40 hidden lg:block" />

          {/* Layers */}
          <div className="space-y-6">
            {layers.map((layer, i) => (
              <div key={i} className={`relative p-6 rounded-2xl border ${layer.border} bg-white/3 backdrop-blur-sm hover:bg-white/5 transition-all duration-300 lg:w-5/6 ${i % 2 === 0 ? "lg:ml-auto" : "lg:mr-auto"}`}>
                {/* Layer number */}
                <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-gradient-to-br from-violet-600 to-cyan-500 text-white text-xs font-bold flex items-center justify-center hidden lg:flex">
                  {i + 1}
                </div>

                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${layer.color} text-white flex-shrink-0`}>
                    {layer.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-2">{layer.title}</h3>
                    <p className="text-white/50 text-sm">{layer.description}</p>
                  </div>
                </div>

                {/* Arrow connector */}
                {i < layers.length - 1 && (
                  <div className="absolute left-1/2 -translate-x-1/2 -bottom-6 text-white/30 hidden lg:block">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 px-8 py-6 rounded-3xl border border-white/10 bg-gradient-to-br from-violet-900/30 to-cyan-900/20 backdrop-blur-sm">
            <div className="text-left">
              <h3 className="text-white font-bold text-xl mb-1">Ready to install your growth infrastructure?</h3>
              <p className="text-white/50 text-sm">Book a strategy call to see how NeuraFlow can transform your marketing and sales.</p>
            </div>
            <a href="#book-call" className="px-8 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-semibold hover:opacity-90 transition-opacity whitespace-nowrap">
              Book Your Strategy Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}