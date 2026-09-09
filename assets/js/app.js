/* Katalogo atvaizdavimas, filtrai, paieška, temos perjungimas. */
(function () {
  "use strict";

  var oils = window.OILS || [];
  var grid = document.getElementById("oil-grid");
  var count = document.getElementById("oil-count");
  var search = document.getElementById("oil-search");
  var chips = Array.prototype.slice.call(document.querySelectorAll(".chip"));

  var state = { cat: "visi", q: "" };

  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }

  function matches(oil) {
    if (state.cat !== "visi" && oil.cats.indexOf(state.cat) === -1) return false;
    if (!state.q) return true;
    var hay = [oil.name, oil.latin, oil.desc, oil.tags.join(" "), oil.uses.join(" ")]
      .join(" ")
      .toLowerCase();
    return state.q.split(/\s+/).every(function (word) { return hay.indexOf(word) !== -1; });
  }

  function card(oil) {
    var tags = oil.tags.map(function (t) { return '<span class="tag">' + esc(t) + "</span>"; }).join("");
    var uses = oil.uses.map(function (u) { return "<li>" + esc(u) + "</li>"; }).join("");

    var rows = "";
    if (oil.fa) rows += "<dt>Sudėtis</dt><dd>" + esc(oil.fa) + "</dd>";
    if (oil.smoke && oil.smoke !== "—") rows += "<dt>Dūmų taškas</dt><dd>" + esc(oil.smoke) + "</dd>";
    if (oil.comedo) rows += "<dt>Komedogeniškumas</dt><dd>" + esc(oil.comedo) + " iš 5</dd>";

    return (
      '<article class="oil" id="aliejus-' + esc(oil.id) + '">' +
      "<h3>" + esc(oil.name) + (oil.star ? " ★" : "") + "</h3>" +
      '<div class="latin">' + esc(oil.latin) + "</div>" +
      '<div class="tag-row">' + tags + "</div>" +
      '<p class="desc">' + esc(oil.desc) + "</p>" +
      (rows ? "<dl>" + rows + "</dl>" : "") +
      "<h4>Kur naudojama</h4><ul>" + uses + "</ul>" +
      (oil.note ? '<div class="note">' + oil.note + "</div>" : "") +
      "</article>"
    );
  }

  function render() {
    var list = oils.filter(matches);
    grid.innerHTML = list.length
      ? list.map(card).join("")
      : '<p class="empty">Pagal šią užklausą aliejų nerasta. Pabandykite kitą žodį, pvz. „omega“, „masažui“ arba „spuogams“.</p>';
    count.textContent =
      "Rodoma " + list.length + " iš " + oils.length + (list.length === 1 ? " aliejaus" : " aliejų");
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

  /* Tema */
  var root = document.documentElement;
  var btn = document.getElementById("theme-btn");
  var stored = null;
  try { stored = localStorage.getItem("divine-oils-theme"); } catch (e) { /* privatus rezimas */ }
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
