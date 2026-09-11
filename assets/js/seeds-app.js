/* Sėklų katalogas — konfigūracija bendram varikliui (catalog.js). */
(function () {
  "use strict";

  var u = window.catalogUtils;
  var seeds = window.SEEDS || [];

  /* Baltymų kiekis iš maistinės vertės eilutės — rikiavimui. */
  function proteinValue(seed) {
    var m = /baltymų\s+([\d,.]+)\s*g/i.exec(seed.nutrition || "");
    return m ? parseFloat(m[1].replace(",", ".")) : -1;
  }

  function card(seed) {
    var facts =
      u.row("Maistinė vertė / 100 g", seed.nutrition) +
      u.row("Veikliosios medžiagos", seed.key) +
      u.row("Skonis", seed.taste) +
      u.row("Kiek per dieną", seed.dose);

    var more =
      u.row("Kilmė ir istorija", seed.origin) +
      u.row("Kaip paruošti", seed.prep) +
      u.row("Atsargiai", seed.avoid) +
      u.row("Kuo pakeisti", seed.swap);

    return (
      '<article class="oil" id="sekla-' + u.esc(seed.id) + '">' +
        '<div class="oil-head">' +
          "<h3>" + u.esc(seed.name) +
            (seed.star ? ' <span class="star" title="Ypač vertinga sėkla">★</span>' : "") +
          "</h3>" +
        "</div>" +
        '<div class="latin">' + u.esc(seed.latin) + "</div>" +
        '<p class="desc">' + u.esc(seed.desc) + "</p>" +
        '<dl class="facts">' + facts + "</dl>" +
        "<h4>Kur naudojama</h4><ul>" + u.list(seed.uses) + "</ul>" +
        '<details class="oil-more"><summary>Daugiau apie šią sėklą</summary>' +
          '<dl class="deep">' + more + "</dl></details>" +
        (seed.note ? '<div class="note">' + seed.note + "</div>" : "") +
      "</article>"
    );
  }

  window.buildCatalog({
    items: seeds,
    gridId: "seed-grid", countId: "seed-count", searchId: "seed-search", sortId: "seed-sort",
    wordOne: "sėklos", wordMany: "sėklų",
    emptyText: "Pagal šią užklausą sėklų nerasta. Pabandykite kitą žodį, pvz. „omega“, „daiginimui“, „beglitimis“ arba „prieskonis“.",
    searchText: function (s) {
      return [s.name, s.latin, s.desc, s.uses.join(" "), s.origin,
              s.key, s.taste, s.prep, s.avoid, s.swap, s.nutrition]
        .filter(Boolean).join(" ");
    },
    sorters: {
      pavadinimas: function (a, b) { return a.name.localeCompare(b.name, "lt"); },
      baltymai: function (a, b) { return proteinValue(b) - proteinValue(a); }
    },
    card: card
  });
})();
