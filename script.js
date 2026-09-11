const CONFIG = {
  github: "https://github.com/Irizahappy",
  linkedin: "https://www.linkedin.com/in/iriza-happy-/"
};

document.querySelectorAll("[data-link]").forEach((el) => {
  const key = el.dataset.link;
  if (CONFIG[key]) el.href = CONFIG[key];
});

document.getElementById("year").textContent = new Date().getFullYear();

const menu = document.getElementById("menu");
const nav = document.getElementById("nav");
menu.addEventListener("click", () => nav.classList.toggle("open"));
document.querySelectorAll(".nav a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, {threshold: 0.12});

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
