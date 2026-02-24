import { useState } from "react";

const companies = [
  {
    name: "ReHome",
    testimonial: "After implementing NeuraFlow's AI Sales System, our response time dropped to zero and bookings increased by 38% in 60 days.",
    metric: "38% increase in bookings",
    logo: "RH",
    color: "from-violet-600 to-purple-700",
  },
  {
    name: "Safisha Hub",
    testimonial: "NeuraFlow's Attention Infrastructure delivered consistent traffic flow, reducing our cost per lead by 62% while maintaining quality.",
    metric: "62% lower cost per lead",
    logo: "SH",
    color: "from-cyan-600 to-blue-700",
  },
  {
    name: "Nestic Agriventures",
    testimonial: "The 5-stage sales engine automated our entire farmer onboarding process, increasing conversion rates by 47% in 90 days.",
    metric: "47% higher conversion",
    logo: "NA",
    color: "from-emerald-600 to-teal-700",
  },
  {
    name: "SkillPath.ai",
    testimonial: "Hyperrealistic AI Influencers generated 3x more qualified leads than traditional marketing, with 24/7 content production.",
    metric: "3x more qualified leads",
    logo: "SP",
    color: "from-orange-600 to-red-700",
  },
];

export default function TrustedTeams() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 80% 50% at 50% 50%, rgba(6,182,212,0.05) 0%, transparent 70%)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-300 text-xs font-medium uppercase tracking-widest mb-4">
            Trusted Teams
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Performance-driven results for
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">innovative companies</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            No fluffy testimonials—only measurable outcomes.
          </p>
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
          {companies.map((company, i) => (
            <div key={i} className="group p-6 rounded-2xl border border-white/5 bg-white/3 backdrop-blur-sm hover:border-white/10 hover:bg-white/5 transition-all duration-300">
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${company.color} text-white font-bold text-lg mb-4`}>
                {company.logo}
              </div>
              <h3 className="text-white font-bold text-lg mb-4">{company.name}</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-4 italic">"{company.testimonial}"</p>
              <div className="px-3 py-2 rounded-lg border border-white/10 bg-white/5">
                <div className="text-white/80 text-sm font-semibold">{company.metric}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="md:hidden relative">
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
              {companies.map((company, i) => (
                <div key={i} className="w-full flex-shrink-0 px-2">
                  <div className="p-6 rounded-2xl border border-white/5 bg-white/3 backdrop-blur-sm">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${company.color} text-white font-bold text-lg mb-4`}>
                      {company.logo}
                    </div>
                    <h3 className="text-white font-bold text-lg mb-4">{company.name}</h3>
                    <p className="text-white/60 text-sm leading-relaxed mb-4 italic">"{company.testimonial}"</p>
                    <div className="px-3 py-2 rounded-lg border border-white/10 bg-white/5">
                      <div className="text-white/80 text-sm font-semibold">{company.metric}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Carousel indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {companies.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`w-2 h-2 rounded-full transition-all ${i === activeIndex ? "bg-cyan-400 w-6" : "bg-white/20"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}