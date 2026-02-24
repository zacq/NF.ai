const testimonials = [
  {
    quote: "NeuraFlow cut our ops overhead by 60%. Our AI agents handle everything from lead scoring to customer onboarding — completely hands-off.",
    name: "Sarah Chen",
    title: "VP of Operations",
    company: "TechVault Inc.",
    avatar: "SC",
    color: "from-violet-500 to-purple-600",
  },
  {
    quote: "We replaced 3 different automation tools with NeuraFlow. The visual builder and AI capabilities are unmatched. ROI in under 2 weeks.",
    name: "Marcus Williams",
    title: "Head of Engineering",
    company: "Scalepath",
    avatar: "MW",
    color: "from-cyan-500 to-blue-600",
  },
  {
    quote: "The agent memory and context retention is incredible. Our workflows actually get smarter over time. It's like having a 24/7 operations team.",
    name: "Priya Sharma",
    title: "CTO",
    company: "NovaBridge AI",
    avatar: "PS",
    color: "from-fuchsia-500 to-pink-600",
  },
  {
    quote: "Security was our top concern, but NeuraFlow's SOC 2 compliance and data residency options gave us full confidence. Now we're fully automated.",
    name: "James O'Brien",
    title: "CISO",
    company: "FinCore Systems",
    avatar: "JO",
    color: "from-emerald-500 to-teal-600",
  },
  {
    quote: "I built our first live workflow in 15 minutes using natural language. No coding needed. NeuraFlow is genuinely magical.",
    name: "Ayesha Patel",
    title: "Product Manager",
    company: "LaunchLabs",
    avatar: "AP",
    color: "from-orange-500 to-red-600",
  },
  {
    quote: "Migrating from Zapier was seamless. Performance is 10x better, costs are lower, and the AI-powered error handling saves us constantly.",
    name: "Daniel Kim",
    title: "Director of Growth",
    company: "Orbio Analytics",
    avatar: "DK",
    color: "from-indigo-500 to-violet-600",
  },
];

export default function Testimonials() {
  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 80% 50% at 50% 50%, rgba(6,182,212,0.05) 0%, transparent 70%)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-300 text-xs font-medium uppercase tracking-widest mb-4">
            Testimonials
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Loved by teams
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent"> worldwide</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Don't take our word for it — here's what industry leaders are saying.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="group p-6 rounded-2xl border border-white/5 bg-white/3 backdrop-blur-sm hover:border-white/10 hover:bg-white/5 transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[1,2,3,4,5].map(s => (
                  <svg key={s} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.05 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z" />
                  </svg>
                ))}
              </div>

              <p className="text-white/70 text-sm leading-relaxed mb-6 italic">"{t.quote}"</p>

              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
                  {t.avatar}
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">{t.name}</div>
                  <div className="text-white/40 text-xs">{t.title} · {t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats row */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "12K+", label: "Active Teams" },
            { value: "500M+", label: "Tasks Automated" },
            { value: "99.9%", label: "Uptime SLA" },
            { value: "4.9/5", label: "Average Rating" },
          ].map((stat, i) => (
            <div key={i} className="text-center p-6 rounded-2xl border border-white/5 bg-white/3">
              <div className="text-3xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent mb-1">{stat.value}</div>
              <div className="text-white/40 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
