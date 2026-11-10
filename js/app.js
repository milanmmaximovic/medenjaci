/* Logika sajta. Ponuda (medenjaci, alergeni, dostava) je u ponuda.js. */

const esc = s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const nadji = id=>PONUDA.find(p=>p.id===id);
const din = n=>n.toLocaleString("sr-Latn-RS")+" RSD";
const imaCene = ()=>PONUDA.every(p=>typeof p.cena==="number");

/* ---------- crteži ---------- */
const TESTO="#b8692f", IVICA="#8a4a1f", GLAZURA="#fffaf0", CRVENA="#c8382c", ZELENA="#3f8a4f", ZUTA="#f2c443";

function cikcak(x1,y1,x2,y2,n=6,a=4){
  const dx=x2-x1, dy=y2-y1, d=Math.hypot(dx,dy), nx=-dy/d, ny=dx/d;
  let p=`M${x1} ${y1}`;
  for(let i=1;i<=n;i++){ const t=i/n, s=(i%2?1:-1)*a*(i<n?1:0); p+=` L${(x1+dx*t+nx*s).toFixed(1)} ${(y1+dy*t+ny*s).toFixed(1)}`; }
  return `<path d="${p}" fill="none" stroke="${GLAZURA}" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>`;
}
const tacka=(x,y,r,b)=>`<circle cx="${x}" cy="${y}" r="${r}" fill="${b}"/><circle cx="${(x-r*.3).toFixed(1)}" cy="${(y-r*.3).toFixed(1)}" r="${(r*.3).toFixed(1)}" fill="#fff" opacity=".55"/>`;
const linija=(d,w=3)=>`<path d="${d}" fill="none" stroke="${GLAZURA}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round"/>`;

/* oblik nacrtan dva puta: tamnija ivica pa testo */
function testo(oblici){ return oblici(IVICA,3.5)+oblici(TESTO,0); }

