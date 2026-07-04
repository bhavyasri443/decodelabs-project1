// ===============================
// Mobile Menu Toggle
// ===============================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    } else {
        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
});

// ===============================
// Close Menu on Link Click
// ===============================

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");
        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';

    });

});

// ===============================
// Navbar Shadow on Scroll
// ===============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow = "0 5px 15px rgba(0,0,0,0.15)";

    } else {

        header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";

    }

});

// ===============================
// Scroll Animation
// ===============================

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {
    threshold: 0.2
});

cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "0.6s";

    observer.observe(card);

});

// ===============================
// Contact Form
// ===============================

const form = document.querySelector("form");

form.addEventListener("submit", function(e) {

    e.preventDefault();

    alert("Thank you! Your message has been submitted successfully.");

    form.reset();

});