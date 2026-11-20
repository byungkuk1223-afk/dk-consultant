/* DKC CCS hero styles (shared by the site and dkc-ccs-hero.html). */
export const HERO_CSS = `
.ccs-hero{position:relative;width:100%;height:92vh;min-height:760px;margin-top:64px;overflow:hidden;color:#1E1B17;
  background-color:#F8F9FA;background-image:linear-gradient(rgba(30,27,23,.045) 1px,transparent 1px),linear-gradient(90deg,rgba(30,27,23,.045) 1px,transparent 1px);background-size:32px 32px;
  font-family:Lato,'Helvetica Neue',Arial,sans-serif}
.ccs-cv{position:absolute;inset:0;width:100%;height:100%;display:block}
.ccs-band{position:absolute;left:28px;right:28px;top:0;height:40px;display:flex;align-items:center;gap:28px;border-bottom:1px solid rgba(30,27,23,.28);
  font-size:11px;letter-spacing:.2em;color:rgba(30,27,23,.62);white-space:nowrap;z-index:3}
.ccs-band-r{margin-left:auto;color:rgba(30,27,23,.45)}
.ccs-state{background:none;border:1px solid rgba(30,27,23,.25);padding:4px 10px;font:inherit;letter-spacing:.18em;color:#0e7c86;cursor:pointer;display:flex;align-items:center;gap:7px}
.ccs-state i{display:inline-block;width:7px;height:7px;border-radius:50%;background:#0e7c86}
.ccs-state i.a{animation:ccsBlink 1.6s ease-in-out infinite}
.ccs-state i.p{background:#d97706}
@keyframes ccsBlink{50%{opacity:.25}}
.ccs-panel{position:absolute;left:0;top:40px;width:41%;max-width:640px;padding:44px 34px 0 max(28px,4vw);z-index:2;
  background:linear-gradient(90deg,rgba(248,249,250,.97) 0%,rgba(248,249,250,.93) 78%,rgba(248,249,250,0) 100%)}
.ccs-tag{font-size:11.5px;letter-spacing:.26em;color:#0e7c86;font-weight:700;margin-bottom:18px}
.ccs-h1{font-family:'Libre Baskerville',Georgia,serif;font-weight:400;font-size:clamp(28px,2.7vw,44px);line-height:1.18;color:#0b2545;margin-bottom:18px}
.ccs-sub{font-size:15.5px;line-height:1.7;color:rgba(30,27,23,.78);max-width:520px;margin-bottom:26px}
.ccs-ctas{display:flex;gap:12px;flex-wrap:wrap;margin-bottom:30px}
.ccs-btn{display:inline-block;padding:13px 24px;font-size:12.5px;letter-spacing:.12em;font-weight:700;text-transform:uppercase;transition:background .2s,color .2s}
.ccs-btn.pri{background:#0b2545;color:#fff;border:1px solid #0b2545}
.ccs-btn.pri:hover{background:#163a63}
.ccs-btn.sec{border:1px solid #0b2545;color:#0b2545;background:transparent}
.ccs-btn.sec:hover{background:#0b2545;color:#fff}
.ccs-pills{display:flex;flex-wrap:wrap;gap:8px}
.ccs-pill{position:relative;overflow:hidden;border:1px solid rgba(30,27,23,.22);background:rgba(255,255,255,.8);border-radius:999px;padding:8px 14px 10px;font:inherit;font-size:12.5px;color:rgba(30,27,23,.75);cursor:pointer}
.ccs-pill b{color:#0e7c86;margin-right:4px}
.ccs-pill.on{border-color:#0b2545;color:#0b2545;background:#fff;box-shadow:0 2px 10px rgba(11,37,69,.12)}
.ccs-bar{position:absolute;left:12px;right:12px;bottom:4px;height:2px;background:rgba(30,27,23,.08)}
.ccs-bar span{display:block;height:100%;width:0;background:#0e7c86}
.ccs-tb{position:absolute;left:28px;right:28px;bottom:18px;display:grid;grid-template-columns:19fr 27fr 26fr 28fr;border-top:1px solid rgba(30,27,23,.32);z-index:2;background:rgba(248,249,250,.9)}
.ccs-cell{position:relative;min-width:0;padding:12px 20px 4px}
.ccs-cell:first-child{padding-left:0}
.ccs-cell+.ccs-cell{border-left:1px solid rgba(30,27,23,.12)}
.ccs-hd{font-size:10px;letter-spacing:.3em;color:rgba(30,27,23,.45);margin-bottom:10px;white-space:nowrap}
.ccs-in{animation:ccsIn .6s ease both}
@keyframes ccsIn{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}
.ccs-no{font-family:'Libre Baskerville',Georgia,serif;font-size:52px;line-height:.9;color:#0e7c86}
.ccs-tt{font-family:'Libre Baskerville',Georgia,serif;font-size:21px;line-height:1.25;margin-top:10px;color:#0b2545}
.ccs-met{margin-bottom:8px}
.ccs-met .v{font-family:'Libre Baskerville',Georgia,serif;font-size:22px;line-height:1.15;color:#0b2545}
.ccs-met .n{font-size:11.5px;line-height:1.45;color:rgba(30,27,23,.6);margin-top:2px}
.ccs-ds{font-size:14px;line-height:1.62;color:rgba(30,27,23,.82)}
.ck{max-width:300px}
@media (max-width:900px){
  .ccs-hero{height:auto;min-height:900px}
  .ccs-band-r{display:none}
  .ccs-panel{position:relative;width:100%;max-width:none;top:40px;padding:26px 18px 10px;background:rgba(248,249,250,.95)}
  .ccs-tb{grid-template-columns:1fr 1fr;left:16px;right:16px}
  .ccs-c3,.ccs-c4{display:none}
}
`;
