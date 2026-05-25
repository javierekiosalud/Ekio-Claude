/* ============================================================
   EKIO LIGHT DEEP 5 — JAVASCRIPT
   STICKY ADD-TO-CART · ACCORDION FAQ (ARIA) · REVEAL ON SCROLL
   · CONTADOR ANIMADO · GALERÍA · ANIMACIÓN ESPECTRO LED
   SIN DEPENDENCIAS. CARGADO CON defer.
   ============================================================ */
(function () {
  "use strict";

  function ready(fn) {
    if (document.readyState !== "loading") fn();
    else document.addEventListener("DOMContentLoaded", fn);
  }

  ready(function () {
    var root = document.querySelector(".ekio-deep5");

    /* ---- GALERÍA: CLIC EN THUMB CAMBIA IMAGEN PRINCIPAL ---- */
    var mainImg = document.getElementById("ekMainImg");
    var thumbs = document.querySelectorAll(".ekio-deep5 .ek-thumb");
    thumbs.forEach(function (t) {
      t.addEventListener("click", function () {
        var full = t.getAttribute("data-full");
        if (full && mainImg) mainImg.src = full;
        thumbs.forEach(function (x) { x.classList.remove("is-active"); });
        t.classList.add("is-active");
      });
    });

    /* ---- ACCORDION FAQ ACCESIBLE (ARIA) ---- */
    var qButtons = document.querySelectorAll(".ekio-deep5 .ek-acc-q");
    qButtons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var expanded = btn.getAttribute("aria-expanded") === "true";
        var panel = document.getElementById(btn.getAttribute("aria-controls"));
        btn.setAttribute("aria-expanded", String(!expanded));
        if (panel) panel.hidden = expanded;
      });
    });

    /* ---- STICKY ADD-TO-CART: VISIBLE AL SALIR EL CTA PRINCIPAL DEL VIEWPORT ---- */
    var stickyBar = document.getElementById("ekStickyBar");
    var primaryCta = document.querySelector(".ekio-deep5 .ek-cta-primary");
    if (stickyBar && primaryCta && "IntersectionObserver" in window) {
      var stickyObs = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          var show = !e.isIntersecting && e.boundingClientRect.top < 0;
          stickyBar.classList.toggle("is-visible", show);
          stickyBar.setAttribute("aria-hidden", String(!show));
        });
      }, { threshold: 0 });
      stickyObs.observe(primaryCta);
    }

    /* ---- REVEAL ON SCROLL ---- */
    var reveals = document.querySelectorAll(".ekio-deep5 .reveal");
    if ("IntersectionObserver" in window) {
      var revObs = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) { e.target.classList.add("is-in"); revObs.unobserve(e.target); }
        });
      }, { threshold: 0.12 });
      reveals.forEach(function (el) { revObs.observe(el); });
    } else {
      reveals.forEach(function (el) { el.classList.add("is-in"); });
    }

    /* ---- ANIMACIÓN DEL ESPECTRO LED AL ENTRAR EN VISTA ---- */
    var spectrum = document.querySelector(".ekio-deep5 .ek-spectrum");
    if (spectrum && "IntersectionObserver" in window) {
      var specObs = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) { e.target.classList.add("is-in"); specObs.unobserve(e.target); }
        });
      }, { threshold: 0.3 });
      specObs.observe(spectrum);
    } else if (spectrum) {
      spectrum.classList.add("is-in");
    }

    /* ---- CONTADOR ANIMADO (NÚMERO GRANDE DEL PROBLEMA) ---- */
    var counter = document.querySelector(".ekio-deep5 .ek-bignum[data-count]");
    if (counter && "IntersectionObserver" in window) {
      var target = parseInt(counter.getAttribute("data-count"), 10) || 0;
      var suffix = counter.querySelector("span");
      var suffixHtml = suffix ? suffix.outerHTML : "";
      var cObs = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (!e.isIntersecting) return;
          cObs.unobserve(e.target);
          var start = null, dur = 1200;
          function step(ts) {
            if (!start) start = ts;
            var prog = Math.min((ts - start) / dur, 1);
            counter.innerHTML = Math.floor(prog * target) + suffixHtml;
            if (prog < 1) requestAnimationFrame(step);
          }
          requestAnimationFrame(step);
        });
      }, { threshold: 0.6 });
      cObs.observe(counter);
    }
  });
})();
