/* Bendras katalogo variklis: filtrai, paieška, rikiavimas, atvaizdavimas.
   Naudoja ir aliejų, ir sėklų puslapiai — skiriasi tik konfigūracija. */
window.buildCatalog = function (cfg) {
  "use strict";

  var grid = document.getElementById(cfg.gridId);
  var count = document.getElementById(cfg.countId);
  var search = document.getElementById(cfg.searchId);
  var sortSel = document.getElementById(cfg.sortId);
  var chips = Array.prototype.slice.call(document.querySelectorAll(".chip"));
  if (!grid) return;

  var items = cfg.items || [];
  var state = { cat: "visi", q: "", sort: "numatytas" };

  function matches(item) {
    if (state.cat !== "visi" && item.cats.indexOf(state.cat) === -1) return false;
    if (!state.q) return true;
    var hay = cfg.searchText(item).toLowerCase();
    return state.q.split(/\s+/).every(function (w) { return hay.indexOf(w) !== -1; });
  }

  function sorted(list) {
    var fn = (cfg.sorters || {})[state.sort];
    return fn ? list.slice().sort(fn) : list;
  }

  function render() {
    var list = sorted(items.filter(matches));
    grid.innerHTML = list.length
      ? list.map(cfg.card).join("")
      : '<p class="empty">' + cfg.emptyText + "</p>";
    count.textContent = "Rodoma " + list.length + " iš " + items.length + " " +
      (list.length === 1 ? cfg.wordOne : cfg.wordMany);
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

  render();
};

/* Bendri pagalbininkai kortelėms. */
window.catalogUtils = {
  esc: function (s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  },
  /* Leidžia tik <b> ir <i> — likęs HTML ekranuojamas. */
  rich: function (s) {
    return window.catalogUtils.esc(s).replace(/&lt;(\/?)(b|i)&gt;/g, "<$1$2>");
  },
  row: function (label, value) {
    if (!value) return "";
    return "<dt>" + window.catalogUtils.esc(label) + "</dt><dd>" +
      window.catalogUtils.rich(value) + "</dd>";
  },
  list: function (arr) {
    return arr.map(function (u) { return "<li>" + window.catalogUtils.esc(u) + "</li>"; }).join("");
  },
  tags: function (arr) {
    return (arr || []).map(function (t) {
      return '<span class="tag">' + window.catalogUtils.esc(t) + "</span>";
    }).join("");
  }
};
