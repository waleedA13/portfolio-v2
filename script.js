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

  if (!sections.length || !("IntersectionObserver" in window)) return;

  var activeIndex = -1;

  function setActive(i) {
    activeIndex = i;
    sections.forEach(function (s, j) { s.link.classList.toggle("nav-active", j === i); });
  }

  // Watch a thin band about a third of the way down the viewport (same
  // "active" point as before). The observer reports crossings without
  // reading layout on every scroll event, which kept the main thread busy.
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      var i = sections.findIndex(function (s) { return s.el === entry.target; });
      if (entry.isIntersecting) {
        setActive(i);
      } else if (i === activeIndex && entry.boundingClientRect.top > entry.rootBounds.top) {
        // Scrolled back up past this section's top: the previous one is active again.
        setActive(i - 1);
      }
    });
  }, { rootMargin: "-33% 0px -66% 0px" });

  sections.forEach(function (s) { observer.observe(s.el); });
}
