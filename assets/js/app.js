/* Katalogo atvaizdavimas, filtrai, paieška, rikiavimas, temos perjungimas. */
(function () {
  "use strict";

  var oils = window.OILS || [];
  var grid = document.getElementById("oil-grid");
  var count = document.getElementById("oil-count");
  var search = document.getElementById("oil-search");
  var sortSel = document.getElementById("oil-sort");
  var chips = Array.prototype.slice.call(document.querySelectorAll(".chip"));

  var state = { cat: "visi", q: "", sort: "numatytas" };

  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }

  /* Laukai, kuriuose leidžiame paprastą formatavimą (<b>, <i>) — tekstas mūsų pačių. */
  function rich(s) {
    return esc(s)
      .replace(/&lt;(\/?)(b|i)&gt;/g, "<$1$2>");
  }

  /* Didžiausias skaičius dūmų taško aprašyme; be jo — rikiuojama į galą. */
  function smokeValue(oil) {
    if (!oil.smoke || oil.smoke === "—") return -1;
    var nums = oil.smoke.match(/\d+/g);
    if (!nums) return -1;
    return Math.max.apply(null, nums.map(Number));
  }

  function priceValue(oil) {
    return oil.price ? oil.price.length : 0;
  }

  function matches(oil) {
    if (state.cat !== "visi" && oil.cats.indexOf(state.cat) === -1) return false;
    if (!state.q) return true;
    var hay = [
      oil.name, oil.latin, oil.desc, oil.tags.join(" "), oil.uses.join(" "),
      oil.origin, oil.actives, oil.kitchen, oil.care, oil.avoid, oil.swap, oil.fa
    ].filter(Boolean).join(" ").toLowerCase();
    return state.q.split(/\s+/).every(function (w) { return hay.indexOf(w) !== -1; });
  }

  function sorted(list) {
    var copy = list.slice();
    if (state.sort === "pavadinimas") {
      copy.sort(function (a, b) { return a.name.localeCompare(b.name, "lt"); });
    } else if (state.sort === "dumu-auk") {
      copy.sort(function (a, b) { return smokeValue(b) - smokeValue(a); });
    } else if (state.sort === "kaina") {
      copy.sort(function (a, b) { return priceValue(a) - priceValue(b); });
    }
    return copy;
  }

  function detailRow(label, value) {
    if (!value) return "";
    return "<dt>" + esc(label) + "</dt><dd>" + rich(value) + "</dd>";
  }

  function card(oil) {
    var tags = oil.tags.map(function (t) {
      return '<span class="tag">' + esc(t) + "</span>";
    }).join("");
    var uses = oil.uses.map(function (u) { return "<li>" + esc(u) + "</li>"; }).join("");

    var facts = "";
    if (oil.fa && oil.fa !== "—") facts += "<dt>Sudėtis</dt><dd>" + esc(oil.fa) + "</dd>";
    if (oil.smoke && oil.smoke !== "—") facts += "<dt>Dūmų taškas</dt><dd>" + esc(oil.smoke) + "</dd>";
    if (oil.comedo) facts += "<dt>Komedogeniškumas</dt><dd>" + esc(oil.comedo) + " iš 5</dd>";
    if (oil.shelf) facts += "<dt>Galiojimas</dt><dd>" + esc(oil.shelf) + "</dd>";

    var more =
      detailRow("Kilmė ir gamyba", oil.origin) +
      detailRow("Veikliosios medžiagos", oil.actives) +
      detailRow("Virtuvėje", oil.kitchen) +
      detailRow("Odai ir plaukams", oil.care) +
      detailRow("Atsargiai", oil.avoid) +
      detailRow("Kuo pakeisti", oil.swap);

    return (
      '<article class="oil" id="aliejus-' + esc(oil.id) + '">' +
        '<div class="oil-head">' +
          "<h3>" + esc(oil.name) + (oil.star ? ' <span class="star" title="Pagrindinis žinyno aliejus">★</span>' : "") + "</h3>" +
          (oil.price ? '<span class="price" title="Orientacinė kainų klasė">' + esc(oil.price) + "</span>" : "") +
        "</div>" +
        '<div class="latin">' + esc(oil.latin) + "</div>" +
        '<div class="tag-row">' + tags + "</div>" +
        '<p class="desc">' + esc(oil.desc) + "</p>" +
        (facts ? '<dl class="facts">' + facts + "</dl>" : "") +
        "<h4>Kur naudojama</h4><ul>" + uses + "</ul>" +
        (more
          ? '<details class="oil-more"><summary>Daugiau apie šį aliejų</summary>' +
            '<dl class="deep">' + more + "</dl></details>"
          : "") +
        (oil.note ? '<div class="note">' + oil.note + "</div>" : "") +
      "</article>"
    );
  }

  function render() {
    var list = sorted(oils.filter(matches));
    grid.innerHTML = list.length
      ? list.map(card).join("")
      : '<p class="empty">Pagal šią užklausą aliejų nerasta. Pabandykite kitą žodį, pvz. „omega“, „masažui“, „spuogams“ arba „muilui“.</p>';

    var word = "aliejų";
    if (list.length === 1) word = "aliejaus";
    count.textContent = "Rodoma " + list.length + " iš " + oils.length + " " + word;
  }

  chips.forEach(function (chip) {
    chip.addEventListener("click", function () {
      chips.forEach(function (c) { c.setAttribute("aria-pressed", String(c === chip)); });
      state.cat = chip.dataset.cat;
      render();
    });
  });

  var timer;
  search.addEventListener("input", function () {
    clearTimeout(timer);
    timer = setTimeout(function () {
      state.q = search.value.trim().toLowerCase();
      render();
    }, 120);
  });

  if (sortSel) {
    sortSel.addEventListener("change", function () {
      state.sort = sortSel.value;
      render();
    });
  }

  /* Tema */
  var root = document.documentElement;
  var btn = document.getElementById("theme-btn");
  var stored = null;
  try { stored = localStorage.getItem("divine-oils-theme"); } catch (e) { /* privatus režimas */ }
  if (stored) root.setAttribute("data-theme", stored);

  function currentTheme() {
    return root.getAttribute("data-theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  }
  function syncBtn() {
    var dark = currentTheme() === "dark";
    btn.textContent = dark ? "☀" : "☾";
    btn.setAttribute("aria-label", dark ? "Įjungti šviesią temą" : "Įjungti tamsią temą");
  }
  btn.addEventListener("click", function () {
    var next = currentTheme() === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("divine-oils-theme", next); } catch (e) { /* nesvarbu */ }
    syncBtn();
  });

  syncBtn();
  render();
})();
