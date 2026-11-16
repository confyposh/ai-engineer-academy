/* ================= APP ================= */
/* ---- track config (Track A defaults; other tracks set window.TRACK) ---- */
const T=Object.assign({
  key:"aiAcademy_v2", migrate:true,
  badge:"Free · self-paced · built just for you",
  h1:"Learn AI, <em>one bite</em> at a time.",
  lead:"A playful, no-fluff path from \"what's a variable?\" to shipping real AI products. Bite-sized lessons, hand-picked videos, quizzes and code you can run right here in your browser.",
  topics:["Python","Data","Machine Learning","Neural Networks","Azure AI","Agents","LLMs","RAG","Prompting","PyTorch"],
  modulesH:"Eleven stops, <em>one</em> AI engineer.",
  weeksH:"24 weeks, <em>roughly.</em>",
  road:[["0–1","Foundations","How code & computers actually work",1],["2–4","Python for AI","Write real programs with classes",2],["5–7","Data Science","Clean, analyse and chart anything",3],["8–11","Machine Learning","Build models that predict",4],["12–15","Deep Learning","Train neural nets in PyTorch",5],["16–17","Azure AI","Cloud AI services + certification",6],["18–19","Agents","AI that takes action",7],["20–21","Generative AI","LLMs, prompting & RAG",8],["22–24","Capstone","Ship a live portfolio project",9]],
  numOffset:0, label:null,
  otherLink:null
},window.TRACK||{});

const COLORS = ["#FF6B2C","#3DDC84","#FFD23F","#B79CFF","#FF8FB1","#5EB8FF","#FF6B2C","#3DDC84","#FFD23F","#B79CFF","#FF8FB1"];

