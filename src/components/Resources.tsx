import { Download, FileText, ArrowLeft } from 'lucide-react';
import { RESOURCES } from '../constants/resources';

export default function Resources() {
  return (
    <div className="min-h-screen bg-brand-navy text-white">
      <header className="border-b border-white/5 bg-brand-navy/80 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            <a href="/" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center text-white font-bold text-sm">
                N
              </div>
              <span className="text-white font-bold text-lg tracking-tight">NeuraFlow</span>
            </a>
            <a href="/" className="text-white/50 hover:text-white transition-colors text-sm flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </a>
          </div>
        </div>
      </header>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 pt-16 pb-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-500/20 bg-violet-500/10 text-violet-300 text-xs font-medium uppercase tracking-widest mb-5">
          Free Resources
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
          Actionable guides, not just{' '}
          <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">theory</span>
        </h1>
        <p className="text-white/50 text-base sm:text-lg max-w-2xl mx-auto">
          Practical playbooks and Claude skill packs we use ourselves — built to help you run AI-powered marketing and operations without hiring an agency for every task.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {RESOURCES.map((r) => (
            <div
              key={r.slug}
              className="relative flex flex-col p-6 rounded-2xl border border-white/10 bg-white/[0.03] hover:border-violet-500/30 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-bold uppercase tracking-widest text-violet-300 bg-violet-500/10 border border-violet-500/20 rounded-full px-3 py-1">
                  {r.category}
                </span>
                <span className="flex items-center gap-1.5 text-white/30 text-xs">
                  <FileText className="w-3.5 h-3.5" /> {r.fileType}
                </span>
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{r.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed mb-6 flex-1">{r.description}</p>
              {r.comingSoon ? (
                <button
                  disabled
                  className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-white/30 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 cursor-not-allowed"
                >
                  Coming Soon
                </button>
              ) : (
                <div className="flex flex-col gap-2">
                  {r.files.map((f) => (
                    <a
                      key={f.href}
                      href={f.href}
                      download
                      className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-white bg-gradient-to-r from-violet-600 to-cyan-500 rounded-xl px-4 py-2.5 hover:opacity-90 transition-opacity"
                    >
                      <Download className="w-4 h-4" /> {f.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-white/5 py-10 px-4 sm:px-6 text-center text-white/30 text-xs">
        © {new Date().getFullYear()} NeuraFlow.ai — All rights reserved.
      </footer>
    </div>
  );
}
