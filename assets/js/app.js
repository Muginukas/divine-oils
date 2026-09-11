/* Aliejų katalogas — konfigūracija bendram varikliui (catalog.js). */
(function () {
  "use strict";

  var u = window.catalogUtils;
  var oils = window.OILS || [];

  function smokeValue(oil) {
    if (!oil.smoke || oil.smoke === "—") return -1;
    var nums = oil.smoke.match(/\d+/g);
    return nums ? Math.max.apply(null, nums.map(Number)) : -1;
  }

  function card(oil) {
    var facts = "";
    if (oil.fa && oil.fa !== "—") facts += u.row("Sudėtis", oil.fa);
    if (oil.smoke && oil.smoke !== "—") facts += u.row("Dūmų taškas", oil.smoke);
    if (oil.comedo) facts += u.row("Komedogeniškumas", oil.comedo + " iš 5");
    if (oil.shelf) facts += u.row("Galiojimas", oil.shelf);

    var more =
      u.row("Kilmė ir gamyba", oil.origin) +
      u.row("Veikliosios medžiagos", oil.actives) +
      u.row("Virtuvėje", oil.kitchen) +
      u.row("Odai ir plaukams", oil.care) +
      u.row("Atsargiai", oil.avoid) +
      u.row("Kuo pakeisti", oil.swap);

    return (
      '<article class="oil" id="aliejus-' + u.esc(oil.id) + '">' +
        '<div class="oil-head">' +
          "<h3>" + u.esc(oil.name) +
            (oil.star ? ' <span class="star" title="Pagrindinis žinyno aliejus">★</span>' : "") +
          "</h3>" +
          (oil.price ? '<span class="price" title="Orientacinė kainų klasė">' + u.esc(oil.price) + "</span>" : "") +
        "</div>" +
        '<div class="latin">' + u.esc(oil.latin) + "</div>" +
        '<div class="tag-row">' + u.tags(oil.tags) + "</div>" +
        '<p class="desc">' + u.esc(oil.desc) + "</p>" +
        (facts ? '<dl class="facts">' + facts + "</dl>" : "") +
        "<h4>Kur naudojama</h4><ul>" + u.list(oil.uses) + "</ul>" +
        '<details class="oil-more"><summary>Daugiau apie šį aliejų</summary>' +
          '<dl class="deep">' + more + "</dl></details>" +
        (oil.note ? '<div class="note">' + oil.note + "</div>" : "") +
      "</article>"
    );
  }

  window.buildCatalog({
    items: oils,
    gridId: "oil-grid", countId: "oil-count", searchId: "oil-search", sortId: "oil-sort",
    wordOne: "aliejaus", wordMany: "aliejų",
    emptyText: "Pagal šią užklausą aliejų nerasta. Pabandykite kitą žodį, pvz. „omega“, „masažui“, „spuogams“ arba „muilui“.",
    searchText: function (o) {
      return [o.name, o.latin, o.desc, o.tags.join(" "), o.uses.join(" "),
              o.origin, o.actives, o.kitchen, o.care, o.avoid, o.swap, o.fa]
        .filter(Boolean).join(" ");
    },
    sorters: {
      pavadinimas: function (a, b) { return a.name.localeCompare(b.name, "lt"); },
      "dumu-auk": function (a, b) { return smokeValue(b) - smokeValue(a); },
      kaina: function (a, b) { return (a.price || "").length - (b.price || "").length; }
    },
    card: card
  });
})();
