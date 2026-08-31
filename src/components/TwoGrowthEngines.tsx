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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            NeuraFlow installs automated{" "}
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">growth infrastructure</span>
          </h2>
          <p className="text-white/50 text-base sm:text-lg max-w-2xl mx-auto">
            Everything we build falls into two core systems that work together to capture, nurture, and convert customers 24/7.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left: Attention Infrastructure */}
          <div className="group relative p-5 sm:p-8 rounded-2xl border border-violet-500/30 bg-gradient-to-b from-violet-900/30 to-[#0a0a2f] hover:border-violet-500/50 transition-all duration-300">
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
                "Total visibility — flood the scroll, 3x daily",
                "Speed to lead — first response wins",
                "Omnichannel distribution, everywhere at once",
                "Brand voice & tone amplification",
                "Volume beats perfection, algorithm-native cadence",
                "Compounding edge over slower-moving competitors",
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
          <div className="group relative p-5 sm:p-8 rounded-2xl border border-cyan-500/30 bg-gradient-to-b from-cyan-900/20 to-[#0a1a2f] hover:border-cyan-500/50 transition-all duration-300">
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

        {/* The Attention Formula */}
        <div className="mt-12">
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-500/20 bg-violet-500/10 text-violet-300 text-xs font-medium uppercase tracking-widest mb-3">
              The Attention Formula
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              Every piece of content follows the same structure
            </h3>
            <p className="text-white/50 text-sm sm:text-base max-w-xl mx-auto">
              Volume beats perfection. We flood the scroll with content engineered on one formula — built to stop the scroll, build tension, and convert.
            </p>
          </div>
          <div className="flex justify-between items-start max-w-2xl mx-auto mb-2">
            {["Hook", "Rising Action", "Climax", "Resolution"].map((stage, i) => (
              <div key={i} className="flex flex-col items-center px-1 flex-1">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center text-white text-xs font-bold mb-1.5">
                  {i + 1}
                </div>
                <span className="text-white/60 text-xs text-center">{stage}</span>
              </div>
            ))}
          </div>
          <div className="max-w-2xl mx-auto h-0.5 bg-gradient-to-r from-violet-500/40 via-cyan-500/30 to-violet-500/40" />
        </div>

        {/* What You Really Get — teaser */}
        <div className="mt-12">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-white/50 text-xs font-medium uppercase tracking-widest mb-3">
              What You Really Get
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              A glimpse of what's included
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {[
              { icon: "💬", title: "WhatsApp & Web Agents Setup", color: "from-emerald-500/20 to-teal-500/10 border-emerald-500/20" },
              { icon: "🎙️", title: "A.I Voice Agents", color: "from-orange-500/20 to-amber-500/10 border-orange-500/20" },
              { icon: "🔄", title: "Database Reactivation Workflows", color: "from-cyan-500/20 to-blue-500/10 border-cyan-500/20" },
            ].map((tile, i) => (
              <div
                key={i}
                className={`relative p-5 rounded-2xl border bg-gradient-to-b ${tile.color} text-center hover:brightness-110 transition-all duration-300`}
              >
                <div className="text-2xl mb-2">{tile.icon}</div>
                <h4 className="text-white font-bold text-sm">{tile.title}</h4>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a href="/#/services" className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-medium transition-colors">
              See everything you get →
            </a>
          </div>
        </div>

        {/* Closing Statement */}
        <div className="hidden sm:block mt-8 text-center border-t border-white/5 pt-6">
          <p className="text-white/40 text-base max-w-3xl mx-auto italic leading-relaxed">
            "All systems integrate seamlessly. Attention Infrastructure fuels the Traffic stage, feeding the AI Sales System with qualified leads."
          </p>
        </div>
      </div>
    </section>
  );
}