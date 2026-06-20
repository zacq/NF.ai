import { useState, useEffect, useRef } from 'react';

const ALAMA_BASE = 'appiI2BHGFH43VTcx';
const ALAMA_TABLE = 'tblax5KIIK7hhdkuO';

/*
 * Required Airtable fields in tblFatfSnymOgdUWl:
 * Name (singleLineText), Email (email), Phone (phoneNumber), WhatsApp (phoneNumber),
 * Preferred Channel (singleSelect: Email/Phone/WhatsApp),
 * Region (singleLineText), Livestock Types (multipleSelects), Herd Size (singleSelect),
 * Pain Point (singleSelect), Feature Interests (multipleSelects),
 * Notes (multilineText), Source (url), Consent Timestamp (dateTime), Status (singleSelect)
 */

const ALAMA_CSS = `
.alama-page {
  --soil:#16110C;--soil-2:#1E1710;--soil-3:#271E15;
  --bone:#EFE7D7;--bone-2:#F6F1E6;--ink:#1A1510;
  --orange:#F2580F;--orange-soft:#FF7A3D;--tag:#F5C638;--verify:#86A85E;
  --line-dark:rgba(239,231,215,.14);--line-light:rgba(26,21,16,.12);
  --dim-on-dark:rgba(239,231,215,.62);--dim-on-light:rgba(26,21,16,.62);
  --display:'Bricolage Grotesque',sans-serif;--body:'Hanken Grotesk',sans-serif;
  --serif:'Fraunces',serif;--mono:'IBM Plex Mono',monospace;--maxw:1180px;
  font-family:var(--body);background:var(--soil);color:var(--bone);
  -webkit-font-smoothing:antialiased;line-height:1.55;overflow-x:hidden;min-height:100vh;
}
.alama-page *{box-sizing:border-box;margin:0;padding:0}
.alama-page a{color:inherit;text-decoration:none}
.alama-page img{max-width:100%;display:block}
.alama-page .wrap{max-width:var(--maxw);margin:0 auto;padding:0 24px}
.alama-page .eyebrow{font-family:var(--mono);font-size:.72rem;letter-spacing:.18em;text-transform:uppercase;color:var(--orange);display:inline-flex;align-items:center;gap:.55em}
.alama-page .eyebrow::before{content:"";width:22px;height:1px;background:var(--orange);display:inline-block}
.alama-page .on-light .eyebrow{color:var(--orange)}
.alama-page h1,.alama-page h2,.alama-page h3{font-family:var(--display);font-weight:600;line-height:1.02;letter-spacing:-.02em}
.alama-page h2{font-size:clamp(2rem,4.4vw,3.4rem)}
.alama-page h3{font-size:clamp(1.25rem,2.2vw,1.6rem);letter-spacing:-.01em}
.alama-page p{font-size:clamp(1rem,1.15vw,1.12rem)}
.alama-page .lead{font-size:clamp(1.08rem,1.4vw,1.28rem);color:var(--dim-on-dark);max-width:54ch}
.alama-page .on-light .lead{color:var(--dim-on-light)}
.alama-page .btn{font-family:var(--display);font-weight:600;font-size:1rem;background:var(--orange);color:#fff;border:none;cursor:pointer;padding:15px 26px;border-radius:100px;letter-spacing:-.01em;display:inline-flex;align-items:center;justify-content:center;gap:.5em;transition:transform .25s cubic-bezier(.2,.8,.2,1),box-shadow .25s,background .2s;box-shadow:0 8px 30px -10px rgba(242,88,15,.6)}
.alama-page .btn:hover:not(:disabled){transform:translateY(-2px);background:#ff6418;box-shadow:0 14px 38px -10px rgba(242,88,15,.7)}
.alama-page .btn:active:not(:disabled){transform:translateY(0)}
.alama-page .btn:disabled{opacity:.6;cursor:not-allowed}
.alama-page .btn-ghost{background:transparent;color:var(--bone);border:1px solid var(--line-dark);box-shadow:none}
.alama-page .btn-ghost:hover{background:rgba(239,231,215,.06);border-color:rgba(239,231,215,.3)}
.alama-page .on-light .btn-ghost{color:var(--ink);border-color:var(--line-light)}
.alama-page .on-light .btn-ghost:hover{background:rgba(26,21,16,.04)}
.alama-page :focus-visible{outline:2px solid var(--orange);outline-offset:3px;border-radius:4px}
.alama-page nav{position:sticky;top:0;z-index:50;backdrop-filter:blur(12px);background:rgba(22,17,12,.72);border-bottom:1px solid var(--line-dark)}
.alama-page .nav-in{display:flex;align-items:center;justify-content:space-between;height:68px}
.alama-page .brand{display:flex;align-items:center;gap:.6em;font-family:var(--display);font-weight:700;font-size:1.25rem;letter-spacing:-.02em}
.alama-page .brand .dot{width:11px;height:11px;border-radius:50%;background:var(--tag);box-shadow:0 0 0 3px rgba(245,198,56,.2)}
.alama-page .nav-links{display:flex;align-items:center;gap:30px;font-size:.95rem}
.alama-page .nav-links a.muted{color:var(--dim-on-dark);transition:color .2s}
.alama-page .nav-links a.muted:hover{color:var(--bone)}
.alama-page .nav-cta{padding:9px 18px;font-size:.92rem}
@media(max-width:760px){.alama-page .nav-links a.muted{display:none}}
.alama-page .hero{position:relative;padding:clamp(56px,9vw,104px) 0 clamp(60px,7vw,96px);overflow:hidden}
.alama-page .hero::before{content:"";position:absolute;inset:0;z-index:0;background:radial-gradient(120% 80% at 78% 8%,rgba(242,88,15,.16),transparent 55%),radial-gradient(80% 60% at 10% 100%,rgba(134,168,94,.10),transparent 60%);pointer-events:none}
.alama-page .hero-grid{position:relative;z-index:1;display:grid;grid-template-columns:1.15fr .85fr;gap:clamp(32px,5vw,72px);align-items:center}
.alama-page .hero h1{font-size:clamp(2.6rem,6.1vw,5rem);margin:22px 0 24px}
.alama-page .hero h1 em{font-style:normal;color:var(--orange)}
.alama-page .hero .lead{margin-bottom:30px}
.alama-page .signup{display:flex;gap:10px;max-width:480px;flex-wrap:wrap}
.alama-page .signup input{flex:1;min-width:200px;font-family:var(--body);font-size:1rem;color:var(--bone);background:var(--soil-2);border:1px solid var(--line-dark);border-radius:100px;padding:15px 22px;transition:border-color .2s}
.alama-page .signup input::placeholder{color:rgba(239,231,215,.4)}
.alama-page .signup input:focus{outline:none;border-color:var(--orange)}
.alama-page .micro{font-size:.82rem;color:var(--dim-on-dark);margin-top:14px;display:flex;align-items:center;gap:.5em}
.alama-page .micro .v{color:var(--verify)}
.alama-page .form-msg{font-size:.9rem;margin-top:12px;min-height:1.2em}
.alama-page .form-msg.ok{color:var(--verify)}
.alama-page .form-msg.err{color:var(--orange-soft)}
@media(max-width:880px){.alama-page .hero-grid{grid-template-columns:1fr;gap:44px}.alama-page .hero-art{order:-1;max-width:420px;margin:0 auto}}
.alama-page .hero-art{position:relative}
.alama-page .idcard{background:linear-gradient(165deg,var(--soil-2),var(--soil-3));border:1px solid var(--line-dark);border-radius:22px;padding:24px;box-shadow:0 40px 80px -40px rgba(0,0,0,.8),inset 0 1px 0 rgba(239,231,215,.05);position:relative}
.alama-page .idcard::after{content:"";position:absolute;inset:0;border-radius:22px;pointer-events:none;background:linear-gradient(115deg,transparent 40%,rgba(245,198,56,.06) 50%,transparent 60%)}
.alama-page .id-top{display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:22px}
.alama-page .tagchip{background:var(--tag);color:#3a2c05;border-radius:10px;padding:9px 12px 8px;display:inline-flex;flex-direction:column;line-height:1;box-shadow:0 6px 18px -8px rgba(245,198,56,.6)}
.alama-page .tagchip .lab{font-family:var(--mono);font-size:.58rem;letter-spacing:.14em;opacity:.7;margin-bottom:5px}
.alama-page .tagchip .num{font-family:var(--mono);font-weight:600;font-size:1.02rem;letter-spacing:.02em}
.alama-page .verify-pill{display:inline-flex;align-items:center;gap:.5em;font-family:var(--mono);font-size:.66rem;letter-spacing:.12em;color:var(--verify);border:1px solid rgba(134,168,94,.4);border-radius:100px;padding:6px 11px}
.alama-page .verify-pill .led{width:7px;height:7px;border-radius:50%;background:var(--verify);box-shadow:0 0 8px var(--verify);animation:alama-pulse 2.2s infinite}
@keyframes alama-pulse{0%,100%{opacity:1}50%{opacity:.35}}
.alama-page .id-rows{display:grid;gap:0}
.alama-page .id-row{display:flex;justify-content:space-between;align-items:center;padding:11px 0;border-top:1px solid var(--line-dark);font-size:.92rem}
.alama-page .id-row:first-child{border-top:none}
.alama-page .id-row .k{font-family:var(--mono);font-size:.68rem;letter-spacing:.1em;color:var(--dim-on-dark);text-transform:uppercase}
.alama-page .id-row .val{font-weight:500}
.alama-page .id-row .val.mono{font-family:var(--mono);font-size:.85rem;color:var(--tag)}
.alama-page .id-foot{margin-top:18px;display:flex;align-items:center;gap:.6em;font-family:var(--mono);font-size:.66rem;letter-spacing:.08em;color:var(--dim-on-dark)}
.alama-page .rfid{display:inline-block}
.alama-page .rfid path{stroke:var(--orange);stroke-width:1.6;fill:none;stroke-linecap:round}
.alama-page .ticker{border-top:1px solid var(--line-dark);border-bottom:1px solid var(--line-dark);background:var(--soil-2);overflow:hidden;padding:16px 0}
.alama-page .ticker-track{display:flex;gap:42px;white-space:nowrap;width:max-content;animation:alama-scroll 34s linear infinite}
.alama-page .ticker-track span{font-family:var(--mono);font-size:.82rem;letter-spacing:.12em;text-transform:uppercase;color:var(--dim-on-dark);display:inline-flex;align-items:center;gap:42px}
.alama-page .ticker-track span::after{content:"●";color:var(--orange);font-size:.5rem;vertical-align:middle}
@keyframes alama-scroll{to{transform:translateX(-50%)}}
.alama-page section{position:relative}
.alama-page .pad{padding:clamp(72px,9vw,128px) 0}
.alama-page .on-light{background:var(--bone);color:var(--ink)}
.alama-page .on-light h2,.alama-page .on-light h3{color:var(--ink)}
.alama-page .sec-head{max-width:62ch;margin-bottom:54px;word-break:break-word}
.alama-page .sec-head h2{margin:18px 0 18px}
.alama-page .reveal{opacity:0;transform:translateY(26px);transition:opacity .7s ease,transform .7s cubic-bezier(.2,.8,.2,1)}
.alama-page .reveal.in{opacity:1;transform:none}
.alama-page .prob-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:18px;margin-top:48px}
.alama-page .prob{background:var(--bone-2);border:1px solid var(--line-light);border-radius:16px;padding:26px 22px;transition:transform .3s,box-shadow .3s}
.alama-page .prob:hover{transform:translateY(-4px);box-shadow:0 24px 50px -30px rgba(26,21,16,.4)}
.alama-page .prob .pn{font-family:var(--mono);font-size:.72rem;color:var(--orange);letter-spacing:.1em}
.alama-page .prob h3{margin:14px 0 8px;font-size:1.18rem}
.alama-page .prob p{font-size:.95rem;color:var(--dim-on-light)}
@media(max-width:880px){.alama-page .prob-grid{grid-template-columns:1fr 1fr}}
@media(max-width:520px){.alama-page .prob-grid{grid-template-columns:1fr}}
.alama-page .pillar{display:grid;grid-template-columns:1fr 1fr;gap:clamp(36px,6vw,84px);align-items:center}
.alama-page .pillar+.pillar{margin-top:clamp(64px,8vw,108px)}
.alama-page .pillar.flip .p-text{order:2}
.alama-page .pillar h2{margin:18px 0 20px}
.alama-page .pillar .lead{margin-bottom:0}
.alama-page .p-visual{align-self:stretch;min-height:280px;border-radius:20px;position:relative;overflow:hidden;border:1px solid var(--line-dark);background:linear-gradient(160deg,var(--soil-2),var(--soil-3));display:flex;align-items:center;justify-content:center;padding:28px}
@media(max-width:840px){.alama-page .pillar,.alama-page .pillar.flip{grid-template-columns:1fr;gap:34px}.alama-page .pillar .p-text,.alama-page .pillar.flip .p-text{order:0}.alama-page .p-visual{min-height:230px}}
.alama-page .trail{width:100%;max-width:340px}
.alama-page .trail-step{display:flex;align-items:center;gap:14px;padding:12px 0;position:relative}
.alama-page .trail-step:not(:last-child)::before{content:"";position:absolute;left:12px;top:36px;bottom:-12px;width:1px;background:var(--line-dark)}
.alama-page .trail-dot{width:25px;height:25px;border-radius:50%;border:1px solid var(--verify);display:grid;place-items:center;flex:none;background:rgba(134,168,94,.08)}
.alama-page .trail-dot span{width:8px;height:8px;border-radius:50%;background:var(--verify)}
.alama-page .trail-step .t{font-family:var(--mono);font-size:.7rem;letter-spacing:.08em;color:var(--dim-on-dark);text-transform:uppercase}
.alama-page .trail-step .d{font-size:.95rem;font-weight:500}
.alama-page .broker{width:100%;max-width:330px;font-family:var(--mono);font-size:.84rem}
.alama-page .broker-line{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:13px 16px;border-radius:12px;margin:8px 0}
.alama-page .broker-line.cross{background:rgba(242,88,15,.08);border:1px solid rgba(242,88,15,.25);text-decoration:line-through;color:var(--dim-on-dark)}
.alama-page .broker-line.keep{background:rgba(134,168,94,.1);border:1px solid rgba(134,168,94,.35);color:var(--bone)}
.alama-page .broker-line .arrow{color:var(--orange)}
.alama-page .pulse-wrap{width:100%;max-width:320px;text-align:center}
.alama-page .pulse-svg{width:100%;height:auto}
.alama-page .pulse-svg .grid{stroke:var(--line-dark);stroke-width:1}
.alama-page .pulse-svg .wave{stroke:var(--orange);stroke-width:2.4;fill:none;stroke-linecap:round}
.alama-page .pulse-label{font-family:var(--mono);font-size:.7rem;letter-spacing:.1em;color:var(--dim-on-dark);margin-top:14px;text-transform:uppercase}
.alama-page .ped{width:100%;max-width:380px;text-align:center}
.alama-page .ped svg{width:100%;height:auto;display:block}
.alama-page .ped-cap{font-family:var(--mono);font-size:.66rem;letter-spacing:.08em;text-transform:uppercase;color:var(--dim-on-dark);margin-top:16px}
.alama-page .yield-tiles{display:grid;grid-template-columns:1fr 1fr;gap:14px;width:100%;max-width:360px}
.alama-page .ytile{background:var(--soil);border:1px solid var(--line-dark);border-radius:14px;padding:18px}
.alama-page .ytile .yk{font-family:var(--mono);font-size:.64rem;letter-spacing:.1em;text-transform:uppercase;color:var(--dim-on-dark)}
.alama-page .ytile .yv{font-family:var(--display);font-weight:600;font-size:1.5rem;color:var(--tag);margin-top:8px;letter-spacing:-.02em}
.alama-page .ytile .yt{font-size:.74rem;color:var(--dim-on-dark);margin-top:2px}
.alama-page .frontier{background:var(--soil);text-align:center}
.alama-page .frontier .wrap{max-width:980px}
.alama-page .frontier .quote{font-family:var(--serif);font-weight:300;font-size:clamp(1.7rem,4.2vw,3rem);line-height:1.16;letter-spacing:-.01em;margin:26px 0 30px}
.alama-page .frontier .quote em{font-style:italic;color:var(--orange)}
.alama-page .frontier .sub{max-width:60ch;margin:0 auto;color:var(--dim-on-dark)}
.alama-page .steps{display:grid;grid-template-columns:repeat(4,1fr);gap:0;margin-top:54px;border-top:1px solid var(--line-light)}
.alama-page .step{padding:30px 24px 30px 0;border-right:1px solid var(--line-light)}
.alama-page .step:last-child{border-right:none;padding-right:0}
.alama-page .step .sn{font-family:var(--mono);font-size:.8rem;color:var(--orange);letter-spacing:.1em}
.alama-page .step h3{margin:16px 0 10px;font-size:1.3rem}
.alama-page .step p{font-size:.95rem;color:var(--dim-on-light)}
@media(max-width:840px){.alama-page .steps{grid-template-columns:1fr 1fr}.alama-page .step{border-right:none;border-bottom:1px solid var(--line-light);padding:26px 0}}
@media(max-width:480px){.alama-page .steps{grid-template-columns:1fr}}
.alama-page .found{background:var(--soil-2);border-top:1px solid var(--line-dark);border-bottom:1px solid var(--line-dark)}
.alama-page .found-grid{display:grid;grid-template-columns:1.1fr 1fr;gap:clamp(36px,6vw,80px);align-items:center}
.alama-page .perks{display:grid;gap:14px}
.alama-page .perk{display:flex;gap:16px;align-items:flex-start;background:var(--soil);border:1px solid var(--line-dark);border-radius:14px;padding:20px}
.alama-page .perk .pi{width:34px;height:34px;border-radius:9px;background:rgba(242,88,15,.12);color:var(--orange);display:grid;place-items:center;font-family:var(--display);font-weight:700;flex:none}
.alama-page .perk h3{font-size:1.05rem;margin-bottom:4px}
.alama-page .perk p{font-size:.9rem;color:var(--dim-on-dark)}
.alama-page .countpill{display:inline-flex;align-items:center;gap:.6em;font-family:var(--mono);font-size:.74rem;letter-spacing:.12em;text-transform:uppercase;color:var(--tag);border:1px solid rgba(245,198,56,.3);border-radius:100px;padding:8px 15px;margin-bottom:22px}
@media(max-width:840px){.alama-page .found-grid{grid-template-columns:1fr;gap:38px}}

/* ---- form ---- */
.alama-page .formsec{background:var(--bone)}.alama-page .formsec.pad{padding:clamp(36px,5vw,64px) 0}
.alama-page .formcard{background:var(--bone-2);border:1px solid var(--line-light);border-top:3px solid var(--orange);border-radius:0 0 24px 24px;padding:clamp(20px,4vw,48px);max-width:860px;margin:0 auto;box-shadow:0 50px 90px -50px rgba(26,21,16,.4)}
.alama-page .form-group{margin-top:28px;padding-top:22px;border-top:1px solid var(--line-light)}
.alama-page .form-group:first-child{margin-top:0;padding-top:0;border-top:none}
.alama-page .form-group-label{font-family:var(--mono);font-size:.64rem;letter-spacing:.16em;text-transform:uppercase;color:var(--orange);margin-bottom:18px;display:block}
.alama-page .fgrid{display:grid;grid-template-columns:1fr 1fr;gap:16px 20px}
.alama-page .field{display:flex;flex-direction:column;gap:7px}
.alama-page .field.full{grid-column:1/-1}
.alama-page .field label{font-family:var(--mono);font-size:.65rem;letter-spacing:.08em;text-transform:uppercase;color:var(--dim-on-light)}
.alama-page .field label .req{color:var(--orange)}
.alama-page .field input[type=text],.alama-page .field input[type=email],.alama-page .field input[type=tel],.alama-page .field select,.alama-page .field textarea{font-family:var(--body);font-size:.97rem;color:var(--ink);background:#fff;border:1px solid var(--line-light);border-radius:10px;padding:11px 14px;width:100%;transition:border-color .2s}
.alama-page .field input:focus,.alama-page .field select:focus,.alama-page .field textarea:focus{outline:none;border-color:var(--orange)}
.alama-page .field textarea{resize:vertical;min-height:70px}
.alama-page .chips{display:flex;flex-wrap:wrap;gap:8px}
.alama-page .chip{position:relative}
.alama-page .chip input{position:absolute;opacity:0;inset:0;cursor:pointer}
.alama-page .chip span{display:inline-flex;align-items:center;font-size:.82rem;padding:7px 13px;border:1px solid var(--line-light);border-radius:100px;background:#fff;transition:all .18s;cursor:pointer;user-select:none;min-height:36px}
.alama-page .chip input:checked+span{background:var(--ink);color:var(--bone);border-color:var(--ink)}
.alama-page .chip input:focus-visible+span{outline:2px solid var(--orange);outline-offset:2px}
.alama-page .toggle-row{display:flex;align-items:center;gap:8px;font-size:.84rem;color:var(--dim-on-light);margin-top:4px}
.alama-page .toggle-row input{width:15px;height:15px;accent-color:var(--orange);flex:none}
.alama-page .form-foot{margin-top:24px;display:flex;align-items:center;gap:16px;flex-wrap:wrap}
.alama-page .consent{font-size:.78rem;color:var(--dim-on-light);max-width:46ch;line-height:1.5}
.alama-page .consent a{color:var(--orange);text-decoration:underline}
.alama-page .formsec .form-msg.ok{color:#5a7a36}
.alama-page .formsec .form-msg.err{color:var(--orange)}
.alama-page .form-msg{font-size:.88rem;margin-top:10px;min-height:1.2em}
@media(max-width:768px){.alama-page .fgrid{grid-template-columns:1fr}}
.alama-page .form-success{text-align:center;padding:30px 10px}
.alama-page .form-success .big{font-family:var(--display);font-size:1.7rem;color:var(--ink);margin:14px 0 8px}
.alama-page .form-success .check{width:54px;height:54px;border-radius:50%;background:var(--verify);display:inline-grid;place-items:center;color:#fff;font-size:1.6rem}

/* ---- contact ---- */
.alama-page .contact{background:var(--soil)}
.alama-page .contact-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:46px}
.alama-page .cc{display:flex;flex-direction:column;gap:8px;background:var(--soil-2);border:1px solid var(--line-dark);border-radius:18px;padding:28px;transition:transform .3s,border-color .3s}
.alama-page .cc:hover{transform:translateY(-4px);border-color:rgba(239,231,215,.28)}
.alama-page .cc.wa{background:linear-gradient(160deg,rgba(37,211,102,.14),var(--soil-2));border-color:rgba(37,211,102,.3)}
.alama-page .cc .ck{font-family:var(--mono);font-size:.7rem;letter-spacing:.12em;text-transform:uppercase;color:var(--dim-on-dark)}
.alama-page .cc .cv{font-family:var(--display);font-size:1.22rem;font-weight:600;letter-spacing:-.01em}
.alama-page .cc .cgo{margin-top:6px;font-size:.86rem;color:var(--orange);display:inline-flex;align-items:center;gap:.4em}
.alama-page .cc.wa .cgo{color:#3ddc84}
@media(max-width:760px){.alama-page .contact-grid{grid-template-columns:1fr}}
.alama-page footer{background:var(--soil);border-top:1px solid var(--line-dark);padding:48px 0 40px}
.alama-page .foot-in{display:flex;justify-content:space-between;gap:24px;flex-wrap:wrap;align-items:flex-start}
.alama-page .foot-brand{max-width:36ch}
.alama-page .foot-brand p{font-size:.86rem;color:var(--dim-on-dark);margin-top:12px}
.alama-page .foot-meta{font-family:var(--mono);font-size:.74rem;letter-spacing:.06em;color:var(--dim-on-dark);text-align:right;line-height:2}
.alama-page .foot-meta a:hover{color:var(--bone)}
.alama-page .foot-status{display:inline-flex;align-items:center;gap:.5em;color:var(--tag)}
.alama-page .foot-status .led{width:7px;height:7px;border-radius:50%;background:var(--tag);box-shadow:0 0 8px var(--tag)}
@media(max-width:600px){.alama-page .foot-meta{text-align:left}}

/* ---- mobile compact ---- */
@media(max-width:480px){
  .alama-page .pad{padding:48px 0}
  .alama-page .wrap{padding:0 16px}
  .alama-page .fgrid{gap:12px}
  .alama-page .formcard{padding:18px 14px;border-radius:0 0 18px 18px}
  .alama-page .chip span{font-size:.76rem;padding:6px 10px;min-height:34px}
  .alama-page .hero-art{max-width:100%}
  .alama-page .idcard{padding:16px 14px}
  .alama-page .id-row{font-size:.84rem;padding:9px 0}
  .alama-page .id-row .k{font-size:.62rem}
  .alama-page .id-row .val.mono{font-size:.78rem}
  .alama-page .pillar h2{font-size:clamp(1.7rem,6vw,2.6rem)}
  .alama-page .form-foot{flex-direction:column;align-items:stretch}
  .alama-page .form-foot .btn{width:100%}
  .alama-page .field textarea{min-height:60px}
  .alama-page .signup{flex-direction:column}
  .alama-page .signup input{min-width:0;width:100%}
  .alama-page .signup .btn{width:100%}
  .alama-page .sec-head{margin-bottom:36px}
  .alama-page .found-grid{gap:28px}
}

@media(prefers-reduced-motion:reduce){.alama-page *{animation:none!important}.alama-page .reveal{opacity:1;transform:none;transition:none}}
`;

