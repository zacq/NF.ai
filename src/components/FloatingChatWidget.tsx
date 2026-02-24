import { useState } from "react";

export default function FloatingChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-40">
      {/* Chat panel */}
      {open && (
        <div className="mb-3 w-80 max-w-[90vw] rounded-2xl border border-white/10 bg-black/90 backdrop-blur-md shadow-2xl shadow-black/40 overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-gradient-to-r from-violet-600/80 to-cyan-500/80">
            <div>
              <p className="text-xs text-white/70 uppercase tracking-widest font-semibold">
                NeuraFlow Webchat
              </p>
              <p className="text-xs text-white/80">Growth infrastructure assistant</p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="w-6 h-6 rounded-full bg-black/20 flex items-center justify-center text-white/80 hover:bg-black/40 text-xs"
            >
              ×
            </button>
          </div>
          <div className="px-4 py-3 text-left text-xs text-white/70 space-y-2 max-h-64 overflow-y-auto">
            <p>
              This chat widget will be connected to your automation webhook.
              For now, you can outline how leads should be routed through Attention
              Infrastructure and the 5-Stage AI Sales System.
            </p>
            <ul className="list-disc list-inside space-y-1 text-white/60">
              <li>Capture visitor intent in plain language</li>
              <li>Qualify leads based on offer fit and urgency</li>
              <li>Push conversations into your unified inbox / CRM</li>
              <li>Trigger follow-up sequences on WhatsApp and email</li>
            </ul>
            <p className="text-[11px] text-white/40">
              Webhook endpoint and AI routing logic will be configured in the next
              implementation phase.
            </p>
          </div>
        </div>
      )}

      {/* Launcher button */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Hide chat" : "Open chat"}
        className="w-14 h-14 rounded-full bg-gradient-to-br from-violet-600 to-cyan-500 shadow-xl shadow-violet-500/40 flex items-center justify-center text-white hover:scale-105 active:scale-95 transition-transform"
      >
        <svg
          viewBox="0 0 24 24"
          className="w-6 h-6"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.8}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7 8h10M7 12h6m-9 7 2.5-2.5H18a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3"
          />
        </svg>
      </button>
    </div>
  );
}
