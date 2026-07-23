import { useEffect, useRef, useState } from 'react';
import { ACADEMY_SECTION_IDS } from '../constants/academySections';
import { Sparkles, MessageCircle, X, Send } from 'lucide-react';

const PAYHERO_SDK_URL = 'https://applet.payherokenya.com/cdn/button_sdk.js';
const PAYHERO_PAYMENT_URL = import.meta.env.VITE_PAYHERO_PAYMENT_URL as string;
const PAYHERO_CHANNEL_ID = import.meta.env.VITE_PAYHERO_CHANNEL_ID as string;

declare global {
  interface Window {
    PayHero?: {
      init: (config: {
        paymentUrl: string;
        width?: string;
        height?: string;
        containerId: string;
        channelID: string | number;
        amount: number;
        phone: string;
        reference: string;
        name?: string;
        buttonName?: string;
        buttonColor?: string;
        successUrl?: string;
        failedUrl?: string;
      }) => void;
    };
  }
}

let payHeroScriptPromise: Promise<void> | null = null;
function loadPayHeroScript(): Promise<void> {
  if (window.PayHero) return Promise.resolve();
  if (payHeroScriptPromise) return payHeroScriptPromise;
  payHeroScriptPromise = new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = PAYHERO_SDK_URL;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Failed to load PayHero SDK'));
    document.head.appendChild(script);
  });
  return payHeroScriptPromise;
}

const ACADEMY_WEBHOOK_URL = "https://primary-production-c0eb.up.railway.app/webhook/neuraflow-chat";

const ACADEMY_QUICK_QUESTIONS = [
  "Where should I start if I'm new to AI systems?",
  'How does the Capstone project work?',
  'Can I apply this to my existing business?',
];

const ACADEMY_BOT_INTRO = "👋 Welcome to NeuraFlow Academy. Ask anything about the curriculum, Claude Code workflows, or how to apply AI systems to your business.";

interface AcademyMessage {
  from: 'bot' | 'user';
  text: string;
}

