import { useState, useEffect } from "react";

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

  // Auto-advance every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % companies.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setActiveIndex((i) => (i - 1 + companies.length) % companies.length);
  const next = () => setActiveIndex((i) => (i + 1) % companies.length);
  const company = companies[activeIndex];

  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 80% 50% at 50% 50%, rgba(6,182,212,0.05) 0%, transparent 70%)" }} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
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

        {/* Carousel */}
        <div className="relative">
          <div className="p-8 sm:p-12 rounded-3xl border border-white/10 bg-white/3 backdrop-blur-sm text-center transition-all duration-500">
            {/* Logo badge */}
            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${company.color} text-white font-bold text-2xl mb-6 shadow-lg`}>
              {company.logo}
            </div>

            {/* Company name */}
            <h3 className="text-white font-bold text-2xl mb-6">{company.name}</h3>

            {/* Testimonial */}
            <blockquote className="text-white/70 text-lg leading-relaxed mb-8 italic max-w-2xl mx-auto">
              "{company.testimonial}"
            </blockquote>

            {/* Metric pill */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-cyan-500/30 bg-cyan-500/10">
              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-cyan-300 text-sm font-semibold">{company.metric}</span>
            </div>
          </div>

          {/* Prev / Next arrows */}
          <button
            onClick={prev}
            aria-label="Previous"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 w-10 h-10 rounded-full border border-white/10 bg-black/60 backdrop-blur-sm flex items-center justify-center text-white/60 hover:text-white hover:border-white/30 transition-all"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button
            onClick={next}
            aria-label="Next"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 w-10 h-10 rounded-full border border-white/10 bg-black/60 backdrop-blur-sm flex items-center justify-center text-white/60 hover:text-white hover:border-white/30 transition-all"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {companies.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${i === activeIndex ? "bg-cyan-400 w-8" : "bg-white/20 w-2"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}