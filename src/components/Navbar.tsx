import { useState } from "react";

interface NavbarProps {
  scrolled: boolean;
}

const socialLinks = [
  {
    name: "YouTube",
    href: "https://www.youtube.com/@Neuralab-v6b",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden="true">
        <path d="M23.5 6.18s-.23-1.64-.95-2.36c-.9-.95-1.9-.96-2.37-1.02C16.98 2.5 12 2.5 12 2.5h-.01s-4.98 0-8.18.3c-.47.06-1.47.07-2.37 1.02C.73 4.54.5 6.18.5 6.18S.27 8.1.27 10.01v1.96C.27 13.9.5 15.82.5 15.82s.23 1.64.95 2.36c.9.95 2.08.92 2.61 1.02 1.9.2 7.94.29 7.94.29s4.98-.01 8.18-.31c.47-.06 1.47-.07 2.37-1.02.72-.72.95-2.36.95-2.36s.23-1.92.23-3.85v-1.96c0-1.91-.23-3.83-.23-3.83ZM9.75 14.85V7.15l6.23 3.85-6.23 3.85Z" />
      </svg>
    ),
  },
  {
    name: "WhatsApp",
    href: "https://api.whatsapp.com/send/?phone=254757485677&text=Hello+NeuraFlow%0D%0AI+would+like+to+learn+more+about+your+AI+growth+systems.&type=phone_number&app_absent=0",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden="true">
        <path d="M12.04 2.5h-.01A9.48 9.48 0 0 0 2.5 11.98c0 1.67.44 3.29 1.29 4.72L2.5 21.5l4.92-1.27a9.53 9.53 0 0 0 4.62 1.2h.01c5.24 0 9.5-4.26 9.5-9.5S17.28 2.5 12.04 2.5Zm5.55 13.6c-.23.65-1.12 1.19-1.83 1.35-.49.1-1.13.18-3.28-.7-2.76-1.14-4.54-3.95-4.68-4.13-.14-.19-1.12-1.49-1.12-2.84 0-1.35.71-2.01.97-2.28.26-.27.57-.34.76-.34h.55c.18 0 .41-.07.64.49.23.56.78 1.93.85 2.07.07.14.12.3.02.49-.09.19-.14.3-.28.46-.14.16-.29.36-.41.48-.14.14-.29.29-.13.57.16.27.72 1.19 1.54 1.93 1.06.95 1.95 1.25 2.25 1.39.29.14.45.12.62-.07.17-.19.72-.84.92-1.13.19-.29.39-.24.66-.14.27.09 1.73.82 2.03.97.3.14.5.22.57.35.07.13.07.75-.16 1.4Z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/zachary-munene-40598685",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden="true">
        <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.25 8.25h4.5v15.5h-4.5V8.25zM8.5 8.25h4.31v2.12h.06c.6-1.14 2.06-2.34 4.24-2.34 4.54 0 5.38 2.99 5.38 6.88v7.84h-4.5v-6.96c0-1.66-.03-3.79-2.31-3.79-2.31 0-2.67 1.8-2.67 3.66v7.09H8.5V8.25z" />
      </svg>
    ),
  },
];

export default function Navbar({ scrolled }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "#" },
    { name: "Services", href: "#two-engines" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Academy", href: "/#/academy", external: true },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050510]/90 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <img src="/logo.png" alt="NeuraFlow Logo" className="h-12 w-auto object-contain" />
            <div className="flex flex-col justify-center border-l border-white/10 pl-4 h-10">
              <span className="text-xl font-bold leading-tight bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                NeuraFlow
              </span>
              <p className="text-[10px] text-white/40 uppercase tracking-[0.1em] font-medium leading-none mt-0.5">
                Automated Growth Infrastructure
              </p>
            </div>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="text-sm text-white/60 hover:text-white transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* CTA Button + Social Icons */}
          <div className="hidden md:flex items-center gap-3">
            {socialLinks.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                className="w-8 h-8 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 transition-colors"
              >
                {s.icon}
              </a>
            ))}
            <a
              href="#book-call"
              className="text-sm font-semibold px-4 py-2 rounded-lg bg-gradient-to-r from-violet-600 to-cyan-500 text-white hover:opacity-90 transition-opacity shadow-lg shadow-violet-500/20"
            >
              Book a Call
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-white/60 hover:text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden bg-[#0a0a1f]/95 backdrop-blur-md border border-white/10 rounded-2xl mb-4 p-4 space-y-2">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="block text-sm text-white/60 hover:text-white transition-colors py-2 px-3 rounded-lg hover:bg-white/5"
              >
                {item.name}
              </a>
            ))}
            <div className="border-t border-white/10 pt-3 mt-3">
              <a href="#book-call" className="block text-sm font-semibold px-4 py-2 rounded-lg bg-gradient-to-r from-violet-600 to-cyan-500 text-white text-center">
                Book a Call
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}