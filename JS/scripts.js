// scripts.js

let activeLink = '';

// Function to toggle mobile menu visibility
function toggleMenu() {
    const menu = document.getElementById("mobileMenu");
    menu.classList.toggle("hidden");
}

// Function to close the mobile menu when clicking outside
function closeMenuOnClickOutside(event) {
    const menu = document.getElementById("mobileMenu");
    if (!menu.contains(event.target) && !event.target.closest('.lg:hidden button')) {
        menu.classList.add("hidden");
    }
}

// Function to set the active page
function setActiveLink(page) {
    activeLink = page;
    updateNavLinks();
}

// Function to update the navigation links based on the active page
function updateNavLinks() {
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
        if (link.href.includes(activeLink)) {
            link.classList.add('underline', 'font-bold');
            link.classList.remove('text-gray-300');
        } else {
            link.classList.remove('underline', 'font-bold');
            link.classList.add('text-gray-300');
        }
    });
}

// Add event listener for clicking outside the menu
document.addEventListener('click', closeMenuOnClickOutside);

// Set initial active page
window.onload = () => {
    setActiveLink(window.location.hash || 'home');
};