// Floating Chat Widget Component (for Academy page)
function AcademyChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<AcademyMessage[]>([{ from: 'bot', text: ACADEMY_BOT_INTRO }]);
  const [typing, setTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const sessionId = useRef<string>(`nf-academy-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, typing]);

  const sendMessage = async (text: string) => {
    if (!text.trim()) return;
    setMessages((m) => [...m, { from: 'user', text }]);
    setMessage('');
    setTyping(true);
    try {
      const res = await fetch(ACADEMY_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text, sessionId: sessionId.current }),
      });
      if (!res.ok) throw new Error('Bad response');
      const data = await res.json();
      setTyping(false);
      setMessages((m) => [...m, { from: 'bot', text: data.reply ?? "I didn't catch that — please try again!" }]);
    } catch {
      setTyping(false);
      setMessages((m) => [
        ...m,
        { from: 'bot', text: "I'm having a bit of trouble right now 😅 Reach us on WhatsApp (+254757485677) or hit the Book a Call button — we'll get back to you fast!" },
      ]);
    }
  };

  return (
    <>
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 bg-[#0d0d14]/95 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl z-50 overflow-hidden">
          <div className="bg-gradient-to-r from-violet-600 to-fuchsia-600 p-4 flex items-center justify-between">
            <div>
              <h3 className="font-bold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                NeuraFlow Academy Assistant
              </h3>
              <p className="text-violet-100 text-xs mt-0.5">Online</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-4 h-64 overflow-y-auto bg-[#0a0a10] space-y-3">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] rounded-lg p-3 text-sm ${
                  msg.from === 'user'
                    ? 'bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white'
                    : 'bg-white/5 border border-white/5 text-gray-300'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {typing && (
              <div className="flex justify-start">
                <div className="bg-white/5 border border-white/5 rounded-lg px-4 py-3 flex gap-1 items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/50 animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-white/50 animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-white/50 animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            )}
            {messages.length <= 1 && (
              <div className="bg-white/5 rounded-lg p-3 border border-white/5">
                <p className="text-gray-400 text-xs mb-2">Suggested questions:</p>
                <div className="space-y-1.5">
                  {ACADEMY_QUICK_QUESTIONS.map((q) => (
                    <button
                      key={q}
                      onClick={() => sendMessage(q)}
                      className="block w-full text-left text-violet-400 text-xs hover:text-violet-300 transition-colors py-1"
                    >
                      → {q}
                    </button>
                  ))}
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          <div className="p-3 border-t border-white/10 bg-[#0d0d14]">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Type your question..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && sendMessage(message)}
                className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-violet-500/50"
              />
              <button
                onClick={() => sendMessage(message)}
                className="p-2 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-lg text-white hover:opacity-90 transition-opacity"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen((open) => !open)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-violet-900/50 hover:scale-105 transition-transform z-50 border border-white/20"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    </>
  );
}

const ACADEMY_V2_CSS = `
.academy-v2-page {
  --bg:#050508; --surface:#0d0d14; --surface-2:#11111c;
  --line:rgba(255,255,255,.07); --line-bright:rgba(255,255,255,.14);
  --text:#ecebf4; --muted:#9b9aad; --dim:#6f6e82;
  --violet:#8b5cf6; --fuchsia:#d946ef; --blue:#38bdf8; --orange:#fb923c;
  --cyan:#22d3ee; --green:#34d399; --red:#fb7185;
  --grad:linear-gradient(100deg,var(--violet),var(--fuchsia));
  --display:'Playfair Display',serif; --body:'Inter',system-ui,sans-serif; --data:'Space Grotesk',monospace;
  background:var(--bg); color:var(--text); font-family:var(--body); font-size:16px; line-height:1.6;
  -webkit-font-smoothing:antialiased; overflow-x:hidden; position:relative;
}
.academy-v2-page *{box-sizing:border-box}
.academy-v2-page ::selection{background:rgba(217,70,239,.35)}
.academy-v2-page .blob{position:fixed;border-radius:50%;filter:blur(120px);opacity:.07;pointer-events:none;z-index:0}
.academy-v2-page .blob.b1{width:600px;height:600px;background:var(--violet);top:-200px;left:-150px}
.academy-v2-page .blob.b2{width:500px;height:500px;background:var(--fuchsia);top:40%;right:-180px}
.academy-v2-page .blob.b3{width:520px;height:520px;background:var(--blue);bottom:-200px;left:20%}
.academy-v2-page main,.academy-v2-page header,.academy-v2-page footer{position:relative;z-index:1}
.academy-v2-page .wrap{max-width:1120px;margin:0 auto;padding:0 24px}
.academy-v2-page a{color:inherit;text-decoration:none}
.academy-v2-page img{max-width:100%}

.academy-v2-page .urgency-bar{position:sticky;top:0;z-index:60;background:linear-gradient(90deg,#160b26,#26102f 50%,#160b26);border-bottom:1px solid rgba(217,70,239,.28);padding:9px 16px;display:flex;align-items:center;justify-content:center;gap:14px;flex-wrap:wrap;font-size:.82rem;font-weight:500}
.academy-v2-page .urgency-bar .pulse{width:8px;height:8px;border-radius:50%;background:var(--red);box-shadow:0 0 0 0 rgba(251,113,133,.6);animation:academyV2Pulse 1.6s infinite}
@keyframes academyV2Pulse{0%{box-shadow:0 0 0 0 rgba(251,113,133,.55)}70%{box-shadow:0 0 0 9px rgba(251,113,133,0)}100%{box-shadow:0 0 0 0 rgba(251,113,133,0)}}
.academy-v2-page .urgency-bar b{font-weight:700}
.academy-v2-page .urgency-bar .count{font-family:var(--data);font-weight:700;letter-spacing:.06em;color:#fbcfe8;background:rgba(217,70,239,.12);border:1px solid rgba(217,70,239,.3);padding:2px 10px;border-radius:99px;font-variant-numeric:tabular-nums}
.academy-v2-page .urgency-bar a{color:var(--fuchsia);font-weight:700;white-space:nowrap}
.academy-v2-page .urgency-bar a:hover{text-decoration:underline}

.academy-v2-page nav{border-bottom:1px solid var(--line);backdrop-filter:blur(10px);background:rgba(5,5,8,.7)}
.academy-v2-page .nav-inner{display:flex;align-items:center;justify-content:space-between;height:68px}
.academy-v2-page .brand{display:flex;align-items:center;gap:12px}
.academy-v2-page .brand .mark{width:40px;height:40px;border-radius:12px;background:var(--grad);display:grid;place-items:center;font-weight:800;font-size:1.1rem;color:#fff}
.academy-v2-page .brand .word{line-height:1.15}
.academy-v2-page .brand .word b{font-size:1.05rem;display:block}
.academy-v2-page .brand .word span{font-size:.66rem;letter-spacing:.28em;color:var(--muted);text-transform:uppercase}
.academy-v2-page .nav-links{display:flex;align-items:center;gap:26px;font-size:.88rem;color:var(--muted)}
.academy-v2-page .nav-links a:hover{color:var(--text)}
.academy-v2-page .btn{display:inline-flex;align-items:center;gap:9px;border-radius:12px;font-weight:700;cursor:pointer;border:0;transition:transform .15s ease,box-shadow .2s ease,filter .2s ease;font-family:var(--body)}
.academy-v2-page .btn-primary{background:var(--grad);color:#fff;padding:13px 26px;font-size:.95rem;box-shadow:0 8px 30px -10px rgba(217,70,239,.55)}
.academy-v2-page .btn-primary:hover{transform:translateY(-2px);filter:brightness(1.08)}
.academy-v2-page .btn-sm{padding:9px 18px;font-size:.84rem}
.academy-v2-page .btn-ghost{background:transparent;border:1px solid var(--line-bright);color:var(--text);padding:13px 26px;font-size:.95rem}
.academy-v2-page .btn-ghost:hover{border-color:var(--fuchsia);color:#fff}
.academy-v2-page .arrow{font-family:var(--data)}

.academy-v2-page .hero{padding:84px 0 56px;text-align:center}
.academy-v2-page .eyebrow{display:inline-flex;align-items:center;gap:9px;border:1px solid rgba(139,92,246,.4);background:rgba(139,92,246,.1);color:#d8ccff;border-radius:99px;padding:7px 18px;font-size:.75rem;letter-spacing:.22em;text-transform:uppercase;font-weight:600}
.academy-v2-page .eyebrow .dot{width:7px;height:7px;border-radius:50%;background:var(--green);animation:academyV2Pulse 1.8s infinite}
.academy-v2-page h1{font-family:var(--display);font-weight:800;font-size:clamp(2.6rem,6.4vw,4.6rem);line-height:1.08;margin:30px 0 8px;letter-spacing:-.01em}
.academy-v2-page .h1-static{color:var(--text)}
.academy-v2-page .rotator{display:inline-block;min-width:5.2em;text-align:center;background:var(--grad);-webkit-background-clip:text;background-clip:text;color:transparent;-webkit-text-fill-color:transparent;position:relative}
.academy-v2-page .rotator .word{-webkit-background-clip:text;background-clip:text;background:inherit;color:transparent;-webkit-text-fill-color:transparent}
.academy-v2-page .rotator .word{display:inline-block;animation:academyV2WordIn .5s cubic-bezier(.2,.8,.2,1)}
@keyframes academyV2WordIn{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}
.academy-v2-page .hero-sub{max-width:680px;margin:22px auto 0;color:var(--muted);font-size:1.13rem;line-height:1.7}
.academy-v2-page .hero-sub b{color:var(--text);font-weight:600}
.academy-v2-page .hero-ctas{display:flex;gap:16px;justify-content:center;flex-wrap:wrap;margin-top:38px}
.academy-v2-page .hero-note{margin-top:16px;font-size:.82rem;color:var(--dim)}
.academy-v2-page .hero-note b{color:var(--green);font-weight:600}

.academy-v2-page .seat-meter{max-width:420px;margin:40px auto 0;background:var(--surface);border:1px solid var(--line);border-radius:16px;padding:18px 22px;text-align:left}
.academy-v2-page .seat-meter .row{display:flex;justify-content:space-between;font-size:.8rem;font-weight:600;margin-bottom:9px}
.academy-v2-page .seat-meter .row .left{color:var(--muted);letter-spacing:.14em;text-transform:uppercase;font-size:.7rem}
.academy-v2-page .seat-meter .row .right{font-family:var(--data);color:var(--fuchsia)}
.academy-v2-page .bar{height:8px;border-radius:99px;background:rgba(255,255,255,.06);overflow:hidden}
.academy-v2-page .bar .fill{height:100%;border-radius:99px;background:var(--grad);width:0;transition:width 1.2s cubic-bezier(.2,.8,.2,1)}
.academy-v2-page .seat-meter .foot{margin-top:9px;font-size:.75rem;color:var(--dim)}
.academy-v2-page .seat-meter .foot b{color:var(--red);font-weight:600}

.academy-v2-page .ticker{border-top:1px solid var(--line);border-bottom:1px solid var(--line);padding:14px 0;overflow:hidden;background:rgba(255,255,255,.015)}
.academy-v2-page .ticker-track{display:flex;gap:14px;width:max-content;animation:academyV2Scroll 38s linear infinite}
.academy-v2-page .ticker:hover .ticker-track{animation-play-state:paused}
@keyframes academyV2Scroll{from{transform:translateX(0)}to{transform:translateX(-50%)}}
.academy-v2-page .chip{display:inline-flex;align-items:center;gap:9px;border:1px solid var(--line);background:var(--surface);border-radius:99px;padding:8px 18px;font-size:.8rem;color:var(--muted);white-space:nowrap}
.academy-v2-page .chip .d{width:7px;height:7px;border-radius:50%}
.academy-v2-page .chip b{color:var(--text);font-weight:600}
.academy-v2-page .d-g{background:var(--green)}.academy-v2-page .d-b{background:var(--blue)}.academy-v2-page .d-f{background:var(--fuchsia)}.academy-v2-page .d-o{background:var(--orange)}

.academy-v2-page section{padding:92px 0}
.academy-v2-page .section-head{text-align:center;max-width:720px;margin:0 auto 56px}
.academy-v2-page .kicker{font-size:.72rem;letter-spacing:.26em;text-transform:uppercase;font-weight:700;color:var(--fuchsia)}
.academy-v2-page .kicker.k-blue{color:var(--blue)}.academy-v2-page .kicker.k-orange{color:var(--orange)}.academy-v2-page .kicker.k-cyan{color:var(--cyan)}
.academy-v2-page h2{font-family:var(--display);font-weight:700;font-size:clamp(1.9rem,4vw,2.9rem);line-height:1.15;margin:16px 0 14px}
.academy-v2-page .section-head p{color:var(--muted);font-size:1.05rem}

.academy-v2-page .problem{background:linear-gradient(180deg,transparent,rgba(139,92,246,.04) 40%,transparent)}
.academy-v2-page .math-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
.academy-v2-page .math-card{background:var(--surface);border:1px solid var(--line);border-radius:18px;padding:30px 26px}
.academy-v2-page .math-card .big{font-family:var(--data);font-size:2.2rem;font-weight:700;line-height:1}
.academy-v2-page .math-card .big.red{color:var(--red)}.academy-v2-page .math-card .big.grn{color:var(--green)}.academy-v2-page .math-card .big.fus{color:var(--fuchsia)}
.academy-v2-page .math-card h3{font-size:1rem;font-weight:700;margin:14px 0 8px}
.academy-v2-page .math-card p{font-size:.88rem;color:var(--muted)}
.academy-v2-page .problem-line{text-align:center;margin-top:48px;font-family:var(--display);font-size:clamp(1.2rem,2.6vw,1.7rem);font-style:italic;color:var(--text)}
.academy-v2-page .problem-line em{background:var(--grad);-webkit-background-clip:text;background-clip:text;color:transparent;font-style:italic}

.academy-v2-page .layers-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:18px}
.academy-v2-page .layer-card{background:var(--surface);border:1px solid var(--line);border-radius:20px;padding:32px;position:relative;overflow:hidden;transition:border-color .2s,transform .2s}
.academy-v2-page .layer-card:hover{border-color:var(--line-bright);transform:translateY(-3px)}
.academy-v2-page .layer-card::before{content:"";position:absolute;top:0;left:0;right:0;height:3px}
.academy-v2-page .lc-blue::before{background:var(--blue)}.academy-v2-page .lc-fus::before{background:var(--fuchsia)}.academy-v2-page .lc-org::before{background:var(--orange)}.academy-v2-page .lc-vio::before{background:var(--violet)}
.academy-v2-page .layer-tag{font-family:var(--data);font-size:.72rem;letter-spacing:.2em;text-transform:uppercase;font-weight:700}
.academy-v2-page .lc-blue .layer-tag{color:var(--blue)}.academy-v2-page .lc-fus .layer-tag{color:var(--fuchsia)}.academy-v2-page .lc-org .layer-tag{color:var(--orange)}.academy-v2-page .lc-vio .layer-tag{color:var(--violet)}
.academy-v2-page .layer-card h3{font-family:var(--display);font-size:1.5rem;margin:10px 0 10px}
.academy-v2-page .layer-card p{font-size:.92rem;color:var(--muted)}
.academy-v2-page .layer-card ul{list-style:none;margin-top:18px;display:grid;gap:9px}
.academy-v2-page .layer-card li{font-size:.86rem;color:var(--muted);padding-left:20px;position:relative}
.academy-v2-page .layer-card li::before{content:"→";position:absolute;left:0;font-family:var(--data)}
.academy-v2-page .lc-blue li::before{color:var(--blue)}.academy-v2-page .lc-fus li::before{color:var(--fuchsia)}.academy-v2-page .lc-org li::before{color:var(--orange)}.academy-v2-page .lc-vio li::before{color:var(--violet)}
.academy-v2-page .anthropic-strip{margin-top:26px;border:1px solid rgba(56,189,248,.25);background:rgba(56,189,248,.05);border-radius:16px;padding:20px 26px;display:flex;align-items:center;justify-content:space-between;gap:18px;flex-wrap:wrap}
.academy-v2-page .anthropic-strip p{font-size:.9rem;color:var(--muted)}
.academy-v2-page .anthropic-strip p b{color:var(--text)}
.academy-v2-page .anthropic-strip a{color:var(--cyan);font-weight:600;font-size:.88rem;white-space:nowrap}
.academy-v2-page .anthropic-strip a:hover{text-decoration:underline}

.academy-v2-page .outcomes-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
.academy-v2-page .outcome{background:var(--surface);border:1px solid var(--line);border-radius:14px;padding:20px 22px;font-size:.92rem;font-weight:500;display:flex;gap:12px;align-items:flex-start}
.academy-v2-page .outcome .check{color:var(--green);font-family:var(--data);font-weight:700}

.academy-v2-page .pricing{background:linear-gradient(180deg,transparent,rgba(217,70,239,.05) 45%,transparent)}
.academy-v2-page .deadline-strip{display:flex;align-items:center;justify-content:center;gap:14px;flex-wrap:wrap;margin:0 auto 46px;max-width:640px;border:1px solid rgba(251,113,133,.3);background:rgba(251,113,133,.06);border-radius:14px;padding:14px 22px;font-size:.88rem}
.academy-v2-page .deadline-strip .count{font-family:var(--data);font-weight:700;color:var(--red);font-variant-numeric:tabular-nums;letter-spacing:.05em}
.academy-v2-page .tiers{display:grid;grid-template-columns:repeat(3,1fr);gap:22px;align-items:stretch}
.academy-v2-page .tier{background:var(--surface);border:1px solid var(--line);border-radius:22px;padding:36px 30px;display:flex;flex-direction:column;position:relative;transition:transform .2s,border-color .2s}
.academy-v2-page .tier:hover{transform:translateY(-4px);border-color:var(--line-bright)}
.academy-v2-page .tier.popular{background:linear-gradient(180deg,#171126,#12101d);border:1px solid rgba(217,70,239,.5);box-shadow:0 30px 80px -30px rgba(217,70,239,.35);transform:scale(1.04)}
.academy-v2-page .tier.popular:hover{transform:scale(1.04) translateY(-4px)}
.academy-v2-page .pop-badge{position:absolute;top:-15px;left:50%;transform:translateX(-50%);background:var(--grad);color:#fff;font-size:.7rem;font-weight:800;letter-spacing:.16em;text-transform:uppercase;border-radius:99px;padding:7px 18px;white-space:nowrap}
.academy-v2-page .tier .t-name{font-size:.78rem;letter-spacing:.22em;text-transform:uppercase;font-weight:700;color:var(--muted)}
.academy-v2-page .tier.popular .t-name{color:#e9d5ff}
.academy-v2-page .tier .t-for{font-size:.85rem;color:var(--dim);margin-top:6px;min-height:2.6em}
.academy-v2-page .price-row{display:flex;align-items:baseline;gap:10px;margin:20px 0 4px}
.academy-v2-page .price{font-family:var(--data);font-size:3.1rem;font-weight:700;line-height:1}
.academy-v2-page .tier.popular .price{background:var(--grad);-webkit-background-clip:text;background-clip:text;color:transparent}
.academy-v2-page .price-was{font-family:var(--data);color:var(--dim);text-decoration:line-through;font-size:1.05rem}
.academy-v2-page .price-per{font-size:.8rem;color:var(--dim)}
.academy-v2-page .tier ul{list-style:none;margin:26px 0 30px;display:grid;gap:12px;flex:1}
.academy-v2-page .tier li{font-size:.89rem;color:var(--muted);padding-left:24px;position:relative}
.academy-v2-page .tier li::before{content:"✓";position:absolute;left:0;color:var(--green);font-weight:700}
.academy-v2-page .tier li.no{color:var(--dim)}
.academy-v2-page .tier li.no::before{content:"—";color:var(--dim)}
.academy-v2-page .tier .btn{justify-content:center;width:100%}
.academy-v2-page .tier .t-urgency{text-align:center;margin-top:12px;font-size:.75rem;color:var(--dim)}
.academy-v2-page .tier.popular .t-urgency{color:#f0abfc}
.academy-v2-page .pay-note{text-align:center;margin-top:32px;font-size:.83rem;color:var(--dim)}
.academy-v2-page .pay-note b{color:var(--muted)}

.academy-v2-page .fomo-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
.academy-v2-page .quote{background:var(--surface);border:1px solid var(--line);border-radius:18px;padding:26px}
.academy-v2-page .quote p{font-size:.92rem;color:var(--text);line-height:1.65}
.academy-v2-page .quote .who{margin-top:16px;display:flex;align-items:center;gap:11px}
.academy-v2-page .quote .av{width:36px;height:36px;border-radius:50%;display:grid;place-items:center;font-weight:700;font-size:.8rem;color:#fff}
.academy-v2-page .av-1{background:linear-gradient(135deg,var(--blue),var(--violet))}
.academy-v2-page .av-2{background:linear-gradient(135deg,var(--fuchsia),var(--orange))}
.academy-v2-page .av-3{background:linear-gradient(135deg,var(--cyan),var(--blue))}
.academy-v2-page .quote .who b{display:block;font-size:.85rem}
.academy-v2-page .quote .who span{font-size:.75rem;color:var(--dim)}
.academy-v2-page .fomo-line{text-align:center;margin-top:44px;color:var(--muted);font-size:.95rem}
.academy-v2-page .fomo-line b{color:var(--text)}

.academy-v2-page .faq{max-width:760px;margin:0 auto}
.academy-v2-page details{border:1px solid var(--line);border-radius:14px;background:var(--surface);margin-bottom:12px;overflow:hidden}
.academy-v2-page summary{cursor:pointer;list-style:none;padding:20px 24px;font-weight:600;font-size:.98rem;display:flex;justify-content:space-between;align-items:center;gap:16px}
.academy-v2-page summary::-webkit-details-marker{display:none}
.academy-v2-page summary::after{content:"+";font-family:var(--data);color:var(--fuchsia);font-size:1.3rem;transition:transform .2s}
.academy-v2-page details[open] summary::after{transform:rotate(45deg)}
.academy-v2-page details .a{padding:0 24px 22px;color:var(--muted);font-size:.92rem}

.academy-v2-page .final{text-align:center}
.academy-v2-page .final-card{border:1px solid rgba(139,92,246,.4);background:radial-gradient(120% 160% at 50% 0%,rgba(139,92,246,.14),rgba(13,13,20,.6) 60%);border-radius:28px;padding:72px 32px;max-width:860px;margin:0 auto}
.academy-v2-page .final-card h2{margin-top:0}
.academy-v2-page .final-card .sub{color:var(--muted);max-width:560px;margin:0 auto 30px}
.academy-v2-page .final-count{font-family:var(--data);font-size:clamp(1.6rem,4vw,2.4rem);font-weight:700;letter-spacing:.08em;color:var(--fuchsia);margin:8px 0 28px;font-variant-numeric:tabular-nums}
.academy-v2-page .final-count span{font-size:.68rem;letter-spacing:.24em;color:var(--dim);display:block;margin-top:6px;font-family:var(--body);font-weight:600}

.academy-v2-page footer{border-top:1px solid var(--line);padding:52px 0 40px;font-size:.85rem;color:var(--dim)}
.academy-v2-page .foot-grid{display:grid;grid-template-columns:2fr 1fr 1fr;gap:36px;margin-bottom:36px}
.academy-v2-page .foot-grid h4{font-size:.72rem;letter-spacing:.22em;text-transform:uppercase;color:var(--muted);margin-bottom:14px}
.academy-v2-page .foot-grid a{display:block;margin-bottom:9px;color:var(--dim)}
.academy-v2-page .foot-grid a:hover{color:var(--text)}
.academy-v2-page .copy{border-top:1px solid var(--line);padding-top:24px;display:flex;justify-content:space-between;flex-wrap:wrap;gap:10px}

@media (max-width:900px){
  .academy-v2-page .math-grid,.academy-v2-page .outcomes-grid,.academy-v2-page .fomo-grid{grid-template-columns:1fr 1fr}
  .academy-v2-page .layers-grid{grid-template-columns:1fr}
  .academy-v2-page .tiers{grid-template-columns:1fr;max-width:440px;margin:0 auto}
  .academy-v2-page .tier.popular{transform:none;order:-1}
  .academy-v2-page .tier.popular:hover{transform:translateY(-4px)}
  .academy-v2-page .foot-grid{grid-template-columns:1fr 1fr}
}
@media (max-width:600px){
  .academy-v2-page .math-grid,.academy-v2-page .outcomes-grid,.academy-v2-page .fomo-grid{grid-template-columns:1fr}
  .academy-v2-page .nav-links{display:none}
  .academy-v2-page section{padding:68px 0}
  .academy-v2-page .hero{padding:60px 0 44px}
}
@media (prefers-reduced-motion:reduce){
  .academy-v2-page *,.academy-v2-page *::before,.academy-v2-page *::after{animation:none!important;transition:none!important}
  .academy-v2-page .ticker-track{transform:none}
}

.academy-v2-page .status-banner{position:sticky;top:0;z-index:59;text-align:center;padding:12px 16px;font-size:.88rem;font-weight:600}
.academy-v2-page .status-banner.success{background:rgba(52,211,153,.14);color:var(--green);border-bottom:1px solid rgba(52,211,153,.3)}
.academy-v2-page .status-banner.failed{background:rgba(251,113,133,.14);color:var(--red);border-bottom:1px solid rgba(251,113,133,.3)}
.academy-v2-page .status-banner button{background:none;border:0;color:inherit;margin-left:12px;cursor:pointer;text-decoration:underline;font:inherit}

.academy-v2-page .enroll-overlay{position:fixed;inset:0;z-index:80;background:rgba(5,5,8,.8);backdrop-filter:blur(4px);display:flex;align-items:center;justify-content:center;padding:20px}
.academy-v2-page .enroll-modal{position:relative;width:100%;max-width:420px;background:var(--surface);border:1px solid var(--line-bright);border-radius:20px;padding:32px}
.academy-v2-page .enroll-close{position:absolute;top:16px;right:16px;background:none;border:0;color:var(--muted);cursor:pointer;font-size:1rem}
.academy-v2-page .enroll-close:hover{color:var(--text)}
.academy-v2-page .enroll-modal h3{font-family:var(--display);font-size:1.5rem;margin:8px 0 20px}
.academy-v2-page .enroll-modal form{display:flex;flex-direction:column;gap:16px}
.academy-v2-page .enroll-modal label{display:flex;flex-direction:column;gap:6px;font-size:.82rem;color:var(--muted)}
.academy-v2-page .enroll-modal input{font-family:var(--body);font-size:1rem;color:var(--text);background:var(--surface-2);border:1px solid var(--line);border-radius:10px;padding:12px 14px}
.academy-v2-page .enroll-modal input:focus{outline:none;border-color:var(--fuchsia)}
.academy-v2-page .enroll-modal .btn{margin-top:6px;width:100%;justify-content:center;font-size:.95rem}
.academy-v2-page .enroll-error{color:var(--red);font-size:.82rem}
.academy-v2-page .enroll-help{color:var(--muted);font-size:.9rem;margin-bottom:16px}
`;

const SEATS_TOTAL = 30;
const SEATS_TAKEN = 23;

const ROTATOR_WORDS = ['Attention.', 'Visibility.', 'Distribution.'];

const TICKER_ITEMS = [
  { dot: 'd-g', name: 'Kevin M.', text: 'enrolled in Builder · Nairobi' },
  { dot: 'd-b', name: 'Amara O.', text: 'shipped a CRM automation · Lagos' },
  { dot: 'd-f', name: 'Brian K.', text: 'enrolled in Capstone Pro · Mombasa' },
  { dot: 'd-o', name: 'Faith W.', text: 'deployed an AI chatbot · Kigali' },
  { dot: 'd-g', name: 'Tunde A.', text: 'enrolled in Builder · Accra' },
  { dot: 'd-b', name: 'Njeri G.', text: 'completed Layer 2 · Nakuru' },
  { dot: 'd-f', name: 'Samuel D.', text: 'enrolled in Foundations · Dar es Salaam' },
  { dot: 'd-o', name: 'Wanjiku N.', text: 'booked a live build session · Nairobi' },
];

const MATH_CARDS = [
  { big: 'red', value: '$36,000', title: 'The Agency Path — Per Year', body: 'A retainer buys you posts, reports, and borrowed reach. Cancel the retainer, and the visibility disappears with it.' },
  { big: 'grn', value: '$45', title: 'The Builder Path — Once', body: 'Learn to engineer attention-capture systems yourself: content engines, chatbots, CRMs, and distribution pipelines that compound.' },
  { big: 'fus', value: '24 / 7', title: 'What A System Gives You', body: 'AI-powered workflows run around the clock. Your distribution machine captures, qualifies, and converts attention while you build.' },
];

const LAYER_CARDS = [
  { cls: 'lc-blue', tag: 'Layer 1 · Foundations', title: 'System Building Blocks', body: 'Master the technical primitives that power every advanced system you will ever build.', items: ['Triggers & events — reactive workflows', 'Webhooks — real-time data movement', 'APIs & integrations — multi-tool orchestration', 'Databases & vector databases — intelligent memory'] },
  { cls: 'lc-fus', tag: 'Layer 2 · Intelligence', title: 'AI Capabilities, Powered by Claude', body: 'This is where systems stop being automated and start becoming intelligent.', items: ['LLMs — Claude as your reasoning engine', "Prompt engineering — Anthropic's practices", 'AI vibe coding — build apps at speed', 'Claude Code workflows — ideas to working systems'] },
  { cls: 'lc-org', tag: 'Layer 3 · Application', title: 'User-Facing Revenue Systems', body: 'Deploy client-facing systems that capture attention and convert it — without you in the loop.', items: ['AI chatbots & voice agents', 'CRM systems & sales automations', 'AI content generation at scale'] },
  { cls: 'lc-vio', tag: 'Final Layer · Capstone', title: 'Business Process Automation', body: 'Everything converges. You architect a live, end-to-end system — your proof of applied AI training.', items: ['Lead-to-sale automation systems', 'Support & operations engines', 'Revenue & cost-optimisation pipelines'] },
];

const OUTCOMES = [
  'A content engine that produces and distributes daily',
  'An AI chatbot that qualifies leads while you sleep',
  'A CRM pipeline that follows up automatically',
  'Webhook & API bridges across your whole stack',
  'A capstone system running your business end to end',
  "A public build portfolio agencies can't fake",
];

interface Tier {
  name: string;
  forText: string;
  price: string;
  priceWas?: string;
  items: { text: string; no?: boolean }[];
  urgency: string;
  popular?: boolean;
}

const TIERS: Tier[] = [
  {
    name: 'Foundations',
    forText: 'For the self-starter who wants the technical primitives, self-paced.',
    price: '$20',
    items: [
      { text: 'Full Layer 1 curriculum — triggers, webhooks, APIs, databases' },
      { text: 'Self-paced lessons & build exercises' },
      { text: 'Community access' },
      { text: 'Lifetime access to Layer 1 materials' },
      { text: 'Live build sessions', no: true },
      { text: 'Capstone & portfolio review', no: true },
    ],
    urgency: 'Upgrade to Builder anytime — pay the difference.',
  },
  {
    name: 'Builder',
    forText: 'For operators ready to build intelligent, Claude-powered systems.',
    price: '$30',
    priceWas: '$45',
    items: [
      { text: 'Everything in Foundations' },
      { text: 'Layer 2: Intelligence — LLMs, prompt engineering, Claude Code' },
      { text: 'Layer 3: Application — chatbots, CRMs, content engines' },
      { text: 'Live build sessions every week' },
      { text: 'Cohort accountability group' },
      { text: 'Capstone & done-with-you support', no: true },
    ],
    urgency: 'Only 7 seats left at this price',
    popular: true,
  },
  {
    name: 'Capstone Pro',
    forText: 'For founders who want the full machine — built with you, deployed live.',
    price: '$45',
    items: [
      { text: 'Everything in Builder' },
      { text: 'Final Layer: Capstone — full business process automation' },
      { text: 'Done-with-you support on your real business system' },
      { text: '1:1 portfolio & system review' },
      { text: 'Verified graduate badge + public build portfolio' },
      { text: 'Priority access to Cohort 05 advanced tracks' },
    ],
    urgency: 'Limited to 10 done-with-you slots per cohort.',
  },
];

const QUOTES = [
  { avatar: 'KM', avClass: 'av-1', quote: 'I paid an agency for 8 months and had nothing to show when I left. Six weeks in Builder and my chatbot books more calls than their retainer ever did.', name: 'Kevin M.', role: 'E-commerce founder · Nairobi' },
  { avatar: 'AO', avClass: 'av-2', quote: 'The 4-layer structure is the difference. I finally understand the machine end to end — webhooks to Claude to a CRM that follows up on its own.', name: 'Amara O.', role: 'Brand strategist · Lagos' },
  { avatar: 'BK', avClass: 'av-3', quote: 'My capstone system now runs my lead pipeline 24/7. Clients ask who built it. I did — that sentence pays for itself weekly.', name: 'Brian K.', role: 'Agency owner · Mombasa' },
];

const FAQS = [
  { q: "I'm not technical. Can I actually do this?", a: 'Yes — Layer 1 assumes zero code. You build with AI-assisted workflows inside Claude Code, and every concept ships with a hands-on exercise. The curriculum is sequenced so intelligence only arrives after infrastructure clicks.' },
  { q: 'How is this different from a YouTube playlist?', a: 'Playlists give you information. Cohorts give you deadlines, live build sessions, feedback on your actual system, and a community shipping alongside you. You leave with deployed systems, a public portfolio, and proof of applied AI training.' },
  { q: 'What happens when the countdown hits zero?', a: 'Cohort 04 enrollment locks. The next cohort opens at higher pricing, and the current $30 Builder rate retires permanently. Seats also lock early if the cohort fills first — whichever comes first.' },
  { q: 'Can I upgrade tiers later?', a: 'Yes. Start at Foundations or Builder and upgrade anytime by paying the difference against your original tier — your progress carries over.' },
  { q: 'How do I pay from Kenya?', a: 'M-Pesa STK Push or card at checkout. Access is instant after payment confirms, and your application is reviewed within 24 hours.' },
];

function getRollingDeadline() {
  const now = new Date();
  const d = new Date(now);
  const day = d.getDay();
  let add = (1 + 7 - day) % 7;
  if (add === 0) add = 7;
  d.setDate(d.getDate() + add);
  d.setHours(23, 59, 0, 0);
  return d;
}

const pad = (n: number) => String(n).padStart(2, '0');

function formatCountdown(deadline: Date) {
  let ms = deadline.getTime() - Date.now();
  if (ms < 0) ms = 0;
  const dys = Math.floor(ms / 86400000);
  const hrs = Math.floor(ms / 3600000) % 24;
  const min = Math.floor(ms / 60000) % 60;
  const sec = Math.floor(ms / 1000) % 60;
  return {
    short: `${pad(dys)}:${pad(hrs)}:${pad(min)}:${pad(sec)}`,
    long: `${dys}d ${pad(hrs)}h ${pad(min)}m ${pad(sec)}s`,
  };
}

interface EnrollModalProps {
  tier: Tier;
  onClose: () => void;
}

function EnrollModal({ tier, onClose }: EnrollModalProps) {
  const [step, setStep] = useState<'form' | 'pay'>('form');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      setError('Please fill in both fields.');
      return;
    }
    setError('');
    setSubmitting(true);
    try {
      const res = await fetch('/api/initiate-payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tier: tier.name, phone }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Could not start payment');

      await loadPayHeroScript();
      setStep('pay');

      requestAnimationFrame(() => {
        window.PayHero?.init({
          paymentUrl: PAYHERO_PAYMENT_URL,
          width: '100%',
          height: '100%',
          containerId: 'payhero-container',
          channelID: PAYHERO_CHANNEL_ID,
          amount: data.amount,
          phone: data.phone,
          reference: data.reference,
          name,
          buttonName: 'Pay with M-Pesa',
          buttonColor: '#d946ef',
          successUrl: `${window.location.origin}/?enrolled=success#/academy`,
          failedUrl: `${window.location.origin}/?enrolled=failed#/academy`,
        });
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong — please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="enroll-overlay" onClick={onClose}>
      <div className="enroll-modal" onClick={(e) => e.stopPropagation()}>
        <button className="enroll-close" onClick={onClose} aria-label="Close">✕</button>
        <span className="t-name">{tier.name}</span>
        <h3>Enroll — {tier.price}</h3>

        {step === 'form' ? (
          <form onSubmit={handleSubmit}>
            <label>
              Full name
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Jane Wanjiru" />
            </label>
            <label>
              M-Pesa phone number
              <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="0712345678" />
            </label>
            {error && <p className="enroll-error">{error}</p>}
            <button type="submit" className="btn btn-primary" disabled={submitting}>
              {submitting ? 'Starting…' : 'Continue to Payment'}
            </button>
          </form>
        ) : (
          <div>
            <p className="enroll-help">Click below to pay via M-Pesa STK Push.</p>
            <div id="payhero-container" ref={containerRef} />
          </div>
        )}
      </div>
    </div>
  );
}

export default function Academy() {
  const deadlineRef = useRef(getRollingDeadline());
  const [countdown, setCountdown] = useState(() => formatCountdown(deadlineRef.current));
  const [wordIndex, setWordIndex] = useState(0);
  const [seatFillWidth, setSeatFillWidth] = useState('0%');
  const [enrollTier, setEnrollTier] = useState<Tier | null>(null);
  const [enrollStatus, setEnrollStatus] = useState<'success' | 'failed' | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const enrolled = params.get('enrolled');
    if (enrolled === 'success' || enrolled === 'failed') {
      setEnrollStatus(enrolled);
      const url = new URL(window.location.href);
      url.searchParams.delete('enrolled');
      window.history.replaceState({}, '', url.toString());
    }
  }, []);

  useEffect(() => {
    const link = document.createElement('link');
    link.id = 'academy-v2-fonts';
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;0,800;1,600&family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap';
    document.head.appendChild(link);

    const style = document.createElement('style');
    style.id = 'academy-v2-css';
    style.textContent = ACADEMY_V2_CSS;
    document.head.appendChild(style);

    return () => {
      document.getElementById('academy-v2-fonts')?.remove();
      document.getElementById('academy-v2-css')?.remove();
    };
  }, []);

  useEffect(() => {
    const prevScroll = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = prevScroll;
    };
  }, []);

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if ((ACADEMY_SECTION_IDS as readonly string[]).includes(hash)) {
      requestAnimationFrame(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: 'auto' });
      });
    }
  }, []);

  useEffect(() => {
    const pct = Math.round((SEATS_TAKEN / SEATS_TOTAL) * 100);
    const raf = requestAnimationFrame(() => setSeatFillWidth(`${pct}%`));
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    const tick = () => setCountdown(formatCountdown(deadlineRef.current));
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;
    const interval = setInterval(() => {
      setWordIndex((i) => (i + 1) % ROTATOR_WORDS.length);
    }, 2600);
    return () => clearInterval(interval);
  }, []);

  const seatsLeft = SEATS_TOTAL - SEATS_TAKEN;

  return (
    <div className="academy-v2-page">
      <div className="blob b1" /><div className="blob b2" /><div className="blob b3" />

      {enrollStatus && (
        <div className={`status-banner ${enrollStatus}`}>
          {enrollStatus === 'success'
            ? "Payment started — we'll confirm your enrollment shortly."
            : "That payment didn't go through. You can try again, or reach us on WhatsApp."}
          <button onClick={() => setEnrollStatus(null)}>Dismiss</button>
        </div>
      )}

      {enrollTier && <EnrollModal tier={enrollTier} onClose={() => setEnrollTier(null)} />}

      <div className="urgency-bar">
        <span className="pulse" />
        <span><b>Cohort 04 closes in</b></span>
        <span className="count">{countdown.short}</span>
        <span><b>{seatsLeft} seats</b> left at current pricing</span>
        <a href="#pricing">Claim yours →</a>
      </div>

      <header>
        <nav>
          <div className="wrap nav-inner">
            <a className="brand" href="/">
              <span className="mark">N</span>
              <span className="word"><b>NeuraFlow</b><span>Academy</span></span>
            </a>
            <div className="nav-links">
              <a href="#system">The System</a>
              <a href="#outcomes">What You Ship</a>
              <a href="#pricing">Pricing</a>
              <a href="#faq">FAQ</a>
              <a className="btn btn-primary btn-sm" href="#pricing">Enroll Now</a>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero wrap">
          <span className="eyebrow"><span className="dot" /> Cohort 04 · Enrollment Open</span>
          <h1>
            <span className="h1-static">The Internet Pays<br />For One Thing:</span><br />
            <span className="rotator"><span className="word" key={wordIndex}>{ROTATOR_WORDS[wordIndex]}</span></span>
          </h1>
          <p className="hero-sub">
            Brand agencies charge <b>$3,000+ a month</b> to chase visibility for you.
            NeuraFlow Academy teaches you to <b>engineer the AI systems that capture attention and own distribution</b> — so the machine works while you sleep.
          </p>
          <div className="hero-ctas">
            <a className="btn btn-primary" href="#pricing">Claim Your Seat — from $20 <span className="arrow">→</span></a>
            <a className="btn btn-ghost" href="#system">See the 4-Layer System</a>
          </div>
          <p className="hero-note"><b>●</b> 200+ systems built by students · Live build sessions · Done-with-you support</p>

          <div className="seat-meter">
            <div className="row">
              <span className="left">Cohort 04 Capacity</span>
              <span className="right">{SEATS_TAKEN} / {SEATS_TOTAL} filled</span>
            </div>
            <div className="bar"><div className="fill" style={{ width: seatFillWidth }} /></div>
            <p className="foot">When the bar fills, enrollment locks until Cohort 05 — <b>at higher pricing.</b></p>
          </div>
        </section>

        <div className="ticker" aria-label="Recent activity">
          <div className="ticker-track">
            {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
              <span className="chip" key={i}>
                <span className={`d ${item.dot}`} /><b>{item.name}</b>&nbsp;{item.text}
              </span>
            ))}
          </div>
        </div>

        <section className="problem">
          <div className="wrap">
            <div className="section-head">
              <span className="kicker">The Attention Economy</span>
              <h2>The Math Brand Agencies Never Show You</h2>
              <p>Visibility is rented. Distribution is owned. Every month you pay someone else to be seen, you fund their system — and walk away with none of your own.</p>
            </div>
            <div className="math-grid">
              {MATH_CARDS.map((c) => (
                <div className="math-card" key={c.title}>
                  <div className={`big ${c.big}`}>{c.value}</div>
                  <h3>{c.title}</h3>
                  <p>{c.body}</p>
                </div>
              ))}
            </div>
            <p className="problem-line">Agencies rent you attention. <em>Builders own the machine that prints it.</em></p>
          </div>
        </section>

        <section id="system">
          <div className="wrap">
            <div className="section-head">
              <span className="kicker k-blue">The Curriculum</span>
              <h2>One System. Four Layers. Zero Guesswork.</h2>
              <p>You progress from infrastructure to intelligence to deployment — the exact stack behind every attention-capture machine we build.</p>
            </div>
            <div className="layers-grid">
              {LAYER_CARDS.map((l) => (
                <div className={`layer-card ${l.cls}`} key={l.title}>
                  <span className="layer-tag">{l.tag}</span>
                  <h3>{l.title}</h3>
                  <p>{l.body}</p>
                  <ul>
                    {l.items.map((it) => <li key={it}>{it}</li>)}
                  </ul>
                </div>
              ))}
            </div>
            <div className="anthropic-strip">
              <p><b>Built on Anthropic's AI ecosystem.</b> Every system you design, test, and deploy runs inside real AI environments with Claude Code as the primary interface — production-grade intelligence, live from day one.</p>
              <a href="https://www.anthropic.com/learn" target="_blank" rel="noopener noreferrer">Explore Anthropic Learning →</a>
            </div>
          </div>
        </section>

        <section id="outcomes">
          <div className="wrap">
            <div className="section-head">
              <span className="kicker k-orange">What You Ship</span>
              <h2>Walk Out With Working Systems</h2>
              <p>Every graduate leaves with a verifiable portfolio of deployed AI implementations — proof, not certificates.</p>
            </div>
            <div className="outcomes-grid">
              {OUTCOMES.map((o) => (
                <div className="outcome" key={o}><span className="check">✓</span> {o}</div>
              ))}
            </div>
          </div>
        </section>

        <section className="pricing" id="pricing">
          <div className="wrap">
            <div className="section-head">
              <span className="kicker">Enrollment</span>
              <h2>Own the Machine. Pick Your Depth.</h2>
              <p>One-time enrollment. Lifetime access to your tier's materials. Prices rise when Cohort 04 fills.</p>
            </div>

            <div className="deadline-strip">
              <span>⏳ Current pricing locks in</span>
              <span className="count">{countdown.long}</span>
              <span>· then Cohort 05 rates apply</span>
            </div>

            <div className="tiers">
              {TIERS.map((t) => (
                <div className={`tier${t.popular ? ' popular' : ''}`} key={t.name}>
                  {t.popular && <span className="pop-badge">★ Most Popular — 8 of 10 choose this</span>}
                  <span className="t-name">{t.name}</span>
                  <p className="t-for">{t.forText}</p>
                  <div className="price-row">
                    <span className="price">{t.price}</span>
                    {t.priceWas && <span className="price-was">{t.priceWas}</span>}
                    <span className="price-per">one-time</span>
                  </div>
                  <ul>
                    {t.items.map((it) => (
                      <li className={it.no ? 'no' : undefined} key={it.text}>{it.text}</li>
                    ))}
                  </ul>
                  <a
                    className={`btn ${t.popular ? 'btn-primary' : 'btn-ghost'}`}
                    href="#"
                    onClick={(e) => { e.preventDefault(); setEnrollTier(t); }}
                  >
                    {t.popular ? <>Claim Builder — Save $15 <span className="arrow">→</span></> : t.name === 'Foundations' ? 'Start With Foundations' : 'Go Capstone Pro'}
                  </a>
                  <p className="t-urgency">{t.urgency}</p>
                </div>
              ))}
            </div>

            <p className="pay-note">Pay via <b>M-Pesa</b> or card · Instant access after payment · Applications reviewed within 24 hours</p>
          </div>
        </section>

        <section>
          <div className="wrap">
            <div className="section-head">
              <span className="kicker k-cyan">The Builder Community</span>
              <h2>People Who Stopped Renting Attention</h2>
              <p>NeuraFlow Academy runs as a live training ecosystem — students build, share, and iterate in public.</p>
            </div>
            <div className="fomo-grid">
              {QUOTES.map((q) => (
                <div className="quote" key={q.name}>
                  <p>"{q.quote}"</p>
                  <div className="who">
                    <span className={`av ${q.avClass}`}>{q.avatar}</span>
                    <div><b>{q.name}</b><span>{q.role}</span></div>
                  </div>
                </div>
              ))}
            </div>
            <p className="fomo-line">Every seat you wait on is a seat someone else builds with. <b>Cohort 04 is 77% full.</b></p>
          </div>
        </section>

        <section id="faq">
          <div className="wrap">
            <div className="section-head">
              <span className="kicker">Objections, Handled</span>
              <h2>Before You Ask</h2>
            </div>
            <div className="faq">
              {FAQS.map((f) => (
                <details key={f.q}>
                  <summary>{f.q}</summary>
                  <p className="a">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="final">
          <div className="wrap">
            <div className="final-card">
              <span className="eyebrow"><span className="dot" /> Last Call · Cohort 04</span>
              <h2>Attention Won't Wait.<br />Neither Will This Cohort.</h2>
              <p className="sub">The agencies keep their retainers either way. The only question is whether you own a system when this countdown ends.</p>
              <div className="final-count"><span>{countdown.long}</span><span>Until Cohort 04 Locks</span></div>
              <a className="btn btn-primary" href="#pricing">Claim Your Seat Now <span className="arrow">→</span></a>
              <p className="hero-note" style={{ marginTop: 18 }}>From $20 · M-Pesa &amp; card accepted · <b>{seatsLeft} seats remain</b></p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">
          <div className="foot-grid">
            <div>
              <div className="brand" style={{ marginBottom: 14 }}>
                <span className="mark">N</span>
                <span className="word"><b>NeuraFlow</b><span>Academy</span></span>
              </div>
              <p>Engineering attention, visibility, and distribution — one intelligent system at a time. Built on Anthropic's AI ecosystem.</p>
            </div>
            <div>
              <h4>The System</h4>
              <a href="#system">Layer 1: Foundations</a>
              <a href="#system">Layer 2: Intelligence</a>
              <a href="#system">Layer 3: Application</a>
              <a href="#system">Final Layer: Capstone</a>
            </div>
            <div>
              <h4>Enroll</h4>
              <a href="#pricing">Pricing</a>
              <a href="#faq">FAQ</a>
              <a href="/">Back to NeuraFlow.ai</a>
            </div>
          </div>
          <div className="copy">
            <span>© 2026 NeuraFlow.ai — All rights reserved.</span>
            <span>Cohort 04 · Enrollment open</span>
          </div>
        </div>
      </footer>

      <AcademyChatWidget />
    </div>
  );
}
