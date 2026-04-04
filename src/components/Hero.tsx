import { useEffect, useRef } from "react";

const partners = [
  { name: "Anthropic", icon: "◈" },
  { name: "Wavespeed", icon: "⚡" },
  { name: "Eleven Labs", icon: "♪" },
  { name: "OpenAI", icon: "◉" },
  { name: "Make.com", icon: "⟳" },
  { name: "n8n", icon: "⬡" },
  { name: "Airtable", icon: "⊞" },
  { name: "WhatsApp Business", icon: "◎" },
  { name: "Meta", icon: "∞" },
];

// Duplicate for seamless loop
const partnerItems = [...partners, ...partners];

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const nodes: { x: number; y: number; vx: number; vy: number; r: number }[] = [];
    const count = 60;

    for (let i = 0; i < count; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 2 + 1,
      });
    }

    let animId: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(27,110,194,${0.15 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }
      nodes.forEach((n) => {
        ctx.beginPath();
        const gradient = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r * 2);
        gradient.addColorStop(0, "rgba(27,110,194,0.8)");
        gradient.addColorStop(1, "rgba(14,165,214,0)");
        ctx.fillStyle = gradient;
        ctx.arc(n.x, n.y, n.r * 2, 0, Math.PI * 2);
        ctx.fill();

        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1;
      });

      animId = requestAnimationFrame(draw);
    };
    draw();

    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-24 pb-10 bg-brand-navy">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-40 mix-blend-screen" />

      {/* Atmospheric Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-blue/20 rounded-full blur-[120px] animate-pulse-soft" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-accent/15 rounded-full blur-[120px] animate-pulse-soft" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(27,110,194,0.08)_0%,transparent_70%)]" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-navy to-transparent z-10" />

      {/* Main content */}
      <div className="relative z-20 px-6 max-w-7xl mx-auto w-full">

        {/* Two-column: Title LHS | Description RHS */}
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center mb-10">

          {/* LEFT — Badge + Headline */}
          <div>
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 animate-float">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent"></span>
              </span>
              <span className="text-xs tracking-[0.2em] text-white/70 font-semibold uppercase">
                Architecting Infinite Scale
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-extrabold leading-[1.08] text-white tracking-tight">
              The Sovereign <br />
              <span className="bg-gradient-to-r from-brand-blue via-brand-gold to-brand-accent bg-clip-text text-transparent">
                Growth Infrastructure.
              </span>
            </h1>
          </div>

          {/* RIGHT — Description */}
          <div className="flex items-center">
            <p className="text-xl sm:text-2xl text-white/60 leading-relaxed font-light">
              NeuraFlow installs elite-tier AI attention engines and automated sales systems.{" "}
              <span className="text-white/80 font-medium">
                We don't just market — we build the machine that generates your future.
              </span>
            </p>
          </div>
        </div>

        {/* CTAs — full width row below the grid */}
        <div className="flex flex-col sm:flex-row items-start gap-4 mb-12">
          <a
            href="#book-call"
            className="group relative w-full sm:w-auto px-10 py-5 rounded-2xl bg-white text-brand-navy font-bold text-base overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.2)] text-center"
          >
            <span className="relative z-10">Initiate Strategy Call</span>
            <div className="absolute inset-0 bg-gradient-to-r from-brand-blue to-brand-accent opacity-0 group-hover:opacity-10 transition-opacity" />
          </a>
          <a
            href="#system-architecture"
            className="w-full sm:w-auto px-10 py-5 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-xl text-white font-bold text-base hover:bg-white/10 transition-all duration-300 hover:border-white/40 text-center"
          >
            Explore the Architecture
          </a>
        </div>

        {/* Partners Carousel — streams left to right */}
        <div className="border-t border-white/5 pt-8">
          <p className="text-[10px] uppercase tracking-[0.25em] text-white/30 font-bold mb-5">
            Integrated with Global Markets
          </p>
          <div className="relative overflow-hidden">
            {/* Left fade */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-brand-navy to-transparent z-10 pointer-events-none" />
            {/* Right fade */}
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-brand-navy to-transparent z-10 pointer-events-none" />

            <div className="animate-marquee-ltr flex gap-10 items-center" style={{ width: "max-content" }}>
              {partnerItems.map((p, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 text-white/30 hover:text-white/60 transition-colors duration-300 select-none whitespace-nowrap"
                >
                  <span className="text-brand-blue/60 text-sm font-bold">{p.icon}</span>
                  <span className="text-sm font-semibold tracking-wide">{p.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
