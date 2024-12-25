"use strict";
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = () => {
    menuIcon === null || menuIcon === void 0 ? void 0 : menuIcon.classList.toggle('bx-x');
    navbar === null || navbar === void 0 ? void 0 : navbar.classList.toggle('active');
};
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                var _a;
                links.classList.remove("active");
                (_a = document.querySelector('header nav a[href*=' + id + ']')) === null || _a === void 0 ? void 0 : _a.classList.add('active');
            });
        }
    });
    let header = document.querySelector('.header');
    header === null || header === void 0 ? void 0 : header.classList.toggle('sticky', window.scrollY > 100);
    // 
    menuIcon === null || menuIcon === void 0 ? void 0 : menuIcon.classList.remove('bx-x');
    navbar === null || navbar === void 0 ? void 0 : navbar.classList.remove('active');
};
let darModeIcon = document.querySelector('#darkMode-icon');
darModeIcon.onclick = () => {
    darModeIcon === null || darModeIcon === void 0 ? void 0 : darModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
};
ScrollReveal({
    //  reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img img, .services-container, .projects-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left' });
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin: 'right' });
