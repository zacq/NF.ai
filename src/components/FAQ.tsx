import { useState } from "react";

const faqs = [
  {
    question: "What makes NeuraFlow different from Zapier or Make?",
    answer: "NeuraFlow is built from the ground up with AI at its core. Unlike traditional automation tools, our workflows include autonomous AI agents that can reason, adapt, and handle edge cases without pre-defined rules. We also offer 10x the performance at comparable pricing.",
  },
  {
    question: "Do I need to know how to code?",
    answer: "Not at all. NeuraFlow is designed for non-technical users with our visual drag-and-drop builder and natural language workflow creation. You can describe what you want in plain English and our AI will build the workflow for you.",
  },
  {
    question: "How secure is my data?",
    answer: "Security is our top priority. NeuraFlow is SOC 2 Type II certified, GDPR compliant, and offers end-to-end encryption for all data in transit and at rest. You can choose your data residency region and we offer on-premise deployment for Enterprise customers.",
  },
  {
    question: "What AI models does NeuraFlow support?",
    answer: "We support all major AI models including GPT-4o, Claude 3.5, Gemini Pro, Llama 3, and Mistral. You can bring your own API keys or use our managed service. Enterprise customers can also fine-tune custom models on their own data.",
  },
  {
    question: "Can I migrate from my existing automation tool?",
    answer: "Yes! We offer free migration assistance from Zapier, Make, n8n, and other platforms. Our team will help you recreate your workflows in NeuraFlow and optimize them with AI enhancements. Most migrations complete within 48 hours.",
  },
  {
    question: "What happens if a workflow fails?",
    answer: "NeuraFlow has built-in error handling and automatic retry logic. AI agents can also diagnose and self-heal many failure conditions. You'll receive instant notifications via your preferred channel, and our dashboard provides full error logs and debugging tools.",
  },
  {
    question: "Is there an API for custom integrations?",
    answer: "Absolutely. NeuraFlow offers a comprehensive REST API and GraphQL endpoint, plus native webhooks and custom HTTP connectors. If an app isn't in our 500+ integration library, you can connect to it directly via our universal connector.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(6,182,212,0.05) 0%, transparent 70%)" }} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-300 text-xs font-medium uppercase tracking-widest mb-4">
            FAQ
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Frequently asked
            <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent"> questions</span>
          </h2>
          <p className="text-white/50 text-lg">
            Everything you need to know. Can't find the answer? <a href="#" className="text-violet-400 hover:text-violet-300 underline underline-offset-2">Chat with us.</a>
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                openIndex === i ? "border-violet-500/30 bg-violet-500/5" : "border-white/5 bg-white/3 hover:border-white/10"
              }`}
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className={`font-medium text-sm sm:text-base pr-4 ${openIndex === i ? "text-white" : "text-white/70"}`}>
                  {faq.question}
                </span>
                <div className={`flex-shrink-0 w-7 h-7 rounded-lg border flex items-center justify-center transition-all ${
                  openIndex === i ? "border-violet-500/40 bg-violet-500/20 text-violet-400 rotate-45" : "border-white/10 bg-white/5 text-white/40"
                }`}>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-6">
                  <p className="text-white/50 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