function covek(){
  const o=(b,g)=>`<circle cx="100" cy="50" r="${26+g}" fill="${b}"/>
    <ellipse cx="100" cy="112" rx="${33+g}" ry="${42+g}" fill="${b}"/>
    <line x1="74" y1="92" x2="40" y2="110" stroke="${b}" stroke-width="${24+2*g}" stroke-linecap="round"/>
    <line x1="126" y1="92" x2="160" y2="110" stroke="${b}" stroke-width="${24+2*g}" stroke-linecap="round"/>
    <line x1="86" y1="140" x2="72" y2="176" stroke="${b}" stroke-width="${26+2*g}" stroke-linecap="round"/>
    <line x1="114" y1="140" x2="128" y2="176" stroke="${b}" stroke-width="${26+2*g}" stroke-linecap="round"/>`;
  return testo(o)
    +`<circle cx="91" cy="46" r="3.4" fill="${GLAZURA}"/><circle cx="109" cy="46" r="3.4" fill="${GLAZURA}"/>`
    +linija("M89 57 Q100 66 111 57",2.8)
    +tacka(100,98,4.8,CRVENA)+tacka(100,114,4.8,ZELENA)+tacka(100,130,4.8,CRVENA)
    +cikcak(44,99,52,118,5,3)+cikcak(156,99,148,118,5,3)
    +cikcak(62,168,82,175,5,3)+cikcak(138,168,118,175,5,3);
}
function srce(){
  const d="M100 172 C 46 132, 20 96, 40 64 C 58 36, 92 40, 100 66 C 108 40, 142 36, 160 64 C 180 96, 154 132, 100 172Z";
  return `<path d="${d}" fill="${TESTO}" stroke="${IVICA}" stroke-width="7" stroke-linejoin="round"/>`
    +`<path d="${d}" fill="none" stroke="${GLAZURA}" stroke-width="4" stroke-dasharray="0.1 9" stroke-linecap="round" transform="translate(100 104) scale(.8) translate(-100 -104)"/>`
    +linija("M70 98 Q85 84 100 98 Q115 112 130 98",3)
    +tacka(100,128,5,CRVENA)+tacka(80,116,3.5,GLAZURA)+tacka(120,116,3.5,GLAZURA);
}
function zvezdaPutanja(cx,cy,R,r){ let p=""; for(let i=0;i<10;i++){ const a=-Math.PI/2+i*Math.PI/5, rr=i%2?r:R; p+=(i?"L":"M")+(cx+rr*Math.cos(a)).toFixed(1)+" "+(cy+rr*Math.sin(a)).toFixed(1); } return p+"Z"; }
function zvezda(){
  return `<path d="${zvezdaPutanja(100,106,86,40)}" fill="${TESTO}" stroke="${IVICA}" stroke-width="7" stroke-linejoin="round"/>`
    +`<path d="${zvezdaPutanja(100,106,62,29)}" fill="none" stroke="${GLAZURA}" stroke-width="3" stroke-linejoin="round"/>`
    +`<path d="${zvezdaPutanja(100,106,46,22)}" fill="none" stroke="${GLAZURA}" stroke-width="2" stroke-dasharray="0.1 6" stroke-linecap="round"/>`
    +tacka(100,106,7,ZUTA);
}
function jelka(){
  const d="M100 24 L132 72 L118 72 L150 116 L132 116 L166 160 L34 160 L68 116 L50 116 L82 72 L68 72Z";
  return `<rect x="88" y="152" width="24" height="26" rx="4" fill="${TESTO}" stroke="${IVICA}" stroke-width="5"/>`
    +`<path d="${d}" fill="${TESTO}" stroke="${IVICA}" stroke-width="7" stroke-linejoin="round"/>`
    +linija("M80 66 Q100 78 120 64",2.6)+linija("M66 108 Q100 126 136 106",2.6)+linija("M52 152 Q100 170 150 150",2.6)
    +tacka(90,90,4.5,CRVENA)+tacka(116,96,4.5,ZUTA)+tacka(78,136,4.5,ZELENA)+tacka(108,140,4.5,CRVENA)+tacka(134,132,4.5,ZUTA)
    +`<path d="${zvezdaPutanja(100,24,14,6)}" fill="${ZUTA}" stroke="#d9a72a" stroke-width="1.5" stroke-linejoin="round"/>`;
}
function pahulja(){
  let g="", led="";
  for(let i=0;i<6;i++){
    const a=i*Math.PI/3-Math.PI/2, x=100+72*Math.cos(a), y=100+72*Math.sin(a);
    g+=`<line x1="100" y1="100" x2="${x.toFixed(1)}" y2="${y.toFixed(1)}" stroke="#B" stroke-width="W" stroke-linecap="round"/>`;
    const bx=100+46*Math.cos(a), by=100+46*Math.sin(a);
    led+=linija(`M100 100 L${x.toFixed(1)} ${y.toFixed(1)}`,2.4);
    for(const s of [-1,1]){ const b=a+s*.75; led+=linija(`M${bx.toFixed(1)} ${by.toFixed(1)} L${(bx+16*Math.cos(b)).toFixed(1)} ${(by+16*Math.sin(b)).toFixed(1)}`,2.4); }
  }
  const o=(b,gr)=>g.replace(/#B/g,b).replace(/W/g,22+2*gr)+`<circle cx="100" cy="100" r="${28+gr}" fill="${b}"/>`;
  return testo(o)+led+`<circle cx="100" cy="100" r="9" fill="none" stroke="${GLAZURA}" stroke-width="2.4"/>`+tacka(100,100,4,CRVENA);
}
function kucica(){
  return `<rect x="46" y="88" width="108" height="86" rx="6" fill="${TESTO}" stroke="${IVICA}" stroke-width="6"/>`
    +`<path d="M30 96 L100 32 L170 96Z" fill="${TESTO}" stroke="${IVICA}" stroke-width="7" stroke-linejoin="round"/>`
    +`<path d="M38 96 Q50 108 62 96 Q74 108 86 96 Q98 108 110 96 Q122 108 134 96 Q146 108 158 96 L162 92 L100 40 L38 92Z" fill="${GLAZURA}"/>`
    +`<rect x="88" y="128" width="24" height="46" rx="12" fill="none" stroke="${GLAZURA}" stroke-width="3"/>`+tacka(106,152,2.6,ZUTA)
    +`<rect x="58" y="114" width="22" height="22" rx="3" fill="none" stroke="${GLAZURA}" stroke-width="3"/>`+linija("M69 114 V136 M58 125 H80",2)
    +`<rect x="120" y="114" width="22" height="22" rx="3" fill="none" stroke="${GLAZURA}" stroke-width="3"/>`+linija("M131 114 V136 M120 125 H142",2)
    +tacka(56,164,4,CRVENA)+tacka(144,164,4,ZELENA)+tacka(100,74,5,CRVENA);
}
function mali(oblik,x,y,s,rot=0){ return `<g transform="translate(${x} ${y}) rotate(${rot}) scale(${s}) translate(-100 -104)">${CRTEZI[oblik]()}</g>`; }
function kesica(){
  return `<path d="M58 66 L142 66 L156 178 Q100 186 44 178Z" fill="#ffffff" opacity=".55" stroke="#d8cbb6" stroke-width="2"/>`
    +mali("srce",80,150,.26,-12)+mali("zvezda",120,152,.26,10)+mali("covek",100,122,.28,0)+mali("zvezda",78,112,.2,-20)+mali("srce",124,112,.2,14)
    +`<path d="M58 66 L142 66 L156 178 Q100 186 44 178Z" fill="#ffffff" opacity=".18"/>`
    +`<path d="M66 40 Q100 56 134 40 L142 66 L58 66Z" fill="#ffffff" opacity=".6" stroke="#d8cbb6" stroke-width="2"/>`
    +`<path d="M100 64 C 76 44, 66 70, 100 66 C 134 70, 124 44, 100 64Z" fill="${CRVENA}"/><path d="M98 66 L88 90 M102 66 L112 90" stroke="${CRVENA}" stroke-width="5" stroke-linecap="round"/><circle cx="100" cy="65" r="5" fill="#a62a20"/>`;
}
function kutija(){
  return `<rect x="30" y="92" width="140" height="84" rx="6" fill="#dcbf93" stroke="#b8976a" stroke-width="3"/>`
    +mali("covek",68,86,.32,-10)+mali("srce",104,82,.3,4)+mali("zvezda",140,86,.3,12)
    +`<rect x="30" y="108" width="140" height="68" rx="6" fill="#e7cfa6" stroke="#b8976a" stroke-width="3"/>`
    +`<rect x="92" y="108" width="16" height="68" fill="${CRVENA}"/><rect x="30" y="134" width="140" height="14" fill="${CRVENA}"/>`
    +`<path d="M100 140 C 70 116, 62 156, 100 141 C 138 156, 130 116, 100 140Z" fill="#a62a20"/><circle cx="100" cy="141" r="7" fill="${CRVENA}"/>`;
}
function kugla(){
  return `<path d="M100 26 a10 10 0 1 1 0.1 0" fill="none" stroke="${ZUTA}" stroke-width="4"/>`
    +`<rect x="82" y="34" width="36" height="20" rx="4" fill="${TESTO}" stroke="${IVICA}" stroke-width="5"/>`
    +`<circle cx="100" cy="114" r="64" fill="${TESTO}" stroke="${IVICA}" stroke-width="7"/>`
    +linija("M82 40 H118",2.4)+linija("M82 48 H118",2.4)
    +cikcak(42,92,158,92,14,5)+cikcak(42,136,158,136,14,5)
    +linija("M48 114 H152",2.6)
    +tacka(66,114,5,CRVENA)+tacka(100,114,5,ZELENA)+tacka(134,114,5,CRVENA)
    +`<path d="${zvezdaPutanja(100,72,9,4)}" fill="${GLAZURA}"/><path d="${zvezdaPutanja(100,158,9,4)}" fill="${GLAZURA}"/>`;
}
function godina(){
  const t=`<text x="100" y="128" text-anchor="middle" font-family="Lora, Georgia, serif" font-weight="600" font-size="78" letter-spacing="-2"`;
  return `${t} fill="${TESTO}" stroke="${IVICA}" stroke-width="14" stroke-linejoin="round" paint-order="stroke">2027</text>`
    +`${t} fill="none" stroke="${GLAZURA}" stroke-width="2.4" stroke-dasharray="0.1 7" stroke-linecap="round" transform="translate(100 102) scale(.86) translate(-100 -102)">2027</text>`
    +tacka(46,64,5,CRVENA)+tacka(154,64,5,ZELENA)
    +`<path d="${zvezdaPutanja(100,52,12,5)}" fill="${ZUTA}" stroke="#d9a72a" stroke-width="1.5" stroke-linejoin="round"/>`;
}
const CRTEZI={kugla,godina,covek,srce,zvezda,jelka,pahulja,kucica,kesica,kutija};
function crtez(oblik){ return `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">${(CRTEZI[oblik]||covek)()}</svg>`; }

/* ---------- stanje ---------- */
const LS="magicni-medenjaci-korpa-v1";
let korpa=[]; try{ korpa=JSON.parse(localStorage.getItem(LS)||"[]").filter(s=>nadji(s.id)); }catch(e){ korpa=[]; }
function sacuvaj(){ try{ localStorage.setItem(LS,JSON.stringify(korpa)); }catch(e){} osveziBadge(); }
const izabrano={}; PONUDA.forEach(p=>izabrano[p.id]=p.min||1);
let poslednjaPotvrda=null;

/* ---------- pomoćno ---------- */
let toastT;
function toast(t){ const el=document.getElementById("toast"); el.textContent=t; el.classList.add("on"); clearTimeout(toastT); toastT=setTimeout(()=>el.classList.remove("on"),3200); }
const ukupnoKomada=()=>korpa.reduce((a,s)=>a+s.kolicina,0);
function osveziBadge(){ const n=ukupnoKomada(); const b=document.getElementById("badge"); b.textContent=n; if(n) b.removeAttribute("data-zero"); else b.setAttribute("data-zero",""); }
function slikaZa(p,cls=""){ return p.slika ? `<img src="${p.slika}" alt="${esc(p.naziv)}" loading="lazy" class="${cls}">` : `<div class="crtez-foto ${cls}" role="img" aria-label="${esc(p.naziv)}, crtež">${crtez(p.oblik)}</div>`; }
function kolicinaHtml(akcija,id,vr,min){
  return `<div class="kol" role="group" aria-label="Količina">
    <button type="button" data-akcija="${akcija}" data-id="${id}" data-d="-1" aria-label="Manje" ${vr<=min?"disabled":""}>−</button>
    <span aria-live="polite">${vr}</span>
    <button type="button" data-akcija="${akcija}" data-id="${id}" data-d="1" aria-label="Više">+</button></div>`;
}

/* ---------- prikazi ---------- */
function prikaziPonudu(){
  const kartice=PONUDA.map(p=>{
    const sitno=[p.velicina,p.pakovanje].filter(Boolean).map(t=>`<span class="chip">${esc(t)}</span>`).join("");
    return `<article class="kartica">
      <div class="foto">${slikaZa(p)}</div>
      <div class="body">
        <div class="naslov-red"><h2>${esc(p.naziv)}</h2>${typeof p.cena==="number"?`<span class="cena">${din(p.cena)}</span>`:""}</div>
        <p class="opis">${esc(p.opis)}</p>
        <div class="sastav">${sitno}</div>
        <div class="kupi">
          ${kolicinaHtml("izaberi-kol",p.id,izabrano[p.id],p.min||1)}
          <button class="btn" type="button" data-akcija="dodaj" data-id="${p.id}">Dodaj u korpu</button>
        </div>
        ${p.min>1?`<p class="hint">Najmanje ${p.min} kom.</p>`:""}
      </div></article>`;
  }).join("");
  const al=[...new Set(PONUDA.flatMap(p=>p.alergeni||[]))].map(a=>ALERGENI[a]);
  return `<div class="view-head"><span class="eyebrow">Novogodišnja ponuda</span><h1>Medenjaci za praznike</h1><p>Od meda i začina, ukrašeni rukom: za jelku, za poklon ili za praznični sto. Izaberi koliko ti treba i dodaj u korpu.</p></div>
    <div class="grid3">${kartice}</div>
    ${al.length?`<p class="alergeni-nap"><b>Sadrže:</b> ${esc(al.join(", "))}. Ako imaš alergiju, napiši nam u napomeni uz porudžbinu.</p>`:""}`;
}

function prikaziKorpu(){
  if(poslednjaPotvrda){
    const p=poslednjaPotvrda;
    return `<div class="potvrda"><span class="eyebrow">Porudžbina primljena</span><h2>Hvala, ${esc(p.ime)}!</h2>
      <p>Tvoja porudžbina od ${p.komada} ${komada(p.komada)} je zabeležena${p.datum? " za "+esc(new Date(p.datum).toLocaleDateString("sr-Latn-RS",{weekday:"long",day:"numeric",month:"long"})) : ""}, dostava na adresu ${esc(p.adresa)}, ${esc(p.mesto)}.</p>
      <p class="napomena">${PROBNI_REZIM ? "Ovo je probna verzija sajta: porudžbina nije stvarno poslata." : esc(DOSTAVA.napomena)+" Broj: "+esc(p.telefon)+"."}</p>
      <div><a class="btn" href="#ponuda" data-akcija="nova">Nazad na ponudu</a></div></div>`;
  }
  if(!korpa.length){
    return `<div class="view-head"><span class="eyebrow">Korpa</span><h1>Korpa</h1></div>
      <div class="prazna">${crtez("kugla")}<h2>Korpa je prazna</h2><p>Izaberi novogodišnje medenjake iz ponude, pa se vrati ovde da uneseš podatke za dostavu.</p>
      <a class="btn" href="#ponuda">Pogledaj ponudu</a></div>`;
  }
  const stavke=korpa.map(s=>{
    const p=nadji(s.id);
    return `<article class="stavka"><div class="thumb">${slikaZa(p)}</div>
      <div style="min-width:0"><h3>${esc(p.naziv)}</h3><p class="det">${esc([p.velicina,p.pakovanje].filter(Boolean).join(" · "))}</p>
      ${typeof p.cena==="number"?`<p class="det">${s.kolicina} × ${din(p.cena)} = <b>${din(s.kolicina*p.cena)}</b></p>`:""}</div>
      <div class="desno">${kolicinaHtml("korpa-kol",s.id,s.kolicina,p.min||1)}
      <button type="button" class="linkbtn" data-akcija="ukloni" data-id="${s.id}">Ukloni</button></div></article>`;
  }).join("");
  const ukupno = imaCene() ? korpa.reduce((a,s)=>a+s.kolicina*nadji(s.id).cena,0) : null;
  const najranije=new Date(Date.now()+DOSTAVA.najranijeZaDana*86400000).toISOString().slice(0,10);
  return `<div class="view-head"><span class="eyebrow">Korpa</span><h1>Korpa</h1><p>Proveri šta si izabrao i upiši gde da dostavimo.</p></div>
    <div class="korpa"><div class="stavke">${stavke}
      <div class="zbir"><span>Ukupno: <b>${ukupnoKomada()} ${komada(ukupnoKomada())}</b></span>${ukupno!==null?`<span>Iznos: <b>${din(ukupno)}</b> + dostava</span>`:""}</div>
    </div>
    <form class="forma" id="forma" novalidate>
      <h2>Podaci za dostavu</h2>
      <div class="polje"><label for="f-ime">Ime i prezime</label><input id="f-ime" name="ime" autocomplete="name" required placeholder="Ana Petrović"></div>
      <div class="polje"><label for="f-tel">Telefon</label><input id="f-tel" name="telefon" type="tel" autocomplete="tel" required placeholder="06x xxx xxxx"></div>
      <div class="polje"><label for="f-mejl">Mejl <span class="opc-lbl">(nije obavezno)</span></label><input id="f-mejl" name="email" type="email" autocomplete="email" placeholder="ana@primer.rs"></div>
      <div class="polje"><label for="f-adr">Ulica i broj</label><input id="f-adr" name="adresa" autocomplete="street-address" required placeholder="Kneza Miloša 12, stan 4"></div>
      <div class="dva">
        <div class="polje"><label for="f-mesto">Mesto</label><input id="f-mesto" name="mesto" autocomplete="address-level2" required placeholder="Beograd"></div>
        <div class="polje"><label for="f-pb">Poštanski broj</label><input id="f-pb" name="postanski" inputmode="numeric" autocomplete="postal-code" placeholder="11000"></div>
      </div>
      <div class="polje"><label for="f-dat">Željeni datum dostave</label><input id="f-dat" name="datum" type="date" min="${najranije}"><span class="hint">Najranije za ${DOSTAVA.najranijeZaDana} dana.</span></div>
      <div class="polje"><label for="f-nap">Napomena</label><textarea id="f-nap" name="napomena" placeholder="Interfon, sprat, alergije, poruka za poklon…"></textarea></div>
      <p hidden><label>Ne popunjavaj: <input name="bot-polje" tabindex="-1" autocomplete="off"></label></p>
      <p class="hint">${esc(DOSTAVA.napomena)}</p>
      <p class="nedostaje" id="f-greska" hidden></p>
      <button class="btn" type="submit" id="f-posalji">Pošalji porudžbinu</button>
    </form></div>`;
}
function komada(n){ return (n%10===1 && n%100!==11) ? "pakovanje" : "pakovanja"; }

/* ---------- ruter ---------- */
const RUTE=["ponuda","korpa"];
function ruta(){ const h=location.hash.replace("#",""); return RUTE.includes(h)?h:"ponuda"; }
function prikazi(){
  const r=ruta(), m=document.getElementById("main");
  if(r!=="korpa") poslednjaPotvrda=null;
  document.getElementById("toast").classList.remove("on");
  m.innerHTML = r==="ponuda"? prikaziPonudu() : prikaziKorpu();
  document.querySelectorAll("nav.tabs a").forEach(a=>{ if(a.dataset.route===r) a.setAttribute("aria-current","page"); else a.removeAttribute("aria-current"); });
  osveziBadge();
}
window.addEventListener("hashchange",()=>{ prikazi(); window.scrollTo({top:0}); });

/* ---------- događaji ---------- */
function zameniKol(el,vr,min){ const g=el.closest(".kol"); g.querySelector("span").textContent=vr; g.querySelector('[data-d="-1"]').disabled = vr<=min; }
document.addEventListener("click",e=>{
  const el=e.target.closest("[data-akcija]"); if(!el) return;
  const a=el.dataset.akcija, id=el.dataset.id, p=id?nadji(id):null, min=p?.min||1;
  if(a==="izaberi-kol"){ izabrano[id]=Math.max(min,izabrano[id]+ +el.dataset.d); zameniKol(el,izabrano[id],min); }
  else if(a==="dodaj"){
    const n=izabrano[id], s=korpa.find(x=>x.id===id);
    if(s) s.kolicina+=n; else korpa.push({id,kolicina:n});
    sacuvaj(); izabrano[id]=min; zameniKol(el.parentElement.querySelector(".kol button"),min,min);
    toast(`${p.naziv}: ${n} ${komada(n)} u korpi.`);
  }
  else if(a==="korpa-kol"){ const s=korpa.find(x=>x.id===id); s.kolicina=Math.max(min,s.kolicina+ +el.dataset.d); sacuvaj(); prikazi(); }
  else if(a==="ukloni"){ korpa=korpa.filter(x=>x.id!==id); sacuvaj(); prikazi(); }
  else if(a==="nova"){ poslednjaPotvrda=null; }
});
document.addEventListener("submit",async e=>{
  if(e.target.id!=="forma") return; e.preventDefault();
  const f=new FormData(e.target), v=k=>String(f.get(k)||"").trim();
  const gr=document.getElementById("f-greska"), dugme=document.getElementById("f-posalji");
  const greska = !v("ime") ? "Upiši ime da bismo znali na koga glasi porudžbina."
    : v("telefon").replace(/\D/g,"").length<8 ? "Upiši broj telefona da bismo mogli da potvrdimo porudžbinu."
    : !v("adresa") ? "Upiši ulicu i broj za dostavu."
    : !v("mesto") ? "Upiši mesto za dostavu."
    : (v("email") && !/^\S+@\S+\.\S+$/.test(v("email"))) ? "Mejl adresa nije ispravna (ili ostavi polje prazno)."
    : "";
  if(greska){ gr.textContent=greska; gr.hidden=false; return; }
  const stavke=korpa.map(s=>{ const p=nadji(s.id); return `${s.kolicina} × ${p.naziv} (${p.pakovanje})`+(typeof p.cena==="number"?` = ${din(s.kolicina*p.cena)}`:""); }).join("\n");
  const podaci={ "form-name":"porudzbina", ime:v("ime"), telefon:v("telefon"), email:v("email"), adresa:v("adresa"), mesto:v("mesto"), postanski:v("postanski"),
    datum:v("datum"), napomena:v("napomena"), stavke, "bot-polje":v("bot-polje") };
  dugme.disabled=true; dugme.textContent="Šaljem…"; gr.hidden=true;
  if(PROBNI_REZIM){ await new Promise(r=>setTimeout(r,400)); }
  else try{
    const odg=await fetch("/",{ method:"POST", headers:{"Content-Type":"application/x-www-form-urlencoded"}, body:new URLSearchParams(podaci).toString() });
    if(!odg.ok) throw new Error(odg.status);
  }catch(err){
    gr.textContent="Porudžbina nije poslata. Proveri internet vezu i pokušaj ponovo.";
    gr.hidden=false; dugme.disabled=false; dugme.textContent="Pošalji porudžbinu"; return;
  }
  poslednjaPotvrda={ ime:podaci.ime, telefon:podaci.telefon, adresa:podaci.adresa, mesto:podaci.mesto, datum:podaci.datum, komada:ukupnoKomada() };
  korpa=[]; sacuvaj(); prikazi(); window.scrollTo({top:0});
});

/* okićena jelka za zaglavlje */
function velikaJelka(seme){ return `<svg viewBox="0 0 240 280" xmlns="http://www.w3.org/2000/svg">${jelkaUnutra(seme)}</svg>`; }
function jelkaUnutra(seme){
  const R=(()=>{ let h=seme; return ()=>((h=Math.imul(h^h>>>15,2246822507)+0x9e3779b9>>>0)%1000)/1000; })();
  const nivoi=[[30,96,44],[66,140,64],[104,188,86],[146,236,106]]; // vrh y, dno y, pola širine
  let s=``;
  s+=`<rect x="106" y="226" width="28" height="36" rx="3" fill="#6b3f22"/><ellipse cx="120" cy="266" rx="70" ry="9" fill="#ffffff" opacity=".85"/>`;
  [...nivoi].reverse().forEach(([v,d,w],i)=>{
    const z=i%2? "#1f7a4d":"#24905a";
    s+=`<path d="M120 ${v} L${120+w} ${d} Q120 ${d+14} ${120-w} ${d}Z" fill="${z}"/>`;
    s+=`<path d="M${120-w} ${d} Q${120-w/2} ${d+10} 120 ${d+6} Q${120+w/2} ${d+10} ${120+w} ${d} Q120 ${d+16} ${120-w} ${d}Z" fill="#f4f9ff"/>`;
  });
  const boje=["#e8433a","#f3c53f","#4aa3ff","#ff7ab8","#ffffff","#9b6bff"];
  nivoi.forEach(([v,d,w])=>{
    s+=`<path d="M${120-w*.55} ${d-24} Q120 ${d-6} ${120+w*.7} ${d-30}" fill="none" stroke="#f3d27a" stroke-width="2.4" stroke-dasharray="1 4" stroke-linecap="round"/>`;
    const n=Math.round(w/22);
    for(let i=0;i<n;i++){ const t=(i+.5)/n, x=120-w*.8+t*w*1.6, y=d-8-R()*16; s+=`<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="5.5" fill="${boje[Math.floor(R()*boje.length)]}"/><circle cx="${(x-1.6).toFixed(1)}" cy="${(y-1.6).toFixed(1)}" r="1.6" fill="#fff" opacity=".7"/>`; }
  });
  s+=`<circle cx="120" cy="28" r="22" fill="#fff3b0" opacity=".35"/><path d="${zvezdaPutanja(120,28,17,7)}" fill="#f6cd3f" stroke="#e0a91e" stroke-width="1.5" stroke-linejoin="round"/>`;
  return s;
}

/* zimska scena na dnu zaglavlja (viewBox 1200×300; na telefonu se vidi sredina, x≈230–970) */
function scena(){
  const B="#ffffff", SENKA="#cfe0f5";
  const jelka=(x,y,sc,seme)=>`<g transform="translate(${x} ${y}) scale(${sc}) translate(-120 -266)">${jelkaUnutra(seme)}</g>`;
  const usko=window.matchMedia("(max-width:620px)").matches;
  let s=`<svg viewBox="${usko?"250 70 830 230":"0 0 1200 300"}" preserveAspectRatio="${usko?"xMidYMax meet":"xMidYMax slice"}" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <defs><linearGradient id="tlo" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset=".55" stop-color="#f2f8ff"/><stop offset="1" stop-color="var(--paper,#e6f0fb)"/></linearGradient>
  <radialGradient id="svetlo"><stop offset="0" stop-color="#ffd76a" stop-opacity=".55"/><stop offset="1" stop-color="#ffd76a" stop-opacity="0"/></radialGradient></defs>`;
  // daleka brda i jelke
  s+=`<path d="M0 235 Q150 175 320 210 Q480 240 640 200 Q820 160 980 205 Q1100 235 1200 200 V300 H0Z" fill="#c4daf5" opacity=".55"/>`;
  s+=jelka(70,236,.62,3)+jelka(170,226,.42,11)+jelka(1135,232,.6,5)+jelka(1040,224,.4,17)+jelka(455,222,.34,29)+jelka(712,218,.3,31);
  // tlo
  s+=`<path d="M0 248 Q180 214 380 236 Q560 256 720 232 Q900 208 1060 232 Q1140 244 1200 236 V300 H0Z" fill="url(#tlo)"/>`;

  // MEDENA KUĆICA (centar x=600)
  s+=`<ellipse cx="600" cy="252" rx="110" ry="10" fill="${SENKA}" opacity=".8"/>`;
  s+=`<circle cx="600" cy="200" r="120" fill="url(#svetlo)"/>`;
  s+=`<rect x="640" y="104" width="20" height="40" fill="${TESTO}" stroke="${IVICA}" stroke-width="3"/><path d="M636 106 q4 -10 14 -8 q10 -2 14 8z" fill="${B}"/>`;
  s+=`<rect x="530" y="160" width="140" height="90" rx="4" fill="${TESTO}" stroke="${IVICA}" stroke-width="4"/>`;
  s+=`<path d="M508 170 L600 92 L692 170Z" fill="#9a5426" stroke="${IVICA}" stroke-width="4" stroke-linejoin="round"/>`;
  for(let r=0;r<4;r++){ const y=112+r*15, w=(y-92)*1.18; for(let x=600-w+10;x<600+w-6;x+=14) s+=`<path d="M${x.toFixed(1)} ${y} q7 9 14 0" fill="none" stroke="#c98a55" stroke-width="2"/>`; }
  s+=`<path d="M504 172 Q516 186 528 172 Q540 188 552 172 Q564 186 576 172 Q588 188 600 172 Q612 186 624 172 Q636 188 648 172 Q660 186 672 172 Q684 188 696 172 L600 88Z" fill="${B}" opacity="0" />`;
  s+=`<path d="M506 171 L600 90 L694 171" fill="none" stroke="${B}" stroke-width="9" stroke-linejoin="round" stroke-linecap="round"/>`;
  [[528,184,"#e8433a"],[552,186,"#4aa3ff"],[576,184,"#f3c53f"],[624,184,"#68d48a"],[648,186,"#ff7ab8"],[672,184,"#e8433a"]].forEach(([x,y,b])=>s+=tacka(x,y-12,4.5,b));
  s+=`<path d="M600 96 l3 6 6 1 -4.5 4 1 6 -5.5-3 -5.5 3 1-6 -4.5-4 6-1z" fill="#f6cd3f"/>`;
  // prozori i vrata
  for(const x of [548,628]){ s+=`<rect x="${x}" y="182" width="26" height="26" rx="4" fill="#ffd76a" stroke="${B}" stroke-width="3"/><path d="M${x+13} 182 V208 M${x} 195 H${x+26}" stroke="${B}" stroke-width="2.4"/>`; }
  s+=`<path d="M586 250 V222 a14 14 0 0 1 28 0 V250Z" fill="#6b3f22" stroke="${B}" stroke-width="3"/><circle cx="608" cy="236" r="2.4" fill="#f6cd3f"/>`;
  s+=cikcak(534,240,580,240,10,3)+cikcak(620,240,666,240,10,3);
  // bombone-štapići pored vrata
  for(const x of [572,628]){ s+=`<path d="M${x} 250 V214 q0 -8 7 -8 q7 0 7 7" fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round"/><path d="M${x} 250 V214 q0 -8 7 -8 q7 0 7 7" fill="none" stroke="#e8433a" stroke-width="5" stroke-dasharray="4 5" stroke-linecap="round"/>`; }

  // STAZA OD SNEGA od vrata ka posmatraču
  s+=`<path d="M588 251 L612 251 Q660 270 640 300 L540 300 Q556 272 588 251Z" fill="#ffffff" stroke="#c9dcf2" stroke-width="2"/>`;
  [[598,262],[606,270],[594,279],[604,288],[590,296]].forEach(([x,y],i)=>s+=`<ellipse cx="${x}" cy="${y}" rx="3.2" ry="2" fill="#c9dcf2"/>`);
  [[560,286],[570,270],[632,276],[624,262]].forEach(([x,y])=>s+=`<circle cx="${x}" cy="${y}" r="3" fill="#ffd76a" opacity=".9"/>`);

  // SNEŠKO BELIĆ (x=330)
  const sx=330;
  s+=`<ellipse cx="${sx}" cy="262" rx="40" ry="7" fill="${SENKA}"/>`;
  s+=`<circle cx="${sx}" cy="232" r="32" fill="${B}" stroke="${SENKA}" stroke-width="3"/><circle cx="${sx}" cy="188" r="24" fill="${B}" stroke="${SENKA}" stroke-width="3"/><circle cx="${sx}" cy="154" r="18" fill="${B}" stroke="${SENKA}" stroke-width="3"/>`;
  s+=`<path d="M${sx-20} 186 L${sx-52} 166 M${sx-42} 172 l-6 -10 M${sx+20} 186 L${sx+50} 170 M${sx+42} 174 l4 -11" stroke="#6b3f22" stroke-width="3.5" stroke-linecap="round" fill="none"/>`;
  s+=`<circle cx="${sx-6}" cy="150" r="2.4" fill="#22252e"/><circle cx="${sx+6}" cy="150" r="2.4" fill="#22252e"/><path d="M${sx} 155 l18 4 -18 3z" fill="#f08a24"/>`;
  [161,163,164,163,161].forEach((y,i)=>s+=`<circle cx="${sx-8+i*4}" cy="${y}" r="1.4" fill="#22252e"/>`);
  s+=`<path d="M${sx-17} 167 q17 8 34 0 l0 7 q-17 8 -34 0z" fill="#e8433a"/><path d="M${sx+8} 172 l4 20 8 -2 -4 -19z" fill="#e8433a"/>`;
  [180,194,208].forEach(y=>s+=`<circle cx="${sx}" cy="${y}" r="2.6" fill="#22252e"/>`);
  s+=`<path d="M${sx-17} 146 q17 -26 34 0z" fill="#2f6fd6"/><rect x="${sx-19}" y="142" width="38" height="7" rx="3.5" fill="#f4f9ff"/><circle cx="${sx}" cy="124" r="6" fill="#f4f9ff"/>`;

  // DEDA MRAZ U SANKAMA (x≈800) i IRVASI (x≈930–1010)
  s+=`<ellipse cx="900" cy="258" rx="150" ry="8" fill="${SENKA}" opacity=".9"/>`;
  // irvasi
  const irvas=(x,y)=>`<g transform="translate(${x} ${y})">
    <path d="M-26 -8 L-30 22 M-16 -6 L-14 22 M14 -6 L18 22 M24 -8 L22 22" stroke="#6e4422" stroke-width="5" stroke-linecap="round"/>
    <ellipse cx="0" cy="-14" rx="32" ry="16" fill="#8b5a2b"/><ellipse cx="-2" cy="-8" rx="20" ry="8" fill="#b9875a"/>
    <path d="M22 -22 L34 -44" stroke="#8b5a2b" stroke-width="12" stroke-linecap="round"/>
    <ellipse cx="42" cy="-48" rx="13" ry="9" fill="#8b5a2b"/><ellipse cx="53" cy="-45" rx="5" ry="4" fill="#3a2414"/>
    <circle cx="42" cy="-51" r="1.8" fill="#1d1208"/>
    <path d="M36 -56 q-4 -14 -14 -20 M30 -66 l-8 -2 M38 -57 q2 -14 12 -22 M46 -72 l6 -4" stroke="#5a3a1e" stroke-width="3" stroke-linecap="round" fill="none"/>
    <path d="M-32 -18 q-8 -4 -6 4" stroke="#f4f9ff" stroke-width="5" stroke-linecap="round" fill="none"/>
    <path d="M14 -28 q14 10 24 -8" stroke="#c8382c" stroke-width="5" fill="none"/><circle cx="26" cy="-24" r="3.2" fill="#f6cd3f"/>
  </g>`;
  s+=irvas(1010,236)+irvas(920,240);
  // uzde
  s+=`<path d="M836 196 Q900 214 946 216 M946 216 Q990 210 1036 212" stroke="#7a2a20" stroke-width="2" fill="none"/>`;
  // sanke
  s+=`<path d="M730 250 H880 q18 0 18 -14" stroke="#d9a441" stroke-width="5" fill="none" stroke-linecap="round"/><path d="M748 250 V238 M860 250 V238" stroke="#d9a441" stroke-width="4"/>`;
  s+=`<path d="M732 238 Q726 196 746 190 L780 196 Q812 214 846 212 Q872 210 878 222 L874 238Z" fill="#c8382c" stroke="#8f2219" stroke-width="3" stroke-linejoin="round"/>`;
  s+=`<path d="M744 228 H866" stroke="#d9a441" stroke-width="3" stroke-dasharray="2 6" stroke-linecap="round"/>`;
  // pokloni i džak
  s+=`<path d="M738 196 q-6 -34 22 -40 q26 4 18 38z" fill="#9a6b3e"/><path d="M748 160 q10 -8 20 0" stroke="#7a4f28" stroke-width="3" fill="none"/>`;
  s+=`<rect x="752" y="170" width="18" height="18" fill="#4aa3ff"/><path d="M761 170 V188 M752 179 H770" stroke="#f6cd3f" stroke-width="3"/>`;
  // Deda Mraz
  s+=`<path d="M786 214 Q782 168 812 164 Q842 168 838 214Z" fill="#c8382c"/><path d="M810 166 V214" stroke="#f4f9ff" stroke-width="6"/><rect x="786" y="196" width="52" height="6" fill="#2b1d16"/><rect x="806" y="194" width="10" height="10" rx="2" fill="none" stroke="#f6cd3f" stroke-width="2.4"/>`;
  s+=`<path d="M834 184 Q848 192 838 198" stroke="#c8382c" stroke-width="10" stroke-linecap="round" fill="none"/><circle cx="838" cy="198" r="5" fill="#f4f9ff"/>`;
  s+=`<circle cx="812" cy="146" r="15" fill="#f5c9a8"/>`;
  s+=`<path d="M796 148 Q794 178 812 184 Q830 178 828 148 Q820 158 812 156 Q804 158 796 148Z" fill="#ffffff" stroke="#e3edf8" stroke-width="1.5"/>`;
  s+=`<path d="M802 154 q10 6 20 0" stroke="#ffffff" stroke-width="5" stroke-linecap="round" fill="none"/><circle cx="812" cy="150" r="3" fill="#e88f7f"/>`;
  s+=`<circle cx="806" cy="143" r="1.8" fill="#2b1d16"/><circle cx="818" cy="143" r="1.8" fill="#2b1d16"/>`;
  s+=`<path d="M796 136 Q806 108 834 116 Q840 126 846 134" fill="#c8382c"/><path d="M796 136 Q810 126 830 134" stroke="#c8382c" stroke-width="2" fill="#c8382c"/><circle cx="848" cy="136" r="6" fill="#ffffff"/><rect x="794" y="132" width="38" height="8" rx="4" fill="#ffffff"/>`;
  return s+`</svg>`;
}
document.getElementById("logo-crtez").innerHTML=crtez("covek");
document.getElementById("scena").innerHTML=scena();
window.matchMedia("(max-width:620px)").addEventListener("change",()=>{ document.getElementById("scena").innerHTML=scena(); });
prikazi();
