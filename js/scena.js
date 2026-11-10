/* Zimska scena u zaglavlju i pahulje koje padaju preko celog sajta.
   Koristi pomoćne funkcije iz app.js (jelkaUnutra, tacka, zvezdaPutanja). */

function scena(){
  const usko=window.matchMedia("(max-width:620px)").matches;
  // pastelni snežni bor (pozadina na logou)
  const bor=(x,y,sc)=>{ let g=`<g transform="translate(${x} ${y}) scale(${sc})">`;
    g+=`<rect x="-7" y="-14" width="14" height="16" rx="3" fill="#8a5a36"/><ellipse cx="0" cy="2" rx="46" ry="6" fill="#ffffff" opacity=".9"/>`;
    [[-150,-100,34],[-118,-62,44],[-82,-16,56]].forEach(([v,d,w])=>{
      g+=`<path d="M0 ${v} L${w} ${d} Q0 ${d+12} ${-w} ${d}Z" fill="url(#sc-bor)"/>`;
      g+=`<path d="M0 ${v} L${w*.62} ${v+(d-v)*.62} q${-w*.12} 8 ${-w*.24} 2 q${-w*.14} 8 ${-w*.28} 0 q${-w*.14} 8 ${-w*.28} 0 q${-w*.12} 6 ${-w*.24} -2Z" fill="#ffffff"/>`;
      g+=`<path d="M${-w} ${d} Q0 ${d+12} ${w} ${d} Q${w*.6} ${d+8} ${w*.3} ${d+4} Q0 ${d+12} ${-w*.3} ${d+4} Q${-w*.6} ${d+8} ${-w} ${d}Z" fill="#ffffff" opacity=".9"/>`;
    });
    return g+`</g>`; };
  // jelka od medenjaka sa glazurom (prednji plan na logou)
  const medenaJelka=(x,y,sc)=>`<g transform="translate(${x} ${y}) scale(${sc}) translate(-100 -178)">${CRTEZI.jelka()}</g>`;
  const jelka=(x,y,sc,seme)=>`<g transform="translate(${x} ${y}) scale(${sc}) translate(-120 -266)">${jelkaUnutra(seme)}</g>`;
  const gumena=(x,y,b)=>`<g transform="translate(${x} ${y})"><path d="M-11 0 Q-12 -18 0 -19 Q12 -18 11 0Z" fill="${b}"/><path d="M-6 -12 q3 -5 7 -5" stroke="#fff" stroke-width="2.4" opacity=".6" fill="none" stroke-linecap="round"/>${[[-5,-6],[3,-10],[6,-3],[-2,-14],[-7,-2]].map(([a,c])=>`<circle cx="${a}" cy="${c}" r="1" fill="#fff" opacity=".85"/>`).join("")}<path d="M-13 1 Q0 -4 13 1 Q0 4 -13 1Z" fill="#ffffff"/></g>`;
  const stap=(x,y,sc,obrnut)=>{ const d=obrnut?`M0 0 V-70 q0 -22 -20 -22 q-20 0 -20 18`:`M0 0 V-70 q0 -22 20 -22 q20 0 20 18`;
    return `<g transform="translate(${x} ${y}) scale(${sc})"><path d="${d}" fill="none" stroke="#ffffff" stroke-width="13" stroke-linecap="round"/><path d="${d}" fill="none" stroke="#e5483f" stroke-width="13" stroke-dasharray="9 9" stroke-linecap="round"/><path d="${d}" fill="none" stroke="#ffffff" stroke-width="3" opacity=".5" transform="translate(-3 0)"/></g>`; };
  let s=`<svg viewBox="${usko?"40 -64 1120 364":"0 0 1200 300"}" preserveAspectRatio="${usko?"xMidYMax meet":"xMidYMax slice"}" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <defs>
    <linearGradient id="sc-tlo" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset=".6" stop-color="#eef5fe"/><stop offset="1" stop-color="#e6f0fb"/></linearGradient>
    <linearGradient id="sc-brdo" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#bcd5f4"/><stop offset="1" stop-color="#9ebfe9"/></linearGradient>
    <radialGradient id="sc-sjaj"><stop offset="0" stop-color="#ffd98a" stop-opacity=".6"/><stop offset=".5" stop-color="#ffc861" stop-opacity=".18"/><stop offset="1" stop-color="#ffc861" stop-opacity="0"/></radialGradient>
    <linearGradient id="sc-zid" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#d98b4b"/><stop offset="1" stop-color="#a55c2a"/></linearGradient>
    <linearGradient id="sc-krov" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7a4224"/><stop offset="1" stop-color="#552912"/></linearGradient>
    <radialGradient id="sc-prozor" cy=".6"><stop offset="0" stop-color="#fff6d2"/><stop offset=".55" stop-color="#ffd166"/><stop offset="1" stop-color="#f39a2e"/></radialGradient>
    <linearGradient id="sc-vrata" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7c4325"/><stop offset="1" stop-color="#4f2612"/></linearGradient>
    <radialGradient id="sc-sneg" cx=".36" cy=".3" r=".8"><stop offset="0" stop-color="#ffffff"/><stop offset=".55" stop-color="#f4f9ff"/><stop offset="1" stop-color="#c9dcf4"/></radialGradient>
    <linearGradient id="sc-crveno" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f25a4e"/><stop offset="1" stop-color="#b3221c"/></linearGradient>
    <linearGradient id="sc-plavo" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5aa2ff"/><stop offset="1" stop-color="#2d64d0"/></linearGradient>
    <linearGradient id="sc-zlato" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ffe7a0"/><stop offset="1" stop-color="#d49a2b"/></linearGradient>
    <linearGradient id="sc-irvas" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#b47c4f"/><stop offset="1" stop-color="#83552f"/></linearGradient>
    <linearGradient id="sc-dzak" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#c79a63"/><stop offset="1" stop-color="#8f6337"/></linearGradient>
    <linearGradient id="sc-sargarepa" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#ff9a3c"/><stop offset="1" stop-color="#e5671b"/></linearGradient>
    <linearGradient id="sc-bor" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#a9d0a3"/><stop offset="1" stop-color="#78ad7c"/></linearGradient>
    <filter id="sc-meko" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="5"/></filter>
    <clipPath id="sc-krov-clip"><path d="M500 168 L600 86 L700 168Z"/></clipPath>
  </defs>`;

  /* mesec i daleka brda */
  s+=`<path d="M0 228 C120 186 240 196 330 214 C430 234 520 200 640 196 C780 192 860 222 980 206 C1080 192 1150 204 1200 196 V300 H0Z" fill="url(#sc-brdo)" opacity=".55"/>`;
  // simetrično oko logoa (x=600)
  s+=bor(55,236,1.05)+bor(1145,236,1.05)+bor(150,214,.62)+bor(1050,214,.62)+bor(455,220,.7)+bor(745,220,.7);
  s+=`<path d="M0 250 C160 220 300 228 400 240 C520 254 620 246 720 236 C860 222 980 228 1080 238 C1140 244 1180 240 1200 236 V300 H0Z" fill="url(#sc-tlo)"/>`;

  /* ---------- LOGO u sredini scene (x=600) ---------- */
  s+=`<circle cx="600" cy="196" r="150" fill="url(#sc-sjaj)"/>`;
  s+=`<ellipse cx="600" cy="254" rx="104" ry="9" fill="#9dbbe3" opacity=".45" filter="url(#sc-meko)"/>`;
  // logo umesto kućice
  s+= usko ? `<image href="slike/logo.webp" x="438" y="-56" width="324" height="347"/>`
           : `<image href="slike/logo.webp" x="472" y="12" width="256" height="274"/>`;


  /* ---------- SNEŠKO BELIĆ (x=330) ---------- */
  const X=345;
  s+=`<ellipse cx="${X}" cy="262" rx="44" ry="7" fill="#9dbbe3" opacity=".5" filter="url(#sc-meko)"/>`;
  // ruke
  s+=`<path d="M${X-22} 186 C${X-38} 178 ${X-48} 170 ${X-58} 156 M${X-46} 168 l-10 -2 M${X+22} 186 C${X+38} 176 ${X+50} 168 ${X+58} 152 M${X+48} 165 l9 -5" stroke="#6b3f22" stroke-width="3.6" stroke-linecap="round" fill="none"/>`;
  s+=`<circle cx="${X-59}" cy="153" r="7" fill="url(#sc-crveno)"/><circle cx="${X+59}" cy="149" r="7" fill="url(#sc-crveno)"/>`;
  // telo
  s+=`<circle cx="${X}" cy="228" r="35" fill="url(#sc-sneg)"/><circle cx="${X}" cy="183" r="26" fill="url(#sc-sneg)"/><circle cx="${X}" cy="146" r="20" fill="url(#sc-sneg)"/>`;
  [176,190,206,222].forEach((y,i)=>s+=`<circle cx="${X}" cy="${y+(i>1?14:0)}" r="3.4" fill="#6b3f22"/>`);
  // šal
  s+=`<path d="M${X-20} 160 Q${X} 172 ${X+20} 160 L${X+21} 168 Q${X} 180 ${X-21} 168Z" fill="url(#sc-crveno)"/>`;
  s+=`<path d="M${X-12} 164 l2 9 M${X} 167 l0 9 M${X+12} 164 l-2 9" stroke="#ffffff" stroke-width="3" stroke-linecap="round" opacity=".9"/>`;
  s+=`<path d="M${X+8} 170 L${X+14} 200 L${X+24} 197 L${X+18} 168Z" fill="url(#sc-crveno)"/><path d="M${X+12} 184 l9 -2 M${X+14} 192 l9 -2" stroke="#ffffff" stroke-width="2.6"/>`;
  s+=`<path d="M${X+14} 200 l1 5 M${X+18} 199 l1 5 M${X+22} 198 l1 5" stroke="#b3221c" stroke-width="2" stroke-linecap="round"/>`;
  // lice
  s+=`<ellipse cx="${X-7}" cy="142" rx="2.6" ry="3.4" fill="#2b3142"/><ellipse cx="${X+7}" cy="142" rx="2.6" ry="3.4" fill="#2b3142"/><circle cx="${X-6}" cy="140.8" r="1" fill="#fff"/><circle cx="${X+8}" cy="140.8" r="1" fill="#fff"/>`;
  s+=`<circle cx="${X-12}" cy="150" r="4" fill="#ff8fa3" opacity=".55"/><circle cx="${X+12}" cy="150" r="4" fill="#ff8fa3" opacity=".55"/>`;
  s+=`<path d="M${X-1} 146 L${X+20} 151 L${X-1} 151.5Z" fill="url(#sc-sargarepa)"/>`;
  s+=`<path d="M${X-6} 155 q6 5 12 0" fill="none" stroke="#2b3142" stroke-width="2.2" stroke-linecap="round"/>`;
  // cilindar kao na logou
  s+=`<ellipse cx="${X}" cy="131" rx="24" ry="5.5" fill="#5e3519"/>`;
  s+=`<path d="M${X-14} 131 L${X-13} 100 Q${X} 96 ${X+13} 100 L${X+14} 131Z" fill="#6f4020"/>`;
  s+=`<path d="M${X-13.6} 122 Q${X} 126 ${X+13.6} 122 L${X+13.8} 128 Q${X} 132 ${X-13.8} 128Z" fill="#e5483f"/>`;
  s+=`<path d="M${X-8} 102 V124" stroke="#ffffff" stroke-width="2.4" opacity=".25" stroke-linecap="round"/>`;
  s+=`<ellipse cx="${X}" cy="100" rx="13" ry="3.4" fill="#7d4a27"/>`;

  s+=`<g transform="translate(78 0)">`;
  /* ---------- IRVASI (x≈925 i 1010) ---------- */
  const irvas_=(x,saal)=>`<g transform="translate(${x} 252)">
    <ellipse cx="6" cy="2" rx="40" ry="5" fill="#9dbbe3" opacity=".5"/>
    <rect x="-28" y="-34" width="7" height="34" rx="3.5" fill="#7a4d2b"/><rect x="-16" y="-34" width="7" height="34" rx="3.5" fill="#8b5a33"/>
    <rect x="14" y="-34" width="7" height="34" rx="3.5" fill="#7a4d2b"/><rect x="25" y="-34" width="7" height="34" rx="3.5" fill="#8b5a33"/>
    ${[-24.5,-12.5,17.5,28.5].map(lx=>`<rect x="${lx-4}" y="-6" width="8" height="6" rx="2" fill="#3b2616"/>`).join("")}
    <path d="M-36 -46 q-10 -6 -6 4 q6 4 8 0z" fill="#ffffff"/>
    <ellipse cx="0" cy="-42" rx="36" ry="19" fill="url(#sc-irvas)"/>
    <ellipse cx="4" cy="-33" rx="22" ry="8" fill="#e9cfae"/>
    <path d="M22 -50 C28 -64 32 -72 38 -80" stroke="url(#sc-irvas)" stroke-width="16" stroke-linecap="round" fill="none"/>
    <path d="M16 -54 C24 -50 34 -54 38 -62" stroke="${saal}" stroke-width="7" stroke-linecap="round" fill="none"/>
    <circle cx="28" cy="-52" r="3.6" fill="url(#sc-zlato)"/>
    <path d="M38 -96 C34 -110 28 -114 22 -120 M33 -106 C28 -107 25 -104 24 -100" stroke="#ead6b4" stroke-width="3.6" stroke-linecap="round" fill="none"/>
    <path d="M47 -96 C52 -110 58 -114 66 -118 M54 -108 C59 -108 62 -105 63 -101" stroke="#ead6b4" stroke-width="3.6" stroke-linecap="round" fill="none"/>
    <path d="M32 -92 q-12 -4 -14 4 q8 4 14 0z" fill="#9c6a40"/>
    <ellipse cx="44" cy="-86" rx="15" ry="13" fill="#a87148"/>
    <ellipse cx="57" cy="-80" rx="9" ry="7" fill="#d9b48a"/>
    <ellipse cx="63" cy="-82" rx="3.6" ry="3" fill="#3b2616"/>
    <ellipse cx="45" cy="-89" rx="2.6" ry="3.4" fill="#22160c"/><circle cx="46" cy="-90.4" r="1" fill="#fff"/>
    <circle cx="50" cy="-81" r="3" fill="#ff8fa3" opacity=".5"/>
  </g>`;
  s+=irvas_(1010,"url(#sc-crveno)")+irvas_(925,"#2f9a5e");
  // uzde
  s+=`<path d="M842 194 C880 206 920 206 948 200 M948 200 C980 196 1012 198 1036 200" stroke="url(#sc-zlato)" stroke-width="2.2" fill="none"/>`;

  /* ---------- SANKE I DEDA MRAZ (x≈810) ---------- */
  s+=`<ellipse cx="804" cy="258" rx="84" ry="6" fill="#9dbbe3" opacity=".55" filter="url(#sc-meko)"/>`;
  s+=`<path d="M720 252 H870 C892 252 900 236 888 226" stroke="url(#sc-zlato)" stroke-width="5.5" fill="none" stroke-linecap="round"/>`;
  s+=`<path d="M744 252 V236 M846 252 V236" stroke="url(#sc-zlato)" stroke-width="4.5" stroke-linecap="round"/>`;
  // džak sa poklonima (iza)
  s+=`<path d="M734 200 C722 170 736 146 758 146 C780 146 792 170 780 200Z" fill="url(#sc-dzak)"/>`;
  s+=`<path d="M748 150 q10 -10 20 0" stroke="#7a522c" stroke-width="3" fill="none" stroke-linecap="round"/>`;
  s+=`<rect x="760" y="162" width="20" height="20" rx="3" fill="url(#sc-plavo)"/><path d="M770 162 V182 M760 172 H780" stroke="#ffd23f" stroke-width="3"/><path d="M770 162 q-6 -8 -10 -2 q4 4 10 2 q6 -8 10 -2 q-4 4 -10 2" fill="#ffd23f"/>`;
  s+=`<rect x="740" y="172" width="16" height="16" rx="3" fill="#2f9a5e"/><path d="M748 172 V188" stroke="#ff5d73" stroke-width="3"/>`;
  // Deda Mraz — telo
  s+=`<path d="M786 214 C782 180 792 164 814 164 C836 164 846 180 842 214Z" fill="url(#sc-crveno)"/>`;
  s+=`<rect x="810" y="166" width="8" height="48" fill="#ffffff"/>`;
  s+=`<rect x="785" y="194" width="58" height="7" rx="2" fill="#2b2230"/><rect x="808" y="192" width="12" height="11" rx="2" fill="none" stroke="url(#sc-zlato)" stroke-width="2.6"/>`;
  // ruka sa rukavicom drži uzde
  s+=`<path d="M836 180 C846 186 848 192 842 196" stroke="url(#sc-crveno)" stroke-width="11" stroke-linecap="round" fill="none"/>`;
  s+=`<path d="M832 176 l8 10" stroke="#ffffff" stroke-width="5" stroke-linecap="round"/><circle cx="843" cy="196" r="6" fill="#2f9a5e"/>`;
  // glava
  s+=`<circle cx="814" cy="146" r="16" fill="#f8d2b4"/>`;
  s+=`<circle cx="804" cy="150" r="4" fill="#ff8fa3" opacity=".6"/><circle cx="824" cy="150" r="4" fill="#ff8fa3" opacity=".6"/>`;
  s+=`<path d="M805 147 q3 -3 6 0 M817 147 q3 -3 6 0" stroke="#3b2a24" stroke-width="2" stroke-linecap="round" fill="none"/>`;
  // brada (pahuljasta)
  [[800,158,9],[808,166,10],[820,166,10],[828,158,9],[814,172,10],[804,174,7],[824,174,7],[814,180,6]].forEach(([x,y,r])=>s+=`<circle cx="${x}" cy="${y}" r="${r}" fill="#ffffff"/>`);
  s+=`<ellipse cx="808" cy="155" rx="7" ry="4" fill="#f2f6fb"/><ellipse cx="820" cy="155" rx="7" ry="4" fill="#f2f6fb"/><circle cx="814" cy="151" r="3.6" fill="#f2a089"/>`;
  // kapa
  s+=`<path d="M798 138 C796 112 822 102 842 112 C852 118 858 128 860 140 L852 142 C846 132 838 128 830 132 L830 138Z" fill="url(#sc-crveno)"/>`;
  s+=`<rect x="795" y="130" width="40" height="11" rx="5.5" fill="#ffffff"/>`;
  s+=`<circle cx="860" cy="144" r="7" fill="#ffffff"/>`;
  // sanke — telo (ispred Deda Mraza)
  s+=`<path d="M722 238 C714 212 720 194 738 192 C750 192 756 204 768 210 C790 220 820 220 850 214 C872 210 888 214 886 232 C884 240 878 242 870 242 H730 C726 242 723 240 722 238Z" fill="url(#sc-crveno)"/>`;
  s+=`<path d="M736 202 C748 202 754 214 770 220 C796 230 834 228 872 220" fill="none" stroke="url(#sc-zlato)" stroke-width="3" stroke-linecap="round"/>`;
  s+=`<path d="M744 230 c6 -8 12 -8 18 0 c6 -8 12 -8 18 0" fill="none" stroke="url(#sc-zlato)" stroke-width="2.4" stroke-linecap="round"/>`;
  s+=`<circle cx="800" cy="231" r="4" fill="url(#sc-zlato)"/><circle cx="830" cy="231" r="4" fill="url(#sc-zlato)"/><circle cx="860" cy="229" r="4" fill="url(#sc-zlato)"/>`;

  s+=`</g>`;

  /* ---------- levo od Sneška: medeni čovečuljak i pokloni (parnjak Deda Mrazu) ---------- */
  const poklon=(x,y,w,h,b,t)=>`<g><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="4" fill="${b}"/><rect x="${x-3}" y="${y-6}" width="${w+6}" height="10" rx="3" fill="${b}"/>
    <rect x="${x+w/2-4}" y="${y-6}" width="8" height="${h+6}" fill="${t}"/><path d="M${x+w/2} ${y-6} q-12 -14 -16 -2 q6 6 16 2 q12 -14 16 -2 q-6 6 -16 2" fill="${t}"/>
    <rect x="${x+4}" y="${y+4}" width="4" height="${h-10}" rx="2" fill="#fff" opacity=".25"/></g>`;
  s+=`<ellipse cx="205" cy="262" rx="80" ry="7" fill="#9dbbe3" opacity=".5" filter="url(#sc-meko)"/>`;
  s+=poklon(184,216,42,44,"url(#sc-crveno)","#ffffff")+poklon(232,228,34,32,"url(#sc-plavo)","#f6c94a")+poklon(198,182,30,30,"#8dbf8b","#e5483f");
  s+=`<g transform="translate(122 264) scale(.66) translate(-100 -178)">${CRTEZI.covek()}</g>`;

  /* bombone i štapovi, simetrično, u prednjem planu */
  s+=stap(452,262,.6,false)+stap(748,262,.6,true);
  s+=gumena(482,272,"#e5483f")+gumena(718,272,"#5a9be0")+gumena(512,280,"#8dbf8b")+gumena(688,280,"#f6c94a")
    +gumena(338,276,"#f6c94a")+gumena(862,276,"#8dbf8b")+gumena(275,274,"#5a9be0")+gumena(925,274,"#e5483f");

  return s+`</svg>`;
}

