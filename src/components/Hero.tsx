import { useEffect, useRef } from "react";

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
            ctx.strokeStyle = `rgba(139,92,246,${0.15 * (1 - dist / 120)})`;
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
        gradient.addColorStop(0, "rgba(139,92,246,0.8)");
        gradient.addColorStop(1, "rgba(6,182,212,0)");
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-20 bg-brand-bg">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-40 mix-blend-screen" />

      {/* Primary Atmospheric Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-primary/20 rounded-full blur-[120px] animate-pulse-soft" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-secondary/15 rounded-full blur-[120px] animate-pulse-soft" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.08)_0%,transparent_70%)]" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-brand-bg to-transparent z-10" />

      <div className="relative z-20 text-center px-6 max-w-6xl mx-auto">
        <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-10 animate-float">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent"></span>
          </span>
          <span className="text-xs tracking-[0.2em] text-white/70 font-semibold uppercase">
            Architecting Infinite Scale
          </span>
        </div>

        <h1 className="text-6xl sm:text-7xl md:text-8xl font-display font-extrabold leading-[1.1] mb-8 lg:mb-10 text-white tracking-tight">
          The Sovereign <br className="hidden md:block" />
          <span className="bg-gradient-to-r from-brand-primary via-brand-accent to-brand-secondary bg-clip-text text-transparent">
            Growth Infrastructure.
          </span>
        </h1>

        <p className="text-xl sm:text-2xl text-white/60 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
          NeuraFlow installs elite-tier AI attention engines and automated sales systems. <br className="hidden md:block" />
          We don't just market; we build the machine that generates your future.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">
          <a
            href="#book-call"
            className="group relative w-full sm:w-auto px-10 py-5 rounded-2xl bg-white text-brand-bg font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.2)]"
          >
            <span className="relative z-10">Initiate Strategy Call</span>
            <div className="absolute inset-0 bg-gradient-to-r from-brand-primary to-brand-secondary opacity-0 group-hover:opacity-10 transition-opacity" />
          </a>
          <a
            href="#system-architecture"
            className="w-full sm:w-auto px-10 py-5 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-xl text-white font-bold text-lg hover:bg-white/10 transition-all duration-300 hover:border-white/40"
          >
            Explore the Architecture
          </a>
        </div>

        {/* Scalability Proof */}
        <div className="pt-10 border-t border-white/5 flex flex-col items-center gap-6">
          <p className="text-xs uppercase tracking-[3px] text-white/30 font-bold">Integrated with Global Markets</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-40 grayscale contrast-125">
             {/* Logo placeholders or small icons representing scale */}
             <div className="h-6 w-24 bg-white/20 rounded flex items-center justify-center text-[8px] font-black">FORTUNE 500</div>
             <div className="h-6 w-24 bg-white/20 rounded flex items-center justify-center text-[8px] font-black">ENTERPRISE AI</div>
             <div className="h-6 w-24 bg-white/20 rounded flex items-center justify-center text-[8px] font-black">GLOBAL SAAS</div>
          </div>
        </div>
      </div>
    </section>
  );
}
