/* Select Industrial Services — small vanilla helpers. No framework, no build. */
(function () {
  "use strict";

  // --- Mobile nav toggle ------------------------------------------------
  var toggle = document.querySelector("[data-nav-toggle]");
  var menu = document.querySelector("[data-nav-menu]");
  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var open = menu.classList.toggle("hidden") === false;
      toggle.setAttribute("aria-expanded", String(open));
    });
    // Close the menu after tapping a link (mobile)
    menu.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        if (window.innerWidth < 768) {
          menu.classList.add("hidden");
          toggle.setAttribute("aria-expanded", "false");
        }
      });
    });
  }

  // --- Current year in footer ------------------------------------------
  var yr = document.querySelector("[data-year]");
  if (yr) yr.textContent = String(new Date().getFullYear());

  // --- Entrance animation is now pure CSS (.reveal) — no JS needed, so content
  //     can never be stuck invisible. (See assets/css/site.css.)

  // --- Contact form (front-end only; wire to a real endpoint later) -----
  var form = document.querySelector("[data-quote-form]");
  if (form) {
    form.addEventListener("submit", function (ev) {
      // PLACEHOLDER: no backend yet. Swap action/endpoint (e.g. Formspree) to go live.
      if (form.getAttribute("action") && form.getAttribute("action") !== "#") return; // let real endpoint submit
      ev.preventDefault();
      var note = form.querySelector("[data-form-note]");
      if (note) {
        note.classList.remove("hidden");
        note.textContent =
          "Thanks — this demo form isn't connected yet. Call Pam on +64 21 0273 0014 or email pamlanders@selectindustrialservices.co.nz and we'll arrange a site visit.";
      }
      form.reset();
    });
  }
})();
