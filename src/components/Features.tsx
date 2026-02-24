const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714a2.25 2.25 0 001.357 2.059l.4.2M14.25 3.104c.251.023.501.05.75.082M14.25 3.104a24.3 24.3 0 01-4.5 0" />
      </svg>
    ),
    title: "Autonomous AI Agents",
    description: "Deploy intelligent agents that plan, execute, and adapt to complex multi-step tasks without constant human supervision.",
    gradient: "from-violet-500 to-purple-700",
    glow: "violet",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
    title: "Visual Flow Builder",
    description: "Design powerful automation workflows with a drag-and-drop canvas. No code required — just connect, configure, and deploy.",
    gradient: "from-cyan-500 to-blue-700",
    glow: "cyan",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
      </svg>
    ),
    title: "500+ Integrations",
    description: "Connect to any app, database, or API instantly. From Slack and Salesforce to custom webhooks — NeuraFlow speaks every language.",
    gradient: "from-fuchsia-500 to-pink-700",
    glow: "fuchsia",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Real-Time Execution",
    description: "Trigger workflows in milliseconds. NeuraFlow's edge-distributed runtime ensures sub-second response times globally.",
    gradient: "from-orange-500 to-red-700",
    glow: "orange",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Enterprise Security",
    description: "SOC 2 Type II certified with end-to-end encryption, RBAC, SSO, and full audit logs. Your data never leaves your region.",
    gradient: "from-green-500 to-emerald-700",
    glow: "green",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    title: "AI-Powered Analytics",
    description: "Get deep insights into every workflow. Identify bottlenecks, predict failures, and optimize performance automatically.",
    gradient: "from-indigo-500 to-violet-700",
    glow: "indigo",
  },
];

const glowColors: Record<string, string> = {
  violet: "shadow-violet-500/20 group-hover:shadow-violet-500/40",
  cyan: "shadow-cyan-500/20 group-hover:shadow-cyan-500/40",
  fuchsia: "shadow-fuchsia-500/20 group-hover:shadow-fuchsia-500/40",
  orange: "shadow-orange-500/20 group-hover:shadow-orange-500/40",
  green: "shadow-green-500/20 group-hover:shadow-green-500/40",
  indigo: "shadow-indigo-500/20 group-hover:shadow-indigo-500/40",
};

export default function Features() {
  return (
    <section className="py-28 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 100% 60% at 50% 50%, rgba(109,40,217,0.06) 0%, transparent 70%)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-500/20 bg-violet-500/10 text-violet-300 text-xs font-medium uppercase tracking-widest mb-4">
            Features
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Everything you need to
            <br />
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">automate at scale</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            NeuraFlow combines the power of large language models with enterprise-grade automation infrastructure.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className={`group relative p-6 rounded-2xl border border-white/5 bg-white/3 backdrop-blur-sm hover:border-white/10 hover:bg-white/5 transition-all duration-300 shadow-xl ${glowColors[feature.glow]}`}
            >
              {/* Icon */}
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.gradient} mb-4 text-white`}>
                {feature.icon}
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-white/45 text-sm leading-relaxed">{feature.description}</p>

              {/* Hover glow line */}
              <div className={`absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-50 transition-opacity`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
