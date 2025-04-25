'use strict';

// Enabling Mobile Menu
const menuToggleBtn = document.querySelector('[data-navbar-toggle-btn]');
const navbar = document.querySelector('[data-navbar]');
const elemToggleFunc = function(elem) {
  elem.classList.toggle("active");
};
menuToggleBtn.addEventListener("click", function() {
  elemToggleFunc(navbar);
});

// Go to Top button
const goTopBtn = document.querySelector('[data-go-top]');

// Interactive bubble movement
const interBubble = document.querySelector('.interactive');
let curX = 0, curY = 0;
let tgX = 0, tgY = 0;

function move() {
  curX += (tgX - curX) / 20;
  curY += (tgY - curY) / 20;
  interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
  requestAnimationFrame(move);
}
move();

window.addEventListener("mousemove", e => {
  tgX = e.clientX;
  tgY = e.clientY;
});

// === HEADER EFFECT ===
window.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector("header");

  // Fade-in μόλις φορτώσει
  setTimeout(() => {
    header.classList.add("visible");
  }, 100);

  // Shrink όταν scrollάρεις
  window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
      header.classList.add("shrink");
    } else {
      header.classList.remove("shrink");
    }
  });
});



// === Scroll-triggered fade in/out για ΟΛΑ ===
const allContent = document.querySelectorAll('section, header, footer, .hero-content, .hero-banner, .about-card, .features-item, .contact-section');

allContent.forEach(el => el.classList.add('fade-scroll'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
}, {
  threshold: 0.2
});

allContent.forEach(el => observer.observe(el));