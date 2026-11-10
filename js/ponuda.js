/* =====================================================================
   PONUDA — sve što se menja nalazi se ovde (ovaj fajl).

   Svaki medenjak:
     id        jedinstven, bez razmaka (koristi se u korpi)
     naziv     ime koje kupac vidi
     opis      kratak opis
     velicina  npr. "oko 12 cm"
     pakovanje npr. "1 komad", "kutija od 6 komada"
     cena      cena u dinarima za jedno pakovanje; null = cena se ne prikazuje
     min       najmanja količina koja može da se poruči (podrazumevano 1)
     oblik     crtež dok ne stigne fotografija: covek, srce, zvezda, jelka, kucica, pahulja, kutija, kesica
     slika     putanja do fotografije u slike/; null = prikazuje se crtež
     alergeni  ključevi iz ALERGENI
   ===================================================================== */
const ALERGENI = { gluten:"gluten", jaja:"jaja", mleko:"mleko", orasasti:"orašasti plodovi", soja:"soja" };

/* Osnova svih medenjaka: testo sa medom i začinima, ukras od šećerne glazure. */
const OSNOVNI_ALERGENI = ["gluten","jaja"];

const PONUDA = [
  { id:"covek", naziv:"Medeni čovečuljak", oblik:"covek", slika:null,
    opis:"Klasični medenjak sa osmehom, dugmićima i cik-cak glazurom na rukama i nogama.",
    velicina:"oko 12 cm", pakovanje:"1 komad", cena:null, min:1, alergeni:OSNOVNI_ALERGENI },
  { id:"srce", naziv:"Medeno srce", oblik:"srce", slika:null,
    opis:"Srce oivičeno belom glazurom, sa tačkicama i šarom u sredini.",
    velicina:"oko 10 cm", pakovanje:"1 komad", cena:null, min:1, alergeni:OSNOVNI_ALERGENI },
  { id:"zvezda", naziv:"Zvezda", oblik:"zvezda", slika:null,
    opis:"Zvezda sa duplom linijom glazure i šećernim biserom u sredini.",
    velicina:"oko 10 cm", pakovanje:"1 komad", cena:null, min:1, alergeni:OSNOVNI_ALERGENI },
  { id:"jelka", naziv:"Jelka", oblik:"jelka", slika:null,
    opis:"Jelka sa girlandama od glazure, šarenim kuglicama i zvezdom na vrhu.",
    velicina:"oko 12 cm", pakovanje:"1 komad", cena:null, min:1, alergeni:OSNOVNI_ALERGENI },
  { id:"pahulja", naziv:"Pahulja", oblik:"pahulja", slika:null,
    opis:"Šestokraka pahulja, ukrašena tankom belom glazurom.",
    velicina:"oko 10 cm", pakovanje:"1 komad", cena:null, min:1, alergeni:OSNOVNI_ALERGENI },
  { id:"kucica", naziv:"Kućica od medenjaka", oblik:"kucica", slika:null,
    opis:"Velika ravna kućica sa snegom na krovu, prozorima i vratima od glazure.",
    velicina:"oko 16 cm", pakovanje:"1 komad", cena:null, min:1, alergeni:OSNOVNI_ALERGENI },
  { id:"kesica", naziv:"Mini medenjaci", oblik:"kesica", slika:null,
    opis:"Mali medenjaci u providnoj kesici sa mašnom: srca, zvezde i čovečuljci.",
    velicina:"oko 5 cm", pakovanje:"kesica od 10 komada", cena:null, min:1, alergeni:OSNOVNI_ALERGENI },
  { id:"kutija", naziv:"Poklon kutija", oblik:"kutija", slika:null,
    opis:"Kutija sa mašnom i šest različitih medenjaka iz ponude.",
    velicina:"6 × oko 10 cm", pakovanje:"kutija od 6 komada", cena:null, min:1, alergeni:OSNOVNI_ALERGENI },
];

/* Dostava */
const DOSTAVA = {
  najranijeZaDana: 2,          // najraniji datum dostave: danas + ovoliko dana
  napomena: "Javićemo se telefonom da potvrdimo porudžbinu, termin i cenu dostave.",
};