/* ---- stickers (inline SVG) ---- */
const ST = {
  smile:(c,s=90)=>`<svg width="${s}" height="${s}" viewBox="0 0 100 100"><circle cx="50" cy="50" r="46" fill="${c}"/><circle cx="36" cy="40" r="6" fill="#12110f"/><circle cx="64" cy="40" r="6" fill="#12110f"/><path d="M30 60c8 14 32 14 40 0" stroke="#12110f" stroke-width="7" fill="none" stroke-linecap="round"/></svg>`,
  wink:(c,s=80)=>`<svg width="${s}" height="${s}" viewBox="0 0 100 100"><circle cx="50" cy="50" r="46" fill="${c}"/><path d="M28 41h14" stroke="#12110f" stroke-width="7" stroke-linecap="round"/><circle cx="64" cy="40" r="6" fill="#12110f"/><path d="M30 60c8 14 32 14 40 0" stroke="#12110f" stroke-width="7" fill="none" stroke-linecap="round"/></svg>`,
  star:(c,s=80)=>`<svg width="${s}" height="${s}" viewBox="0 0 100 100"><path d="M50 4l12 30 32 2-25 20 9 32-28-18-28 18 9-32L6 36l32-2z" fill="${c}"/></svg>`,
  spark:(c,s=70)=>`<svg width="${s}" height="${s}" viewBox="0 0 100 100"><path d="M50 0c4 30 16 42 50 50-34 8-46 20-50 50-4-30-16-42-50-50 34-8 46-20 50-50z" fill="${c}"/></svg>`,
  flower:(c,s=86)=>`<svg width="${s}" height="${s}" viewBox="0 0 100 100"><g fill="${c}">${[0,60,120,180,240,300].map(a=>`<circle cx="${50+26*Math.cos(a*Math.PI/180)}" cy="${50+26*Math.sin(a*Math.PI/180)}" r="22"/>`).join("")}</g><circle cx="50" cy="50" r="16" fill="#12110f"/></svg>`,
  bolt:(c,s=70)=>`<svg width="${s}" height="${s}" viewBox="0 0 100 100"><path d="M58 2L14 58h30l-8 40 50-60H54z" fill="${c}"/></svg>`,
  code:(c,s=86)=>`<svg width="${s}" height="${s}" viewBox="0 0 100 100"><rect x="4" y="14" width="92" height="72" rx="18" fill="${c}"/><path d="M38 38L26 50l12 12M62 38l12 12-12 12" stroke="#12110f" stroke-width="7" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  heart:(c,s=76)=>`<svg width="${s}" height="${s}" viewBox="0 0 100 100"><path d="M50 88S8 62 8 34a21 21 0 0142-6 21 21 0 0142 6c0 28-42 54-42 54z" fill="${c}"/></svg>`,
  ai:(c,s=80)=>`<svg width="${s}" height="${s}" viewBox="0 0 100 100"><rect x="18" y="18" width="64" height="64" rx="14" fill="${c}"/>${[30,50,70].map(p=>`<rect x="${p-4}" y="4" width="8" height="16" rx="4" fill="${c}"/><rect x="${p-4}" y="80" width="8" height="16" rx="4" fill="${c}"/><rect x="4" y="${p-4}" width="16" height="8" rx="4" fill="${c}"/><rect x="80" y="${p-4}" width="16" height="8" rx="4" fill="${c}"/>`).join("")}<text x="50" y="61" text-anchor="middle" font-family="Inter Tight,Arial,sans-serif" font-weight="800" font-size="30" fill="#12110f">AI</text></svg>`,
  cursor:(c,s=70)=>`<svg width="${s}" height="${s}" viewBox="0 0 100 100"><path d="M18 8l66 34-28 8-10 30z" fill="${c}" stroke="#12110f" stroke-width="5" stroke-linejoin="round"/></svg>`,
  pencil:(c,s=84)=>`<svg width="${s}" height="${s}" viewBox="0 0 100 100"><g transform="rotate(45 50 50)"><rect x="38" y="6" width="24" height="64" rx="4" fill="${c}"/><rect x="38" y="6" width="24" height="12" rx="4" fill="#FF8FB1"/><path d="M38 70h24L50 94z" fill="#F4EFE6"/><path d="M45 84h10L50 94z" fill="#12110f"/></g></svg>`,
  cloud:(c,s=92)=>`<svg width="${s}" height="${s}" viewBox="0 0 100 100"><path d="M28 76a20 20 0 01-2-40 26 26 0 0150-6 18 18 0 01-2 46z" fill="${c}"/><circle cx="40" cy="54" r="4.5" fill="#12110f"/><circle cx="60" cy="54" r="4.5" fill="#12110f"/><path d="M44 63c4 4 8 4 12 0" stroke="#12110f" stroke-width="4" fill="none" stroke-linecap="round"/></svg>`,
  brain:(c,s=84)=>`<svg width="${s}" height="${s}" viewBox="0 0 100 100"><path d="M50 18c-6-10-24-8-26 6-12 2-16 18-6 26-6 10 2 24 14 22 4 10 18 10 18 0zM50 18c6-10 24-8 26 6 12 2 16 18 6 26 6 10-2 24-14 22-4 10-18 10-18 0z" fill="${c}"/><path d="M50 18v54M34 36c6 2 8 8 6 14M66 36c-6 2-8 8-6 14" stroke="#12110f" stroke-width="4" fill="none" stroke-linecap="round"/></svg>`,
  rocket:(c,s=86)=>`<svg width="${s}" height="${s}" viewBox="0 0 100 100"><g transform="rotate(35 50 50)"><path d="M50 6c16 14 18 40 12 62H38C32 46 34 20 50 6z" fill="${c}"/><circle cx="50" cy="36" r="8" fill="#12110f"/><path d="M38 52L24 70l14-2zM62 52l14 18-14-2z" fill="#FF6B2C"/><path d="M42 70h16l-8 20z" fill="#FFD23F"/></g></svg>`,
  hash:(c,s=72)=>`<svg width="${s}" height="${s}" viewBox="0 0 100 100"><circle cx="50" cy="50" r="46" fill="${c}"/><text x="50" y="64" text-anchor="middle" font-family="JetBrains Mono,monospace" font-weight="700" font-size="40" fill="#12110f">{ }</text></svg>`,
};

/* ---- state ---- */
const KEY=T.key;
let S={done:{},quiz:{},watched:{},steps:{},xp:0,days:[],sound:true};
if(T.migrate)try{const o=localStorage.getItem("aiAcademyProgress_v1");if(o){const p=JSON.parse(o);S.done=p.done||{};S.quiz=p.quiz||{};}}catch(e){}
try{const s=localStorage.getItem(KEY);if(s)S=Object.assign(S,JSON.parse(s));}catch(e){}
const save=()=>{try{localStorage.setItem(KEY,JSON.stringify(S));}catch(e){}};
const today=()=>new Date().toISOString().slice(0,10);
function addXP(n,msg){
  S.xp=Math.max(0,S.xp+n);
  if(n>0&&!S.days.includes(today())){S.days.push(today());}
  save();updateNav();if(msg&&n>0)toast(`⚡ +${n} XP · ${msg}`);
}
function streak(){
  const set=new Set(S.days);let d=new Date(),n=0;
  if(!set.has(d.toISOString().slice(0,10))){d.setDate(d.getDate()-1);}
  while(set.has(d.toISOString().slice(0,10))){n++;d.setDate(d.getDate()-1);}
  return n;
}
const totalLessons=MODULES.reduce((n,m)=>n+m.lessons.length,0);
const doneCount=()=>Object.values(S.done).filter(Boolean).length;
const modDone=m=>m.lessons.filter((_,i)=>S.done[m.id+"-"+i]).length;

/* ---- sound (WebAudio blips) ---- */
let AC=null;
function blip(type="click"){
  if(!S.sound)return;
  try{
    AC=AC||new (window.AudioContext||window.webkitAudioContext)();
    const notes={click:[880],done:[660,880,1320],right:[740,988],wrong:[220,180],flip:[520]}[type]||[880];
    notes.forEach((f,i)=>{
      const o=AC.createOscillator(),g=AC.createGain(),t=AC.currentTime+i*.08;
      o.type=type==="wrong"?"sawtooth":"sine";o.frequency.value=f;
      g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(type==="click"?.05:.09,t+.01);g.gain.exponentialRampToValueAtTime(.0001,t+.14);
      o.connect(g);g.connect(AC.destination);o.start(t);o.stop(t+.16);
    });
  }catch(e){}
}
document.addEventListener("click",e=>{if(e.target.closest("button,a,.flash,.step,summary"))blip("click");},true);

/* ---- toast & confetti ---- */
let tT;function toast(t){const el=document.getElementById("toast");el.textContent=t;el.classList.add("show");clearTimeout(tT);tT=setTimeout(()=>el.classList.remove("show"),2200);}
function confetti(n=120){
  const cv=document.getElementById("confetti"),cx=cv.getContext("2d");cv.width=innerWidth;cv.height=innerHeight;
  const cols=["#FF6B2C","#3DDC84","#FFD23F","#B79CFF","#FF8FB1","#5EB8FF"];
  const P=Array.from({length:n},()=>({x:innerWidth/2+(Math.random()-.5)*200,y:innerHeight*.55,vx:(Math.random()-.5)*14,vy:-Math.random()*16-6,r:Math.random()*6+4,c:cols[Math.random()*6|0],a:Math.random()*6,s:Math.random()>.5}));
  let f=0;(function tick(){cx.clearRect(0,0,cv.width,cv.height);P.forEach(p=>{p.x+=p.vx;p.y+=p.vy;p.vy+=.45;p.a+=.15;cx.save();cx.translate(p.x,p.y);cx.rotate(p.a);cx.fillStyle=p.c;if(p.s)cx.fillRect(-p.r,-p.r/2,p.r*2,p.r);else{cx.beginPath();cx.arc(0,0,p.r/1.3,0,7);cx.fill();}cx.restore();});if(++f<130)requestAnimationFrame(tick);else cx.clearRect(0,0,cv.width,cv.height);})();
}

/* ---- draggable stickers ---- */
function makeDraggable(el,bounds){
  let sx,sy,ox,oy,moved=false;
  el.addEventListener("pointerdown",e=>{e.preventDefault();el.setPointerCapture(e.pointerId);el.classList.add("drag");moved=false;sx=e.clientX;sy=e.clientY;ox=el.offsetLeft;oy=el.offsetTop;});
  el.addEventListener("pointermove",e=>{if(!el.classList.contains("drag"))return;moved=true;let x=ox+e.clientX-sx,y=oy+e.clientY-sy;if(bounds){const b=bounds.getBoundingClientRect();x=Math.max(-20,Math.min(b.width-el.offsetWidth+20,x));y=Math.max(-20,Math.min(b.height-el.offsetHeight+20,y));}el.style.left=x+"px";el.style.top=y+"px";});
  el.addEventListener("pointerup",()=>{el.classList.remove("drag");if(moved)blip("flip");});
}


/* ---- track switcher in top bar ---- */
if(T.otherLink){const nv=document.querySelector(".nav .sp");if(nv){const l=document.createElement("a");l.className="pill";l.href=T.otherLink.url;l.style.textDecoration="none";l.style.color="var(--ink)";l.title=T.otherLink.label;l.innerHTML=`⇄ <span class="hide-s">${T.otherLink.label}</span><span class="show-s">${T.otherLink.short||T.otherLink.label.split(":")[0]}</span>`;nv.after(l);}}
/* ---- nav ---- */
function updateNav(){document.getElementById("xp").textContent=S.xp;document.getElementById("streak").textContent=streak();document.getElementById("snd").textContent=S.sound?"🔊":"🔈";}
document.getElementById("snd").onclick=()=>{S.sound=!S.sound;save();updateNav();toast(S.sound?"🔊 Sound on":"🔈 Sound off");};
document.getElementById("home").onclick=()=>go(null);
const drawer=document.getElementById("drawer"),scrim=document.getElementById("scrim");
document.getElementById("openDrawer").onclick=()=>{renderDrawer();drawer.classList.add("open");scrim.classList.add("show");};
scrim.onclick=closeDrawer;function closeDrawer(){drawer.classList.remove("open");scrim.classList.remove("show");}
function renderDrawer(){
  const pct=Math.round(doneCount()/totalLessons*100);
  drawer.innerHTML=`<div class="kicker">Your journey</div><h2 class="serif" style="font-size:40px;margin:8px 0 6px;line-height:1">${pct}% <em style="color:var(--orange)">done</em></h2>
  <div class="bar" style="margin-bottom:18px"><i style="width:${pct}%;background:var(--orange)"></i></div>
  <button class="drow" data-go="home"><span class="n">⌂</span><span class="t">Overview</span></button>`+
  MODULES.map((m,i)=>{const d=modDone(m),full=d===m.lessons.length;return `<button class="drow" data-go="${i}"><span class="n">${String(i+T.numOffset).padStart(2,"0")}</span><span class="t">${m.short}</span><span style="font-size:12px;color:var(--muted)">${full?"✓":d+"/"+m.lessons.length}</span><span class="sw" style="background:${COLORS[i]}"></span></button>`}).join("")+
  `<div style="margin-top:24px;border-top:1px solid var(--line);padding-top:16px"><button class="drow" id="reset"><span class="n">↺</span><span class="t" style="color:var(--muted)">Reset all progress</span></button></div>`;
  drawer.querySelectorAll("[data-go]").forEach(b=>b.onclick=()=>{closeDrawer();go(b.dataset.go==="home"?null:+b.dataset.go);});
  const r=document.getElementById("reset");r.onclick=()=>{if(r.dataset.c){S={done:{},quiz:{},watched:{},steps:{},xp:0,days:[],sound:S.sound};save();closeDrawer();go(null);toast("Fresh start ✨");}else{r.dataset.c=1;r.querySelector(".t").textContent="Tap again to confirm";}};
}

/* ---- helpers ---- */
function niceTitle(m){
  let t=m.title.replace(/^(Module \d+|Electives|Start Here):\s*/,"");
  if(m.id==="m10")t=m.title.replace(/^Electives:\s*/,"");
  const w=t.split(" ");if(w.length<2)return t;
  const last=w.pop();return w.join(" ")+" <em>"+last+"</em>";
}
function ring(p){const r=16,c=2*Math.PI*r;return `<svg class="ring" viewBox="0 0 40 40"><circle class="bgc" cx="20" cy="20" r="${r}"/><circle class="fg" cx="20" cy="20" r="${r}" stroke-dasharray="${c}" stroke-dashoffset="${c*(1-p)}"/></svg>`;}

/* ================= HOME ================= */
function renderHome(){
  document.documentElement.style.setProperty("--acc","#FF6B2C");
  const pct=Math.round(doneCount()/totalLessons*100);
  const next=(()=>{for(let i=0;i<MODULES.length;i++){if(modDone(MODULES[i])<MODULES[i].lessons.length)return i;}return 0;})();
  const quizzes=Object.keys(S.quiz).length;
  const topics=T.topics;
  const stk=[ST.smile,ST.star,ST.ai,ST.flower,ST.bolt,ST.heart,ST.code,ST.brain,ST.rocket,ST.cloud];
  const mq=topics.map((t,i)=>`<span>${t} ${stk[i%stk.length](COLORS[i%COLORS.length],34)}</span>`).join("");
  document.getElementById("main").innerHTML=`
  <div class="wrap">
    <section class="hero" id="hero">
      <span class="badge"><i></i> ${T.badge}</span>
      <h1>${T.h1}</h1>
      <p class="lead">${T.lead}</p>
      <div class="cta">
        <button class="btn acc" id="cont">${doneCount()?"Continue: "+MODULES[next].short+" →":"Let&rsquo;s go →"}</button>
        <button class="btn ghost" id="seeRoad">See the roadmap ↓</button>${T.otherLink?`<a class="btn ghost" href="${T.otherLink.url}" style="text-decoration:none">${T.otherLink.label} ↗</a>`:""}
      </div>
      <div class="stats">
        <div class="stat"><div class="v">${pct}<span style="font-size:24px">%</span></div><div class="l">Course complete</div></div>
        <div class="stat"><div class="v">${doneCount()}<span style="font-size:20px;color:var(--muted)">/${totalLessons}</span></div><div class="l">Lessons done</div></div>
        <div class="stat"><div class="v" style="color:var(--yellow)">${S.xp}</div><div class="l">XP earned</div></div>
        <div class="stat"><div class="v" style="color:var(--orange)">${streak()}🔥</div><div class="l">Day streak · ${quizzes} quizzes</div></div>
      </div>
    </section>
  </div>
  <div class="marquee"><div class="mtrack"><span>${mq}</span><span>${mq}</span></div></div>
  <div class="wrap">
    <section>
      <div class="secthead"><div><div class="kicker">The modules</div><h2>${T.modulesH}</h2></div><span style="color:var(--muted);font-size:14px">Tap any card to dive in</span></div>
      <div class="mgrid">${MODULES.map((m,i)=>{const d=modDone(m),p=d/m.lessons.length;return `
        <div class="mcard" data-go="${i}" style="--c:${COLORS[i]}">
          <div class="no">${String(i+T.numOffset).padStart(2,"0")} — ${m.weeks.split("·")[0].trim()}</div>
          <h3>${m.short}</h3>
          <p>${m.intro.split(". ")[0]}.</p>
          <div class="foot"><span>${p===1?'<span class="tagdone">Completed ✓</span>':d+" of "+m.lessons.length+" lessons"}</span>${ring(p)}</div>
        </div>`}).join("")}</div>
    </section>
    <section id="road">
      <div class="secthead"><div><div class="kicker">The plan</div><h2>${T.weeksH}</h2></div><span style="color:var(--muted);font-size:14px;max-width:320px">1 hour a day. Lessons Mon–Fri, practice on Saturday, quiz on Sunday.</span></div>
      <div class="road">${T.road.map(r=>`<div class="rrow" data-go="${r[3]}"><span class="w">WK ${r[0]}</span><span class="m">${r[1]}</span><span class="d">${r[2]}</span><span class="ar">→</span></div>`).join("")}</div>
    </section>
    ${playground()}
    <div class="footer"><span>Made for learning. Videos belong to their creators on YouTube.</span><span>Progress is saved in this browser.</span></div>
  </div>`;
  // hero stickers
  const hero=document.getElementById("hero");
  [[ST.smile("#3DDC84",104),"78%","8%"],[ST.star("#FFD23F",72),"88%","46%"],[ST.flower("#FF8FB1",82),"66%","62%"],[ST.spark("#B79CFF",54),"58%","14%"],[ST.ai("#5EB8FF",78),"90%","22%"],[ST.rocket("#F4EFE6",84),"72%","36%"],[ST.heart("#FF6B2C",60),"84%","66%"]].forEach(([svg,l,t],i)=>{
    const d=document.createElement("div");d.className="sticker";d.innerHTML=svg;d.style.left=l;d.style.top=t;d.style.transform=`rotate(${[-12,8,-6,14,-8,10,-14][i]}deg)`;
    if(innerWidth<620){if(i>1)return;d.style.left=["74%","58%"][i];d.style.top=["1%","5%"][i];d.style.zoom=".55";}
    hero.appendChild(d);makeDraggable(d,hero);
  });
  document.getElementById("cont").onclick=()=>go(next);
  document.getElementById("seeRoad").onclick=()=>document.getElementById("road").scrollIntoView();
  document.querySelectorAll("[data-go]").forEach(c=>c.onclick=()=>go(+c.dataset.go));
  bindPlayground();
}

function playground(){return `<div class="play" id="play"><div class="msg"><div class="kicker">Have a play</div><h3>Study breaks are <em>allowed.</em></h3><p style="color:var(--muted);margin:0;font-size:14px">Drag the stickers around. Seriously, it's good for your brain.</p></div><div class="ctrls"><button id="shake">Shake it up</button><button id="tidy">Tidy up</button></div></div>`;}
function bindPlayground(){
  const pl=document.getElementById("play");if(!pl)return;
  const all=[["smile","#3DDC84"],["wink","#FF6B2C"],["star","#FFD23F"],["flower","#FF8FB1"],["bolt","#B79CFF"],["code","#5EB8FF"],["heart","#FF6B2C"],["ai","#3DDC84"],["cursor","#FFD23F"],["pencil","#5EB8FF"],["cloud","#B79CFF"],["brain","#FF8FB1"],["rocket","#F4EFE6"],["hash","#FFD23F"],["spark","#3DDC84"],["smile","#FF8FB1"],["flower","#5EB8FF"],["star","#FF6B2C"],["wink","#B79CFF"],["heart","#3DDC84"],["bolt","#FFD23F"],["cloud","#5EB8FF"]];
  const kinds=innerWidth<620?all.slice(0,12):all;
  const sz=innerWidth<620?.72:1;const els=kinds.map(([k,c],i)=>{const d=document.createElement("div");d.className="sticker";d.innerHTML=ST[k](c,Math.round((64+(i%4)*12)*sz));pl.appendChild(d);makeDraggable(d,pl);return d;});
  function topMin(){const m=pl.querySelector(".msg");return m.offsetTop+m.offsetHeight+8;}
  function tidy(){const w=pl.clientWidth,t0=topMin(),avail=pl.clientHeight-t0-64;let cell=innerWidth<620?70:100;let cols=Math.max(3,Math.floor((w-40)/cell));let rows=Math.ceil(els.length/cols);if(rows*cell>avail){cell=Math.floor(avail/rows);}els.forEach((d,i)=>{d.style.transition="left .5s,top .5s,transform .5s";d.style.left=(20+(i%cols)*((w-40)/cols))+"px";d.style.top=(t0+Math.floor(i/cols)*cell)+"px";d.style.transform="rotate(0) scale("+Math.min(1,cell/(d.offsetHeight||cell))+")";setTimeout(()=>d.style.transition="",520);});}
  function shake(){els.forEach(d=>{d.style.transition="left .6s cubic-bezier(.2,1.4,.4,1),top .6s cubic-bezier(.2,1.4,.4,1)";d.style.left=Math.random()*(pl.clientWidth-d.offsetWidth)+"px";d.style.top=(topMin()+Math.random()*Math.max(10,pl.clientHeight-topMin()-60-d.offsetHeight))+"px";d.style.transform=`rotate(${(Math.random()-.5)*50}deg)`;setTimeout(()=>d.style.transition="",620);});}
  shake();document.getElementById("shake").onclick=()=>{shake();blip("done");};document.getElementById("tidy").onclick=tidy;
}

/* ================= MODULE ================= */
let current=null,tab="lessons";
function renderModule(i){
  const m=MODULES[i],col=COLORS[i];
  document.documentElement.style.setProperty("--acc",col);
  const d=modDone(m),p=Math.round(d/m.lessons.length*100);
  const tabs=[["lessons","Lessons",m.lessons.length],["videos","Watch",m.videos.length],["cards","Flashcards",m.terms.length],["quiz","Quiz",m.quiz.length],["practice","Build",m.task.steps.length]];
  document.getElementById("main").innerHTML=`
  <div class="wrap">
    <section class="mhero" id="mhero">
      <button class="back" id="back">← All modules</button>
      <div class="kicker">${T.label?T.label+" "+String(i+T.numOffset).padStart(2,"0"):(i===0?"Start here":i===10?"Bonus":"Module "+String(i).padStart(2,"0"))} · ${m.weeks}</div>
      <h1>${niceTitle(m)}</h1>
      <p class="intro">${m.intro}</p>
      <div class="eli"><span class="face"></span><div><b>In plain words</b><p>${m.eli5}</p></div></div>
      <div class="mprog"><div class="bar"><i style="width:${p}%"></i></div><span>${d}/${m.lessons.length} lessons · ${p}%</span></div>
    </section>
    <div class="tabs" id="tabs">${tabs.map(t=>`<button class="tab ${tab===t[0]?"on":""}" data-t="${t[0]}">${t[1]}<span class="cnt">${t[2]}</span></button>`).join("")}</div>
    <div id="tb"></div>
    <div class="mnav">
      ${i>0?`<button data-go="${i-1}"><small>← Previous</small><div>${MODULES[i-1].short}</div></button>`:`<button data-go="home"><small>← Back</small><div>Overview</div></button>`}
      ${i<MODULES.length-1?`<button class="r" data-go="${i+1}"><small>Next →</small><div>${MODULES[i+1].short}</div></button>`:`<button class="r" data-go="home"><small>Finish →</small><div>Overview</div></button>`}
    </div>
    ${playground()}
    <div class="footer"><span>Stuck? Ask an AI: "I'm a beginner, explain this step by step."</span><span>⚡ ${S.xp} XP</span></div>
  </div>`;
  // eli face: fix the face colors (orange bg → dark face w/ light features)
  const face=document.querySelector(".eli .face");face.innerHTML=`<svg width="40" height="40" viewBox="0 0 100 100"><circle cx="50" cy="50" r="46" fill="#12110f"/><circle cx="36" cy="40" r="6" fill="${col}"/><circle cx="64" cy="40" r="6" fill="${col}"/><path d="M30 60c8 14 32 14 40 0" stroke="${col}" stroke-width="7" fill="none" stroke-linecap="round"/></svg>`;
  document.getElementById("back").onclick=()=>go(null);
  document.querySelectorAll(".tab").forEach(b=>b.onclick=()=>{tab=b.dataset.t;document.querySelectorAll(".tab").forEach(x=>x.classList.toggle("on",x===b));renderTab(m,i);});
  document.querySelectorAll(".mnav [data-go]").forEach(b=>b.onclick=()=>go(b.dataset.go==="home"?null:+b.dataset.go));
  // module sticker
  const mh=document.getElementById("mhero");const s=document.createElement("div");s.className="sticker";s.innerHTML=[ST.smile,ST.star,ST.flower,ST.spark,ST.bolt,ST.code][i%6](col,innerWidth<620?56:96);s.style.right="2%";s.style.left="auto";s.style.top="30px";s.style.transform="rotate(10deg)";mh.appendChild(s);
  s.style.left=(mh.clientWidth-(innerWidth<620?70:120))+"px";s.style.right="";makeDraggable(s,mh);
  renderTab(m,i);bindPlayground();
}

function renderTab(m,i){
  const tb=document.getElementById("tb");
  if(tab==="lessons"){
    tb.innerHTML=m.lessons.map((l,j)=>{const k=m.id+"-"+j,dn=!!S.done[k];return `
      <details class="lesson ${dn?"isdone":""}" ${(!dn&&m.lessons.findIndex((_,x)=>!S.done[m.id+"-"+x])===j)?"open":""}>
        <summary><span class="ln">${String(j+1).padStart(2,"0")}</span><span class="lt">${l.t}</span><span class="chk">${dn?"✓":""}</span><span class="pl">+</span></summary>
        <div class="lbody">${l.b}<button class="donebtn ${dn?"undo":""}" data-k="${k}">${dn?"↺ Mark as not done":"✓ Got it! Mark as done"}</button></div>
      </details>`}).join("");
    enhanceCode(tb);
    tb.querySelectorAll(".donebtn").forEach(b=>b.onclick=()=>{
      const k=b.dataset.k,was=!!S.done[k];S.done[k]=!was;save();
      if(!was){addXP(10,"lesson complete");blip("done");confetti(80);
        if(modDone(m)===m.lessons.length){setTimeout(()=>{confetti(220);toast("🎉 Module complete! Take the quiz next.");},400);}
      }else addXP(-10);
      const idx=+k.split("-")[1];
      renderModule(i);
      if(!was){const ls=document.querySelectorAll(".lesson");ls.forEach(x=>x.open=false);if(ls[idx+1]){ls[idx+1].open=true;setTimeout(()=>ls[idx+1].scrollIntoView({behavior:"smooth",block:"start"}),50);}}
    });
  }
  else if(tab==="videos"){
    tb.innerHTML=`<p style="color:var(--muted);margin:0 0 14px">Watch in this order and code along in Colab. Tick "Watched" to earn XP.</p><div class="vgrid">`+m.videos.map((v,j)=>{const k=m.id+"-v"+j,w=!!S.watched[k];return `
      <div class="vcard"><div class="top"><span class="vplay ${v.search?"s":""}">${v.search?'<svg viewBox="0 0 24 24"><path d="M10 2a8 8 0 016.32 12.9l5.39 5.4-1.41 1.4-5.4-5.39A8 8 0 1110 2zm0 2a6 6 0 100 12 6 6 0 000-12z"/></svg>':'<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>'}</span><span class="vtag">${v.search?"YouTube search":(v.tag||"Watch")}</span></div>
      <h4>${v.t}</h4><p>${v.s}</p>
      <div class="vacts"><a href="${v.u}" target="_blank" rel="noopener">${v.search?"Search YouTube ↗":"Open ↗"}</a><button class="watched ${w?"on":""}" data-k="${k}">${w?"✓ Watched":"Watched?"}</button></div></div>`}).join("")+`</div>`;
    tb.querySelectorAll(".watched").forEach(b=>b.onclick=()=>{const k=b.dataset.k;S.watched[k]=!S.watched[k];save();if(S.watched[k]){addXP(15,"video watched");blip("right");}else addXP(-15);renderTab(m,i);});
  }
  else if(tab==="cards"){
    tb.innerHTML=`<div style="display:flex;justify-content:space-between;align-items:center;gap:10px;flex-wrap:wrap;margin-bottom:14px"><p style="color:var(--muted);margin:0">Tap a card to flip it. Say the meaning out loud before you flip.</p><button class="btn ghost" id="shuf" style="padding:9px 16px;font-size:13px">Shuffle ⤮</button></div><div class="fgrid" id="fg"></div>`;
    const draw=terms=>{document.getElementById("fg").innerHTML=terms.map((t,j)=>`<div class="flash" style="--fc:${COLORS[(i+j)%COLORS.length]}"><div class="in"><div class="f"><small>Term ${j+1}</small><b>${t[0]}</b><small>tap to flip ↻</small></div><div class="b"><small>Meaning</small><span>${t[1]}</span><small>tap to flip back</small></div></div></div>`).join("");
      document.querySelectorAll(".flash").forEach(f=>f.onclick=()=>{f.classList.toggle("flip");blip("flip");});};
    draw(m.terms);document.getElementById("shuf").onclick=()=>draw([...m.terms].sort(()=>Math.random()-.5));
  }
  else if(tab==="quiz"){runQuiz(m,i);}
  else if(tab==="practice"){
    const st=S.steps[m.id]||[];
    tb.innerHTML=`<div class="task"><div class="kicker">Hands-on project</div><h3>${m.task.t}</h3>`+m.task.steps.map((s,j)=>`<div class="step ${st[j]?"on":""}" data-j="${j}"><span class="box">${st[j]?"✓":""}</span><span>${s}</span></div>`).join("")+
    `<div class="callout tip" style="margin-top:18px"><b>Stuck?</b>Paste your code and error into an AI and ask: "I'm a beginner. Explain what's wrong and how to fix it, step by step."</div></div>`;
    const t=tb.querySelector(".task"),sk=document.createElement("div");sk.className="sticker";sk.innerHTML=ST.code(COLORS[i],70);sk.style.left=(t.clientWidth-90)+"px";sk.style.top="18px";sk.style.transform="rotate(8deg)";t.appendChild(sk);makeDraggable(sk,t);
    tb.querySelectorAll(".step").forEach(el=>el.onclick=()=>{const j=+el.dataset.j;const a=S.steps[m.id]=S.steps[m.id]||[];a[j]=!a[j];save();
      if(a[j]){addXP(5,"step done");if(m.task.steps.every((_,x)=>a[x])){confetti(220);addXP(50,"project complete! 🏆");blip("done");}}else addXP(-5);renderTab(m,i);});
  }
}

/* ---- quiz, one question at a time ---- */
function runQuiz(m,i){
  const tb=document.getElementById("tb");let q=0,right=0,res=[];
  const keys="ABCDEF";
  function show(){
    if(q>=m.quiz.length){
      const pct=right/m.quiz.length,prev=S.quiz[m.id];S.quiz[m.id]=Math.max(prev||0,right);save();
      if(prev===undefined||right>prev)addXP(right*5,"quiz score");
      if(pct>=.8){confetti(240);blip("done");}
      tb.innerHTML=`<div class="qwrap"><div class="qcard result"><div class="kicker" style="justify-content:center">Your score</div><div class="big">${right}/${m.quiz.length}</div>
      <p style="font-family:var(--serif);font-size:30px;margin:6px 0 18px">${pct>=.8?"You're <em>flying.</em> On to the next!":pct>=.5?"Nice! A <em>quick review</em> and you've got it.":"No stress. <em>Re-read</em> and try again."}</p>
      <div class="cta" style="justify-content:center"><button class="btn ghost" id="again">Try again ↺</button>${i<MODULES.length-1?`<button class="btn acc" id="nextm">Next module →</button>`:""}</div></div></div>`;
      document.getElementById("again").onclick=()=>runQuiz(m,i);const nm=document.getElementById("nextm");if(nm)nm.onclick=()=>go(i+1);return;
    }
    const Q=m.quiz[q];
    tb.innerHTML=`<div class="qwrap"><div class="qcard"><div class="qdots">${m.quiz.map((_,j)=>`<i class="${j<q?(res[j]?"r":"w"):j===q?"cur":""}"></i>`).join("")}</div>
      <div class="qn">Question ${q+1} of ${m.quiz.length}</div><div class="qq">${Q.q}</div>
      ${Q.o.map((o,j)=>`<button class="opt" data-j="${j}"><span class="k">${keys[j]}</span><span>${o}</span></button>`).join("")}
      <div class="qex" id="qex"></div><div class="qnext" id="qn"></div></div></div>`;
    tb.querySelectorAll(".opt").forEach(b=>b.onclick=()=>{
      if(tb.querySelector(".opt.right"))return;const j=+b.dataset.j,ok=j===Q.a;
      tb.querySelectorAll(".opt").forEach(x=>{if(+x.dataset.j===Q.a)x.classList.add("right");});if(!ok)b.classList.add("wrong");
      res.push(ok);if(ok)right++;blip(ok?"right":"wrong");
      const ex=document.getElementById("qex");ex.innerHTML=`<b style="color:${ok?"var(--green)":"#FF8F7A"}">${ok?["Nailed it!","Yes! Exactly.","Spot on."][q%3]:["Not quite.","Close, but no.","Good try."][q%3]}</b> ${Q.e}`;ex.classList.add("show");
      document.getElementById("qn").innerHTML=`<button class="btn acc" id="nx">${q===m.quiz.length-1?"See my score":"Next question"} →</button>`;
      document.getElementById("nx").onclick=()=>{q++;show();};
    });
  }
  show();
}

/* ---- code boxes: editable + runnable in-browser (Pyodide) ---- */
let pyReady=null;
function loadPy(){
  if(pyReady)return pyReady;
  pyReady=new Promise((res,rej)=>{const s=document.createElement("script");s.src="https://cdn.jsdelivr.net/pyodide/v0.26.4/full/pyodide.js";s.onload=async()=>{try{res(await loadPyodide());}catch(e){rej(e);}};s.onerror=()=>rej(new Error("Couldn't load the Python runner. Check your internet."));document.head.appendChild(s);});
  return pyReady;
}
function enhanceCode(root){
  root.querySelectorAll("pre").forEach((pre,n)=>{
    const code=pre.querySelector("code");if(!code)return;
    const looksPy=/print\(|import |def |=|for |class /.test(code.textContent);
    const box=document.createElement("div");box.className="codebox";
    box.innerHTML=`<div class="codebar"><span class="dots"><i></i><i></i><i></i></span><span>${looksPy?"python · editable":"notes"}</span><span class="sp"></span><button class="copy">Copy</button>${looksPy?'<button class="run">▶ Run</button>':""}</div>`;
    pre.parentNode.insertBefore(box,pre);box.appendChild(pre);
    const out=document.createElement("div");out.className="out";box.appendChild(out);
    if(looksPy){code.setAttribute("contenteditable","true");code.setAttribute("spellcheck","false");}
    box.querySelector(".copy").onclick=async e=>{try{await navigator.clipboard.writeText(code.innerText);e.target.textContent="Copied ✓";}catch(_){e.target.textContent="Select & copy";}setTimeout(()=>e.target.textContent="Copy",1500);};
    const run=box.querySelector(".run");if(!run)return;
    run.onclick=async()=>{
      run.disabled=true;run.textContent=pyReady?"Running…":"Loading Python… (first time ~10s)";out.className="out show";out.textContent="";
      try{
        const py=await loadPy();let buf="";
        py.setStdout({batched:s=>buf+=s+"\n"});py.setStderr({batched:s=>buf+=s+"\n"});
        const src=code.innerText.replace(/^!pip.*$/gm,"");
        try{await py.loadPackagesFromImports(src);}catch(_){}
        const r=await py.runPythonAsync(src);
        if(r!==undefined&&r!==null&&!buf)buf=String(r);
        out.textContent=buf||"✓ Ran with no output. (Add a print() to see results!)";
                addXP(2,"code run");
      }catch(e){
        out.className="out show err";
        const msg=String(e.message||e).trim().split("\n").filter(Boolean).pop();
        out.textContent="⚠ "+msg+"\n\n"+(/ModuleNotFound|No module|fetch|URL|urlopen|input|torch|nltk|transformers|threading/i.test(String(e))
          ?"This snippet needs something the in-browser runner doesn't have (internet, input(), or a big library). Run it in Google Colab instead: colab.research.google.com"
          :"That's a real Python error. Read the last line above, fix the code (it's editable!) and run again.");
      }
      run.disabled=false;run.textContent="▶ Run";
    };
  });
}

/* ================= ROUTER ================= */
function go(i){
  current=i;tab="lessons";closeDrawer();
  try{history.replaceState(null,"",i===null?"#overview":"#module-"+i);}catch(e){}
  i===null?renderHome():renderModule(i);updateNav();window.scrollTo(0,0);
}
(function(){const mm=location.hash.match(/^#module-(\d+)$/);go(mm&&MODULES[+mm[1]]?+mm[1]:null);})();
window.addEventListener("hashchange",()=>{const mm=location.hash.match(/^#module-(\d+)$/);const t=mm&&MODULES[+mm[1]]?+mm[1]:null;if(t!==current)go(t);});
document.addEventListener("keydown",e=>{if(e.target.isContentEditable)return;if(current!==null&&e.key==="ArrowRight"&&current<MODULES.length-1)go(current+1);if(current!==null&&e.key==="ArrowLeft")go(current>0?current-1:null);});
