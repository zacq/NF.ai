import { useEffect, useState } from 'react';
import {
  Zap,
  Webhook,
  Plug,
  Database,
  Brain,
  MessageSquare,
  Code,
  Terminal,
  Bot,
  Users,
  FileText,
  Target,
  ArrowRight,
  Sparkles,
  MessageCircle,
  X,
  Send,
  Globe,
  BookOpen,
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
                👋 Welcome to NeuraFlow Academy. Ask anything about the curriculum, Claude Code workflows, or how to apply AI systems to your business.
              </p>
            </div>
            <div className="bg-white/5 rounded-lg p-3 border border-white/5">
              <p className="text-gray-400 text-xs mb-2">Suggested questions:</p>
              <div className="space-y-1.5">
                {[
                  "Where should I start if I'm new to AI systems?",
                  'How does the Capstone project work?',
                  'Can I apply this to my existing business?',
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

// Course Card Component
interface CourseCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  colorClass: string;
  bgClass: string;
  badge?: string;
}

function CourseCard({ icon, title, description, colorClass, bgClass, badge }: CourseCardProps) {
  return (
    <div className="bg-[#0d0d14] border border-white/5 rounded-xl p-6 hover:border-white/10 transition-all group relative">
      {badge && (
        <span className="absolute top-4 right-4 text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full bg-violet-500/20 text-violet-300 border border-violet-500/20">
          {badge}
        </span>
      )}
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
  intro?: React.ReactNode;
  children: React.ReactNode;
  id?: string;
}

function LayerSection({ title, subtitle, color, intro, children, id }: LayerSectionProps) {
  const colorStyles = {
    blue:   { gradient: 'from-blue-400 to-cyan-400' },
    purple: { gradient: 'from-fuchsia-400 to-purple-400' },
    orange: { gradient: 'from-orange-400 to-red-400' },
    violet: { gradient: 'from-violet-400 to-purple-400' },
  } as const;

  const style = colorStyles[color];

  return (
    <section id={id} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${style.gradient} bg-clip-text text-transparent mb-2`}>
            {title}
          </h2>
          <p className="text-gray-300 text-sm md:text-base mb-4">{subtitle}</p>
          {intro && (
            <div className="max-w-2xl mx-auto text-sm md:text-base text-gray-400">
              {intro}
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
                <span className="block text-[10px] text-gray-400 uppercase tracking-widest">Academy</span>
              </div>
            </a>
            <a href="/" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2">
              ← Back to Home
            </a>
          </div>
        </div>
      </nav>

      {/* ── SECTION 1: Hero ── */}
      <section className="relative pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-500/20 bg-violet-500/10 text-violet-300 text-xs font-medium uppercase tracking-widest mb-6">
            NeuraFlow Academy
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="block bg-gradient-to-r from-violet-300 via-white to-fuchsia-300 bg-clip-text text-transparent">
              Build Intelligent Systems.
            </span>
            <span className="block bg-gradient-to-r from-fuchsia-300 via-white to-violet-300 bg-clip-text text-transparent">
              Not Just Automations.
            </span>
          </h1>

          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto mb-3">
            The Academy is structured as a 4-Layer Architecture.
          </p>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto mb-8">
            You don't just learn tools. You learn how to engineer complete AI-powered business
            systems from the ground up.
          </p>

          {/* Layer index pills */}
          <div className="flex flex-wrap justify-center gap-4 text-xs md:text-sm text-gray-400 mb-10">
            <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-blue-400" />Layer 1: Foundations</span>
            <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-fuchsia-400" />Layer 2: Intelligence</span>
            <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-orange-400" />Layer 3: Application</span>
            <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-violet-400" />Final Layer: Capstone</span>
          </div>

          {/* Anthropic positioning add-on */}
          <div className="max-w-2xl mx-auto p-5 rounded-2xl border border-violet-500/20 bg-gradient-to-b from-violet-500/10 to-transparent text-left">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-violet-300">Built on Anthropic's AI Ecosystem</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-2">
              This Academy leverages Claude and Anthropic tools as the primary environment for learning, building, and deploying AI systems.
            </p>
            <p className="text-gray-400 text-sm mb-3 italic">
              You don't just learn AI. You train inside it.
            </p>
            <a
              href="https://www.anthropic.com/learn"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-violet-400 hover:text-violet-300 transition-colors font-medium"
            >
              <BookOpen className="w-3.5 h-3.5" />
              Explore Anthropic Learning Resources →
            </a>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: Social Proof Strip ── */}
      <section className="py-6 px-4 border-y border-white/5 bg-white/[0.01]">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-center">
            {[
              { value: '200+', label: 'Systems Built' },
              { value: '4-Layer', label: 'Curriculum' },
              { value: 'Live', label: 'Build Sessions' },
              { value: 'Done-With-You', label: 'Support' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-white font-bold text-lg md:text-xl">{stat.value}</div>
                <div className="text-gray-500 text-xs uppercase tracking-widest mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 2.5: Training Environment ── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-2xl border border-violet-500/20 bg-gradient-to-br from-violet-900/20 to-[#0a0a2f] overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              {/* Left: copy */}
              <div className="p-8 md:p-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-500/20 bg-violet-500/10 text-violet-300 text-[10px] font-bold uppercase tracking-widest mb-5">
                  Training Environment
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Train Inside Real AI Systems
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed mb-3">
                  NeuraFlow Academy is built on top of Anthropic's ecosystem, with Claude Code as the primary interface for building.
                </p>
                <p className="text-gray-400 text-sm leading-relaxed mb-3">
                  Every system you design, test, and deploy is executed inside real AI environments — not simulations.
                </p>
                <p className="text-gray-300 text-sm font-medium mb-6">
                  You learn by interacting with production-grade intelligence.
                </p>
                <a
                  href="https://www.anthropic.com/learn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-violet-400 hover:text-violet-300 transition-colors font-medium"
                >
                  <Globe className="w-4 h-4" />
                  Explore Anthropic Resources →
                </a>
              </div>

              {/* Right: feature list */}
              <div className="p-8 md:p-10 border-t md:border-t-0 md:border-l border-violet-500/10">
                <p className="text-gray-500 text-xs uppercase tracking-widest mb-5">What this means for you</p>
                <ul className="space-y-4">
                  {[
                    { icon: '◈', text: 'Claude-powered system design & reasoning workflows' },
                    { icon: '⚡', text: 'Real-time prompt execution & refinement' },
                    { icon: '▸', text: 'AI-assisted coding inside Claude Code' },
                    { icon: '◉', text: 'Structured learning using Anthropic methodologies' },
                    { icon: '∞', text: 'Direct exposure to evolving AI capabilities' },
                  ].map((item) => (
                    <li key={item.text} className="flex items-start gap-3">
                      <span className="text-violet-400 text-sm mt-0.5 flex-shrink-0">{item.icon}</span>
                      <span className="text-gray-300 text-sm">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: Layer 1: Foundations ── */}
      <LayerSection
        id="foundations"
        title="Layer 1: Foundations"
        subtitle="System Building Blocks"
        color="blue"
        intro={
          <div className="space-y-2">
            <p>Before intelligence. Before automation. You master the infrastructure.</p>
            <p>These are the technical primitives that power every advanced system you will ever build.</p>
          </div>
        }
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
            description="Move data between platforms in real time. Master webhook-based communication that allows your tools to talk to each other seamlessly — no manual handoffs, no delays."
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
            description="Store, retrieve, embed, and search structured and unstructured data. Create intelligent memory systems for AI-powered applications that get smarter over time."
            colorClass="text-blue-400"
            bgClass="bg-blue-500/20"
          />
        </div>
      </LayerSection>

      {/* ── SECTION 4: Layer 2: Intelligence ── */}
      <LayerSection
        id="intelligence"
        title="Layer 2: Intelligence"
        subtitle="AI Capabilities — Powered by Claude"
        color="purple"
        intro={
          <div className="space-y-2">
            <p>This is where systems stop being automated… and start becoming intelligent.</p>
            <p>
              This layer is powered by <span className="text-violet-300 font-medium">Claude</span>. You learn how to design reasoning systems using Anthropic's models — enabling structured thinking, tool use, and controlled AI behaviour inside your workflows.
            </p>
          </div>
        }
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <CourseCard
            icon={<Brain className="w-6 h-6" />}
            title="Large Language Models (LLMs)"
            description="Work directly with Claude as your primary reasoning engine. Learn how to structure inputs, guide outputs, and build systems that think — not just respond — using Anthropic's approach."
            colorClass="text-fuchsia-400"
            bgClass="bg-fuchsia-500/20"
          />
          <CourseCard
            icon={<MessageSquare className="w-6 h-6" />}
            title="Prompt Engineering"
            description="Engineer prompts specifically for Claude. Learn structured prompting, system-level instruction design, and how to control AI outputs with precision using Anthropic's practices."
            colorClass="text-fuchsia-400"
            bgClass="bg-fuchsia-500/20"
          />
          <CourseCard
            icon={<Code className="w-6 h-6" />}
            title="AI Vibe Coding"
            description="Build functional apps and automations using AI-assisted development workflows. Accelerate your output without sacrificing the quality of the architecture underneath."
            colorClass="text-fuchsia-400"
            bgClass="bg-fuchsia-500/20"
          />
          <CourseCard
            icon={<Terminal className="w-6 h-6" />}
            title="Claude Code Workflows"
            description="Use Claude as a development partner. Build applications, scripts, and automations using AI-assisted coding inside Claude Code. Translate ideas into working systems faster."
            colorClass="text-fuchsia-400"
            bgClass="bg-fuchsia-500/20"
            badge="New"
          />
        </div>
      </LayerSection>

      {/* ── SECTION 5: Layer 3: Application ── */}
      <LayerSection
        id="application"
        title="Layer 3: Application"
        subtitle="User-Facing Systems"
        color="orange"
        intro={
          <div className="space-y-2">
            <p>Now you deploy.</p>
            <p>This layer transforms foundations and intelligence into revenue-generating, client-facing systems that operate without you.</p>
          </div>
        }
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <CourseCard
            icon={<Bot className="w-6 h-6" />}
            title="AI Chatbots & Voice Agents"
            description="Deploy inbound and outbound chat and voice agents that interact with users and trigger workflows automatically. Turn every conversation into a tracked, automated action."
            colorClass="text-orange-400"
            bgClass="bg-orange-500/20"
          />
          <CourseCard
            icon={<Users className="w-6 h-6" />}
            title="CRM Systems & Automations"
            description="Build intelligent CRM pipelines that automate lead management, follow-ups, tracking, and reporting. Engineer sales infrastructure that runs continuously — with or without your team."
            colorClass="text-orange-400"
            bgClass="bg-orange-500/20"
          />
          <CourseCard
            icon={<FileText className="w-6 h-6" />}
            title="AI Content Generation"
            description="Automate marketing, sales, and support content as part of end-to-end processes. Integrate content production directly into your automation stack — not as a separate tool, but as a live engine."
            colorClass="text-orange-400"
            bgClass="bg-orange-500/20"
          />
        </div>
      </LayerSection>

      {/* ── SECTION 6: Capstone ── */}
      <LayerSection
        id="capstone"
        title="Final Layer: Capstone"
        subtitle="Business Process Automation"
        color="violet"
        intro={
          <div className="space-y-2">
            <p>This is where everything converges.</p>
            <p>You deploy real AI-powered solutions using Anthropic tools — demonstrating applied intelligence in live environments.</p>
            <p>You combine workflows, APIs, databases, LLMs, chatbots, CRMs, and content generation into fully automated business processes.</p>
          </div>
        }
      >
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Main capstone card */}
          <div className="bg-[#0d0d14] border border-violet-500/30 rounded-2xl p-8 md:p-10 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl" />

            <div className="relative text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-violet-500/25">
                <Target className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Business Process Automation</h3>

              <p className="text-gray-400 mb-4 max-w-xl mx-auto text-sm md:text-base">
                By the end of the Capstone, you will be able to build automation that runs your business end to end.
              </p>
              <p className="text-gray-400 mb-6 max-w-xl mx-auto text-sm md:text-base">
                You will architect systems that coordinate AI, humans, and data across every revenue-critical workflow — without dependency on any single person.
              </p>

              <p className="text-gray-300 font-medium mb-4 text-sm md:text-base">By the end of the Capstone, you will be able to build:</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 text-left">
                {[
                  'Lead-to-sale automation systems',
                  'Customer support automation engines',
                  'Operations & internal workflow automation',
                  'AI-powered decision systems',
                  'Revenue and cost-optimisation pipelines',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 bg-white/5 rounded-lg p-3 border border-white/5">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-400 flex-shrink-0" />
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

          {/* Real-World Deployment with Claude */}
          <div className="bg-[#0d0d14] border border-violet-500/20 rounded-2xl p-6 md:p-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center flex-shrink-0">
                <Terminal className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <h4 className="text-white font-bold text-lg mb-2">Real-World Deployment with Claude</h4>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  Every student builds and deploys systems using Claude, creating a verifiable portfolio of AI implementations.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {[
                    'Proof of applied AI training',
                    'A working system portfolio',
                    'Contribution to the Anthropic ecosystem',
                  ].map((point) => (
                    <div key={point} className="flex items-center gap-2 text-sm text-gray-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-violet-400 flex-shrink-0" />
                      {point}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayerSection>

      {/* ── SECTION 7: Community Alignment ── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-300 text-xs font-medium uppercase tracking-widest mb-6">
            Community
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Built for the AI Builder Community
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto mb-6 leading-relaxed">
            NeuraFlow Academy operates as a live training ecosystem. Students build, share, and iterate within a community aligned with the future of AI development.
          </p>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
            By training on Anthropic tools, the Academy contributes to:
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {[
              'AI education and adoption',
              'Real-world use case development',
              'Community-driven intelligence systems',
            ].map((point) => (
              <div key={point} className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/8 bg-white/3 text-sm text-gray-300">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                {point}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 8: Enrolment ── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="rounded-2xl border border-violet-500/25 bg-gradient-to-b from-violet-900/20 to-[#0a0a2f] p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Join the Next Cohort.</h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-2">
              NeuraFlow Academy runs in live cohorts so you build alongside other operators — and get direct feedback on your systems.
            </p>
            <p className="text-gray-500 text-xs mb-8 italic">
              All training is conducted using Claude and Anthropic tools, ensuring hands-on experience with real AI systems.
            </p>
            <button
              onClick={onBookingClick}
              className="bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white px-10 py-4 rounded-xl font-bold transition-all flex items-center gap-2 mx-auto shadow-lg shadow-violet-900/50 hover:scale-105 active:scale-95"
            >
              Reserve Your Spot <ArrowRight className="w-4 h-4" />
            </button>
            <p className="text-gray-600 text-xs mt-4">Limited cohort size. Applications reviewed within 24 hours.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 px-4 sm:px-6 lg:px-8 mt-4 relative z-30">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">N</span>
                </div>
                <span className="text-white font-semibold">NeuraFlow Academy</span>
              </div>
              <p className="text-gray-600 text-xs leading-relaxed">
                Built using Anthropic AI Tools (Claude)
              </p>
            </div>

            <div className="text-center">
              <h4 className="text-white font-semibold mb-3 flex items-center justify-center gap-2">
                <Sparkles className="w-4 h-4 text-violet-400" />
                Layers
              </h4>
              <div className="flex flex-wrap justify-center gap-3 text-xs text-gray-400">
                <a href="#foundations" className="hover:text-white transition-colors">Layer 1: Foundations</a>
                <a href="#intelligence" className="hover:text-white transition-colors">Layer 2: Intelligence</a>
                <a href="#application" className="hover:text-white transition-colors">Layer 3: Application</a>
                <a href="#capstone" className="hover:text-white transition-colors">Final Layer: Capstone</a>
              </div>
            </div>

            <div className="text-center md:text-right">
              <h4 className="text-white font-semibold mb-3 flex items-center justify-center md:justify-end gap-2">
                <Sparkles className="w-4 h-4 text-violet-400" />
                Back to Growth Systems
              </h4>
              <div className="space-y-1 text-xs text-gray-400">
                <a href="/" className="block hover:text-white transition-colors">Home</a>
                <a href="/#two-engines" className="block hover:text-white transition-colors">Services: The Two Growth Engines</a>
                <a href="/#system-architecture" className="block hover:text-white transition-colors">System Architecture</a>
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
