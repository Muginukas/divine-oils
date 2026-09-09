# Divine Oils — aliejų žinynas

Statinis vieno puslapio žinynas apie augalinius aliejus lietuvių kalba. Pagrindinis
dėmesys skiriamas **amaranto (burnočio) sėklų aliejui**, o kartu apžvelgiami visi
pagrindiniai kulinariniai, kosmetiniai ir eteriniai aliejai — kas juose yra, kur ir
kaip naudojami.

## Turinys

| Skyrius | Apie ką |
|---|---|
| Amaranto sėklų aliejus | Sudėtis, skvalenas, panaudojimas virtuvėje, odai ir plaukams, kaip išsirinkti |
| Katalogas | 38 aliejai su aprašymais, filtrai pagal paskirtį ir paieška |
| Kaitra | Dūmų taškų lentelė — ką galima kepti, gruzdinti, o ko nekaitinti |
| Odai | Lentelė pagal odos tipą, komedogeniškumo skalė, tepimo tvarka |
| Gamyba | Spaudimo ir ekstrakcijos būdai, etikečių žodynėlis, riebalų rūgštys |
| Laikymas | Kur laikyti, kada į šaldytuvą, kaip atpažinti apkartusį aliejų |
| Sauga | Eterinių aliejų skiedimo lentelė ir griežtos taisyklės |
| DUK | Devyni dažniausi klausimai |

## Struktūra

```
index.html              visas puslapio turinys
assets/css/styles.css   stiliai, šviesi ir tamsi tema
assets/js/app.js        katalogo atvaizdavimas, filtrai, paieška, temos perjungimas
assets/data/oils.js     aliejų duomenys (window.OILS)
```

Priklausomybių, kompiliavimo ar diegimo nereikia — vien statiniai failai.

## Paleidimas

Atidarykite `index.html` naršyklėje arba paleiskite vietinį serverį:

```bash
python3 -m http.server 8000
# http://localhost:8000
```

## Aliejaus įrašo pridėjimas

Į `assets/data/oils.js` masyvą įrašykite naują objektą:

```js
{
  id: "unikalus-id",
  name: "Aliejaus pavadinimas",
  latin: "Botaninis pavadinimas",
  cats: ["kulinariniai"],        // kulinariniai | oda | eteriniai | specifiniai
  star: false,                    // true — prie pavadinimo rodoma žvaigždutė
  desc: "Trumpas aprašymas.",
  smoke: "200 °C",               // arba "—", jei netaikoma
  comedo: "2",                   // arba null
  fa: "Riebalų rūgščių sudėtis",
  tags: ["žyma", "žyma"],
  uses: ["Panaudojimo būdas", "..."],
  note: "Papildoma pastaba, galimas <b>HTML</b>."
}
```

Kategorijų filtrai aprašyti `index.html` faile, `.chips` bloke — pridedant naują
kategoriją reikia naujo `.chip` mygtuko su atitinkamu `data-cat`.

## Duomenų tikslumas

Riebalų rūgščių sudėtis ir dūmų taškai pateikiami kaip **tipiniai intervalai** —
konkretaus produkto rodikliai priklauso nuo veislės, auginimo sąlygų ir spaudimo bei
rafinavimo būdo. Puslapio turinys yra bendro pobūdžio informacija, o ne medicininė
konsultacija; atitinkamas atsakomybės ribojimas pateiktas puslapio poraštėje.
