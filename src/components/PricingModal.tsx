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
    return () => {
      window.removeEventListener('open-pricing-modal', handleOpen);
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
            <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 mb-4">
              Master AI Content Creation
            </h2>
            <p className="text-gray-400 text-lg">
              Complete Systems for Professional Content
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-[#13131f] border border-white/5 rounded-xl p-8 hover:border-emerald-500/30 transition-colors flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Target className="w-6 h-6" />
                </div>
                <span className="text-emerald-400 text-sm font-medium">Most Popular</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">AI UGC Ad Mastery</h3>
              <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                Create scroll-stopping UGC-style ads that convert—without actors, studios, or production budgets. Perfect for ecom brands and agencies.
              </p>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-start gap-3 text-sm text-gray-300">
                  <Check className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span>47 video modules + templates</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-300">
                  <Check className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span>AI avatar & voice cloning setup</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-300">
                  <Check className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span>Hook frameworks that drive 12x ROAS</span>
                </li>
              </ul>
              <div className="mt-auto">
                <div className="text-3xl font-bold text-emerald-500 mb-4">$55</div>
                <button className="text-violet-400 hover:text-violet-300 text-sm font-medium flex items-center gap-2 group transition-colors">
                  Enroll Now <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#13131f] border border-white/5 rounded-xl p-8 hover:border-pink-500/30 transition-colors flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <FileText className="w-6 h-6" />
                </div>
                <span className="text-pink-400 text-sm font-medium">Advanced</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Long-Form AI Production</h3>
              <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                Build a YouTube channel, podcast, or video series using AI-generated scripts, voiceovers, b-roll, and editing—publish daily without burnout.
              </p>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-start gap-3 text-sm text-gray-300">
                  <Check className="w-5 h-5 text-pink-500 shrink-0" />
                  <span>52 modules + production blueprints</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-300">
                  <Check className="w-5 h-5 text-pink-500 shrink-0" />
                  <span>AI scriptwriting & storyboarding</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-300">
                  <Check className="w-5 h-5 text-pink-500 shrink-0" />
                  <span>Automated editing pipelines</span>
                </li>
              </ul>
              <div className="mt-auto">
                <div className="text-3xl font-bold text-pink-500 mb-4">$100</div>
                <button className="text-violet-400 hover:text-violet-300 text-sm font-medium flex items-center gap-2 group transition-colors">
                  Enroll Now <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-[#13131f] border border-white/5 rounded-xl p-8 hover:border-yellow-500/30 transition-colors flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <Zap className="w-6 h-6" />
                </div>
                <span className="text-yellow-400 text-sm font-medium">Fast Results</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Short-Form Viral Systems</h3>
              <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                Go viral on TikTok, Reels, and Shorts with AI-generated clips, captions, and trending audio. Batch 30 days of content in one afternoon.
              </p>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-start gap-3 text-sm text-gray-300">
                  <Check className="w-5 h-5 text-yellow-500 shrink-0" />
                  <span>38 modules + swipe file vault</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-300">
                  <Check className="w-5 h-5 text-yellow-500 shrink-0" />
                  <span>AI trend detection & content calendar</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-300">
                  <Check className="w-5 h-5 text-yellow-500 shrink-0" />
                  <span>Batch production workflow (30 in 1 day)</span>
                </li>
              </ul>
              <div className="mt-auto">
                <div className="text-3xl font-bold text-yellow-500 mb-4">$75</div>
                <button className="text-violet-400 hover:text-violet-300 text-sm font-medium flex items-center gap-2 group transition-colors">
                  Enroll Now <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </div>
          </div>

          {/* Complete AI Content Mastery Section */}
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold text-violet-400 mb-8">Complete AI Content Mastery</h2>
            
            <div className="relative bg-[#0d0d14] border border-violet-500/30 rounded-3xl p-8 md:p-12 overflow-visible">
              {/* Floating Graduation Cap Icon */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center shadow-[0_0_30px_rgba(139,92,246,0.4)] border border-violet-400/20">
                  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
                  </svg>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Full Bundle - All 3 Courses</h3>
                <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-sm md:text-base leading-relaxed">
                  Get all three courses and master every aspect of AI content creation. From viral short-form to long-form production to high-converting ads.
                </p>

                {/* Bundle Features List */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto mb-12">
                  {[
                    "All 3 courses (137 modules total)",
                    "Lifetime access + all future courses",
                    "Complete template & prompt library",
                    "Private mastermind community",
                    "Priority support & feedback",
                    "Exclusive bonus content & tools"
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-4 text-left">
                      <div className="w-2 h-2 rounded-full bg-violet-500 shrink-0" />
                      <span className="text-sm text-gray-200">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Bundle Pricing Area */}
                <div className="mb-8">
                  <div className="flex items-center justify-center gap-4">
                    <span className="text-5xl md:text-6xl font-bold text-white">$150</span>
                    <span className="text-2xl text-gray-500 line-through">$230</span>
                  </div>
                  <p className="text-gray-400 mt-2">One-time payment • Save $80</p>
                </div>

                <button className="bg-gradient-to-r from-violet-500 to-indigo-500 hover:from-violet-600 hover:to-indigo-600 text-white px-10 py-4 rounded-xl font-bold text-lg flex items-center gap-2 mx-auto transition-all shadow-lg shadow-violet-500/20">
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
