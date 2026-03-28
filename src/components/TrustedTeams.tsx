const logoClients = [
  { name: "Shoshana Farms Africa Limited", img: "/Screenshot 2026-03-08 200546.png" },
  { name: "House of Allure", img: "/Screenshot 2026-03-08 200632.png" },
  { name: "Artsynine Concept KE", img: "/Screenshot 2026-03-08 200638.png" },
  { name: "ReHome", img: null, initials: "RH", color: "from-violet-600 to-purple-700" },
  { name: "Safisha Hub", img: null, initials: "SH", color: "from-cyan-600 to-blue-700" },
  { name: "Nestic Agriventures", img: null, initials: "NA", color: "from-emerald-600 to-teal-700" },
  { name: "SkillPath.ai", img: null, initials: "SP", color: "from-orange-600 to-red-700" },
];

// Two rows with different subsets for visual depth
const row1 = [...logoClients, ...logoClients];
const row2 = [...[...logoClients].reverse(), ...[...logoClients].reverse()];

const featuredQuotes = [
  {
    name: "ReHome",
    initials: "RH",
    color: "from-violet-600 to-purple-700",
    metric: "38% increase in bookings",
    quote: "After implementing NeuraFlow's AI Sales System, our response time dropped to zero and bookings increased by 38% in 60 days.",
    metricColor: "text-violet-400 border-violet-500/30 bg-violet-500/10",
  },
  {
    name: "Safisha Hub",
    initials: "SH",
    color: "from-cyan-600 to-blue-700",
    metric: "62% lower cost per lead",
    quote: "NeuraFlow's Attention Infrastructure delivered consistent traffic flow, reducing our cost per lead by 62% while maintaining quality.",
    metricColor: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10",
  },
];

type LogoClient = {
  name: string;
  img: string | null;
  initials?: string;
  color?: string;
};

function LogoTile({ client }: { client: LogoClient }) {
  return (
    <div className="group flex-shrink-0 flex flex-col items-center gap-2 w-36 p-3 rounded-xl border border-white/5 bg-white/3 hover:border-white/15 hover:bg-white/8 transition-all duration-300 cursor-default">
      {client.img ? (
        <img
          src={client.img}
          alt={client.name}
          className="w-14 h-14 object-contain rounded-lg grayscale group-hover:grayscale-0 transition-all duration-300"
        />
      ) : (
        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${client.color} flex items-center justify-center text-white font-bold text-lg`}>
          {client.initials}
        </div>
      )}
      <span className="text-white/40 group-hover:text-white/70 text-[10px] font-medium text-center leading-tight transition-colors duration-300">
        {client.name}
      </span>
    </div>
  );
}

export default function TrustedTeams() {
  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 80% 50% at 50% 50%, rgba(6,182,212,0.05) 0%, transparent 70%)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-300 text-xs font-medium uppercase tracking-widest mb-4">
            Trusted Teams
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Performance-driven results for
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">innovative companies</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            No fluffy testimonials — only measurable outcomes.
          </p>
        </div>

        {/* Logo marquee — Row 1: right to left */}
        <div className="relative overflow-hidden mb-4">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-brand-bg to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-brand-bg to-transparent z-10 pointer-events-none" />
          <div className="animate-marquee flex gap-4 items-center" style={{ width: "max-content" }}>
            {row1.map((client, i) => (
              <LogoTile key={i} client={client} />
            ))}
          </div>
        </div>

        {/* Logo marquee — Row 2: left to right (slower) */}
        <div className="relative overflow-hidden mb-16">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-brand-bg to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-brand-bg to-transparent z-10 pointer-events-none" />
          <div className="animate-marquee-ltr flex gap-4 items-center" style={{ width: "max-content", animationDuration: "40s" }}>
            {row2.map((client, i) => (
              <LogoTile key={i} client={client} />
            ))}
          </div>
        </div>

        {/* Featured quotes — 2 static cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredQuotes.map((q, i) => (
            <div key={i} className="p-7 rounded-2xl border border-white/8 bg-white/3 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${q.color} flex items-center justify-center text-white font-bold text-base`}>
                  {q.initials}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{q.name}</p>
                  <div className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border text-xs font-semibold mt-0.5 ${q.metricColor}`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                    {q.metric}
                  </div>
                </div>
              </div>
              <blockquote className="text-white/60 text-sm leading-relaxed italic">
                "{q.quote}"
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
