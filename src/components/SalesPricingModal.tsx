import { useState, useEffect } from 'react';
import { Users, Settings, Rocket, Check, X } from 'lucide-react';

export default function SalesPricingModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => {
      setIsOpen(true);
      document.body.style.overflow = 'hidden';
    };
    window.addEventListener('open-sales-modal', handleOpen);
    return () => window.removeEventListener('open-sales-modal', handleOpen);
  }, []);

  const closeForm = () => {
    setIsOpen(false);
    document.body.style.overflow = 'unset';
  };

  if (!isOpen) return null;

  const cards = [
    {
      icon: <Users className="w-5 h-5" />,
      iconBg: "bg-emerald-500/20 text-emerald-400",
      badge: "Most Popular",
      badgeColor: "text-emerald-400",
      hover: "hover:border-emerald-500/30",
      title: "AI Lead Capture Engine",
      desc: "Turn every website visitor into a tracked, nurtured, and monetized opportunity. Capture, qualify, and follow up automatically 24/7.",
      features: [
        "Smart AI sales agent + CRM integration",
        "Automated email, SMS & WhatsApp follow-ups",
        "Intelligent lead scoring system",
        "Real-time pipeline dashboard",
        "Conversion optimization templates",
      ],
      checkColor: "text-emerald-500",
      price: "$350",
      priceColor: "text-emerald-400",
    },
    {
      icon: <Settings className="w-5 h-5" />,
      iconBg: "bg-pink-500/20 text-pink-400",
      badge: "Advanced",
      badgeColor: "text-pink-400",
      hover: "hover:border-pink-500/30",
      title: "AI Sales Automation Pro",
      desc: "Build a complete multi-channel sales engine that nurtures cold prospects into booked calls and closed deals.",
      features: [
        "Multi-channel automation workflows",
        "Personalized AI follow-up logic",
        "Deal-stage pipeline architecture",
        "Automated booking + reminders",
        "Sales analytics & performance tracking",
        "Plug-and-play workflow templates",
      ],
      checkColor: "text-pink-500",
      price: "$500",
      priceColor: "text-pink-400",
    },
    {
      icon: <Rocket className="w-5 h-5" />,
      iconBg: "bg-yellow-500/20 text-yellow-400",
      badge: "Fast Implementation",
      badgeColor: "text-yellow-400",
      hover: "hover:border-yellow-500/30",
      title: "AI Appointment Accelerator",
      desc: "Deploy a high-converting AI qualification and booking system in days. Fill your calendar with ready-to-buy prospects.",
      features: [
        "AI qualification scripts",
        "Automated scheduling & rescheduling",
        "No-show reduction sequences",
        "CRM & calendar integrations",
        "Conversion-tested message flows",
      ],
      checkColor: "text-yellow-500",
      price: "$200",
      priceColor: "text-yellow-400",
    },
  ];

  const bundleFeatures = [
    "All 3 systems included",
    "End-to-end sales infrastructure blueprint",
    "Advanced CRM architecture templates",
    "AI sales script vault",
    "Lifetime updates",
    "Private implementation group",
    "Priority support",
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center p-3 sm:p-4 overflow-y-auto">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={closeForm} />

      <div className="relative w-full max-w-4xl bg-[#0d0d14] rounded-2xl border border-white/10 shadow-2xl my-4 animate-in fade-in zoom-in-95 duration-300">
        <button
          onClick={closeForm}
          className="absolute top-3 right-3 p-1.5 text-white/40 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-colors z-10"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="p-5 sm:p-8">
          {/* Header */}
          <div className="text-center mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-blue mb-1">
              Master AI Sales Systems
            </h2>
            <p className="text-white/40 text-sm">Complete Revenue Engines for Modern Businesses</p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
            {cards.map((c, i) => (
              <div key={i} className={`bg-white/[0.04] border border-white/8 rounded-xl p-4 ${c.hover} transition-colors flex flex-col`}>
                <div className="flex justify-between items-center mb-3">
                  <div className={`w-9 h-9 rounded-lg ${c.iconBg} flex items-center justify-center`}>
                    {c.icon}
                  </div>
                  <span className={`${c.badgeColor} text-xs font-semibold`}>{c.badge}</span>
                </div>
                <h3 className="text-base font-bold text-white mb-2 leading-snug">{c.title}</h3>
                <p className="text-white/40 text-xs mb-3 leading-relaxed flex-1">{c.desc}</p>
                <ul className="space-y-1.5 mb-4">
                  {c.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2 text-xs text-white/60">
                      <Check className={`w-3.5 h-3.5 ${c.checkColor} shrink-0 mt-0.5`} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <div className={`text-2xl font-bold ${c.priceColor} mb-2`}>{c.price}</div>
                  <button className="text-brand-accent hover:text-brand-blue text-xs font-medium flex items-center gap-1 group transition-colors">
                    Enroll Now <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Bundle */}
          <div className="relative bg-white/[0.03] border border-brand-accent/30 rounded-2xl p-5 sm:p-7 pt-10 text-center">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-accent to-brand-blue flex items-center justify-center shadow-[0_0_20px_rgba(14,165,214,0.4)] border border-brand-accent/20">
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
            </div>
            <h3 className="text-lg sm:text-2xl font-bold text-white mb-2">Full Bundle — The 24/7 Revenue Machine</h3>
            <p className="text-white/40 text-xs sm:text-sm max-w-xl mx-auto mb-5 leading-relaxed">
              A fully automated acquisition, nurture, and closing system engineered to generate revenue continuously.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-w-2xl mx-auto mb-5">
              {bundleFeatures.map((f, i) => (
                <div key={i} className="flex items-center gap-2 bg-white/5 border border-white/8 rounded-lg px-3 py-2 text-left">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-accent shrink-0" />
                  <span className="text-xs text-white/70">{f}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center gap-3 mb-2">
              <span className="text-3xl sm:text-4xl font-bold text-white">$750</span>
              <span className="text-lg text-white/30 line-through">$850</span>
            </div>
            <p className="text-white/30 text-xs mb-4">One-time payment</p>
            <button className="bg-gradient-to-r from-brand-accent to-brand-blue hover:opacity-90 text-white px-7 py-3 rounded-xl font-bold text-sm inline-flex items-center gap-2 mx-auto transition-all shadow-lg shadow-brand-accent/20">
              Get Full Bundle →
            </button>
          </div>

          <div className="mt-5 text-center">
            <button onClick={closeForm} className="text-white/25 hover:text-white/60 transition-colors text-xs underline underline-offset-4">
              Back to website
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
