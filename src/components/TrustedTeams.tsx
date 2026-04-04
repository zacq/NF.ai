import { useState } from "react";

const logoClients = [
  { name: "Shoshana Farms Africa Limited", img: "/Screenshot 2026-03-08 200546.png", initials: "SF", color: "from-green-600 to-emerald-700" },
  { name: "ReHome", img: null, initials: "RH", color: "from-violet-600 to-purple-700" },
  { name: "Safisha Hub Autodetailers", img: null, initials: "SH", color: "from-cyan-600 to-blue-700" },
  { name: "Nestic Agriventures", img: null, initials: "NA", color: "from-emerald-600 to-teal-700" },
  { name: "Cygnus", img: null, initials: "CY", color: "from-indigo-600 to-violet-700" },
  { name: "WeruTV", img: null, initials: "WT", color: "from-blue-600 to-indigo-700" },
  { name: "Mystiv LTD", img: null, initials: "ML", color: "from-rose-600 to-red-700" },
];

// Duplicate for seamless loop (single row)
const marqueeItems = [...logoClients, ...logoClients];

type Testimonial = {
  initials: string;
  color: string;
  industry: string;
  metric: string;
  quote: string;
  metricColor: string;
  url?: string;
};

const testimonials: Record<string, Testimonial> = {
  "Cygnus": {
    initials: "CY",
    color: "from-indigo-600 to-violet-700",
    industry: "Consultancy",
    metric: "3x faster client response time",
    quote: "NeuraFlow streamlined how potential clients engage with our consultancy. Inquiries are now handled instantly, reducing drop-offs and allowing us to focus on high-value advisory work while maintaining rapid response across all touchpoints.",
    metricColor: "text-indigo-400 border-indigo-500/30 bg-indigo-500/10",
    url: "https://cygnus.co.ke/",
  },
  "Nestic Agriventures": {
    initials: "NA",
    color: "from-emerald-600 to-teal-700",
    industry: "Agri-business / Supply Chain",
    metric: "47% increase in qualified buyers",
    quote: "NeuraFlow replaced our scattered inquiry process with a structured pipeline. We now attract serious bulk buyers and distributors, and close deals faster — qualified leads are up by 47%.",
    metricColor: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
  },
  "Shoshana Farms Africa Limited": {
    initials: "SF",
    color: "from-green-600 to-emerald-700",
    industry: "Agriculture / Direct-to-Consumer Produce",
    metric: "55% boost in repeat orders",
    quote: "The automated follow-up system keeps our customers engaged after every purchase. Retention has improved by 55%, and repeat orders now come in consistently without manual follow-ups.",
    metricColor: "text-green-400 border-green-500/30 bg-green-500/10",
  },
  "WeruTV": {
    initials: "WT",
    color: "from-blue-600 to-indigo-700",
    industry: "Media & Advertising",
    metric: "2.4x more advertiser inquiries",
    quote: "NeuraFlow transformed our platform into a structured acquisition funnel. We're now attracting more serious advertisers and converting audience attention into real business opportunities.",
    metricColor: "text-blue-400 border-blue-500/30 bg-blue-500/10",
  },
  "Mystiv LTD": {
    initials: "ML",
    color: "from-rose-600 to-red-700",
    industry: "Automotive — Parts & Services",
    metric: "52% increase in customer inquiries",
    quote: "NeuraFlow brought structure to how customers find and engage with us. From service inquiries to parts requests, everything flows seamlessly — inquiries are up by 52%, with stronger conversion into sales.",
    metricColor: "text-rose-400 border-rose-500/30 bg-rose-500/10",
  },
  "Safisha Hub Autodetailers": {
    initials: "SH",
    color: "from-cyan-600 to-blue-700",
    industry: "Automotive — Detailing Services",
    metric: "62% lower cost per booking",
    quote: "NeuraFlow's Attention Infrastructure optimized our client acquisition flow. We're attracting high-intent car owners while reducing our cost per booking by 62% — without increasing ad spend.",
    metricColor: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10",
  },
  "ReHome": {
    initials: "RH",
    color: "from-violet-600 to-purple-700",
    industry: "Household Recycling / Sustainability",
    metric: "38% increase in collection bookings",
    quote: "NeuraFlow's AI system turned inbound interest into structured pickup requests. Our response time dropped to zero, and collection bookings increased by 38% within 60 days.",
    metricColor: "text-violet-400 border-violet-500/30 bg-violet-500/10",
  },
};

