// Back to top section.
const backTOTop = document.querySelector('.back-to-top');

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        backTOTop.classList.add("back-to-top-active");
    } else {
        backTOTop.classList.remove("back-to-top-active");
    }
});

// Hamburger section.

const hamBurger = document.querySelector(".ham");
const navLinks = document.querySelector(".nav-links");

hamBurger.addEventListener("click", () => {
    navLinks.classList.toggle("nav-links-active");
    hamBurger.classList.toggle("ham-active");
});

// Preloader

const preloader = document.querySelector(".loader");

window.addEventListener("load", () => {
    const fadeOut = setTimeout(() => {
        preloader.classList.add("loader-active")
    }, 1000);
});