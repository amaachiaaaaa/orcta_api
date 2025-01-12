

let activeLink = '';


function toggleMenu() {
    const menu = document.getElementById("mobileMenu");
    menu.classList.toggle("hidden");
}


function closeMenuOnClickOutside(event) {
    const menu = document.getElementById("mobileMenu");
    if (!menu.contains(event.target) && !event.target.closest('.lg:hidden button')) {
        menu.classList.add("hidden");
    }
}


function setActiveLink(page) {
    activeLink = page;
    updateNavLinks();
}


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


document.addEventListener('click', closeMenuOnClickOutside);


window.onload = () => {
    setActiveLink(window.location.hash || 'home');
};
