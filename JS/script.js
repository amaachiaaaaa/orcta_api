

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
// JavaScript to set the active link
document.addEventListener("DOMContentLoaded", function() {
  // Select the first navitem (Home)
  var homeLink = document.querySelector('#ul-list .navitem');
  homeLink.classList.add('active');
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

// JavaScript for Modal Functionality
function showInfo(name, info) {
  const modal = document.getElementById("info-modal");
  const modalName = document.getElementById("modal-name");
  const modalInfo = document.getElementById("modal-info");

  modalName.textContent = name;
  modalInfo.textContent = info;
  modal.classList.remove("hidden");
}

function closeModal() {
  const modal = document.getElementById("info-modal");
  modal.classList.add("hidden");
}

