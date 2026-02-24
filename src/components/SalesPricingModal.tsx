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
    return () => {
      window.removeEventListener('open-sales-modal', handleOpen);
    };
  }, []);

  const closeForm = () => {
    setIsOpen(false);
    document.body.style.overflow = 'unset';
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={closeForm}
      />
      
      <div className="relative w-full max-w-6xl bg-[#0d0d14] rounded-2xl border border-white/10 shadow-2xl overflow-y-auto max-h-[90vh] animate-in fade-in zoom-in duration-300">
        <button 
          onClick={closeForm}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-8 md:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-4">
              Master AI Sales Systems
            </h2>
            <p className="text-gray-400 text-lg">
              Complete Revenue Engines for Modern Businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-[#13131f] border border-white/5 rounded-xl p-8 hover:border-emerald-500/30 transition-colors flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Users className="w-6 h-6" />
                </div>
                <span className="text-emerald-400 text-sm font-medium">Most Popular</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">AI Lead Capture Engine</h3>
              <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                Turn every website visitor into a tracked, nurtured, and monetized opportunity. Capture, qualify, and follow up automatically 24/7.
              </p>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-start gap-3 text-sm text-gray-300">
                  <Check className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span>Smart AI sales agent + CRM integration</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-300">
                  <Check className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span>Automated email, SMS & WhatsApp follow-ups</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-300">
                  <Check className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span>Intelligent lead scoring system</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-300">
                  <Check className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span>Real-time pipeline dashboard</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-300">
                  <Check className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span>Conversion optimization templates</span>
                </li>
              </ul>
              <div className="mt-auto">
                <div className="text-3xl font-bold text-emerald-500 mb-4">$350</div>
                <button className="text-cyan-400 hover:text-cyan-300 text-sm font-medium flex items-center gap-2 group transition-colors">
                  Enroll Now <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#13131f] border border-white/5 rounded-xl p-8 hover:border-pink-500/30 transition-colors flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-lg bg-pink-500/20 flex items-center justify-center text-pink-400">
                  <Settings className="w-6 h-6" />
                </div>
                <span className="text-pink-400 text-sm font-medium">Advanced</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">AI Sales Automation Pro</h3>
              <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                Build a complete multi-channel sales engine that nurtures cold prospects into booked calls and closed deals without manual chasing.
              </p>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-start gap-3 text-sm text-gray-300">
                  <Check className="w-5 h-5 text-pink-500 shrink-0" />
                  <span>Multi-channel automation workflows</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-300">
                  <Check className="w-5 h-5 text-pink-500 shrink-0" />
                  <span>Personalized AI follow-up logic</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-300">
                  <Check className="w-5 h-5 text-pink-500 shrink-0" />
                  <span>Deal-stage pipeline architecture</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-300">
                  <Check className="w-5 h-5 text-pink-500 shrink-0" />
                  <span>Automated booking + reminders</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-300">
                  <Check className="w-5 h-5 text-pink-500 shrink-0" />
                  <span>Sales analytics & performance tracking</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-300">
                  <Check className="w-5 h-5 text-pink-500 shrink-0" />
                  <span>Plug-and-play workflow templates</span>
                </li>
              </ul>
              <div className="mt-auto">
                <div className="text-3xl font-bold text-pink-500 mb-4">$500</div>
                <button className="text-cyan-400 hover:text-cyan-300 text-sm font-medium flex items-center gap-2 group transition-colors">
                  Enroll Now <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-[#13131f] border border-white/5 rounded-xl p-8 hover:border-yellow-500/30 transition-colors flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-lg bg-yellow-500/20 flex items-center justify-center text-yellow-400">
                  <Rocket className="w-6 h-6" />
                </div>
                <span className="text-yellow-400 text-sm font-medium">Fast Implementation</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">AI Appointment Accelerator</h3>
              <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                Deploy a high-converting AI qualification and booking system in days, not months. Fill your calendar with ready-to-buy prospects.
              </p>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-start gap-3 text-sm text-gray-300">
                  <Check className="w-5 h-5 text-yellow-500 shrink-0" />
                  <span>AI qualification scripts</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-300">
                  <Check className="w-5 h-5 text-yellow-500 shrink-0" />
                  <span>Automated scheduling & rescheduling</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-300">
                  <Check className="w-5 h-5 text-yellow-500 shrink-0" />
                  <span>No-show reduction sequences</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-300">
                  <Check className="w-5 h-5 text-yellow-500 shrink-0" />
                  <span>CRM & calendar integrations</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-300">
                  <Check className="w-5 h-5 text-yellow-500 shrink-0" />
                  <span>Conversion-tested message flows</span>
                </li>
              </ul>
              <div className="mt-auto">
                <div className="text-3xl font-bold text-yellow-500 mb-4">$200</div>
                <button className="text-cyan-400 hover:text-cyan-300 text-sm font-medium flex items-center gap-2 group transition-colors">
                  Enroll Now <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </div>
          </div>

          {/* Complete AI Sales Mastery Section */}
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold text-cyan-400 mb-8">Complete AI Sales Mastery</h2>
            
            <div className="relative bg-[#0d0d14] border border-cyan-500/30 rounded-3xl p-8 md:p-12 overflow-visible">
              {/* Floating Sales Icon */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-600 to-blue-600 flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.4)] border border-cyan-400/20">
                  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Full Bundle – The 24/7 Revenue Machine</h3>
                <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-sm md:text-base leading-relaxed">
                  A fully automated acquisition, nurture, and closing system engineered to generate revenue continuously.
                </p>

                {/* Bundle Features List */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto mb-12">
                  {[
                    "All 3 systems included",
                    "End-to-end sales infrastructure blueprint",
                    "Advanced CRM architecture templates",
                    "AI sales script vault",
                    "Lifetime updates",
                    "Private implementation group",
                    "Priority support"
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-4 text-left">
                      <div className="w-2 h-2 rounded-full bg-cyan-500 shrink-0" />
                      <span className="text-sm text-gray-200">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Bundle Pricing Area */}
                <div className="mb-8">
                  <div className="flex items-center justify-center gap-4">
                    <span className="text-5xl md:text-6xl font-bold text-white">$750</span>
                    <span className="text-2xl text-gray-500 line-through">$850 Value</span>
                  </div>
                  <p className="text-gray-400 mt-2">One-Time Payment</p>
                </div>

                <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-10 py-4 rounded-xl font-bold text-lg flex items-center gap-2 mx-auto transition-all shadow-lg shadow-cyan-500/20">
                  Get Full Bundle <span className="text-xl">→</span>
                </button>
              </div>
            </div>
          </div>

          {/* Close button at the very bottom */}
          <div className="mt-12 text-center pb-4">
            <button 
              onClick={closeForm}
              className="text-gray-500 hover:text-white transition-colors text-sm underline underline-offset-4"
            >
              Back to website
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}