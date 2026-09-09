/* Aliejų katalogas. Kiekvienas įrašas: pavadinimas, kilmė, sudėtis, panaudojimas.
   Riebalų rūgščių ir dūmų taško reikšmės — tipiniai intervalai; konkretus produktas
   priklauso nuo veislės, klimato ir spaudimo / rafinavimo būdo. */

window.OILS = [
  /* ============ KULINARINIAI ============ */
  {
    id: "amaranto",
    name: "Amaranto sėklų aliejus",
    latin: "Amaranthus cruentus / hypochondriacus",
    cats: ["kulinariniai", "oda"],
    star: true,
    desc: "Turtingiausias augalinis skvaleno šaltinis (6–8 %). Spaudžiamas iš smulkių burnočio sėklų, kuriose aliejaus tėra 5–8 % — todėl brangus. Tirštas, gintarinis, su riešutų ir grūdų atspalviu.",
    smoke: "160–180 °C (nekaitinti)",
    comedo: "1–2",
    fa: "Linolo r. 40–50 %, oleino r. 20–30 %, palmitino r. 19–24 %",
    tags: ["skvalenas", "vitaminas E", "šaltai spaustas", "brangus"],
    uses: [
      "Į salotas, košes, jogurtą, sriubą — įpilama jau atvėsus",
      "Kasdienis serumas sausai, brandžiai, dirgliai odai",
      "Į kremą ar balzamą 5–20 % koncentracijos",
      "Plaukų galiukams ir sausai galvos odai"
    ],
    note: "<b>Kodėl skvalenas svarbus:</b> tai medžiaga, kurios natūraliai yra ir žmogaus odos riebaluose, todėl aliejus gerai susigeria ir nepalieka lipnumo. Su amžiumi odos skvaleno mažėja."
  },
  {
    id: "alyvuogiu",
    name: "Alyvuogių aliejus (extra virgin)",
    latin: "Olea europaea",
    cats: ["kulinariniai", "oda"],
    desc: "Viduržemio jūros virtuvės pagrindas. „Extra virgin“ reiškia pirmą šaltą spaudimą ir laisvųjų rūgščių kiekį iki 0,8 %. Turi polifenolių (oleokantalio), kurie sukelia tą aitrumą gerklėje.",
    smoke: "190–207 °C (extra virgin), 210–240 °C (rafinuotas)",
    comedo: "2",
    fa: "Oleino r. 55–83 %, linolo r. 3–21 %, sotieji ~14 %",
    tags: ["polifenoliai", "omega-9", "kasdienis"],
    uses: [
      "Salotoms, marinatams, užpilti ant patiekalo prieš patiekiant",
      "Troškinimui ir kepimui iki vidutinės kaitros",
      "Kūno aliejus, kaukė plaukams, muilo gamyba"
    ],
    note: "<b>Mitas:</b> extra virgin netinka kepti. Netinka tik gilaus kepinimo temperatūroms — įprastam kepimui keptuvėje jis stabilus dėl antioksidantų."
  },
  {
    id: "rapsu",
    name: "Rapsų aliejus",
    latin: "Brassica napus",
    cats: ["kulinariniai"],
    desc: "Vienas subalansuočiausių kasdienių aliejų: mažai sočiųjų riebalų ir palyginti daug omega-3 (alfa linoleno rūgšties). Lietuvoje auginamas vietoje, todėl pigus ir šviežias.",
    smoke: "205–230 °C (rafinuotas), 190–200 °C (šaltai spaustas)",
    comedo: null,
    fa: "Oleino r. ~61 %, linolo r. ~21 %, alfa linoleno r. ~11 %, sotieji ~7 %",
    tags: ["omega-3", "vietinis", "universalus"],
    uses: [
      "Kepimui, troškinimui, kepiniams — rafinuotas",
      "Šaltai spaustas — salotoms, turi kopūstinį atspalvį",
      "Neutrali bazė naminiam majonezui"
    ],
    note: "<b>Omega-3 / omega-6 santykis</b> čia geriausias tarp pigių aliejų — apie 1:2."
  },
  {
    id: "saulegrazu",
    name: "Saulėgrąžų aliejus",
    latin: "Helianthus annuus",
    cats: ["kulinariniai", "oda"],
    desc: "Neutralus, plačiausiai naudojamas. Rinkoje yra dvi visai skirtingos versijos: įprastas (daug linolo r.) ir „high oleic“ (daug oleino r.), kuris kur kas atsparesnis kaitrai.",
    smoke: "225–230 °C (rafinuotas), 105–160 °C (nerafinuotas)",
    comedo: "0–2",
    fa: "Linolo r. 48–74 % arba oleino r. iki 82 % („high oleic“)",
    tags: ["neutralus", "pigus", "vitaminas E"],
    uses: [
      "Kepimui ir gruzdinimui — tik rafinuotas arba „high oleic“",
      "Nerafinuotas, su sėklų kvapu — salotoms",
      "Kosmetikoje: lengva bazė, tinka riebiai odai, daug vitamino E"
    ],
    note: "<b>Atkreipkite dėmesį:</b> įprastas saulėgrąžų aliejus turi labai daug omega-6, todėl jo dažnai suvartojama per daug viso raciono mastu."
  },
  {
    id: "linu",
    name: "Linų sėmenų aliejus",
    latin: "Linum usitatissimum",
    cats: ["kulinariniai", "specifiniai"],
    desc: "Rekordinis augalinės omega-3 (ALA) kiekis — iki 55 %. Būtent dėl to itin greitai genda ir visiškai netinka kaitinti.",
    smoke: "107 °C — niekada nekaitinti",
    comedo: "4",
    fa: "Alfa linoleno r. 45–55 %, linolo r. ~15 %, oleino r. ~20 %",
    tags: ["omega-3", "greitai genda", "šaldytuve"],
    uses: [
      "Šaukštas į varškę, košę, salotas (klasikinis Budwig receptas)",
      "Į kokteilius — vartoti iškart, nelaikyti paruošto",
      "Techniškai: medienos impregnavimas, ketaus keptuvių įdeginimas"
    ],
    note: "<b>Laikymas:</b> tik šaldytuve, tamsiame butelyje, sunaudoti per 4–8 savaites nuo atidarymo. Apkartęs kvepia žuvimi ar dažais — tokį išpilkite."
  },
  {
    id: "kokosu",
    name: "Kokosų aliejus",
    latin: "Cocos nucifera",
    cats: ["kulinariniai", "oda"],
    desc: "Kambario temperatūroje kietas, nes 80–90 % sudaro sotieji riebalai. Dėl vidutinės grandinės riebalų rūgščių (ypač lauro r.) yra labai stabilus ir ilgai negenda.",
    smoke: "175–180 °C (virgin), 200–230 °C (rafinuotas)",
    comedo: "4",
    fa: "Lauro r. ~47 %, miristino r. ~18 %, sotieji iš viso ~85 %",
    tags: ["sotieji", "stabilus", "kietas"],
    uses: [
      "Kepimui, azijietiškiems ir saldiems patiekalams (virgin turi kokoso kvapą)",
      "Kūno sviestas, makiažo valiklis, kaukė plaukams prieš plovimą",
      "Muilo gamyba — duoda kietumą ir putas"
    ],
    note: "<b>Veidui — atsargiai:</b> komedogeniškumo įvertis 4 iš 5, daugeliui užkemša poras. Kūnui ir plaukams — puikus."
  },
  {
    id: "sezamu",
    name: "Sezamų aliejus",
    latin: "Sesamum indicum",
    cats: ["kulinariniai", "oda"],
    desc: "Du variantai: šviesus (iš žalių sėklų, neutralesnis) ir tamsus, skrudintas — intensyvaus riešutinio skonio prieskoninis aliejus. Turi sezamolino ir sezamolo, natūralių antioksidantų.",
    smoke: "175 °C (nerafinuotas), 210–230 °C (rafinuotas)",
    comedo: "2–3",
    fa: "Linolo r. ~41 %, oleino r. ~39 %, sotieji ~14 %",
    tags: ["azijietiška virtuvė", "antioksidantai", "ajurveda"],
    uses: [
      "Skrudintas — lašinamas į patiekalą pabaigoje, ne kaitinamas",
      "Šviesus — woko keptuvei ir marinatams",
      "Ajurvedinis abhyanga masažas, burnos skalavimas (oil pulling)"
    ],
    note: "<b>Alergija:</b> sezamas — vienas iš pagrindinių alergenų ES; produktuose privalo būti nurodytas."
  },
  {
    id: "avokado",
    name: "Avokadų aliejus",
    latin: "Persea americana",
    cats: ["kulinariniai", "oda"],
    desc: "Spaudžiamas iš vaisiaus minkštimo, ne iš sėklos. Rafinuotas turi vieną aukščiausių dūmų taškų tarp augalinių aliejų, todėl tinka net kepsninei.",
    smoke: "250–270 °C (rafinuotas), ~195 °C (nerafinuotas)",
    comedo: "2–3",
    fa: "Oleino r. ~68 %, linolo r. ~12 %, palmitino r. ~13 %",
    tags: ["aukšta kaitra", "omega-9", "sotus"],
    uses: [
      "Kepimui aukštoje temperatūroje, grilinimui",
      "Nerafinuotas, žalsvas — salotoms",
      "Kosmetikoje: sunkus, maitinantis, sausai ir brandžiai odai, sausiems plaukams"
    ],
    note: "<b>Pastaba:</b> tyrimai rodo, kad dalis rinkoje esančių „avokadų aliejų“ būna praskiesti pigesniais — verta rinktis patikimą gamintoją."
  },
  {
    id: "moliugu",
    name: "Moliūgų sėklų aliejus",
    latin: "Cucurbita pepo",
    cats: ["kulinariniai"],
    desc: "Tamsiai žalias su rausvu atspindžiu, sodraus skrudintų sėklų skonio. Štirijos (Austrija) regione turi saugomą kilmės nuorodą. Turi cinko ir fitosterolių.",
    smoke: "~160 °C (nekaitinti)",
    comedo: null,
    fa: "Linolo r. ~50 %, oleino r. ~30 %, sotieji ~18 %",
    tags: ["cinkas", "fitosteroliai", "gurmaniškas"],
    uses: [
      "Užpilti ant salotų, moliūgų sriubos, sūrio",
      "Su vanilės ledais — klasikinis austriškas derinys",
      "Papildas prostatos sveikatai palaikyti (tradicinis vartojimas)"
    ],
    note: "<b>Nekaitinti:</b> aukštoje temperatūroje praranda ir spalvą, ir skonį."
  },
  {
    id: "kanapiu",
    name: "Kanapių sėklų aliejus",
    latin: "Cannabis sativa",
    cats: ["kulinariniai", "oda"],
    desc: "Žalsvas, riešutinis. Retas atvejis, kai omega-6 ir omega-3 santykis natūraliai artimas rekomenduojamam 3:1. Turi gama linoleno rūgšties (GLA). Su THC neturi nieko bendra — spaudžiamas iš sėklų.",
    smoke: "~165 °C (nekaitinti)",
    comedo: "0",
    fa: "Linolo r. ~56 %, alfa linoleno r. ~18 %, GLA ~3 %",
    tags: ["omega-3", "GLA", "nekomedogeniškas"],
    uses: [
      "Salotoms, padažams, į kokteilius",
      "Veidui — labai lengvas, tinka riebiai ir problemiškai odai",
      "Raminamosios priežiūros produktuose (sausumas, niežulys)"
    ],
    note: "<b>Laikyti šaldytuve.</b> Dėl didelio nesočiųjų kiekio genda beveik taip pat greitai kaip linų."
  },
  {
    id: "graikiniu",
    name: "Graikinių riešutų aliejus",
    latin: "Juglans regia",
    cats: ["kulinariniai"],
    desc: "Prancūziškos virtuvės klasika. Subtilus, saldokas riešutų skonis, geras ALA šaltinis tarp riešutinių aliejų.",
    smoke: "~160 °C (nekaitinti)",
    comedo: null,
    fa: "Linolo r. ~53 %, alfa linoleno r. ~10 %, oleino r. ~23 %",
    tags: ["omega-3", "desertams", "riešutinis"],
    uses: [
      "Salotoms su ožkos sūriu, kriaušėmis, burokėliais",
      "Į keptus desertus vietoj dalies sviesto",
      "Medienos priežiūrai (pjaustymo lentoms — kartu su riešutų alergijos įspėjimu)"
    ],
    note: "<b>Alergija riešutams:</b> netinka esant riešutų alergijai, taip pat neduodama svečiams jos nepaminėjus."
  },
  {
    id: "zemesriesutu",
    name: "Žemės riešutų aliejus",
    latin: "Arachis hypogaea",
    cats: ["kulinariniai"],
    desc: "Kinų virtuvės ir gruzdinimo darbinis aliejus: aukštas dūmų taškas, neutralus skonis, neperima kvapų tarp partijų.",
    smoke: "225–230 °C",
    comedo: null,
    fa: "Oleino r. ~48 %, linolo r. ~32 %, sotieji ~17 %",
    tags: ["gruzdinimui", "wok", "neutralus"],
    uses: [
      "Gruzdinimui, wok keptuvei",
      "Azijietiškiems padažams",
      "Kepti bulvytėms — tradiciškai laikomas geriausiu"
    ],
    note: "<b>Alergenai:</b> stipriai rafinuotas paprastai saugus alergiškiems, bet šaltai spaustas — ne. Abejojant nevartoti."
  },
  {
    id: "ryziu",
    name: "Ryžių sėlenų aliejus",
    latin: "Oryza sativa",
    cats: ["kulinariniai", "oda"],
    desc: "Šalutinis ryžių malimo produktas. Turi retos medžiagos — gama orizanolio, stipraus antioksidanto. Japonijoje vadinamas „sveikatos aliejumi“.",
    smoke: "230–250 °C",
    comedo: "2",
    fa: "Oleino r. ~42 %, linolo r. ~37 %, sotieji ~20 %",
    tags: ["gama orizanolis", "aukšta kaitra", "tempura"],
    uses: [
      "Tempurai, gruzdinimui — labai stabilus",
      "Kepiniams, nes neturi savo skonio",
      "Kosmetikoje — švelnus, tinka jautriai odai"
    ],
    note: "<b>Gama orizanolis</b> naudojamas ir saulės kremuose kaip UV sugeriantis komponentas."
  },
  {
    id: "ghi",
    name: "Lydytas sviestas (ghi)",
    latin: "Butyrum liquidum",
    cats: ["kulinariniai"],
    desc: "Sviestas, iš kurio pašalintas vanduo ir pieno baltymai. Dėl to nedega taip greitai kaip paprastas sviestas ir gali stovėti kambario temperatūroje.",
    smoke: "250 °C (ghi), 150 °C (paprastas sviestas)",
    comedo: null,
    fa: "Sotieji ~62 %, oleino r. ~28 %, sviesto r. (butirato)",
    tags: ["ajurveda", "be laktozės", "aukšta kaitra"],
    uses: [
      "Kepimui, indiškiems patiekalams, dariniams ant košės",
      "Beveik be laktozės ir kazeino — dažnai toleruojamas jautriems pienui",
      "Ajurvedoje — bazė žolelių ekstraktams"
    ],
    note: "<b>Pasigaminti namie</b> paprasta: sviestą lėtai lydyti 20–30 min., nugriebti putas, perkošti per marlę."
  },

  /* ============ ODAI IR PLAUKAMS ============ */
  {
    id: "argano",
    name: "Argano aliejus",
    latin: "Argania spinosa",
    cats: ["oda", "kulinariniai"],
    desc: "„Skystas Maroko auksas“, spaudžiamas iš argano medžio kauliukų. Kosmetinis — iš žalių branduolių, kulinarinis — iš skrudintų, su ryškiu riešutų skoniu.",
    smoke: "~180 °C (kulinarinis, nekaitinti stipriai)",
    comedo: "0",
    fa: "Linolo r. ~35 %, oleino r. ~45 %, vitaminas E, sterolių",
    tags: ["nekomedogeniškas", "veidui", "plaukams"],
    uses: [
      "Veido serumas bet kokiam odos tipui, taip pat riebiai",
      "Plaukų galiukams, nagų odelėms, strijų profilaktikai",
      "Kulinarinis — su duona ir medumi (amlou), ant kuskuso"
    ],
    note: "<b>Kaip atskirti kokybišką:</b> tik „100 % Argania Spinosa Kernel Oil“, tamsiame stikle, be kvapiklių. Kosmetinis beveik bekvapis."
  },
  {
    id: "jojoba",
    name: "Jojobos aliejus",
    latin: "Simmondsia chinensis",
    cats: ["oda"],
    desc: "Techniškai tai ne aliejus, o skystas vaškas — todėl beveik neapkarsta ir laikosi metų metus. Sudėtimi artimiausias žmogaus odos riebalams.",
    smoke: "—",
    comedo: "2",
    fa: "Vaškinių esterių ~97 % (gadoleino, erukų r.)",
    tags: ["vaškas", "ilgaamžis", "visiems odos tipams"],
    uses: [
      "Bazinis aliejus eteriniams aliejams skiesti",
      "Veido valymas aliejumi (OCM), makiažo valymas",
      "Barzdos aliejai, plaukų priežiūra, lūpų balzamai"
    ],
    note: "<b>Praktinis privalumas:</b> dėl stabilumo tinka mišiniams, kuriuos ruošiate iš anksto — nesugadins recepto per kelis mėnesius."
  },
  {
    id: "ersketuoliu",
    name: "Erškėtuolių (rosehip) aliejus",
    latin: "Rosa canina / rubiginosa",
    cats: ["oda"],
    desc: "Spaudžiamas iš erškėčių sėklų. Turi natūralaus trans retinoinės rūgšties pirmtako, todėl tradiciškai naudojamas randams ir pigmentinėms dėmėms.",
    smoke: "—",
    comedo: "1",
    fa: "Linolo r. ~44 %, alfa linoleno r. ~35 %, oleino r. ~14 %",
    tags: ["randams", "pigmentui", "brandžiai odai"],
    uses: [
      "Naktinis serumas — po randų, aknės žymių, strijų",
      "Netolygiam tonui ir smulkioms raukšlelėms",
      "Sausai, pleiskanojančiai odai"
    ],
    note: "<b>Genda greitai</b> dėl didelio omega-3 kiekio — laikyti šaldytuve, pirkti mažas pakuotes."
  },
  {
    id: "saltalankiu",
    name: "Šaltalankių aliejus",
    latin: "Hippophae rhamnoides",
    cats: ["oda", "kulinariniai"],
    desc: "Ryškiai oranžinis nuo karotinoidų. Yra du tipai: iš minkštimo (daug palmitoleino r., omega-7) ir iš sėklų (daug omega-3 ir omega-6).",
    smoke: "—",
    comedo: "1",
    fa: "Minkštimo: palmitoleino r. ~30 %; sėklų: linolo + linoleno r. ~70 %",
    tags: ["omega-7", "regeneracija", "dažo odą"],
    uses: [
      "Po nudegimų saulėje, sausai ir pažeistai odai",
      "Maišomas 1–5 % į kremus — grynas nudažo odą oranžine",
      "Viduje — šaukštelis per dieną gleivinėms palaikyti"
    ],
    note: "<b>Dėmesio:</b> palieka dėmes ant drabužių ir rankšluosčių, kurios sunkiai išsiplauna."
  },
  {
    id: "migdolu",
    name: "Saldžiųjų migdolų aliejus",
    latin: "Prunus dulcis",
    cats: ["oda"],
    desc: "Klasikinis, pigus ir universalus masažo bei kūno aliejus. Švelnaus kvapo, vidutiniškai sunkus, gerai slysta.",
    smoke: "~215 °C (rafinuotas)",
    comedo: "2",
    fa: "Oleino r. ~68 %, linolo r. ~25 %",
    tags: ["masažui", "kūdikiams", "pigus"],
    uses: [
      "Kūno ir masažo aliejus, taip pat kūdikių priežiūrai",
      "Sausai galvos odai ir plaukų šaknims",
      "Bazė namų kosmetikai — muilams, cukraus šveitikliams"
    ],
    note: "<b>Riešutų alergija:</b> migdolai — kaulavaisis, alergiškiems netinka."
  },
  {
    id: "taukmedzio",
    name: "Taukmedžio sviestas (ši, shea)",
    latin: "Vitellaria paradoxa",
    cats: ["oda"],
    desc: "Kietas augalinis sviestas iš Vakarų Afrikos. Nerafinuotas — kreminės spalvos, su rūkytu riešutų kvapu; rafinuotas — baltas ir bekvapis, bet su mažiau naudingųjų medžiagų.",
    smoke: "—",
    comedo: "0–2",
    fa: "Stearino r. ~40 %, oleino r. ~45 %, neriebalinė frakcija 5–17 %",
    tags: ["sviestas", "labai sausai odai", "apsauginis"],
    uses: [
      "Kūno sviestas, rankų ir pėdų kremas, lūpų balzamai",
      "Alkūnėms, keliams, sausoms dėmėms, egzemos priežiūrai",
      "Plaukų galiukams, ypač garbanotiems"
    ],
    note: "<b>Namų receptas:</b> ši sviestą išplakite su 20–30 % skysto aliejaus — gausite purų, nesunkų kremą."
  },
  {
    id: "ricinos",
    name: "Ricinos aliejus",
    latin: "Ricinus communis",
    cats: ["oda", "specifiniai"],
    desc: "Neįprastai klampus ir tąsus dėl ricinoleino rūgšties, kurios nėra beveik jokiame kitame aliejuje. Juodasis jamaikietiškas variantas gaminamas iš skrudintų sėklų.",
    smoke: "—",
    comedo: "1",
    fa: "Ricinoleino r. ~87 %",
    tags: ["blakstienoms", "klampus", "muilo gamybai"],
    uses: [
      "Antakiams ir blakstienoms, plaukų šaknims (skiesti su lengvesniu aliejumi)",
      "Muilo gamyboje — duoda kreminių putų",
      "Aliejinio valymo mišiniuose — traukia riebalinius kamščius"
    ],
    note: "<b>Nevartoti viduje savarankiškai:</b> stiprus vidurius laisvinantis poveikis. Pačios sėklos yra nuodingos (ricinas), bet aliejuje jo nelieka."
  },
  {
    id: "marulos",
    name: "Marulos aliejus",
    latin: "Sclerocarya birrea",
    cats: ["oda"],
    desc: "Lengvas, greitai susigeriantis Pietų Afrikos aliejus su dideliu oleino rūgšties kiekiu ir geru oksidaciniu stabilumu.",
    smoke: "—",
    comedo: "3–4",
    fa: "Oleino r. ~70–78 %, linolo r. ~4–7 %",
    tags: ["lengvas", "stabilus", "veidui"],
    uses: [
      "Veido serumas normaliai ir sausai odai",
      "Plaukams — nesunkina, tinka plonesniems",
      "Po skutimosi, nagų odelėms"
    ],
    note: "<b>Panašus pakaitalas</b> — argano ar marulos vietoje dažnai tinka lazdyno riešutų aliejus."
  },
  {
    id: "lazdyno",
    name: "Lazdyno riešutų aliejus",
    latin: "Corylus avellana",
    cats: ["oda", "kulinariniai"],
    desc: "Vienas iš nedaugelio šiek tiek sutraukiančių, „sausai“ pojūčiu susigeriančių aliejų — todėl mėgstamas riebiai ir mišriai odai.",
    smoke: "~220 °C (rafinuotas)",
    comedo: "2",
    fa: "Oleino r. ~75 %, linolo r. ~10 %",
    tags: ["riebiai odai", "sutraukiantis", "greitai susigeria"],
    uses: [
      "Veido serumas riebiai, mišriai, į spuogus linkusiai odai",
      "Bazė aliejiniam valymui",
      "Konditerijoje — kepiniams su riešutų nata"
    ],
    note: "<b>Derinys:</b> lazdyno + jojoba santykiu 1:1 — lengvas kasdienis mišinys riebesnei odai."
  },
  {
    id: "kviec",
    name: "Kviečių gemalų aliejus",
    latin: "Triticum vulgare",
    cats: ["oda"],
    desc: "Rekordinis natūralaus vitamino E kiekis. Labai tirštas ir kvapnus, todėl beveik visada naudojamas kaip priedas, o ne pagrindinis aliejus.",
    smoke: "—",
    comedo: "5",
    fa: "Linolo r. ~55 %, vitaminas E iki 250 mg/100 g",
    tags: ["vitaminas E", "antioksidantas", "priedas"],
    uses: [
      "5–10 % priedas į mišinius — pailgina jų galiojimą",
      "Labai sausai, subrandintai odai, strijoms",
      "Randų priežiūrai kartu su erškėtuolių aliejumi"
    ],
    note: "<b>Glitimas:</b> aliejuje jo praktiškai nelieka, bet esant celiakijai kosmetiką rinkitės atsargiai."
  },
  {
    id: "juoduju",
    name: "Juodgrūdžių (juodųjų kmynų) aliejus",
    latin: "Nigella sativa",
    cats: ["oda", "kulinariniai"],
    desc: "Aštrus, pipirinio kvapo aliejus su timochinonu — medžiaga, dėl kurios atliekama daugiausia tyrimų. Rytų medicinoje naudojamas šimtmečius.",
    smoke: "~180 °C (nekaitinti)",
    comedo: "1–2",
    fa: "Linolo r. ~55 %, oleino r. ~24 %, timochinonas",
    tags: ["timochinonas", "problemiškai odai", "aštrus"],
    uses: [
      "Taškinei problemiškos odos priežiūrai, galvos odai",
      "Šaukštelis su medumi — tradicinis vartojimas",
      "Į mišinius 5–10 % dėl stipraus kvapo"
    ],
    note: "<b>Atsargiai:</b> gali stiprinti kraujo skystinimo ir cukraus kiekį mažinančių vaistų poveikį — vartojant vaistus pasitarkite su gydytoju."
  },
  {
    id: "vynuogiu",
    name: "Vynuogių kauliukų aliejus",
    latin: "Vitis vinifera",
    cats: ["oda", "kulinariniai"],
    desc: "Vyndarystės šalutinis produktas. Labai lengvas, beveik bespalvis, greitai susigeria ir nepalieka blizgesio.",
    smoke: "~216 °C",
    comedo: "1–2",
    fa: "Linolo r. ~70 %, oleino r. ~16 %",
    tags: ["lengvas", "masažui", "riebiai odai"],
    uses: [
      "Masažo bazė — gerai slysta, nelipnus",
      "Riebiai odai ir kūno priežiūrai",
      "Virtuvėje — kepimui vidutinėje kaitroje, majonezui"
    ],
    note: "<b>Trumpas galiojimas:</b> dėl linolo rūgšties gausos sunaudokite per 6–12 mėn."
  },
  {
    id: "abrikosu",
    name: "Abrikosų kauliukų aliejus",
    latin: "Prunus armeniaca",
    cats: ["oda"],
    desc: "Panašus į migdolų, tik lengvesnis ir greičiau susigeriantis. Švelnus, tinka jautriai ir vaikų odai.",
    smoke: "—",
    comedo: "2",
    fa: "Oleino r. ~60 %, linolo r. ~30 %",
    tags: ["jautriai odai", "lengvas", "veidui"],
    uses: [
      "Veido ir kūno aliejus, tinka ir jautriai odai",
      "Masažas, ypač vaikams",
      "Bazė aliejiniams parfumams"
    ],
    note: "<b>Skirtumas nuo migdolų:</b> abrikosų — lengvesnis; migdolų — riebesnis ir ilgiau lieka ant odos."
  },
  {
    id: "avietes",
    name: "Aviečių sėklų aliejus",
    latin: "Rubus idaeus",
    cats: ["oda"],
    desc: "Nišinis, brangus aliejus su itin dideliu vitamino E ir karotinoidų kiekiu, ypač daug alfa linoleno rūgšties.",
    smoke: "—",
    comedo: "0–1",
    fa: "Linolo r. ~55 %, alfa linoleno r. ~30 %",
    tags: ["antioksidantai", "raminantis", "nišinis"],
    uses: [
      "Dirgliai, į paraudimą linkusiai odai",
      "Po saulės priežiūros mišiniuose",
      "Lūpų ir akių srities produktuose"
    ],
    note: "<b>Mitas:</b> internete rašoma, kad aviečių aliejus turi „SPF 28–50“ — tai nepagrįsta. Saulės apsaugai naudokite sertifikuotą kremą."
  },

  /* ============ ETERINIAI ============ */
  {
    id: "levandu",
    name: "Levandų eterinis aliejus",
    latin: "Lavandula angustifolia",
    cats: ["eteriniai"],
    desc: "Universaliausias ir vienas švelniausių eterinių aliejų. Distiliuojamas iš žiedų, pagrindiniai komponentai — linaloolis ir linalilo acetatas.",
    smoke: "—",
    comedo: null,
    fa: "Linaloolis 25–45 %, linalilo acetatas 25–46 %",
    tags: ["raminantis", "miegui", "švelnus"],
    uses: [
      "1–2 lašai ant pagalvės ar difuzoriuje prieš miegą",
      "Skiestas (1–2 %) — po vabzdžių įkandimų, dirginimo",
      "Skalbinių ir namų kvapams, valikliams"
    ],
    note: "<b>Skiedimas:</b> 2 % mišinys = 12 lašų 30 ml bazinio aliejaus. Nenaudoti gryno ant odos ilgą laiką."
  },
  {
    id: "arbatmedzio",
    name: "Arbatmedžio eterinis aliejus",
    latin: "Melaleuca alternifolia",
    cats: ["eteriniai"],
    desc: "Australijos kilmės, pagrindinis komponentas terpinen-4-olis. Plačiai tirtas dėl antimikrobinio poveikio.",
    smoke: "—",
    comedo: null,
    fa: "Terpinen-4-olis ≥30 %, 1,8 cineolis ≤15 %",
    tags: ["antibakterinis", "spuogams", "nuo pleiskanų"],
    uses: [
      "Taškinei spuogų priežiūrai — skiestas 5 % bazėje",
      "Į šampūną nuo pleiskanų — kelis lašus į porciją",
      "Kojų priežiūrai, namų valikliams"
    ],
    note: "<b>Katėms nuodingas.</b> Neleiskite gyvūnams prieiti ir nenaudokite ant jų odos."
  },
  {
    id: "eukalipto",
    name: "Eukalipto eterinis aliejus",
    latin: "Eucalyptus globulus / radiata",
    cats: ["eteriniai"],
    desc: "Aštrus, gaivus, su dideliu 1,8 cineolio kiekiu. Tradiciškai naudojamas kvėpavimo takams palengvinti garų inhaliacijose.",
    smoke: "—",
    comedo: null,
    fa: "1,8 cineolis 70–85 %",
    tags: ["kvėpavimui", "gaivus", "inhaliacijoms"],
    uses: [
      "Garų inhaliacija — 2–3 lašai į dubenį karšto vandens",
      "Krūtinės balzamai suaugusiems (skiesti)",
      "Saunai, patalpų gaivinimui"
    ],
    note: "<b>Vaikams iki 3 metų netinka:</b> 1,8 cineolis ir mentolis gali sukelti kvėpavimo sutrikimą. Kūdikiams — jokiu būdu prie veido."
  },
  {
    id: "pipirmetes",
    name: "Pipirmėčių eterinis aliejus",
    latin: "Mentha piperita",
    cats: ["eteriniai"],
    desc: "Mentolio suteikiamas vėsinantis pojūtis. Vienas iš nedaugelio eterinių aliejų, turinčių rimtų klinikinių tyrimų — dirgliosios žarnos sindromui (enterinėse kapsulėse).",
    smoke: "—",
    comedo: null,
    fa: "Mentolis 30–55 %, mentonas 14–32 %",
    tags: ["vėsinantis", "galvos skausmui", "energijai"],
    uses: [
      "Skiestas ant smilkinių — įtampos tipo galvos skausmui",
      "Raumenų mišiniuose po treniruotės",
      "Difuzoriuje — susikaupimui"
    ],
    note: "<b>Ne vaikams ir ne aplink veidą.</b> Taip pat vengti nėštumo metu ir sergant refliuksu."
  },
  {
    id: "citrusiniai",
    name: "Citrusiniai eteriniai aliejai",
    latin: "Citrus limon, C. sinensis, C. bergamia",
    cats: ["eteriniai"],
    desc: "Spaudžiami šaltuoju būdu iš žievelės (ne distiliuojami). Gaivūs, pakelia nuotaiką, dažni valikliuose dėl limoneno tirpinamųjų savybių.",
    smoke: "—",
    comedo: null,
    fa: "Limonenas 60–95 %, bergamotėje dar ir bergaptenas",
    tags: ["fototoksiški", "gaivinantys", "valymui"],
    uses: [
      "Difuzoriuje rytais, darbo patalpose",
      "Naminiuose valikliuose — tirpina klijų ir riebalų likučius",
      "Į kvapiuosius mišinius kaip viršutinė nata"
    ],
    note: "<b>Fototoksiškumas:</b> bergamotė, citrina, laimas, greipfrutas ant odos + saulė = nudegimai ir dėmės. Po naudojimo 12–18 val. venkite saulės arba rinkitės FCF (bergapteno neturinčią) versiją."
  },
  {
    id: "rozmarino",
    name: "Rozmarino eterinis aliejus",
    latin: "Rosmarinus officinalis",
    cats: ["eteriniai"],
    desc: "Žolinis, aštrus. Yra kelios chemotipų versijos (cineolio, kamparo, verbenono), tinkančios skirtingiems tikslams.",
    smoke: "—",
    comedo: null,
    fa: "1,8 cineolis 15–55 %, kamparas 5–20 %",
    tags: ["plaukams", "susikaupimui", "chemotipai"],
    uses: [
      "Galvos odos masažo mišiniuose (2 % bazėje) plaukų augimui palaikyti",
      "Raumenų mišiniuose kartu su pipirmėte",
      "Difuzoriuje — dėmesio koncentracijai"
    ],
    note: "<b>Atsargiai</b> sergant epilepsija, esant aukštam kraujospūdžiui ir nėštumo metu."
  },

  /* ============ SPECIFINIAI ============ */
  {
    id: "medetku",
    name: "Medetkų infuzinis aliejus",
    latin: "Calendula officinalis (maceratas)",
    cats: ["oda", "specifiniai"],
    desc: "Ne spaudžiamas, o maceruojamas: žiedai kelias savaites išlaikomi baziniame aliejuje (dažniausiai saulėgrąžų ar alyvuogių). Tradicinis vaikų odos priežiūros aliejus.",
    smoke: "—",
    comedo: null,
    fa: "Priklauso nuo bazinio aliejaus + karotinoidai, flavonoidai",
    tags: ["maceratas", "kūdikiams", "raminantis"],
    uses: [
      "Sudirgusiai, sausai, pleiskanojančiai odai, vystyklų sričiai",
      "Į tepalus ir balzamus 20–100 % koncentracijos",
      "Po saulės, po skutimosi"
    ],
    note: "<b>Pasigaminti paprasta:</b> sausus žiedus užpilkite aliejumi, laikykite 3–4 sav. šiltai ir tamsoje, perkoškite. Žiedai turi būti visiškai sausi, kitaip suplėks."
  },
  {
    id: "jonazoliu",
    name: "Jonažolių infuzinis aliejus",
    latin: "Hypericum perforatum (maceratas)",
    cats: ["oda", "specifiniai"],
    desc: "Nuo hipericino įgauna ryškiai raudoną spalvą. Liaudies medicinoje naudojamas nudegimams ir nervų skausmams.",
    smoke: "—",
    comedo: null,
    fa: "Bazinis aliejus + hipericinas, hiperforinas",
    tags: ["maceratas", "raudonas", "fotosensibilizuoja"],
    uses: [
      "Nugaros, sąnarių masažui",
      "Nedideliems nudegimams, įtrūkimams",
      "Į balzamus kartu su medetkomis"
    ],
    note: "<b>Svarbu:</b> didina odos jautrumą saulei — tepti vakare. Jonažolė (viduje) stipriai sąveikauja su daugeliu vaistų, įskaitant kontraceptikus ir antidepresantus."
  },
  {
    id: "MCT",
    name: "MCT aliejus",
    latin: "Vidutinės grandinės trigliceridai",
    cats: ["specifiniai", "kulinariniai"],
    desc: "Frakcionuotas kokoso ar palmių aliejus, iš kurio palikta tik C8 (kaprilo) ir C10 (kaprino) rūgštys. Skystas net šaldytuve, bekvapis, bespalvis.",
    smoke: "~160–200 °C (nekaitinti stipriai)",
    comedo: "1–2",
    fa: "Kaprilo r. (C8) ir kaprino r. (C10) ~100 %",
    tags: ["ketogeninė mityba", "greita energija", "stabilus"],
    uses: [
      "Į kavą, kokteilius, salotas — ketogeninėje mityboje",
      "Kaip nesuriebalinanti bazė CBD ir kitiems ekstraktams",
      "Kosmetikoje — labai ilgo galiojimo lengva bazė"
    ],
    note: "<b>Pradėkite nuo mažo kiekio</b> (1 šaukštelio): iškart didelis kiekis dažnai sukelia žarnyno diskomfortą."
  },
  {
    id: "palmiu",
    name: "Palmių aliejus",
    latin: "Elaeis guineensis",
    cats: ["kulinariniai", "specifiniai"],
    desc: "Labiausiai pasaulyje gaminamas augalinis aliejus — pusfabrikačiuose, konditerijoje, muiluose. Nerafinuotas (raudonasis) turi daug karotinoidų ir tokotrienolių.",
    smoke: "~230 °C (rafinuotas)",
    comedo: null,
    fa: "Palmitino r. ~44 %, oleino r. ~39 %",
    tags: ["pramoninis", "tvarumo klausimas", "muilui"],
    uses: [
      "Pramoniniuose kepiniuose ir margarinuose",
      "Muilo gamyboje — kietumui",
      "Raudonasis palmių aliejus — Vakarų Afrikos virtuvėje"
    ],
    note: "<b>Tvarumas:</b> plantacijos siejamos su atogrąžų miškų kirtimu. Renkantis verta ieškoti RSPO sertifikato arba pakeisti ši sviestu / kokosų aliejumi."
  }
];
