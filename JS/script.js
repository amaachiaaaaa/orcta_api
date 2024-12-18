

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

document.addEventListener("DOMContentLoaded", () => {
  const bars = document.querySelectorAll(".bar");

  bars.forEach(bar => {
      const targetValue = +bar.getAttribute("data-target"); // Get the target number
      const valueDisplay = bar.nextElementSibling.querySelector(".value");
      const heightPercent = (targetValue / 8500000) * 100; // Scale height relative to the largest value

      let currentValue = 0; // Start value
      const speed = 50; // Speed adjustment
      const increment = Math.ceil(targetValue / speed); // Increment for each frame

      // Animate Bar Height
      bar.style.height = `${heightPercent}%`;

      // Animate Number Count
      const countUp = setInterval(() => {
          if (currentValue < targetValue) {
              currentValue += increment;
              if (currentValue > targetValue) currentValue = targetValue; // Stop at target
              valueDisplay.innerText = currentValue.toLocaleString(); // Format the number
          } else {
              clearInterval(countUp); // Stop the interval
          }
      }, 30); // Adjust speed of counting
  });
});



