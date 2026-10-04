document.addEventListener("DOMContentLoaded", function () {
  setupNavScroll();
  setupMobileNav();
  setupTheme();
  setupActiveNav();
});

function setupNavScroll() {
  var nav = document.querySelector("nav");
  window.addEventListener("scroll", function () {
    nav.classList.toggle("nav-scrolled", window.scrollY > 20);
  }, { passive: true });
}

function setupMobileNav() {
  var btn = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");

  btn.addEventListener("click", function () {
    var open = links.classList.toggle("nav-expanded");
    btn.setAttribute("aria-expanded", open);
  });

  function close() {
    links.classList.remove("nav-expanded");
    btn.setAttribute("aria-expanded", false);
  }

  links.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", close);
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && links.classList.contains("nav-expanded")) {
      close();
      btn.focus();
    }
  });
}

function setupTheme() {
  var btn = document.getElementById("theme-toggle");
  if (!btn) return;

  // The initial class is set by the inline script in index.html before
  // first paint. CSS swaps the moon/sun icon; this keeps screen readers in sync.
  btn.setAttribute("aria-pressed", document.body.classList.contains("dark-mode"));

  btn.addEventListener("click", function () {
    var isDark = document.body.classList.toggle("dark-mode");
    btn.setAttribute("aria-pressed", isDark);
    try { localStorage.setItem("theme", isDark ? "dark" : "light"); } catch (e) {}
  });
}

function setupActiveNav() {
  var navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
  var sections = [];

  navLinks.forEach(function (link) {
    var section = document.getElementById(link.getAttribute("href").substring(1));
    if (section) sections.push({ el: section, link: link });
  });

  if (!sections.length) return;

  function update() {
    // A section counts as "active" once it's scrolled up to roughly the
    // top third of the viewport, not just past the very top edge.
    var scrollY = window.scrollY + window.innerHeight / 3;
    var active = null;

    for (var i = sections.length - 1; i >= 0; i--) {
      if (sections[i].el.offsetTop <= scrollY) {
        active = sections[i];
        break;
      }
    }

    navLinks.forEach(function (l) { l.classList.remove("nav-active"); });
    if (active) active.link.classList.add("nav-active");
  }

  window.addEventListener("scroll", update, { passive: true });
  update();
}