type LogoClient = {
  name: string;
  img: string | null;
  initials?: string;
  color?: string;
};

function LogoTile({
  client,
  isSelected,
  onClick,
}: {
  client: LogoClient;
  isSelected: boolean;
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className={`group flex-shrink-0 flex flex-col items-center gap-2 w-36 p-3 rounded-xl border transition-all duration-300 cursor-pointer select-none
        ${isSelected
          ? "border-brand-blue/50 bg-brand-blue/10 scale-[1.04]"
          : "border-white/5 bg-white/[0.03] hover:border-white/15 hover:bg-white/[0.08]"
        }`}
    >
      {client.img ? (
        <img
          src={client.img}
          alt={client.name}
          className={`w-14 h-14 object-contain rounded-lg transition-all duration-300 ${isSelected ? "grayscale-0" : "grayscale group-hover:grayscale-0"}`}
        />
      ) : (
        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${client.color} flex items-center justify-center text-white font-bold text-lg`}>
          {client.initials}
        </div>
      )}
      <span className={`text-[10px] font-medium text-center leading-tight transition-colors duration-300 ${isSelected ? "text-white/90" : "text-white/40 group-hover:text-white/70"}`}>
        {client.name}
      </span>
    </div>
  );
}

export default function TrustedTeams() {
  const [selected, setSelected] = useState<string>("ReHome");

  const active = testimonials[selected] ?? null;

  return (
    <section className="py-14 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 80% 50% at 50% 50%, rgba(14,165,214,0.05) 0%, transparent 70%)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-accent/20 bg-brand-accent/10 text-brand-accent text-xs font-medium uppercase tracking-widest mb-4">
            Trusted Teams
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Performance-driven results for
            <br />
            <span className="bg-gradient-to-r from-brand-accent to-brand-blue bg-clip-text text-transparent">innovative companies</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            No fluffy testimonials — only measurable outcomes. Select a company to read their story.
          </p>
        </div>

        {/* Single marquee row — click a tile to see its testimonial */}
        <div className="relative overflow-hidden mb-10">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-brand-navy to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-brand-navy to-transparent z-10 pointer-events-none" />
          <div className="animate-marquee flex gap-4 items-center" style={{ width: "max-content" }}>
            {marqueeItems.map((client, i) => (
              <LogoTile
                key={i}
                client={client}
                isSelected={selected === client.name}
                onClick={() => setSelected(client.name)}
              />
            ))}
          </div>
        </div>

        {/* Single centered testimonial tile */}
        <div className="max-w-2xl mx-auto">
          {active ? (
            <div
              key={selected}
              className="p-8 rounded-2xl border border-white/8 bg-white/[0.03] backdrop-blur-sm text-center"
            >
              {/* Avatar + name + industry */}
              <div className="flex items-center justify-center gap-4 mb-5">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${active.color} flex items-center justify-center text-white font-bold text-xl flex-shrink-0`}>
                  {active.initials}
                </div>
                <div className="text-left">
                  {active.url ? (
                    <a
                      href={active.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white font-semibold text-sm leading-snug hover:text-brand-accent transition-colors underline underline-offset-2 decoration-white/30 hover:decoration-brand-accent"
                    >
                      {selected}
                    </a>
                  ) : (
                    <p className="text-white font-semibold text-sm leading-snug">{selected}</p>
                  )}
                  <p className="text-white/40 text-[11px] mt-0.5">{active.industry}</p>
                  <div className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border text-xs font-semibold mt-1.5 ${active.metricColor}`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                    {active.metric}
                  </div>
                </div>
              </div>

              {/* Quote */}
              <blockquote className="text-white/60 text-sm leading-relaxed italic border-t border-white/5 pt-5">
                "{active.quote}"
              </blockquote>
            </div>
          ) : (
            <div className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] text-center">
              <p className="text-white/30 text-sm italic">Case study coming soon for {selected}.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
