import { useState } from "react";

interface NavbarProps {
  scrolled: boolean;
}

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

          {/* CTA Button - Book a Call */}
          <div className="hidden md:flex items-center gap-3">
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