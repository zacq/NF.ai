import { useState } from "react";

const plans = [
  {
    name: "Starter",
    monthlyPrice: 0,
    annualPrice: 0,
    description: "Perfect for individuals exploring AI automation.",
    features: [
      "5 active workflows",
      "1,000 tasks/month",
      "10 integrations",
      "Community support",
      "1 AI Agent",
      "Basic analytics",
    ],
    cta: "Get Started Free",
    highlighted: false,
    badge: null,
  },
  {
    name: "Pro",
    monthlyPrice: 49,
    annualPrice: 39,
    description: "For growing teams that need serious automation power.",
    features: [
      "Unlimited workflows",
      "100,000 tasks/month",
      "150+ integrations",
      "Priority email support",
      "10 AI Agents",
      "Advanced analytics",
      "Custom triggers",
      "Team workspaces",
    ],
    cta: "Start Pro Trial",
    highlighted: true,
    badge: "Most Popular",
  },
  {
    name: "Enterprise",
    monthlyPrice: 199,
    annualPrice: 159,
    description: "For organizations demanding scale, security, and control.",
    features: [
      "Unlimited everything",
      "Unlimited tasks",
      "500+ integrations",
      "Dedicated support & CSM",
      "Unlimited AI Agents",
      "Custom AI model fine-tuning",
      "SSO & SAML",
      "SOC 2 compliance",
      "On-premise deployment",
      "SLA guarantee",
    ],
    cta: "Contact Sales",
    highlighted: false,
    badge: null,
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(true);

  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 90% 50% at 50% 50%, rgba(109,40,217,0.07) 0%, transparent 70%)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-500/20 bg-violet-500/10 text-violet-300 text-xs font-medium uppercase tracking-widest mb-4">
            Pricing
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Simple, transparent
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent"> pricing</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto mb-8">
            Start free, scale as you grow. No hidden fees, no surprises.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-4 p-1 rounded-xl border border-white/10 bg-white/5">
            <button
              onClick={() => setAnnual(false)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${!annual ? "bg-white/10 text-white" : "text-white/40 hover:text-white/60"}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${annual ? "bg-white/10 text-white" : "text-white/40 hover:text-white/60"}`}
            >
              Annual
              <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">Save 20%</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative p-8 rounded-2xl border transition-all duration-300 ${
                plan.highlighted
                  ? "border-violet-500/50 bg-gradient-to-b from-violet-900/40 to-[#0a0a2f] shadow-2xl shadow-violet-500/20 scale-105"
                  : "border-white/5 bg-white/3 hover:border-white/10 hover:bg-white/5"
              }`}
            >
              {/* Top glow for highlighted */}
              {plan.highlighted && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
              )}

              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 text-white text-xs font-semibold">
                  {plan.badge}
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-white font-bold text-xl mb-1">{plan.name}</h3>
                <p className="text-white/40 text-sm">{plan.description}</p>
              </div>

              <div className="mb-6">
                <div className="flex items-end gap-1">
                  <span className="text-5xl font-bold text-white">
                    ${annual ? plan.annualPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-white/40 text-sm mb-2">/mo</span>
                </div>
                {annual && plan.monthlyPrice > 0 && (
                  <div className="text-white/30 text-xs mt-1">Billed annually (${(annual ? plan.annualPrice : plan.monthlyPrice) * 12}/yr)</div>
                )}
              </div>

              <a
                href="#"
                className={`block w-full text-center py-3 rounded-xl font-semibold text-sm mb-6 transition-all duration-200 ${
                  plan.highlighted
                    ? "bg-gradient-to-r from-violet-600 to-cyan-500 text-white hover:opacity-90 shadow-lg shadow-violet-500/30"
                    : "border border-white/10 bg-white/5 text-white hover:bg-white/10"
                }`}
              >
                {plan.cta}
              </a>

              <ul className="space-y-3">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-white/60">
                    <svg className="w-4 h-4 text-violet-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="text-center text-white/30 text-sm mt-8">
          All plans include a 14-day free trial. No credit card required.
        </p>
      </div>
    </section>
  );
}
