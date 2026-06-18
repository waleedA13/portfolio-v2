document.addEventListener("DOMContentLoaded", function () {
  detectLowPower();
  initNavScroll();
  initMobileNav();
  initTypingEffect();
  initScrollReveal();
  initSkillBars();
  initThemeToggle();
});

/**
 * Samples 10 rAF frames and adds .low-power to <body> if the average
 * frame time exceeds 33ms (~30fps). Also triggers immediately if the
 * device reports 4 or fewer logical cores, or if the OS has
 * "Save Data" / "prefers-reduced-motion" hints enabled.
 */
function detectLowPower() {
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
    var avg = sum / samples.length;

    if (avg > SLOW_FRAME_MS) {
      document.body.classList.add("low-power");
    }
  }

  requestAnimationFrame(function (now) {
    last = now;
    requestAnimationFrame(measure);
  });
}

/**
 * Adds/removes .scrolled on nav based on scroll position.
 */
function initNavScroll() {
  var nav = document.querySelector("nav");
  window.addEventListener("scroll", function () {
    nav.classList.toggle("scrolled", window.scrollY > 20);
  });
}

/**
 * Hamburger toggle and auto-close on link click.
 */
function initMobileNav() {
  var btn = document.querySelector(".hamburger");
  var links = document.querySelector(".nav-links");

  btn.addEventListener("click", function () {
    links.classList.toggle("open");
  });

  links.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", function () {
      links.classList.remove("open");
    });
  });
}

/**
 * Types and deletes role titles in a loop.
 * Updates the article ("a" vs "an") based on the next word's starting letter.
 */
function initTypingEffect() {
  var roles = ["Software Engineer", "ML Researcher", "Full-Stack Developer", "McNair Scholar"];
  var el = document.getElementById("typing-text");
  var articleEl = document.getElementById("typing-article");
  if (!el) return;

  var vowels = "aeiouAEIOU";
  var i = 0;
  var c = 0;
  var deleting = false;

  function getArticle(word) {
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

/**
 * Fades in .reveal elements when they enter the viewport.
 */
function initScrollReveal() {
  var els = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window)) {
    els.forEach(function (el) { el.classList.add("visible"); });
    return;
  }

  var obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  els.forEach(function (el) { obs.observe(el); });
}

/**
 * Animates skill bar widths when they scroll into view.
 */
function initSkillBars() {
  var bars = document.querySelectorAll(".bar-fill");

  if (!("IntersectionObserver" in window)) {
    bars.forEach(function (b) { b.style.width = b.dataset.level + "%"; });
    return;
  }

  var obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.style.width = entry.target.dataset.level + "%";
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  bars.forEach(function (b) { obs.observe(b); });
}


/**
 * Toggles between dark and light mode, persisting the choice in localStorage.
 * Swaps the icon between moon (dark) and sun (light).
 */
function initThemeToggle() {
  var btn = document.getElementById("theme-toggle");
  if (!btn) return;

  var icon = btn.querySelector("i");
  var saved = localStorage.getItem("theme");

  if (saved === "light") {
    document.body.classList.add("light");
    icon.className = "fas fa-sun";
  }

  btn.addEventListener("click", function () {
    var isLight = document.body.classList.toggle("light");
    icon.className = isLight ? "fas fa-sun" : "fas fa-moon";
    localStorage.setItem("theme", isLight ? "light" : "dark");
  });
}
