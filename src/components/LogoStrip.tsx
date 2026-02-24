const logos = [
  { name: "OpenAI", icon: "🧠" },
  { name: "Slack", icon: "💬" },
  { name: "Salesforce", icon: "☁️" },
  { name: "HubSpot", icon: "🔶" },
  { name: "Notion", icon: "📝" },
  { name: "GitHub", icon: "🐙" },
  { name: "Google", icon: "🔵" },
  { name: "Stripe", icon: "💳" },
  { name: "Airtable", icon: "📊" },
  { name: "Zapier", icon: "⚡" },
];

export default function LogoStrip() {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center mb-10">
        <p className="text-sm text-white/30 uppercase tracking-widest font-medium">
          Trusted by innovative teams at
        </p>
      </div>

      {/* Scrolling logos */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#050510] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#050510] to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee gap-8 whitespace-nowrap">
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-xl border border-white/5 bg-white/3 backdrop-blur-sm min-w-max"
            >
              <span className="text-2xl">{logo.icon}</span>
              <span className="text-white/50 font-medium text-sm">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
