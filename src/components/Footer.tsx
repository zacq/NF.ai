const footerLinks = {
  Product: ["Features", "Integrations", "Pricing", "Changelog", "Roadmap", "Status"],
  Solutions: ["For Startups", "For Enterprise", "For Agencies", "Use Cases", "Templates", "Customers"],
  Resources: ["Documentation", "API Reference", "Blog", "Community", "Tutorials", "Webinars"],
  Company: ["About", "Careers", "Press", "Partners", "Contact", "Legal"],
};

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 pt-12 pb-8">
      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-10">
        <div className="relative overflow-hidden rounded-3xl border border-violet-500/20 bg-gradient-to-br from-violet-900/40 via-[#0d0d2e] to-cyan-900/20 p-12 text-center">
          {/* Top line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
          {/* Glow orbs */}
          <div className="absolute -top-20 left-1/4 w-60 h-60 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 right-1/4 w-60 h-60 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Start automating today.
              <br />
              <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">Free forever.</span>
            </h2>
            <p className="text-white/50 text-lg mb-8 max-w-xl mx-auto">
              Join 12,000+ teams who've automated millions of tasks with NeuraFlow. No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-semibold hover:opacity-90 transition-opacity shadow-xl shadow-violet-500/30 hover:-translate-y-0.5 transition-transform"
              >
                Get Started Free →
              </a>
              <a
                href="#"
                className="w-full sm:w-auto px-8 py-4 rounded-xl border border-white/10 bg-white/5 text-white font-semibold hover:bg-white/10 transition-all hover:-translate-y-0.5"
              >
                Book a Demo
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          {/* Brand column */}
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.png" alt="NeuraFlow Logo" className="h-10 w-auto object-contain" />
              <span className="text-xl font-bold text-white">NeuraFlow</span>
            </div>
            <p className="text-white/35 text-sm leading-relaxed mb-4">
              The intelligent AI workflow platform that connects your tools, automates your processes, and scales with your business.
            </p>
            {/* Social links */}
            <div className="flex gap-3">
              {[
                {
                  name: "GitHub",
                  href: "https://github.com/zacq/",
                  icon: (
                    <svg viewBox="0 0 98 96" className="w-4 h-4" aria-hidden="true">
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0Z"
                      />
                    </svg>
                  ),
                },
                {
                  name: "LinkedIn",
                  href: "https://www.linkedin.com/in/zachary-munene-40598685",
                  icon: (
                    <svg viewBox="0 0 24 24" className="w-4 h-4" aria-hidden="true">
                      <path
                        fill="currentColor"
                        d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.25 8.25h4.5v15.5h-4.5V8.25zM8.5 8.25h4.31v2.12h.06c.6-1.14 2.06-2.34 4.24-2.34 4.54 0 5.38 2.99 5.38 6.88v7.84h-4.5v-6.96c0-1.66-.03-3.79-2.31-3.79-2.31 0-2.67 1.8-2.67 3.66v7.09H8.5V8.25z"
                      />
                    </svg>
                  ),
                },
                {
                  name: "Upwork",
                  href: "https://www.upwork.com",
                  icon: (
                    <span className="text-[10px] font-semibold tracking-tight">Up</span>
                  ),
                },
                {
                  name: "Email",
                  href: "mailto:hello@neuraflow.cloud",
                  icon: (
                    <svg viewBox="0 0 24 24" className="w-4 h-4" aria-hidden="true">
                      <path
                        fill="currentColor"
                        d="M3 4h18a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm0 2v.01L12 13 21 6.01V6H3Zm18 2.67-9 6.76-9-6.76V18h18V8.67Z"
                      />
                    </svg>
                  ),
                },
                {
                  name: "YouTube",
                  href: "https://www.youtube.com/@Neuralab-v6b",
                  icon: (
                    <svg viewBox="0 0 24 24" className="w-4 h-4" aria-hidden="true">
                      <path
                        fill="currentColor"
                        d="M23.5 6.18s-.23-1.64-.95-2.36c-.9-.95-1.9-.96-2.37-1.02C16.98 2.5 12 2.5 12 2.5h-.01s-4.98 0-8.18.3c-.47.06-1.47.07-2.37 1.02C.73 4.54.5 6.18.5 6.18S.27 8.1.27 10.01v1.96C.27 13.9.5 15.82.5 15.82s.23 1.64.95 2.36c.9.95 2.08.92 2.61 1.02 1.9.2 7.94.29 7.94.29s4.98-.01 8.18-.31c.47-.06 1.47-.07 2.37-1.02.72-.72.95-2.36.95-2.36s.23-1.92.23-3.85v-1.96c0-1.91-.23-3.83-.23-3.83ZM9.75 14.85V7.15l6.23 3.85-6.23 3.85Z"
                      />
                    </svg>
                  ),
                },
                {
                  name: "WhatsApp",
                  href: "https://api.whatsapp.com/send/?phone=254757485677&text=Hello+NeuraFlow%0D%0AI+would+like+to+learn+more+about+your+AI+growth+systems.&type=phone_number&app_absent=0",
                  icon: (
                    <svg viewBox="0 0 24 24" className="w-4 h-4" aria-hidden="true">
                      <path
                        fill="currentColor"
                        d="M12.04 2.5h-.01A9.48 9.48 0 0 0 2.5 11.98c0 1.67.44 3.29 1.29 4.72L2.5 21.5l4.92-1.27a9.53 9.53 0 0 0 4.62 1.2h.01c5.24 0 9.5-4.26 9.5-9.5S17.28 2.5 12.04 2.5Zm5.55 13.6c-.23.65-1.12 1.19-1.83 1.35-.49.1-1.13.18-3.28-.7-2.76-1.14-4.54-3.95-4.68-4.13-.14-.19-1.12-1.49-1.12-2.84 0-1.35.71-2.01.97-2.28.26-.27.57-.34.76-.34h.55c.18 0 .41-.07.64.49.23.56.78 1.93.85 2.07.07.14.12.3.02.49-.09.19-.14.3-.28.46-.14.16-.29.36-.41.48-.14.14-.29.29-.13.57.16.27.72 1.19 1.54 1.93 1.06.95 1.95 1.25 2.25 1.39.29.14.45.12.62-.07.17-.19.72-.84.92-1.13.19-.29.39-.24.66-.14.27.09 1.73.82 2.03.97.3.14.5.22.57.35.07.13.07.75-.16 1.4Z"
                      />
                    </svg>
                  ),
                },
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  aria-label={item.name}
                  className="w-10 h-10 rounded-full border border-white/15 bg-black/40 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-colors"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold text-sm mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-white/40 hover:text-white/70 text-sm transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs">
            © {new Date().getFullYear()} NeuraFlow, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((link) => (
              <a key={link} href="#" className="text-white/25 hover:text-white/50 text-xs transition-colors">
                {link}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
            <span className="text-white/25 text-xs">All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
