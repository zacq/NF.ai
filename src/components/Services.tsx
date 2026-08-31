import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatingChatWidget from "./FloatingChatWidget";

const tiles = [
  {
    icon: "⭐",
    title: "Reputation Management Workflows",
    description:
      "Automated systems that monitor, respond to, and amplify your brand's online presence across platforms. AI-driven review responses, sentiment tracking, and proactive reputation signals — operating 24/7 without human oversight.",
    color: "from-violet-500/20 to-purple-500/10 border-violet-500/20",
  },
  {
    icon: "🔄",
    title: "Database Reactivation Workflows",
    description:
      "Re-engage dormant leads and past customers through precision-timed, AI-personalized outreach sequences. Turn cold contacts into warm opportunities using behavioural triggers and multi-channel nudges.",
    color: "from-cyan-500/20 to-blue-500/10 border-cyan-500/20",
  },
  {
    icon: "💬",
    title: "WhatsApp & Web Agents Setup",
    description:
      "Deploy conversational AI agents across WhatsApp and your website that qualify, capture, and route leads instantly. No missed messages, no delayed responses — intelligent agents that sell while you sleep.",
    color: "from-emerald-500/20 to-teal-500/10 border-emerald-500/20",
  },
  {
    icon: "🎙️",
    title: "A.I Voice Agents",
    description:
      "Human-sounding AI voice agents that handle inbound inquiries, outbound follow-ups, and appointment setting over the phone. Consistent, scalable, and always on-brand.",
    color: "from-orange-500/20 to-amber-500/10 border-orange-500/20",
  },
  {
    icon: "🖥️",
    title: "Local A.I Agent Installation",
    description:
      "Agentic workflow systems that run locally within your business ecosystem without being exposed to the online environment. Full AI capability, complete data sovereignty, zero cloud dependency.",
    color: "from-rose-500/20 to-pink-500/10 border-rose-500/20",
  },
  {
    icon: "🎓",
    title: "Self-Paced Learning Platforms",
    description:
      "Agentic learning systems that help founders deliver industry knowledge through self-guided programs. Scale your expertise, grow your brand, and educate audiences without the traditional bottlenecks of knowledge distribution.",
    color: "from-indigo-500/20 to-blue-500/10 border-indigo-500/20",
  },
  {
    icon: "🌐",
    title: "Modern Website Installation",
    description:
      "A modern, conversion-ready website built as part of your infrastructure stack — not a bolted-on agency project. Launch fast, own the code, and give every other system a home that matches your brand.",
    color: "from-sky-500/20 to-blue-500/10 border-sky-500/20",
  },
];

const pipeline = [
  { label: "Attention", detail: "Reputation Management, Modern Website Installation" },
  { label: "Capture", detail: "WhatsApp & Web Agents, A.I Voice Agents" },
  { label: "Nurture", detail: "Database Reactivation, Local A.I Agent Installation" },
  { label: "Convert", detail: "Self-Paced Learning Platforms" },
];

export default function Services() {
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState<boolean>(() => {
    const saved = localStorage.getItem("nf-theme");
    const dark = saved !== "light";
    if (!dark) document.documentElement.classList.add("light");
    return dark;
  });

  const toggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle("light", !next);
      localStorage.setItem("nf-theme", next ? "dark" : "light");
      return next;
    });
  };

  const openBooking = () => window.dispatchEvent(new CustomEvent("open-booking-modal"));

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-brand-navy text-white overflow-x-hidden">
      <Navbar scrolled={scrolled} onBookingClick={openBooking} isDark={isDark} onToggleTheme={toggleTheme} />

      {/* Hero band */}
      <section className="relative pt-32 pb-14 px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-brand-blue/30 rounded-full blur-[160px]" />
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-accent/20 bg-brand-accent/10 text-brand-accent text-[10px] font-black uppercase tracking-[0.3em] mb-5">
            The Full Infrastructure
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-white mb-5 tracking-tight">
            What You{" "}
            <span className="bg-gradient-to-r from-brand-blue via-brand-gold to-brand-accent bg-clip-text text-transparent">
              Really Get.
            </span>
          </h1>
          <p className="text-white/50 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Every system NeuraFlow installs to help soloprenuers and brand owners buy back their time — one page, everything included.
          </p>
        </div>
      </section>

      {/* Tiles */}
      <section className="px-4 sm:px-6 pb-14">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
            {tiles.map((tile, i) => (
              <div
                key={i}
                className={`relative p-6 rounded-2xl border bg-gradient-to-b ${tile.color} hover:brightness-110 transition-all duration-300`}
              >
                <div className="text-2xl mb-3">{tile.icon}</div>
                <h4 className="text-white font-bold text-base mb-2">{tile.title}</h4>
                <p className="text-white/50 text-sm leading-relaxed">{tile.description}</p>
              </div>
            ))}
          </div>

          {/* How it fits together */}
          <div className="mb-14">
            <div className="text-center mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">How it fits together</h3>
              <p className="text-white/40 text-sm max-w-xl mx-auto">
                Every tile above plugs into one of the four layers of the Algorithm.
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
              {pipeline.map((item, i) => (
                <div key={i} className="p-4 rounded-xl border border-white/10 bg-white/[0.02]">
                  <p className="text-brand-accent text-xs font-black uppercase tracking-widest mb-1.5">{item.label}</p>
                  <p className="text-white/40 text-xs leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Closing CTA */}
          <div className="relative rounded-3xl overflow-hidden border border-brand-blue/20 text-center px-6 sm:px-8 py-10 sm:py-14">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/10 via-transparent to-brand-accent/10" />
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-white mb-4 tracking-tight">
                Ready to install{" "}
                <span className="bg-gradient-to-r from-brand-blue via-brand-gold to-brand-accent bg-clip-text text-transparent">
                  the full system?
                </span>
              </h3>
              <p className="text-white/50 text-base mb-8 max-w-xl mx-auto leading-relaxed">
                Stop trading time for revenue. Install the machine that runs without you.
              </p>
              <a
                href="#book-call"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-2xl bg-gradient-to-r from-brand-blue to-brand-accent text-white font-black text-sm uppercase tracking-widest transition-all duration-300 hover:scale-105 active:scale-95"
              >
                Book a Strategy Call
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingChatWidget />
    </div>
  );
}
