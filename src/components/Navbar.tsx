import { useState } from "react";
import { Sun, Moon } from "lucide-react";

interface NavbarProps {
  scrolled: boolean;
  onBookingClick: () => void;
  isDark: boolean;
  onToggleTheme: () => void;
}

export default function Navbar({ scrolled, onBookingClick, isDark, onToggleTheme }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "#" },
    { name: "Services", href: "#two-engines" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Academy", href: "/#/academy", external: true },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
        ? "bg-brand-navy/80 backdrop-blur-2xl border-b border-white/5 shadow-2xl shadow-black/50 py-2"
        : "bg-transparent py-4"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center transition-transform hover:scale-[1.02]">
            <img src="/logo.png" alt="NeuraFlow Logo" className="h-10 w-auto object-contain filter brightness-110" />
            <div className="flex flex-col justify-center border-l border-white/10 ml-4 pl-4">
              <span className="text-xl md:text-2xl font-display font-bold tracking-tight text-white leading-tight">
                NeuraFlow
              </span>
              <p className="text-[9px] text-brand-accent uppercase tracking-[0.2em] font-black leading-none mt-1">
                Growth Infrastructure
              </p>
            </div>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="text-xs uppercase tracking-[0.15em] font-bold text-white/50 hover:text-white transition-all duration-300 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-brand-blue transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <button
              onClick={onBookingClick}
              className="text-xs uppercase tracking-[0.15em] font-bold text-white/50 hover:text-white transition-all duration-300 relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-brand-blue transition-all duration-300 group-hover:w-full"></span>
            </button>
          </div>

          {/* CTA Button + Theme Toggle */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onBookingClick}
              className="relative px-6 py-2.5 rounded-xl font-bold text-xs uppercase tracking-widest text-white border border-brand-blue/30 bg-brand-blue/10 backdrop-blur-md overflow-hidden transition-all duration-300 hover:bg-brand-blue hover:text-white hover:shadow-[0_0_30px_rgba(27,110,194,0.3)] active:scale-95"
            >
              Consult
            </button>
            <button
              onClick={onToggleTheme}
              aria-label="Toggle light/dark mode"
              className="p-2 rounded-lg border border-white/10 bg-white/5 text-white/60 hover:text-white hover:border-white/20 hover:bg-white/10 transition-all duration-300"
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
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
            <button
              onClick={() => { onBookingClick(); setMobileOpen(false); }}
              className="block w-full text-left text-sm text-white/60 hover:text-white transition-colors py-2 px-3 rounded-lg hover:bg-white/5"
            >
              Contact
            </button>
            <div className="border-t border-white/10 pt-3 mt-3">
              <button
                onClick={() => { onBookingClick(); setMobileOpen(false); }}
                className="block w-full text-sm font-semibold px-4 py-2 rounded-lg bg-gradient-to-r from-violet-600 to-cyan-500 text-white text-center"
              >
                Consult
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}