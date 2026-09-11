# Divine Oils & Divine Seed

Statinis vieno puslapio žinynas apie augalinius aliejus lietuvių kalba. Pagrindinis
dėmesys skiriamas **amaranto (burnočio) sėklų aliejui**, o kartu apžvelgiami visi
pagrindiniai kulinariniai, kosmetiniai, eteriniai ir techniniai aliejai — kas juose
yra, iš kur jie gaunami, kur ir kaip naudojami.

Žinyne **67 aliejai**, kiekvienas su kilme, veikliosiomis medžiagomis, riebalų rūgščių
sudėtimi, galiojimo terminu, atsargumo priemonėmis ir pakaitalų sąrašu.

Atskiras puslapis **Divine Seed** (`seklos.html`) skirtas sėkloms — **97 pasaulio sėklos**
aštuoniose kategorijose (nuo grūdų ir ankštinių iki prieskoninių, daiginamų ir nuodingų)
su maistine verte, kilme, paruošimo technika, receptais, daiginimo ir sodinimo gidais. Puslapiai
susieti navigacijos nuorodomis ir dalijasi stiliais bei katalogo varikliu.

## Turinys

### Divine Oils (`index.html`)

| Skyrius | Apie ką |
|---|---|
| Amaranto sėklų aliejus | Sudėtis, skvalenas, panaudojimas virtuvėje, odai ir plaukams, kaip išsirinkti |
| Katalogas | 67 aliejai, filtrai pagal paskirtį, rikiavimas, paieška, išskleidžiamos detalės |
| Kaitra | Dūmų taškų lentelė — ką galima kepti, gruzdinti, o ko nekaitinti |
| Odai | Lentelė pagal odos tipą, komedogeniškumo skalė, tepimo tvarka |
| Receptai | 8 naminių mišinių receptai su proporcijomis + pakaitalų lentelė |
| Riebalų rūgštys | 13 riebalų rūgščių: kur jų daugiausia ir ką kiekviena duoda |
| Gamyba | Spaudimo ir ekstrakcijos būdai, etikečių žodynėlis |
| Laikymas | Kur laikyti, kada į šaldytuvą, kaip atpažinti apkartusį aliejų |
| Namams | Mediena, įrankiai, valymas, sodas + įspėjimas dėl savaiminio užsidegimo |
| Sauga | Eterinių aliejų skiedimas, griežtos taisyklės, nuodingumas katėms ir šunims |
| Žodynėlis | 21 terminas — nuo chemotipo iki nesumuilinamosios frakcijos |
| DUK | 17 dažniausių klausimų |


### Divine Seed (`seklos.html`)

| Skyrius | Apie ką |
|---|---|
| Kas yra sėkla | Sėklos sandara; riba tarp sėklos, grūdo, ankštinės ir riešuto |
| Katalogas | 97 sėklos, 8 kategorijos, filtrai, rikiavimas pagal baltymų kiekį |
| Pagal tikslą | Greita lentelė: kurią sėklą rinktis kuriam poreikiui |
| Maistinė vertė | Palyginamoji lentelė: kalorijos, baltymai, riebalai, skaidulos |
| Receptai | 9 mišiniai — dukkah, gomasio, za'atar, panch phoron, sėklų duona ir kt. |
| Paruošimas | Malimas, mirkymas, skrudinimas, daiginimas; antimaistinės medžiagos |
| Daiginimas | Žingsniai, laiko lentelė, higienos taisyklės |
| Pasaulyje | Sėklų tradicijos šešiuose regionuose ir jas jungiantis principas |
| Sodinimui | Daigumo terminai, laikymas sėjai, stratifikacija, savo sėklų rinkimas |
| Laikymas | Terminai pagal sėklos tipą, šaldiklio panaudojimas |
| Sauga | Nuodingos sėklos, saiko reikalaujančios, ES alergenai |
| DUK | 16 klausimų |

## Struktūra

```
index.html              aliejų žinynas (Divine Oils)
seklos.html             sėklų žinynas (Divine Seed)
assets/css/styles.css   bendri stiliai, šviesi ir tamsi tema
assets/js/theme.js      temos perjungimas (abu puslapiai)
assets/js/catalog.js    bendras katalogo variklis: filtrai, paieška, rikiavimas
assets/js/app.js        aliejų katalogo konfigūracija
assets/js/seeds-app.js  sėklų katalogo konfigūracija
assets/data/oils.js     67 aliejai (window.OILS)
assets/data/seeds.js    97 sėklos (window.SEEDS)
```

Abu katalogai naudoja tą patį `buildCatalog()` variklį — kiekvienas puslapis paduoda
savo duomenis, kortelės atvaizdavimo funkciją, paieškos laukus ir rikiavimo taisykles.

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
  cats: ["kulinariniai"],     // kulinariniai | oda | eteriniai | specifiniai
  star: false,                 // true — prie pavadinimo rodoma žvaigždutė
  price: "€€",                 // € iki ~10 €/l, €€ ~10–40 €/l, €€€ virš 40 €/l
  desc: "Trumpas aprašymas — rodomas kortelės viršuje.",
  origin: "Iš kur ir kaip gaunamas.",
  actives: "Veikliosios medžiagos.",
  fa: "Riebalų rūgščių sudėtis.",
  smoke: "200 °C",            // arba "—", jei netaikoma
  comedo: "2",                // arba null
  shelf: "12 mėn.",
  tags: ["žyma", "žyma"],
  uses: ["Panaudojimo būdas", "..."],
  kitchen: "Kulinariniai deriniai.",   // neprivaloma
  care: "Taikymas odai ar plaukams.",  // neprivaloma
  avoid: "Atsargumo priemonės.",
  swap: "Kuo pakeisti.",
  note: "Pastaba, galimas <b>HTML</b>."
}
```

Laukai `desc`, `uses` ir `tags` rodomi kortelėje iš karto; `origin`, `actives`,
`kitchen`, `care`, `avoid` ir `swap` — išskleidžiamame skyrelyje „Daugiau apie šį
aliejų“. Laukuose, išskyrus `note`, HTML ekranuojamas; leidžiamos tik `<b>` ir `<i>`
žymos.

### Sėklos įrašo pridėjimas

Į `assets/data/seeds.js` masyvą įrašykite objektą su laukais `id`, `name`, `latin`,
`cats` (`kasdienes` | `grudai` | `ankstines` | `pseudograudai` | `prieskoniai` |
`riesutines` | `daiginimui` | `atsargiai`), `star`, `desc`, `origin`, `nutrition`, `key`, `taste`, `uses`, `prep`,
`dose`, `avoid`, `swap`, `note`. Kortelėje iš karto rodomi `desc`, `nutrition`, `key`,
`taste`, `dose` ir `uses`; `origin`, `prep`, `avoid` ir `swap` — išskleidžiamame skyrelyje.

Kategorijų filtrai aprašyti atitinkamo puslapio `.chips` bloke — pridedant naują
kategoriją reikia naujo `.chip` mygtuko su atitinkamu `data-cat`. Rikiavimo variantai
aprašyti `#oil-sort` sąraše ir `sorted()` funkcijoje `assets/js/app.js`.

## Duomenų tikslumas

Riebalų rūgščių sudėtis ir dūmų taškai pateikiami kaip **tipiniai intervalai** —
konkretaus produkto rodikliai priklauso nuo veislės, auginimo sąlygų ir spaudimo bei
rafinavimo būdo. Puslapio turinys yra bendro pobūdžio informacija, o ne medicininė
konsultacija; atitinkamas atsakomybės ribojimas pateiktas puslapio poraštėje.
