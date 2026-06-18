document.addEventListener("DOMContentLoaded", function () {
  detectPerformance();
  setupNavScroll();
  setupMobileNav();
  setupTyper();
  setupReveal();
  setupTheme();
  setupTopButton();
  setupActiveNav();
});

function detectPerformance() {
  var nav = navigator;

  if (nav.hardwareConcurrency && nav.hardwareConcurrency <= 4) {
    document.body.classList.add("low-power");
    return;
  }

  if (nav.connection && nav.connection.saveData) {
    document.body.classList.add("low-power");
    return;
  }

  var samples = [];
  var last = performance.now();
  var SAMPLE_COUNT = 10;
  var SLOW_FRAME_MS = 33;

  function measure(now) {
    samples.push(now - last);
    last = now;

    if (samples.length < SAMPLE_COUNT) {
      requestAnimationFrame(measure);
      return;
    }

    var sum = 0;
    for (var i = 0; i < samples.length; i++) { sum += samples[i]; }
    if (sum / samples.length > SLOW_FRAME_MS) {
      document.body.classList.add("low-power");
    }
  }

  requestAnimationFrame(function (now) {
    last = now;
    requestAnimationFrame(measure);
  });
}

function setupNavScroll() {
  var nav = document.querySelector("nav");
  window.addEventListener("scroll", function () {
    nav.classList.toggle("nav-scrolled", window.scrollY > 20);
  });
}

function setupMobileNav() {
  var btn = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");

  btn.addEventListener("click", function () {
    links.classList.toggle("nav-expanded");
  });

  links.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", function () {
      links.classList.remove("nav-expanded");
    });
  });
}

function setupTyper() {
  var roles = ["Software Engineer", "ML Researcher", "Full-Stack Developer", "McNair Scholar"];
  var el = document.getElementById("typed");
  var articleEl = document.getElementById("article");
  if (!el) return;

  var vowelSoundWords = ["ML"];
  var vowels = "aeiouAEIOU";
  var i = 0;
  var c = 0;
  var deleting = false;

  function getArticle(word) {
    var firstToken = word.split(/[\s\-]/)[0];
    for (var v = 0; v < vowelSoundWords.length; v++) {
      if (firstToken === vowelSoundWords[v]) return "an";
    }
    return vowels.indexOf(word.charAt(0)) !== -1 ? "an" : "a";
  }

  if (articleEl) articleEl.textContent = getArticle(roles[0]);

  function tick() {
    var word = roles[i];

    if (!deleting) {
      c++;
      el.textContent = word.substring(0, c);
      if (c === word.length) {
        setTimeout(function () { deleting = true; tick(); }, 2000);
        return;
      }
      setTimeout(tick, 80);
    } else {
      c--;
      el.textContent = word.substring(0, c);
      if (c === 0) {
        deleting = false;
        i = (i + 1) % roles.length;
        if (articleEl) articleEl.textContent = getArticle(roles[i]);
        setTimeout(tick, 400);
        return;
      }
      setTimeout(tick, 40);
    }
  }

  tick();
}

function setupReveal() {
  var els = document.querySelectorAll(".animate-in");

  if (!("IntersectionObserver" in window)) {
    els.forEach(function (el) { el.classList.add("animated"); });
    return;
  }

  var obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("animated");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  els.forEach(function (el) { obs.observe(el); });
}

function setupTheme() {
  var btn = document.getElementById("theme-toggle");
  if (!btn) return;

  var icon = btn.querySelector("i");
  var saved = localStorage.getItem("theme");

  if (saved === "light") {
    document.body.classList.add("light-mode");
    icon.className = "fas fa-sun";
  }

  btn.addEventListener("click", function () {
    var isLight = document.body.classList.toggle("light-mode");
    icon.className = isLight ? "fas fa-sun" : "fas fa-moon";
    localStorage.setItem("theme", isLight ? "light" : "dark");
  });
}

function setupTopButton() {
  var btn = document.getElementById("scroll-top");
  if (!btn) return;

  window.addEventListener("scroll", function () {
    btn.classList.toggle("animated", window.scrollY > 400);
  });

  btn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

function setupActiveNav() {
  var navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
  var sections = [];

  navLinks.forEach(function (link) {
    var id = link.getAttribute("href").substring(1);
    var section = document.getElementById(id);
    if (section) sections.push({ el: section, link: link });
  });

  if (!sections.length) return;

  function update() {
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

  window.addEventListener("scroll", update);
  update();
}
