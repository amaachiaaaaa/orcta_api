// Smooth scroll for navigation links
document.querySelectorAll('.nav-links a').forEach(link => {
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
  const homeLink = document.querySelector('#ul-list .navitem');
  homeLink.classList.add('active');
});

// Mobile menu toggle
const navToggle = document.createElement('button');
navToggle.classList.add('nav-toggle');
navToggle.textContent = 'Menu';

document.querySelector('.navbar .container').prepend(navToggle);

navToggle.addEventListener('click', () => {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
});

// Close menu when a link is clicked
document.querySelector('.nav-links').addEventListener('click', () => {
  const navLinks = document.querySelector('.nav-links');
  if (navLinks.classList.contains('active')) {
      navLinks.classList.remove('active');
  }
});

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
