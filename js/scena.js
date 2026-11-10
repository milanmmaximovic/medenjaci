/* Zimska scena u zaglavlju i pahulje koje padaju preko celog sajta.
   Koristi pomoćne funkcije iz app.js (jelkaUnutra, tacka, zvezdaPutanja). */

function scena(){
  const usko=window.matchMedia("(max-width:620px)").matches;
  const jelka=(x,y,sc,seme)=>`<g transform="translate(${x} ${y}) scale(${sc}) translate(-120 -266)">${jelkaUnutra(seme)}</g>`;
  let s=`<svg viewBox="${usko?"250 60 830 240":"0 0 1200 300"}" preserveAspectRatio="${usko?"xMidYMax meet":"xMidYMax slice"}" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
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
    <filter id="sc-meko" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="5"/></filter>
    <clipPath id="sc-krov-clip"><path d="M500 168 L600 86 L700 168Z"/></clipPath>
  </defs>`;

  /* mesec i daleka brda */
  s+=`<circle cx="1050" cy="70" r="46" fill="#fff6d8" opacity=".18" filter="url(#sc-meko)"/><circle cx="1050" cy="70" r="22" fill="#fff4d2" opacity=".9"/>`;
  s+=`<path d="M0 228 C120 186 240 196 330 214 C430 234 520 200 640 196 C780 192 860 222 980 206 C1080 192 1150 204 1200 196 V300 H0Z" fill="url(#sc-brdo)" opacity=".55"/>`;
  s+=jelka(70,240,.62,3)+jelka(172,230,.42,11)+jelka(1135,236,.6,5)+jelka(1040,228,.4,17)+jelka(455,226,.34,29)+jelka(708,220,.3,31);
  s+=`<path d="M0 250 C160 220 300 228 400 240 C520 254 620 246 720 236 C860 222 980 228 1080 238 C1140 244 1180 240 1200 236 V300 H0Z" fill="url(#sc-tlo)"/>`;

  /* ---------- MEDENA KUĆICA (x=600) ---------- */
  s+=`<circle cx="600" cy="196" r="150" fill="url(#sc-sjaj)"/>`;
  s+=`<ellipse cx="600" cy="254" rx="104" ry="9" fill="#9dbbe3" opacity=".45" filter="url(#sc-meko)"/>`;
  // dimnjak i dim
  s+=`<rect x="642" y="98" width="22" height="44" rx="3" fill="#9c4f27"/><path d="M642 112 H664 M642 126 H664 M653 98 V112 M648 112 V126 M658 126 V140" stroke="#7d3c1c" stroke-width="1.5"/>`;
  s+=`<rect x="638" y="92" width="30" height="10" rx="5" fill="#ffffff"/>`;
  [[660,78,7],[668,64,9],[662,48,11]].forEach(([x,y,r],i)=>s+=`<circle cx="${x}" cy="${y}" r="${r}" fill="#ffffff" opacity="${.32-i*.08}"/>`);
  // zidovi
  s+=`<rect x="526" y="156" width="148" height="96" rx="10" fill="url(#sc-zid)"/>`;
  s+=`<rect x="526" y="156" width="148" height="96" rx="10" fill="none" stroke="#8a4a1f" stroke-opacity=".35" stroke-width="2"/>`;
  // krov sa crepovima od čokolade
  s+=`<path d="M494 174 Q488 166 497 159 L593 82 Q600 76 607 82 L703 159 Q712 166 706 174Z" fill="#6f3a1d"/>`;
  s+=`<g clip-path="url(#sc-krov-clip)">`;
  for(let r=0;r<6;r++){ const y=100+r*13, off=r%2?8:0; for(let x=500+off;x<=700;x+=16) s+=`<path d="M${x-8} ${y} a8 8 0 0 0 16 0" fill="#87482a" stroke="#5c2c14" stroke-width="1.2"/>`; }
  s+=`</g>`;
  // sneg na krovu sa kapima
  s+=`<path d="M494 172 L600 84 L706 172" fill="none" stroke="#ffffff" stroke-width="13" stroke-linejoin="round" stroke-linecap="round"/>`;
  s+=`<path d="M560 116 q6 14 0 22 q-6 -8 0 -22z M532 140 q6 12 0 20 q-6 -8 0 -20z M640 116 q6 14 0 22 q-6 -8 0 -22z M668 140 q6 12 0 20 q-6 -8 0 -20z" fill="#ffffff"/>`;
  s+=`<path d="M590 84 q10 -14 20 0z" fill="#ffffff"/>`;
  // bombone na strehi
  [[510,176,"#ff5d73"],[534,176,"#4aa3ff"],[558,176,"#ffd23f"],[642,176,"#5bd69a"],[666,176,"#ff5d73"],[690,176,"#4aa3ff"]].forEach(([x,y,b])=>{
    s+=`<circle cx="${x}" cy="${y}" r="6.5" fill="${b}"/><circle cx="${x-2}" cy="${y-2.4}" r="2.2" fill="#fff" opacity=".7"/>`; });
  // girlanda lampica preko fasade
  s+=`<path d="M532 168 Q566 186 600 170 Q634 186 668 168" fill="none" stroke="#2b3a2e" stroke-width="1.2"/>`;
  [[546,176,"#ffd23f"],[566,181,"#ff5d73"],[586,176,"#5bd69a"],[614,176,"#4aa3ff"],[634,181,"#ffd23f"],[654,176,"#ff5d73"]].forEach(([x,y,b])=>{
    s+=`<circle cx="${x}" cy="${y}" r="6" fill="${b}" opacity=".35" filter="url(#sc-meko)"/><circle cx="${x}" cy="${y}" r="2.6" fill="${b}"/>`; });
  // prozori sa lukom
  for(const x of [544,630]){
    s+=`<path d="M${x} 222 V200 a13 13 0 0 1 26 0 V222Z" fill="url(#sc-prozor)" stroke="#ffffff" stroke-width="3.5" stroke-linejoin="round"/>`;
    s+=`<path d="M${x+13} 187 V222 M${x} 205 H${x+26}" stroke="#ffffff" stroke-width="2.4"/>`;
    s+=`<rect x="${x-4}" y="222" width="34" height="7" rx="3.5" fill="#ffffff"/>`;
    s+=`<circle cx="${x+5}" cy="221" r="3" fill="#2f9a5e"/><circle cx="${x+13}" cy="219" r="3.4" fill="#2f9a5e"/><circle cx="${x+21}" cy="221" r="3" fill="#2f9a5e"/><circle cx="${x+13}" cy="217" r="1.8" fill="#ff5d73"/>`;
  }
  // vrata sa venčićem
  s+=`<path d="M584 252 V222 a16 16 0 0 1 32 0 V252Z" fill="url(#sc-vrata)"/>`;
  s+=`<path d="M584 252 V222 a16 16 0 0 1 32 0 V252" fill="none" stroke="#ffffff" stroke-width="3" stroke-dasharray="0.1 6" stroke-linecap="round"/>`;
  s+=`<circle cx="600" cy="224" r="8" fill="none" stroke="#2f9a5e" stroke-width="4.5"/><path d="M596 231 l4 -3 4 3 -4 2z" fill="#ff5d73"/>`;
  s+=`<circle cx="610" cy="240" r="2.4" fill="url(#sc-zlato)"/>`;
  // glazura na dnu i uglovima
  s+=`<path d="M530 246 q6 -6 12 0 q6 -6 12 0 q6 -6 12 0 q6 -6 12 0 M622 246 q6 -6 12 0 q6 -6 12 0 q6 -6 12 0 q6 -6 12 0" fill="none" stroke="#ffffff" stroke-width="2.6" stroke-linecap="round"/>`;
  // štapići-bombone
  for(const x of [570,626]){ const d=`M${x} 252 V218 q0 -9 8 -9 q8 0 8 8`; s+=`<path d="${d}" fill="none" stroke="#ffffff" stroke-width="5.5" stroke-linecap="round"/><path d="${d}" fill="none" stroke="#ef3e3e" stroke-width="5.5" stroke-dasharray="4 5" stroke-linecap="round"/>`; }

  /* staza od snega */
  s+=`<path d="M586 253 L614 253 C640 262 660 276 646 300 L534 300 C540 276 562 262 586 253Z" fill="#ffffff"/>`;
  s+=`<path d="M586 253 C562 262 540 276 534 300 M614 253 C640 262 660 276 646 300" fill="none" stroke="#bcd3f0" stroke-width="2.5"/>`;
  [[596,262],[606,269],[593,278],[605,287],[591,296]].forEach(([x,y])=>s+=`<ellipse cx="${x}" cy="${y}" rx="3.4" ry="2" fill="#d3e3f7"/>`);
  [[548,282],[562,266],[636,282],[624,266]].forEach(([x,y])=>{ s+=`<circle cx="${x}" cy="${y-6}" r="9" fill="#ffd166" opacity=".35" filter="url(#sc-meko)"/><rect x="${x-1.5}" y="${y-6}" width="3" height="10" rx="1.5" fill="#33415c"/><circle cx="${x}" cy="${y-7}" r="3.6" fill="#ffd977"/>`; });

  /* ---------- SNEŠKO BELIĆ (x=330) ---------- */
  const X=330;
  s+=`<ellipse cx="${X}" cy="262" rx="44" ry="7" fill="#9dbbe3" opacity=".5" filter="url(#sc-meko)"/>`;
  // ruke
  s+=`<path d="M${X-22} 186 C${X-38} 178 ${X-48} 170 ${X-58} 156 M${X-46} 168 l-10 -2 M${X+22} 186 C${X+38} 176 ${X+50} 168 ${X+58} 152 M${X+48} 165 l9 -5" stroke="#6b3f22" stroke-width="3.6" stroke-linecap="round" fill="none"/>`;
  s+=`<circle cx="${X-59}" cy="153" r="7" fill="url(#sc-crveno)"/><circle cx="${X+59}" cy="149" r="7" fill="url(#sc-crveno)"/>`;
  // telo
  s+=`<circle cx="${X}" cy="228" r="35" fill="url(#sc-sneg)"/><circle cx="${X}" cy="183" r="26" fill="url(#sc-sneg)"/><circle cx="${X}" cy="146" r="20" fill="url(#sc-sneg)"/>`;
  [176,190,206,222].forEach((y,i)=>s+=`<circle cx="${X}" cy="${y+(i>1?14:0)}" r="3.2" fill="#2b3142"/>`);
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
  // kapa
  s+=`<path d="M${X-18} 132 C${X-19} 110 ${X+19} 106 ${X+19} 132Z" fill="url(#sc-plavo)"/>`;
  s+=`<path d="M${X-14} 120 H${X+15} M${X-10} 112 H${X+11}" stroke="#ffffff" stroke-width="3" opacity=".8"/>`;
  s+=`<rect x="${X-22}" y="129" width="44" height="8" rx="4.5" fill="#f4f9ff"/>`;
  s+=`<circle cx="${X}" cy="106" r="7.5" fill="#ffffff"/><circle cx="${X-3}" cy="103" r="3" fill="#ffffff" opacity=".9"/>`;

  /* ---------- IRVASI (x≈925 i 1010) ---------- */
  const irvas=(x,saal)=>`<g transform="translate(${x} 252)">
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
  s+=irvas(1010,"url(#sc-crveno)")+irvas(925,"#2f9a5e");
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
