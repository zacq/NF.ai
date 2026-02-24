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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-24">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-60" />

      <div
        className="absolute inset-0 bg-gradient-radial from-violet-900/20 via-transparent to-transparent"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(109,40,217,0.15) 0%, transparent 70%)",
        }}
      />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#050510] to-transparent" />

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
        <h1 className="sr-only">
          AI Marketing Agency for Automated Growth Infrastructure
        </h1>

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 backdrop-blur-sm mb-8">
          <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
          <span className="text-sm text-violet-300 font-medium">
            AI Marketing Agency for Automated Growth Infrastructure
          </span>
        </div>

        <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight mb-6">
          <span className="text-white">Engineer Attention. Automate Sales.</span>
          <br />
          <span className="bg-gradient-to-r from-violet-400 via-fuchsia-300 to-cyan-400 bg-clip-text text-transparent">
            Scale Without Manual Marketing.
          </span>
        </h2>

        <p className="text-lg sm:text-xl text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed">
          NeuraFlow builds AI-powered attention infrastructure and automated 5-stage sales systems that capture, nurture, and convert customers 24/7.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <a
            href="#book-call"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-semibold text-base hover:opacity-90 transition-all duration-200 shadow-2xl shadow-violet-500/30 hover:shadow-violet-500/50 hover:-translate-y-0.5"
          >
            Book a Strategy Call →
          </a>
          <a
            href="#system-architecture"
            className="w-full sm:w-auto px-8 py-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm text-white font-semibold text-base hover:bg-white/10 transition-all duration-200 hover:-translate-y-0.5"
          >
            Explore the System
          </a>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-white/40">
          <div className="flex -space-x-2">
            {["bg-violet-500", "bg-cyan-500", "bg-fuchsia-500", "bg-indigo-500", "bg-pink-500"].map(
              (c, i) => (
                <div
                  key={i}
                  className={`w-8 h-8 rounded-full ${c} border-2 border-[#050510] flex items-center justify-center text-xs font-bold text-white`}
                >
                  {String.fromCharCode(65 + i)}
                </div>
              ),
            )}
          </div>
          <span>
            Trusted by <strong className="text-white/70">12,000+</strong> teams worldwide
          </span>
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((s) => (
              <svg
                key={s}
                className="w-4 h-4 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.05 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z" />
              </svg>
            ))}
            <span className="ml-1">4.9/5</span>
          </div>
        </div>
      </div>
    </section>
  );
}
