/* Bendras šviesios ir tamsios temos perjungimas. Naudoja abu puslapiai. */
(function () {
  "use strict";

  var root = document.documentElement;
  var btn = document.getElementById("theme-btn");
  if (!btn) return;

  var stored = null;
  try { stored = localStorage.getItem("divine-oils-theme"); } catch (e) { /* privatus režimas */ }
  if (stored) root.setAttribute("data-theme", stored);

  function current() {
    return root.getAttribute("data-theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  }

  function sync() {
    var dark = current() === "dark";
    btn.textContent = dark ? "☀" : "☾";
    btn.setAttribute("aria-label", dark ? "Įjungti šviesią temą" : "Įjungti tamsią temą");
  }

  btn.addEventListener("click", function () {
    var next = current() === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("divine-oils-theme", next); } catch (e) { /* nesvarbu */ }
    sync();
  });

  sync();
})();