const BREEDER_OPTS = ['Cattle','Dairy','Goats','Sheep','Poultry','Mixed','Other'];
const INTEREST_OPTS = [
  'RFID tagging & identity','Health & vaccination records','Five-generation lineage trees',
  'Performance & yield analytics','Verified marketplace','Registration certificates',
  'Disease alerts & vet integration','Movement & traceability','Mobile / offline capture','Reports & export',
];

function validEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

async function postToAirtable(fields: Record<string, unknown>) {
  const token = import.meta.env.VITE_AIRTABLE_TOKEN;
  const res = await fetch(`https://api.airtable.com/v0/${ALAMA_BASE}/${ALAMA_TABLE}`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ fields }),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error((err as { error?: { message?: string } })?.error?.message || 'Submission failed');
  }
}

export default function Alama() {
  const [weightDisplay, setWeightDisplay] = useState('— kg');
  const [heroEmail, setHeroEmail] = useState('');
  const [heroMsg, setHeroMsg] = useState({ text: '', type: '' });
  const [heroSubmitting, setHeroSubmitting] = useState(false);
  const [waValue, setWaValue] = useState('');
  const [waDisabled, setWaDisabled] = useState(false);
  const [leadMsg, setLeadMsg] = useState({ text: '', type: '' });
  const [leadSubmitting, setLeadSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const phoneRef = useRef<HTMLInputElement>(null);

  // Inject Google Fonts
  useEffect(() => {
    const link = document.createElement('link');
    link.id = 'alama-fonts';
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,300..800&family=Fraunces:ital,opsz,wght@0,9..144,300..600;1,9..144,300..500&family=Hanken+Grotesk:wght@300;400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap';
    document.head.appendChild(link);
    return () => { document.getElementById('alama-fonts')?.remove(); };
  }, []);

  // Inject scoped CSS
  useEffect(() => {
    const style = document.createElement('style');
    style.id = 'alama-css';
    style.textContent = ALAMA_CSS;
    document.head.appendChild(style);
    return () => { document.getElementById('alama-css')?.remove(); };
  }, []);

  // Body / html overrides
  useEffect(() => {
    const prevBg = document.body.style.background;
    const prevOverflow = document.body.style.overflowX;
    const prevScroll = document.documentElement.style.scrollBehavior;
    document.body.style.background = '#16110C';
    document.body.style.overflowX = 'hidden';
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.body.style.background = prevBg;
      document.body.style.overflowX = prevOverflow;
      document.documentElement.style.scrollBehavior = prevScroll;
    };
  }, []);

  // Scroll reveal
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const reveals = document.querySelectorAll('.alama-page .reveal');
    if ('IntersectionObserver' in window && !reduce) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
      reveals.forEach(el => io.observe(el));
      return () => io.disconnect();
    } else {
      reveals.forEach(el => el.classList.add('in'));
    }
  }, []);

  // Weight count-up
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) { setWeightDisplay('312 kg'); return; }
    const timer = setTimeout(() => {
      let t0: number | null = null;
      const frame = (ts: number) => {
        if (!t0) t0 = ts;
        const p = Math.min((ts - t0) / 1100, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        setWeightDisplay(Math.round(eased * 312) + ' kg');
        if (p < 1) requestAnimationFrame(frame);
      };
      requestAnimationFrame(frame);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const handleHeroSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validEmail(heroEmail)) {
      setHeroMsg({ text: 'Please enter a valid email address.', type: 'err' });
      return;
    }
    setHeroSubmitting(true);
    setHeroMsg({ text: '', type: '' });
    try {
      await postToAirtable({
        Email: heroEmail,
        Source: location.href,
        'Consent Timestamp': new Date().toISOString(),
        Status: 'New',
      });
      setHeroMsg({ text: '✓ You’re on the list. Watch your inbox.', type: 'ok' });
      setHeroEmail('');
    } catch {
      setHeroMsg({ text: 'Something went wrong — please try again.', type: 'err' });
    } finally {
      setHeroSubmitting(false);
    }
  };

  const handlePhoneInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (waDisabled) setWaValue(e.target.value);
  };

  const handleSameAsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setWaValue(phoneRef.current?.value || '');
      setWaDisabled(true);
    } else {
      setWaDisabled(false);
    }
  };

  const handleLeadSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if ((form.elements.namedItem('hp_name') as HTMLInputElement)?.value) return;

    const name = (form.elements.namedItem('fname') as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem('femail') as HTMLInputElement).value.trim();
    const channel = (form.elements.namedItem('fchannel') as HTMLSelectElement).value;
    const breeder = Array.from(form.querySelectorAll<HTMLInputElement>('input[name="breeder"]:checked')).map(c => c.value);
    const interest = Array.from(form.querySelectorAll<HTMLInputElement>('input[name="interest"]:checked')).map(c => c.value);

    const problems: string[] = [];
    if (!name) problems.push('your name');
    if (!validEmail(email)) problems.push('a valid email');
    if (!channel) problems.push('a preferred contact method');
    if (breeder.length === 0) problems.push('what you raise');
    if (interest.length === 0) problems.push('at least one feature');

    if (problems.length) {
      setLeadMsg({ text: 'Please add: ' + problems.join(', ') + '.', type: 'err' });
      return;
    }

    setLeadSubmitting(true);
    setLeadMsg({ text: '', type: '' });
    try {
      await postToAirtable({
        Name: name,
        Email: email,
        Phone: (form.elements.namedItem('fphone') as HTMLInputElement).value.trim(),
        WhatsApp: waValue,
        'Preferred Channel': channel,
        Region: (form.elements.namedItem('fregion') as HTMLInputElement).value.trim(),
        'Livestock Types': breeder,
        'Herd Size': (form.elements.namedItem('fherd') as HTMLSelectElement).value,
        'Pain Point': (form.elements.namedItem('fpain') as HTMLSelectElement).value,
        'Feature Interests': interest,
        Notes: (form.elements.namedItem('fnote') as HTMLTextAreaElement).value.trim(),
        Source: location.href,
        'Consent Timestamp': new Date().toISOString(),
        Status: 'New',
      });
      setShowSuccess(true);
    } catch {
      setLeadMsg({ text: 'Something went wrong — please try again.', type: 'err' });
      setLeadSubmitting(false);
    }
  };

  return (
    <div className="alama-page">

      {/* NAV */}
      <nav>
        <div className="wrap nav-in">
          <a href="#top" className="brand"><span className="dot"></span>Alama</a>
          <div className="nav-links">
            <a href="#how" className="muted">How it works</a>
            <a href="#yield" className="muted">Why it pays</a>
            <a href="#join" className="muted">Join</a>
            <a href="#join" className="btn nav-cta">Get early access</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <header className="hero" id="top">
        <div className="wrap hero-grid">
          <div className="hero-text">
            <span className="eyebrow reveal">RFID livestock intelligence · Launching 2026</span>
            <h1 className="reveal">Give every animal an identity the market can <em>trust.</em></h1>
            <p className="lead reveal">Alama puts a tamper-proof RFID identity on every animal — then turns that record into registration certificates and five-generation lineage trees the international market trusts. Authentic stock, world-standard pedigree, fairer prices. We're building it now. Get early access and help shape what we build.</p>
            <form className="signup reveal" noValidate onSubmit={handleHeroSubmit}>
              <input type="email" placeholder="Your email address" aria-label="Email address" autoComplete="email" value={heroEmail} onChange={e => setHeroEmail(e.target.value)} />
              <button type="submit" className="btn" disabled={heroSubmitting}>{heroSubmitting ? 'Sending…' : 'Get early access'}</button>
            </form>
            {heroMsg.text && <div className={`form-msg ${heroMsg.type}`} role="status" aria-live="polite">{heroMsg.text}</div>}
            <p className="micro">No spam. <span className="v">●</span> Build updates and founding-breeder access only.</p>
          </div>

          <div className="hero-art reveal">
            <div className="idcard">
              <div className="id-top">
                <div className="tagchip">
                  <span className="lab">RFID · TAG ID</span>
                  <span className="num">KE·MR·04821</span>
                </div>
                <span className="verify-pill"><span className="led"></span>VERIFIED</span>
              </div>
              <div className="id-rows">
                <div className="id-row"><span className="k">Breed</span><span className="val">Boran</span></div>
                <div className="id-row"><span className="k">Sire</span><span className="val mono">KE·MR·03110</span></div>
                <div className="id-row"><span className="k">Dam</span><span className="val mono">KE·MR·02987</span></div>
                <div className="id-row"><span className="k">Born</span><span className="val">14 Mar 2024</span></div>
                <div className="id-row"><span className="k">Weight</span><span className="val">{weightDisplay}</span></div>
                <div className="id-row"><span className="k">Health</span><span className="val">Up to date</span></div>
                <div className="id-row"><span className="k">Last scan</span><span className="val">Today · 06:42</span></div>
              </div>
              <div className="id-foot">
                <svg className="rfid" width="22" height="14" viewBox="0 0 22 14" aria-hidden="true">
                  <path d="M5 7a6 6 0 0 1 0 0M4 10a9 9 0 0 1 0-6M7 9a4 4 0 0 1 0-4" />
                  <circle cx="11" cy="7" r="1.6" fill="var(--orange)" stroke="none" />
                  <path d="M15 5a4 4 0 0 1 0 4M18 4a9 9 0 0 1 0 6" />
                </svg>
                PROVENANCE CHAIN VERIFIED
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* TICKER */}
      <div className="ticker" aria-hidden="true">
        <div className="ticker-track">
          <span>Lineage Certificates Pedigree trees Health Vaccinations Movement Weight Feed conversion Reproduction Provenance Yield</span>
          <span>Lineage Certificates Pedigree trees Health Vaccinations Movement Weight Feed conversion Reproduction Provenance Yield</span>
        </div>
      </div>

      {/* PROBLEM */}
      <section className="pad on-light">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">The problem</span>
            <h2>Right now, your best animal looks the same as a broker's worst.</h2>
            <p className="lead">Paper registers go missing. Buyers can't verify what they're paying for. Brokers profit from the confusion, and disease moves faster than the paperwork. When quality is invisible, it doesn't get paid for.</p>
          </div>
          <div className="prob-grid">
            <div className="prob reveal"><div className="pn">01</div><h3>Paper records</h3><p>Registers in a notebook get lost, copied wrong, or end with the herdsman who left.</p></div>
            <div className="prob reveal"><div className="pn">02</div><h3>Broker margins</h3><p>Middlemen sit between you and the buyer, and quietly keep the difference.</p></div>
            <div className="prob reveal"><div className="pn">03</div><h3>Counterfeit stock</h3><p>An ordinary animal gets sold as pedigree. Buyers get burned and trust collapses.</p></div>
            <div className="prob reveal"><div className="pn">04</div><h3>Disease blind spots</h3><p>By the time an outbreak is obvious, it has already moved through the pipeline.</p></div>
          </div>
        </div>
      </section>

      {/* AUTHENTICITY */}
      <section className="pad">
        <div className="wrap">
          <div className="pillar">
            <div className="p-text reveal">
              <span className="eyebrow">Authenticity</span>
              <h2>A verifiable identity for every animal.</h2>
              <p className="lead">From the moment an animal is tagged, every event — parentage, vaccinations, weight, every movement — is recorded against one identity that can't be swapped or forged. That builds an integrated market where every animal in the pipeline is provably authentic. Buyers stop guessing. Honest breeders stop competing with fakes.</p>
            </div>
            <div className="p-visual reveal">
              <div className="trail">
                <div className="trail-step"><div className="trail-dot"><span></span></div><div><div className="t">Birth · registered</div><div className="d">Identity + parentage recorded</div></div></div>
                <div className="trail-step"><div className="trail-dot"><span></span></div><div><div className="t">Growth · scanned</div><div className="d">Weight &amp; health attached</div></div></div>
                <div className="trail-step"><div className="trail-dot"><span></span></div><div><div className="t">Movement · logged</div><div className="d">Every transfer traceable</div></div></div>
                <div className="trail-step"><div className="trail-dot"><span></span></div><div><div className="t">Sale · verified</div><div className="d">Buyer sees the full chain</div></div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CERTIFIED PEDIGREE */}
      <section className="pad" style={{ borderTop: '1px solid var(--line-dark)' }}>
        <div className="wrap">
          <div className="pillar flip">
            <div className="p-text reveal">
              <span className="eyebrow">Certified pedigree</span>
              <h2>Certificates and lineage trees, generated for you.</h2>
              <p className="lead">Every tracked animal builds its own pedigree automatically. Alama turns that record into the documents the market runs on — registration certificates, breed and fullblood verification, and five-generation lineage trees, to the same standard the world's stud books use. No more notebooks that go missing, or a pedigree you can't prove. One record, fully papered.</p>
            </div>
            <div className="p-visual reveal">
              <div className="ped">
                <svg viewBox="0 0 340 272" xmlns="http://www.w3.org/2000/svg" fontFamily="'IBM Plex Mono', monospace" role="img" aria-label="Five-generation pedigree tree">
                  <g fill="none" stroke="rgba(239,231,215,.2)" strokeWidth="1">
                    <path d="M110,147 H116 M116,85 V205 M116,85 H120 M116,205 H120"/>
                    <path d="M212,85 H217 M217,50 V104 M217,50 H222 M217,104 H222"/>
                    <path d="M212,205 H217 M217,176 V230 M217,176 H222 M217,230 H222"/>
                    <path d="M292,50 H297 M297,38 V62 M297,38 H302 M297,62 H302"/>
                    <path d="M292,104 H297 M297,92 V116 M297,92 H302 M297,116 H302"/>
                    <path d="M292,176 H297 M297,164 V188 M297,164 H302 M297,188 H302"/>
                    <path d="M292,230 H297 M297,218 V242 M297,218 H302 M297,242 H302"/>
                  </g>
                  <g fill="rgba(239,231,215,.06)" stroke="rgba(239,231,215,.12)" strokeWidth="1">
                    <rect x="302" y="32" width="34" height="12" rx="3"/><rect x="302" y="56" width="34" height="12" rx="3"/>
                    <rect x="302" y="86" width="34" height="12" rx="3"/><rect x="302" y="110" width="34" height="12" rx="3"/>
                    <rect x="302" y="158" width="34" height="12" rx="3"/><rect x="302" y="182" width="34" height="12" rx="3"/>
                    <rect x="302" y="212" width="34" height="12" rx="3"/><rect x="302" y="236" width="34" height="12" rx="3"/>
                  </g>
                  <g>
                    <rect x="222" y="39" width="70" height="22" rx="5" fill="#1E1710" stroke="rgba(239,231,215,.16)"/>
                    <rect x="222" y="93" width="70" height="22" rx="5" fill="#1E1710" stroke="rgba(239,231,215,.16)"/>
                    <rect x="222" y="165" width="70" height="22" rx="5" fill="#1E1710" stroke="rgba(239,231,215,.16)"/>
                    <rect x="222" y="219" width="70" height="22" rx="5" fill="#1E1710" stroke="rgba(239,231,215,.16)"/>
                    <g fill="rgba(239,231,215,.6)" fontSize="7" textAnchor="middle">
                      <text x="257" y="53">KE·MR·22061</text><text x="257" y="107">KE·MR·15931</text>
                      <text x="257" y="179">KE·MR·11061</text><text x="257" y="233">KE·MR·08451</text>
                    </g>
                  </g>
                  <g>
                    <rect x="120" y="70" width="92" height="30" rx="6" fill="#1E1710" stroke="rgba(239,231,215,.16)"/>
                    <rect x="120" y="190" width="92" height="30" rx="6" fill="#1E1710" stroke="rgba(239,231,215,.16)"/>
                    <text x="166" y="83" textAnchor="middle" fontSize="5.5" fill="rgba(239,231,215,.5)" letterSpacing="1">SIRE</text>
                    <text x="166" y="94" textAnchor="middle" fontSize="8" fill="#EFE7D7">KE·MR·311</text>
                    <text x="166" y="203" textAnchor="middle" fontSize="5.5" fill="rgba(239,231,215,.5)" letterSpacing="1">DAM</text>
                    <text x="166" y="214" textAnchor="middle" fontSize="8" fill="#EFE7D7">KE·MR·510</text>
                  </g>
                  <g>
                    <rect x="6" y="125" width="104" height="44" rx="9" fill="#271E15" stroke="#F2580F" strokeWidth="1.5"/>
                    <rect x="14" y="133" width="20" height="13" rx="3" fill="#F5C638"/>
                    <text x="24" y="142.5" textAnchor="middle" fontSize="6.5" fill="#3a2c05" fontWeight="600">FB</text>
                    <text x="58" y="151" textAnchor="middle" fontSize="9" fill="#EFE7D7" fontWeight="600">KE·MR·04821</text>
                    <text x="58" y="162" textAnchor="middle" fontSize="5.5" fill="rgba(239,231,215,.55)">BORAN · FULLBLOOD</text>
                  </g>
                </svg>
                <div className="ped-cap">Five-generation pedigree · generated from tracked data</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAIR MARKET */}
      <section className="pad on-light">
        <div className="wrap">
          <div className="pillar flip">
            <div className="p-text reveal">
              <span className="eyebrow">Fair market</span>
              <h2>Cut out the brokers. Keep your margin.</h2>
              <p className="lead">When provenance is verifiable end to end, the information edge that brokers and imposters live on disappears. No animal gets passed off as something it isn't. Genuine buyers reach you directly — and the margin stays with the person who actually raised the animal. You.</p>
            </div>
            <div className="p-visual reveal" style={{ background: 'var(--bone-2)' }}>
              <div className="broker">
                <div className="broker-line cross"><span>Broker markup</span><span className="arrow">✕</span></div>
                <div className="broker-line cross"><span>Imposter stock</span><span className="arrow">✕</span></div>
                <div className="broker-line keep"><span>Breeder → Buyer</span><span className="arrow">→</span></div>
                <div className="broker-line keep"><span>Your full margin</span><span className="arrow">✓</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BIOSECURITY */}
      <section className="pad">
        <div className="wrap">
          <div className="pillar">
            <div className="p-text reveal">
              <span className="eyebrow">Biosecurity</span>
              <h2>Help vets get ahead of the outbreak.</h2>
              <p className="lead">Every identity carries its health and movement history. Aggregated, that data lets vets and animal-health officers detect and trace outbreaks early — following exposure across the pipeline before a local case becomes a regional disaster. Tracking isn't only commercial. It's a biosecurity layer for the whole sector.</p>
            </div>
            <div className="p-visual reveal">
              <div className="pulse-wrap">
                <svg className="pulse-svg" viewBox="0 0 300 120" aria-hidden="true">
                  <line className="grid" x1="0" y1="30" x2="300" y2="30"/>
                  <line className="grid" x1="0" y1="60" x2="300" y2="60"/>
                  <line className="grid" x1="0" y1="90" x2="300" y2="90"/>
                  <path className="wave" d="M0,60 L60,60 L80,60 L92,22 L104,96 L116,60 L150,60 L300,60"/>
                </svg>
                <div className="pulse-label">Anomaly detected · trace upstream</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FRONTIER */}
      <section className="pad frontier">
        <div className="wrap reveal">
          <span className="eyebrow" style={{ justifyContent: 'center' }}>The world stage</span>
          <p className="quote">Mechanisation changed farming. Genetics changed it again. <em>Data</em> is the next revolution — and it's how Kenyan breeds win the world market.</p>
          <p className="sub">International buyers don't just buy animals — they buy proof. With certified pedigree and tracked performance, Boran, Galla, Red Maasai and Dorper can command the prices their quality deserves, at home and across borders. The breeders who document first set the standard everyone else chases.</p>
        </div>
      </section>

      {/* YIELD */}
      <section className="pad on-light" id="yield">
        <div className="wrap">
          <div className="pillar flip">
            <div className="p-text reveal">
              <span className="eyebrow">Yield</span>
              <h2>Decisions you can prove. Yields you can measure.</h2>
              <p className="lead">Track performance across the whole pipeline — growth, feed conversion, reproduction, lineage outcomes — and breeding, feeding and culling stop being guesswork. Data-driven decisions compound, season after season, into a stronger herd and measurably higher yields.</p>
            </div>
            <div className="p-visual reveal" style={{ background: 'var(--soil)' }}>
              <div className="yield-tiles">
                <div className="ytile"><div className="yk">Avg daily gain</div><div className="yv">↑ tracked</div><div className="yt">per animal, over time</div></div>
                <div className="ytile"><div className="yk">Feed conversion</div><div className="yv">measured</div><div className="yt">cost per kg gained</div></div>
                <div className="ytile"><div className="yk">Conception rate</div><div className="yv">by sire</div><div className="yt">breed what works</div></div>
                <div className="ytile"><div className="yk">Mortality</div><div className="yv">flagged</div><div className="yt">caught early</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="pad" id="how">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">How it works</span>
            <h2>Four steps, one record per animal.</h2>
          </div>
          <div className="steps">
            <div className="step reveal"><div className="sn">01 · Tag</div><h3>Tag</h3><p>Fit an RFID ear tag and register the animal's identity and parentage.</p></div>
            <div className="step reveal"><div className="sn">02 · Track</div><h3>Track</h3><p>Scan at every touchpoint. Health, weight and movement attach automatically.</p></div>
            <div className="step reveal"><div className="sn">03 · Analyse</div><h3>Analyse</h3><p>See performance per animal and across the herd, in plain dashboards.</p></div>
            <div className="step reveal"><div className="sn">04 · Trade</div><h3>Trade</h3><p>Sell into a verified market with provenance buyers can trust.</p></div>
          </div>
        </div>
      </section>

      {/* FOUNDING */}
      <section className="pad found">
        <div className="wrap found-grid">
          <div className="reveal">
            <span className="countpill">
              <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: 'var(--tag)', display: 'inline-block' }}></span>
              Founding breeders · first 100
            </span>
            <h2>Be a founding breeder.</h2>
            <p className="lead" style={{ marginTop: '18px' }}>We're in development, with launch coming in 2026. Join the list now and you get build updates, first access at launch, founding-breeder pricing, and a real say in what we build — starting with the form below.</p>
          </div>
          <div className="perks reveal">
            <div className="perk"><div className="pi">→</div><div><h3>Early access</h3><p>Onboard before everyone else, the day we launch.</p></div></div>
            <div className="perk"><div className="pi">★</div><div><h3>Founding pricing</h3><p>Locked-in rates reserved for the first cohort.</p></div></div>
            <div className="perk"><div className="pi">✎</div><div><h3>Shape the roadmap</h3><p>The features breeders ask for most get built first.</p></div></div>
          </div>
        </div>
      </section>

      {/* INTEREST FORM */}
      <section className="pad formsec" id="join">
        <div className="wrap">
          <div className="sec-head reveal" style={{ textAlign: 'center', marginLeft: 'auto', marginRight: 'auto', marginBottom: '28px' }}>
            <span className="eyebrow" style={{ justifyContent: 'center' }}>Join the list</span>
            <h2 style={{ color: 'var(--ink)' }}>Tell us what your operation needs.</h2>
            <p className="lead" style={{ margin: '0 auto', color: 'var(--dim-on-light)' }}>Two minutes — puts you on the list and shapes what gets built first.</p>
          </div>

          <div className="formcard reveal">
            {showSuccess ? (
              <div className="form-success">
                <span className="check">✓</span>
                <div className="big">You're on the list.</div>
                <p style={{ color: 'var(--dim-on-light)', maxWidth: '44ch', margin: '0 auto' }}>Welcome aboard. Watch your inbox for build updates and founding-breeder access as we get closer to launch.</p>
              </div>
            ) : (
              <form noValidate onSubmit={handleLeadSubmit}>
                <input name="hp_name" tabIndex={-1} style={{ display: 'none' }} aria-hidden="true" />

                {/* Group 1: Contact */}
                <div className="form-group">
                  <span className="form-group-label">Your contact</span>
                  <div className="fgrid">
                    <div className="field">
                      <label htmlFor="fname">Full name <span className="req">*</span></label>
                      <input type="text" id="fname" name="fname" autoComplete="name" placeholder="Jane Kamau" />
                    </div>
                    <div className="field">
                      <label htmlFor="femail">Email <span className="req">*</span></label>
                      <input type="email" id="femail" name="femail" autoComplete="email" placeholder="jane@farm.co.ke" />
                    </div>
                    <div className="field">
                      <label htmlFor="fphone">Phone</label>
                      <input type="tel" id="fphone" name="fphone" autoComplete="tel" placeholder="+254 7xx xxx xxx" ref={phoneRef} onChange={handlePhoneInput} />
                    </div>
                    <div className="field">
                      <label htmlFor="fwa">WhatsApp</label>
                      <input type="tel" id="fwa" name="fwa" placeholder="+254 7xx xxx xxx" value={waValue} disabled={waDisabled} onChange={e => setWaValue(e.target.value)} />
                      <div className="toggle-row">
                        <input type="checkbox" id="sameAs" onChange={handleSameAsChange} />
                        <label htmlFor="sameAs" style={{ textTransform: 'none', letterSpacing: 0, fontFamily: 'var(--body)', fontSize: '.84rem', color: 'var(--dim-on-light)' }}>Same as phone</label>
                      </div>
                    </div>
                    <div className="field">
                      <label htmlFor="fchannel">Best way to reach you <span className="req">*</span></label>
                      <select id="fchannel" name="fchannel">
                        <option value="">Choose…</option>
                        <option>Email</option><option>Phone</option><option>WhatsApp</option>
                      </select>
                    </div>
                    <div className="field">
                      <label htmlFor="fregion">Region / County</label>
                      <input type="text" id="fregion" name="fregion" placeholder="e.g. Meru" />
                    </div>
                  </div>
                </div>

                {/* Group 2: Operation */}
                <div className="form-group">
                  <span className="form-group-label">Your operation</span>
                  <div className="fgrid">
                    <div className="field full">
                      <label>What do you raise? <span className="req">*</span></label>
                      <div className="chips">
                        {BREEDER_OPTS.map(v => (
                          <label className="chip" key={v}><input type="checkbox" name="breeder" value={v} /><span>{v}</span></label>
                        ))}
                      </div>
                    </div>
                    <div className="field">
                      <label htmlFor="fherd">Herd / flock size</label>
                      <select id="fherd" name="fherd">
                        <option value="">Choose…</option>
                        <option value="Under 50">Under 50</option>
                        <option value="50 – 200">50 – 200</option>
                        <option value="200 – 1,000">200 – 1,000</option>
                        <option value="1,000+">1,000+</option>
                      </select>
                    </div>
                    <div className="field">
                      <label htmlFor="fpain">Biggest challenge right now</label>
                      <select id="fpain" name="fpain">
                        <option value="">Choose…</option>
                        <option>Record keeping</option><option>Proving authenticity to buyers</option>
                        <option>Broker margins</option><option>Disease / health</option>
                        <option>Low yields</option><option>Market access</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Group 3: What you need */}
                <div className="form-group">
                  <span className="form-group-label">What should Alama do for you?</span>
                  <div className="fgrid">
                    <div className="field full">
                      <label>Pick everything that matters <span className="req">*</span></label>
                      <div className="chips">
                        {INTEREST_OPTS.map(v => (
                          <label className="chip" key={v}><input type="checkbox" name="interest" value={v} /><span>{v}</span></label>
                        ))}
                      </div>
                    </div>
                    <div className="field full">
                      <label htmlFor="fnote">Anything else to add?</label>
                      <textarea id="fnote" name="fnote" placeholder="Tell us about your operation or what would make this a yes for you."></textarea>
                    </div>
                  </div>
                </div>

                <div className="form-foot">
                  <button type="submit" className="btn" disabled={leadSubmitting}>
                    {leadSubmitting ? 'Sending…' : 'Join the founding breeders'}
                  </button>
                  <p className="consent">By joining you agree to receive build updates from Alama. We store only what's needed and you can unsubscribe anytime. <a href="#">Privacy notice</a>.</p>
                </div>
                {leadMsg.text && <div className={`form-msg ${leadMsg.type}`} role="status" aria-live="polite">{leadMsg.text}</div>}
              </form>
            )}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="pad contact">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">Prefer to talk?</span>
            <h2>Reach us directly.</h2>
          </div>
          <div className="contact-grid">
            <a className="cc reveal" href="mailto:zacqael4@gmail.com">
              <span className="ck">Email</span>
              <span className="cv">zacqael4@gmail.com</span>
              <span className="cgo">Send a message →</span>
            </a>
            <a className="cc reveal" href="tel:+254725665040">
              <span className="ck">Call</span>
              <span className="cv">0725 665 040</span>
              <span className="cgo">Tap to call →</span>
            </a>
            <a className="cc wa reveal" href="https://wa.me/254725665040?text=Hi%2C%20I%27m%20a%20breeder%20interested%20in%20Alama%20animal%20tracking." target="_blank" rel="noopener noreferrer">
              <span className="ck">WhatsApp</span>
              <span className="cv">Chat on WhatsApp</span>
              <span className="cgo">Open chat →</span>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="wrap foot-in">
          <div className="foot-brand">
            <div className="brand"><span className="dot"></span>Alama</div>
            <p>A verifiable identity for every animal — certificates, lineage and performance from birth to sale, to a standard the world recognises. Built by NeuraFlow.ai.</p>
          </div>
          <div className="foot-meta">
            <span className="foot-status"><span className="led"></span>In development · Launching 2026</span><br />
            <a href="#join">Join the list</a><br />
            <a href="#">Privacy notice</a><br />
            <span>© 2026 Alama · Meru, Kenya</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
