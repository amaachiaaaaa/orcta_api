

// Smooth scroll for navigation links
document
nt.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Mobile menu toggle
const navLinks = document.querySelector('.nav-links');
const navToggle = document.createElement('button');
navToggle.classList.add('nav-toggle');
navToggle.textContent = 'Menu';

document.querySelector('.navbar .container').prepend(navToggle);

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
// Close menu when a link is clicked
navLinks.addEventListener('click', () => {
    if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
    }
});

function toggleMenu() {
  const menu = document.getElementById("ul-list");
  const hamburger = document.querySelector(".hamburger");
  menu.classList.toggle("show");
  hamburger.classList.toggle("open");
}