/* ---------- pahulje preko celog sajta ---------- */
function pahulje(){
  if(window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const c=document.createElement("canvas"); c.className="pahulje"; c.setAttribute("aria-hidden","true");
  document.body.appendChild(c);
  const g=c.getContext("2d"); if(!g) return;
  let W=0,H=0,dpr=1,lista=[];
  const nova=(naVrhu)=>{ const r=Math.random(); const vel = r<.12 ? 5+Math.random()*4 : 1.2+Math.random()*2.6;
    return { x:Math.random()*W, y:naVrhu? -12 : Math.random()*H, r:vel, kristal:vel>5, v:.35+vel*.12+Math.random()*.3,
      faza:Math.random()*6.28, ljulj:.4+Math.random()*.8, rot:Math.random()*6.28, vr:(Math.random()-.5)*.01, a:.55+Math.random()*.4 }; };
  function velicina(){ dpr=Math.min(2,window.devicePixelRatio||1); W=innerWidth; H=innerHeight; c.width=W*dpr; c.height=H*dpr; g.setTransform(dpr,0,0,dpr,0,0);
    const n=Math.min(150,Math.round(W*H/11000)); while(lista.length<n) lista.push(nova(false)); lista.length=n; }
  function kristal(p){ g.save(); g.translate(p.x,p.y); g.rotate(p.rot); g.strokeStyle=`rgba(255,255,255,${p.a})`; g.lineWidth=1.3; g.lineCap="round";
    for(let i=0;i<6;i++){ g.rotate(Math.PI/3); g.beginPath(); g.moveTo(0,0); g.lineTo(0,-p.r); g.moveTo(0,-p.r*.55); g.lineTo(-p.r*.3,-p.r*.8); g.moveTo(0,-p.r*.55); g.lineTo(p.r*.3,-p.r*.8); g.stroke(); }
    g.restore(); }
  let t=0, radi=true;
  function korak(){
    if(!radi) return;
    t+=1; g.clearRect(0,0,W,H);
    g.shadowColor="rgba(60,100,170,.35)"; g.shadowBlur=3;
    for(const p of lista){
      p.y+=p.v; p.x+=Math.sin(t*.012*p.ljulj+p.faza)*.45; p.rot+=p.vr;
      if(p.y>H+12){ Object.assign(p,nova(true)); }
      if(p.x<-12) p.x=W+10; if(p.x>W+12) p.x=-10;
      if(p.kristal) kristal(p);
      else { g.beginPath(); g.arc(p.x,p.y,p.r,0,6.283); g.fillStyle=`rgba(255,255,255,${p.a})`; g.fill(); }
    }
    requestAnimationFrame(korak);
  }
  velicina(); addEventListener("resize",velicina);
  document.addEventListener("visibilitychange",()=>{ radi=!document.hidden; if(radi) requestAnimationFrame(korak); });
  requestAnimationFrame(korak);
}

document.getElementById("scena").innerHTML=scena();
window.matchMedia("(max-width:620px)").addEventListener("change",()=>{ document.getElementById("scena").innerHTML=scena(); });
pahulje();
