const integrations = [
  { name: "OpenAI", category: "AI", icon: "🧠", color: "from-emerald-500/20 to-teal-500/20 border-emerald-500/20" },
  { name: "Anthropic", category: "AI", icon: "🤖", color: "from-orange-500/20 to-amber-500/20 border-orange-500/20" },
  { name: "Slack", category: "Communication", icon: "💬", color: "from-purple-500/20 to-violet-500/20 border-purple-500/20" },
  { name: "Gmail", category: "Email", icon: "📧", color: "from-red-500/20 to-rose-500/20 border-red-500/20" },
  { name: "Salesforce", category: "CRM", icon: "☁️", color: "from-blue-500/20 to-sky-500/20 border-blue-500/20" },
  { name: "HubSpot", category: "CRM", icon: "🔶", color: "from-orange-500/20 to-red-500/20 border-orange-500/20" },
  { name: "Notion", category: "Productivity", icon: "📝", color: "from-white/5 to-white/10 border-white/10" },
  { name: "GitHub", category: "Dev Tools", icon: "🐙", color: "from-gray-500/20 to-slate-500/20 border-gray-500/20" },
  { name: "Stripe", category: "Payments", icon: "💳", color: "from-indigo-500/20 to-violet-500/20 border-indigo-500/20" },
  { name: "Airtable", category: "Database", icon: "📊", color: "from-cyan-500/20 to-blue-500/20 border-cyan-500/20" },
  { name: "Jira", category: "Project Mgmt", icon: "🎯", color: "from-blue-600/20 to-indigo-500/20 border-blue-600/20" },
  { name: "PostgreSQL", category: "Database", icon: "🐘", color: "from-blue-400/20 to-cyan-400/20 border-blue-400/20" },
  { name: "Twilio", category: "SMS", icon: "📱", color: "from-red-500/20 to-pink-500/20 border-red-500/20" },
  { name: "Shopify", category: "E-Commerce", icon: "🛍️", color: "from-green-500/20 to-emerald-500/20 border-green-500/20" },
  { name: "Zapier", category: "Automation", icon: "⚡", color: "from-orange-600/20 to-amber-400/20 border-orange-600/20" },
  { name: "Discord", category: "Community", icon: "🎮", color: "from-indigo-500/20 to-blue-500/20 border-indigo-500/20" },
  { name: "Webflow", category: "Web", icon: "🌐", color: "from-violet-500/20 to-purple-500/20 border-violet-500/20" },
  { name: "Figma", category: "Design", icon: "🎨", color: "from-pink-500/20 to-fuchsia-500/20 border-pink-500/20" },
];

export default function Integrations() {
  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(139,92,246,0.07) 0%, transparent 70%)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-fuchsia-500/20 bg-fuchsia-500/10 text-fuchsia-300 text-xs font-medium uppercase tracking-widest mb-4">
            Integrations
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Connect to
            <span className="bg-gradient-to-r from-fuchsia-400 to-violet-400 bg-clip-text text-transparent"> everything</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            500+ pre-built integrations and a universal HTTP connector for anything that's not on the list.
          </p>
        </div>

        {/* Integration Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {integrations.map((integration, i) => (
            <div
              key={i}
              className={`group flex flex-col items-center gap-2 p-4 rounded-xl border bg-gradient-to-br ${integration.color} backdrop-blur-sm hover:scale-105 transition-all duration-200 cursor-pointer`}
            >
              <span className="text-3xl">{integration.icon}</span>
              <span className="text-white text-xs font-medium text-center">{integration.name}</span>
              <span className="text-white/30 text-xs text-center">{integration.category}</span>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a href="#" className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 transition-colors text-sm font-medium">
            View all 500+ integrations
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
