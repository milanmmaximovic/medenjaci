# Magični medenjaci

Sajt za poručivanje medenjaka iz ponude: izaberi medenjak i količinu, dodaj u korpu, upiši podatke za dostavu i pošalji porudžbinu.
(Radni naziv. Struktura je ista kao kod La Tarterie, bez „Napravi svoj".)

## Struktura

| Fajl | Šta je u njemu |
|---|---|
| `js/ponuda.js` | **Sve što se menja u ponudi**: medenjaci (naziv, opis, veličina, pakovanje, cena, najmanja količina), alergeni i podešavanja dostave |
| `js/app.js` | Logika sajta (crteži, korpa, porudžbina) |
| `css/stil.css` | Izgled |
| `slike/` | Ikona i fotografije medenjaka |
| `index.html` | Stranica i skrivena forma za Netlify |
| `netlify.toml` | Podešavanja za Netlify |
| `netlify/edge-functions/ulaz.ts` | Ulaz sa lozinkom dok sajt nije javno otvoren |

## Kako se menja ponuda

U `js/ponuda.js` svaki medenjak u `PONUDA` ima:

```js
{ id:"srce", naziv:"Medeno srce", opis:"…", velicina:"oko 10 cm", pakovanje:"1 komad",
  cena:250,        // u dinarima; null = cena se ne prikazuje
  min:1,           // najmanja količina
  oblik:"srce",    // crtež dok nema fotografije
  slika:null,      // npr. "slike/srce.jpg"
  alergeni:["gluten","jaja"] }
```

- **Cene**: kad su upisane svima, korpa prikazuje i ukupan iznos (+ dostava).
- **Fotografija**: dodaj je u `slike/` i upiši putanju u `slika`. Dok je `null`, prikazuje se crtež.
- **Novi medenjak**: dodaj novi unos u `PONUDA` (oblici za crtež: covek, srce, zvezda, jelka, pahulja, kucica, kesica, kutija).
- **Dostava**: `DOSTAVA.najranijeZaDana` je najraniji datum dostave (danas + toliko dana).

## Porudžbine

Forma se šalje preko Netlify Forms (ime, telefon, mejl, adresa, mesto, poštanski broj, datum, napomena, stavke).
Porudžbine se vide u Netlify panelu (Forms → porudzbina), a obaveštenje na mejl se uključuje u
Site configuration → Notifications → Form submission notifications.

## Lozinka za ulaz

Isto kao kod La Tarterie: Netlify → Environment variables → `SITE_PASSWORD`. Bez nje je sajt otvoren svima.

## Lokalno

Nema build koraka. Otvori folder sa bilo kojim statičkim serverom, npr. `npx serve .`
(slanje porudžbine radi samo na Netlify-u).
