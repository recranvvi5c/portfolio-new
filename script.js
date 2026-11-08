// Theme toggle (remembers choice)
const root = document.documentElement;
const themeToggle = document.getElementById("themeToggle");
try {
  const saved = localStorage.getItem("theme");
  if (saved) root.dataset.theme = saved;
} catch (e) {}
themeToggle.addEventListener("click", () => {
  const next = root.dataset.theme === "light" ? "dark" : "light";
  root.dataset.theme = next;
  try { localStorage.setItem("theme", next); } catch (e) {}
});

// Mobile menu
const burger = document.getElementById("burger");
const navLinks = document.getElementById("navLinks");
burger.addEventListener("click", () => {
  const open = navLinks.classList.toggle("is-open");
  burger.setAttribute("aria-expanded", open);
});
navLinks.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => navLinks.classList.remove("is-open"))
);

// Reveal on scroll
const io = new IntersectionObserver(
  (entries) => entries.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add("is-visible"); io.unobserve(e.target); }
  }),
  { threshold: 0.12 }
);
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

// Animated counters
document.querySelectorAll("[data-count]").forEach((el) => {
  const target = +el.dataset.count;
  let n = 0;
  const step = Math.max(1, Math.round(target / 40));
  const tick = () => {
    n = Math.min(target, n + step);
    el.textContent = n;
    if (n < target) requestAnimationFrame(tick);
  };
  setTimeout(tick, 400);
});

// Project filters
const filters = document.querySelectorAll(".filter");
const projects = document.querySelectorAll(".project");
filters.forEach((btn) =>
  btn.addEventListener("click", () => {
    filters.forEach((b) => b.classList.remove("is-active"));
    btn.classList.add("is-active");
    const f = btn.dataset.filter;
    projects.forEach((p) => p.classList.toggle("is-hidden", f !== "all" && p.dataset.cat !== f));
  })
);

// Contact form (demo only — hook up to Formspree, Netlify Forms, etc.)
const form = document.getElementById("contactForm");
const note = document.getElementById("formNote");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!form.checkValidity()) {
    note.textContent = "Please fill in all fields with a valid email.";
    note.style.color = "#ef4444";
    return;
  }
  note.textContent = "Thanks! Your message has been sent (demo).";
  note.style.color = "var(--accent)";
  form.reset();
});

document.getElementById("year").textContent = new Date().getFullYear();
