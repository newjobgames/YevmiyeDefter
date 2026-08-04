/* ==============================
   Car Park & Drift Simulator
   Simple UI Enhancements
============================== */

// Navbar scroll effect
window.addEventListener("scroll", function () {
    const nav = document.querySelector("nav");

    if (window.scrollY > 50) {
        nav.style.background = "rgba(15,23,42,0.95)";
        nav.style.backdropFilter = "blur(12px)";
    } else {
        nav.style.background = "rgba(15,23,42,0.85)";
    }
});


// Smooth fade-in on scroll
const faders = document.querySelectorAll(".card, .glass, img");

const appearOptions = {
    threshold: 0.2
};

const appearOnScroll = new IntersectionObserver(function (
    entries,
    observer
) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        entry.target.style.transition = "0.6s ease-out";

        observer.unobserve(entry.target);
    });
}, appearOptions);


// initial setup for animation
faders.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    appearOnScroll.observe(el);
});


// Button click effect (small feedback)
const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        btn.style.transform = "scale(0.95)";
        setTimeout(() => {
            btn.style.transform = "scale(1)";
        }, 150);
    });
});