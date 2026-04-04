export default function TwoGrowthEngines() {
  return (
    <section id="two-engines" className="py-14 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 100% 60% at 50% 50%, rgba(109,40,217,0.06) 0%, transparent 70%)" }} />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-500/20 bg-violet-500/10 text-violet-300 text-xs font-medium uppercase tracking-widest mb-4">
            The Two Growth Engines
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            NeuraFlow installs automated
            <br />
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">growth infrastructure</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Everything we build falls into two core systems that work together to capture, nurture, and convert customers 24/7.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left: Attention Infrastructure */}
          <div className="group relative p-8 rounded-2xl border border-violet-500/30 bg-gradient-to-b from-violet-900/30 to-[#0a0a2f] hover:border-violet-500/50 transition-all duration-300">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 text-white text-xs font-semibold">
              Attention Infrastructure
            </div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-600 to-purple-700 flex items-center justify-center text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-bold text-xl">Hyperrealistic AI Influencers</h3>
                <p className="text-violet-300 text-sm">Manufacture attention at scale</p>
              </div>
            </div>
            <ul className="space-y-3 mb-8">
              {[
                "Algorithm-native content",
                "Scalable UGC production",
                "Transformation storytelling",
                "Continuous traffic flow",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-white/60">
                  <svg className="w-4 h-4 text-violet-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <div className="text-center">
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  window.dispatchEvent(new CustomEvent('open-pricing-modal'));
                }}
                className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 text-sm font-medium cursor-pointer"
              >
                See How It Works
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right: AI Sales System */}
          <div className="group relative p-8 rounded-2xl border border-cyan-500/30 bg-gradient-to-b from-cyan-900/20 to-[#0a1a2f] hover:border-cyan-500/50 transition-all duration-300">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-xs font-semibold">
              AI Sales System (5-Stage)
            </div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-600 to-blue-700 flex items-center justify-center text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-bold text-xl">5-Stage Sales Engine</h3>
                <p className="text-cyan-300 text-sm">Automated conversion pipeline</p>
              </div>
            </div>
            {/* Stage visualization */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                {["Traffic", "Capture", "Nurture", "Convert", "Retain"].map((stage, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white text-xs font-bold mb-1">
                      {i + 1}
                    </div>
                    <span className="text-cyan-300 text-xs">{stage}</span>
                  </div>
                ))}
              </div>
              <div className="w-full h-0.5 bg-gradient-to-r from-cyan-500/40 via-blue-500/30 to-cyan-500/40"></div>
            </div>
            <p className="text-white/50 text-sm mb-6">
              Traffic → Capture → Nurture → Convert → Retain — a systematic pipeline that works autonomously.
            </p>
            <div className="text-center">
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  window.dispatchEvent(new CustomEvent('open-sales-modal'));
                }}
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-sm font-medium cursor-pointer"
              >
                Explore the 5-Stage System
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* What You Really Get */}
        <div className="mt-12">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-white/50 text-xs font-medium uppercase tracking-widest mb-3">
              What You Really Get
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Every system included in your infrastructure
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                icon: "⭐",
                title: "Reputation Management Workflows",
                description:
                  "Automated systems that monitor, respond to, and amplify your brand's online presence across platforms. AI-driven review responses, sentiment tracking, and proactive reputation signals — operating 24/7 without human oversight.",
                color: "from-violet-500/20 to-purple-500/10 border-violet-500/20",
                accent: "text-violet-400",
              },
              {
                icon: "🔄",
                title: "Database Reactivation Workflows",
                description:
                  "Re-engage dormant leads and past customers through precision-timed, AI-personalized outreach sequences. Turn cold contacts into warm opportunities using behavioural triggers and multi-channel nudges.",
                color: "from-cyan-500/20 to-blue-500/10 border-cyan-500/20",
                accent: "text-cyan-400",
              },
              {
                icon: "💬",
                title: "WhatsApp & Web Agents Setup",
                description:
                  "Deploy conversational AI agents across WhatsApp and your website that qualify, capture, and route leads instantly. No missed messages, no delayed responses — intelligent agents that sell while you sleep.",
                color: "from-emerald-500/20 to-teal-500/10 border-emerald-500/20",
                accent: "text-emerald-400",
              },
              {
                icon: "🎙️",
                title: "A.I Voice Agents",
                description:
                  "Human-sounding AI voice agents that handle inbound inquiries, outbound follow-ups, and appointment setting over the phone. Consistent, scalable, and always on-brand.",
                color: "from-orange-500/20 to-amber-500/10 border-orange-500/20",
                accent: "text-orange-400",
              },
              {
                icon: "🖥️",
                title: "Local A.I Agent Installation",
                description:
                  "Agentic workflow systems that run locally within your business ecosystem without being exposed to the online environment. Full AI capability, complete data sovereignty, zero cloud dependency.",
                color: "from-rose-500/20 to-pink-500/10 border-rose-500/20",
                accent: "text-rose-400",
              },
            ].map((tile, i) => (
              <div
                key={i}
                className={`relative p-6 rounded-2xl border bg-gradient-to-b ${tile.color} hover:brightness-110 transition-all duration-300`}
              >
                <div className={`text-2xl mb-3`}>{tile.icon}</div>
                <h4 className="text-white font-bold text-base mb-2">{tile.title}</h4>
                <p className="text-white/50 text-sm leading-relaxed">{tile.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Closing Statement */}
        <div className="mt-8 text-center border-t border-white/5 pt-6">
          <p className="text-white/40 text-base max-w-3xl mx-auto italic leading-relaxed">
            "All systems integrate seamlessly. Attention Infrastructure fuels the Traffic stage, feeding the AI Sales System with qualified leads."
          </p>
        </div>
      </div>
    </section>
  );
}