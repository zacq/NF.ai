import { useEffect, useState } from 'react';
import {
  Zap,
  Webhook,
  Plug,
  Database,
  Brain,
  MessageSquare,
  Code,
  Bot,
  Users,
  FileText,
  Target,
  ArrowRight,
  Sparkles,
  MessageCircle,
  X,
  Send,
} from 'lucide-react';

// Floating Chat Widget Component (for Academy page)
function AcademyChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  return (
    <>
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 bg-[#0d0d14]/95 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl z-50 overflow-hidden">
          <div className="bg-gradient-to-r from-violet-600 to-fuchsia-600 p-4 flex items-center justify-between">
            <div>
              <h3 className="font-bold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                NeuraFlow Academy Assistant
              </h3>
              <p className="text-violet-100 text-xs mt-0.5">Online</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-4 h-64 overflow-y-auto bg-[#0a0a10]">
            <div className="bg-white/5 rounded-lg p-3 mb-3 border border-white/5">
              <p className="text-gray-300 text-sm">
                👋 Welcome to NeuraFlow Academy. Ask anything about the 3-layer architecture, course tracks, or how to apply this to your business.
              </p>
            </div>
            <div className="bg-white/5 rounded-lg p-3 border border-white/5">
              <p className="text-gray-400 text-xs mb-2">Suggested questions:</p>
              <div className="space-y-1.5">
                {[
                  'Where should I start if I am new to systems?',
                  'How does the Capstone project work?',
                  'What skills will I have after Layer 3?',
                ].map((q) => (
                  <button
                    key={q}
                    className="block w-full text-left text-violet-400 text-xs hover:text-violet-300 transition-colors py-1"
                  >
                    → {q}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="p-3 border-t border-white/10 bg-[#0d0d14]">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Type your question..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-violet-500/50"
              />
              <button className="p-2 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-lg text-white hover:opacity-90 transition-opacity">
                <Send className="w-4 h-4" />
              </button>
            </div>
            <p className="text-[10px] text-gray-600 mt-2 text-center">Webhook endpoint ready for integration.</p>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen((open) => !open)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-violet-900/50 hover:scale-105 transition-transform z-50 border border-white/20"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    </>
  );
}

// WhatsApp Floating Button
function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/1234567890"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 w-14 h-14 bg-green-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-green-900/50 hover:scale-105 transition-transform z-50 border border-white/20"
    >
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
      </svg>
    </a>
  );
}

// Course Card Component
interface CourseCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  colorClass: string;
  bgClass: string;
}

function CourseCard({ icon, title, description, colorClass, bgClass }: CourseCardProps) {
  return (
    <div className="bg-[#0d0d14] border border-white/5 rounded-xl p-6 hover:border-white/10 transition-all group">
      <div className={`w-12 h-12 ${bgClass} rounded-lg flex items-center justify-center mb-4`}>
        <div className={colorClass}>{icon}</div>
      </div>
      <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed mb-4">{description}</p>
      <button className={`text-sm ${colorClass} flex items-center gap-1 group-hover:gap-2 transition-all`}>
        Learn More <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
}

// Layer Section Component
interface LayerSectionProps {
  title: string;
  subtitle: string;
  color: 'blue' | 'purple' | 'orange' | 'violet';
  intro?: string[];
  children: React.ReactNode;
  id?: string;
}

function LayerSection({ title, subtitle, color, intro, children, id }: LayerSectionProps) {
  const colorStyles = {
    blue: {
      gradient: 'from-blue-400 to-cyan-400',
    },
    purple: {
      gradient: 'from-fuchsia-400 to-purple-400',
    },
    orange: {
      gradient: 'from-orange-400 to-red-400',
    },
    violet: {
      gradient: 'from-violet-400 to-purple-400',
    },
  } as const;

  const style = colorStyles[color];

  return (
    <section id={id} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2
            className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${style.gradient} bg-clip-text text-transparent mb-2`}
          >
            {title}
          </h2>
          <p className="text-gray-300 text-sm md:text-base mb-4">{subtitle}</p>
          {intro && (
            <div className="space-y-2 max-w-2xl mx-auto text-sm md:text-base text-gray-400">
              {intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}

interface AcademyProps {
  onBookingClick?: () => void;
}

export default function Academy({ onBookingClick }: AcademyProps) {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#050508] text-white">
      {/* Background effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-fuchsia-500/5 rounded-full blur-3xl" />
      </div>

      {/* Academy Nav */}
      <nav className="relative z-40 border-b border-white/5 bg-[#050508]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center">
                <span className="text-white font-bold text-lg">N</span>
              </div>
              <div>
                <span className="text-white font-bold text-lg tracking-tight">NeuraFlow</span>
                <span className="block text-[10px] text-gray-400 uppercase tracking-widest">
                  Academy
                </span>
              </div>
            </a>
            <a
              href="/"
              className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2"
            >
              ← Back to Home
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="block bg-gradient-to-r from-violet-300 via-white to-fuchsia-300 bg-clip-text text-transparent">
              NeuraFlow Academy
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 mb-4">
            Build Intelligent Systems. Not Just Automations.
          </p>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto mb-4">
            The Academy is structured as a 3-Layer Architecture.
          </p>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto mb-8">
            You don’t just learn tools. You learn how to engineer complete AI-powered business
            systems from the ground up.
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-xs md:text-sm text-gray-400">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-400" />
              Layer 1: Foundations
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-fuchsia-400" />
              Layer 2: Intelligence
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-orange-400" />
              Layer 3: Application
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-violet-400" />
              Final Layer: Capstone
            </span>
          </div>
        </div>
      </section>

      {/* Layer 1: Foundations */}
      <LayerSection
        id="foundations"
        title="Layer 1: Foundations"
        subtitle="System Building Blocks"
        color="blue"
        intro={[
          'Before intelligence. Before automation. You master the infrastructure.',
          'These are the technical primitives that power every advanced system you will ever build.',
        ]}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <CourseCard
            icon={<Zap className="w-6 h-6" />}
            title="Triggers & Events"
            description="Understand how actions, schedules, and signals initiate automation across systems. Learn to design reactive workflows that respond instantly to business activity."
            colorClass="text-blue-400"
            bgClass="bg-blue-500/20"
          />
          <CourseCard
            icon={<Webhook className="w-6 h-6" />}
            title="Webhooks"
            description="Move data between platforms in real time. Master webhook-based communication that allows tools to talk to each other seamlessly."
            colorClass="text-blue-400"
            bgClass="bg-blue-500/20"
          />
          <CourseCard
            icon={<Plug className="w-6 h-6" />}
            title="APIs & Integrations"
            description="Connect platforms, authenticate requests, and orchestrate multi-tool workflows. Build bridges between CRMs, payment processors, messaging platforms, and AI models."
            colorClass="text-blue-400"
            bgClass="bg-blue-500/20"
          />
          <CourseCard
            icon={<Database className="w-6 h-6" />}
            title="Databases & Vector Databases"
            description="Store, retrieve, embed, and search structured and unstructured data. Create intelligent memory systems for AI-powered applications."
            colorClass="text-blue-400"
            bgClass="bg-blue-500/20"
          />
        </div>
      </LayerSection>

      {/* Layer 2: Intelligence */}
      <LayerSection
        id="intelligence"
        title="Layer 2: Intelligence"
        subtitle="AI Capabilities"
        color="purple"
        intro={[
          'This is where systems stop being automated… and start becoming intelligent.',
          'You learn how to design reasoning engines that power decision-making inside your workflows.',
        ]}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <CourseCard
            icon={<Brain className="w-6 h-6" />}
            title="Large Language Models (LLMs)"
            description="Control and deploy LLMs as reasoning engines inside automated systems. Build logic-driven agents that analyze, respond, and adapt dynamically."
            colorClass="text-fuchsia-400"
            bgClass="bg-fuchsia-500/20"
          />
          <CourseCard
            icon={<MessageSquare className="w-6 h-6" />}
            title="Prompt Engineering"
            description="Design structured prompts that produce predictable, production-ready AI outputs. Turn AI from a guessing machine into a precision tool."
            colorClass="text-fuchsia-400"
            bgClass="bg-fuchsia-500/20"
          />
          <CourseCard
            icon={<Code className="w-6 h-6" />}
            title="AI Vibe Coding"
            description="Build functional apps and automations using AI-assisted development workflows. Accelerate development without sacrificing architecture quality."
            colorClass="text-fuchsia-400"
            bgClass="bg-fuchsia-500/20"
          />
        </div>
      </LayerSection>

      {/* Layer 3: Application */}
      <LayerSection
        id="application"
        title="Layer 3: Application"
        subtitle="User-Facing Systems"
        color="orange"
        intro={[
          'Now you deploy.',
          'This layer transforms foundations and intelligence into revenue-generating, client-facing systems.',
        ]}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <CourseCard
            icon={<Bot className="w-6 h-6" />}
            title="AI Chatbots & Voice Agents"
            description="Deploy inbound and outbound chat and voice agents that interact with users and trigger workflows. Turn conversations into automated actions."
            colorClass="text-orange-400"
            bgClass="bg-orange-500/20"
          />
          <CourseCard
            icon={<Users className="w-6 h-6" />}
            title="CRM Systems & Automations"
            description="Build intelligent CRM pipelines that automate lead management, follow-ups, tracking, and reporting. Engineer sales infrastructure that runs continuously."
            colorClass="text-orange-400"
            bgClass="bg-orange-500/20"
          />
          <CourseCard
            icon={<FileText className="w-6 h-6" />}
            title="AI Content Generation"
            description="Automate marketing, sales, and support content as part of end-to-end processes. Integrate content production directly into your automation stack."
            colorClass="text-orange-400"
            bgClass="bg-orange-500/20"
          />
        </div>
      </LayerSection>

      {/* Final Layer: Capstone */}
      <LayerSection
        id="capstone"
        title="Final Layer: Capstone"
        subtitle="Business Process Automation"
        color="violet"
        intro={[
          'This is where everything converges.',
          'You combine workflows, APIs, databases, LLMs, chatbots, CRMs, and content generation into fully automated business processes.',
        ]}
      >
        <div className="max-w-3xl mx-auto">
          <div className="bg-[#0d0d14] border border-violet-500/30 rounded-2xl p-8 md:p-10 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl" />

            <div className="relative text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-violet-500/25">
                <Target className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Business Process Automation</h3>

              <p className="text-gray-400 mb-6 max-w-xl mx-auto text-sm md:text-base">
                By the end of the Capstone, you will be able to build automation that runs your
                business end to end.
              </p>

              <p className="text-gray-400 mb-6 max-w-xl mx-auto text-sm md:text-base">
                You will architect systems that coordinate AI, humans, and data across every
                revenue-critical workflow.
              </p>

              <p className="text-gray-300 font-medium mb-4 text-sm md:text-base">
                By the end of the Capstone, you will be able to build:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 text-left">
                {[
                  'Lead-to-sale automation systems',
                  'Customer support automation engines',
                  'Operations & internal workflow automation',
                  'AI-powered decision systems',
                  'Revenue and cost-optimization pipelines',
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 bg-white/5 rounded-lg p-3 border border-white/5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                    <span className="text-gray-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={onBookingClick}
                className="bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white px-8 py-3 rounded-lg font-semibold transition-all flex items-center gap-2 mx-auto shadow-lg shadow-violet-900/50"
              >
                Start Capstone Course <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </LayerSection>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 px-4 sm:px-6 lg:px-8 mt-12 relative z-30">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center">
                <span className="text-white font-bold text-sm">N</span>
              </div>
              <span className="text-white font-semibold">NeuraFlow Academy</span>
            </div>

            <div className="text-center">
              <h4 className="text-white font-semibold mb-3 flex items-center justify-center gap-2">
                <Sparkles className="w-4 h-4 text-violet-400" />
                Layers
              </h4>
              <div className="flex flex-wrap justify-center gap-3 text-xs text-gray-400">
                <a href="#foundations" className="hover:text-white transition-colors">
                  Layer 1: Foundations
                </a>
                <a href="#intelligence" className="hover:text-white transition-colors">
                  Layer 2: Intelligence
                </a>
                <a href="#application" className="hover:text-white transition-colors">
                  Layer 3: Application
                </a>
                <a href="#capstone" className="hover:text-white transition-colors">
                  Final Layer: Capstone
                </a>
              </div>
            </div>

            <div className="text-center md:text-right">
              <h4 className="text-white font-semibold mb-3 flex items-center justify-center md:justify-end gap-2">
                <Sparkles className="w-4 h-4 text-violet-400" />
                Back to Growth Systems
              </h4>
              <div className="space-y-1 text-xs text-gray-400">
                <a href="/" className="block hover:text-white transition-colors">
                  Home
                </a>
                <a href="/#two-engines" className="block hover:text-white transition-colors">
                  Services: The Two Growth Engines
                </a>
                <a href="/#system-architecture" className="block hover:text-white transition-colors">
                  System Architecture
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/5 text-center text-gray-500 text-xs">
            © {new Date().getFullYear()} NeuraFlow. All rights reserved.
          </div>
        </div>
      </footer>

      <AcademyChatWidget />
    </div>
  );
}
