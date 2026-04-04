import { useState, useEffect } from 'react';
import { Target, FileText, Zap, Check, X } from 'lucide-react';

export default function PricingModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => {
      setIsOpen(true);
      document.body.style.overflow = 'hidden';
    };
    window.addEventListener('open-pricing-modal', handleOpen);
    return () => window.removeEventListener('open-pricing-modal', handleOpen);
  }, []);

  const closeForm = () => {
    setIsOpen(false);
    document.body.style.overflow = 'unset';
  };

  if (!isOpen) return null;

  const cards = [
    {
      icon: <Target className="w-5 h-5" />,
      iconBg: "bg-emerald-500/20 text-emerald-400",
      badge: "Most Popular",
      badgeColor: "text-emerald-400",
      hover: "hover:border-emerald-500/30",
      title: "AI UGC Ad Mastery",
      desc: "Create scroll-stopping UGC-style ads that convert—without actors, studios, or production budgets.",
      features: ["47 video modules + templates", "AI avatar & voice cloning setup", "Hook frameworks that drive 12x ROAS"],
      checkColor: "text-emerald-500",
      price: "$55",
      priceColor: "text-emerald-400",
    },
    {
      icon: <FileText className="w-5 h-5" />,
      iconBg: "bg-cyan-500/20 text-cyan-400",
      badge: "Advanced",
      badgeColor: "text-pink-400",
      hover: "hover:border-pink-500/30",
      title: "Long-Form AI Production",
      desc: "Build a YouTube channel, podcast, or video series using AI-generated scripts, voiceovers, and editing.",
      features: ["52 modules + production blueprints", "AI scriptwriting & storyboarding", "Automated editing pipelines"],
      checkColor: "text-pink-500",
      price: "$100",
      priceColor: "text-pink-400",
    },
    {
      icon: <Zap className="w-5 h-5" />,
      iconBg: "bg-yellow-500/20 text-yellow-400",
      badge: "Fast Results",
      badgeColor: "text-yellow-400",
      hover: "hover:border-yellow-500/30",
      title: "Short-Form Viral Systems",
      desc: "Go viral on TikTok, Reels, and Shorts. Batch 30 days of content in one afternoon.",
      features: ["38 modules + swipe file vault", "AI trend detection & content calendar", "Batch production workflow"],
      checkColor: "text-yellow-500",
      price: "$75",
      priceColor: "text-yellow-400",
    },
  ];

  const bundleFeatures = [
    "All 3 courses (137 modules total)",
    "Lifetime access + all future courses",
    "Complete template & prompt library",
    "Private mastermind community",
    "Priority support & feedback",
    "Exclusive bonus content & tools",
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
            <h2 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 mb-1">
              Master AI Content Creation
            </h2>
            <p className="text-white/40 text-sm">Complete Systems for Professional Content</p>
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
          <div className="relative bg-white/[0.03] border border-violet-500/30 rounded-2xl p-5 sm:p-7 pt-10 text-center">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center shadow-[0_0_20px_rgba(139,92,246,0.4)] border border-violet-400/20">
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
                </svg>
              </div>
            </div>
            <h3 className="text-lg sm:text-2xl font-bold text-white mb-2">Full Bundle — All 3 Courses</h3>
            <p className="text-white/40 text-xs sm:text-sm max-w-xl mx-auto mb-5 leading-relaxed">
              Master every aspect of AI content creation — from viral short-form to long-form production to high-converting ads.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-w-2xl mx-auto mb-5">
              {bundleFeatures.map((f, i) => (
                <div key={i} className="flex items-center gap-2 bg-white/5 border border-white/8 rounded-lg px-3 py-2 text-left">
                  <div className="w-1.5 h-1.5 rounded-full bg-violet-500 shrink-0" />
                  <span className="text-xs text-white/70">{f}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="text-3xl sm:text-4xl font-bold text-white">$150</span>
              <span className="text-lg text-white/30 line-through">$230</span>
            </div>
            <p className="text-white/30 text-xs mb-4">One-time payment · Save $80</p>
            <button className="bg-gradient-to-r from-violet-500 to-indigo-500 hover:from-violet-600 hover:to-indigo-600 text-white px-7 py-3 rounded-xl font-bold text-sm inline-flex items-center gap-2 mx-auto transition-all shadow-lg shadow-violet-500/20">
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
