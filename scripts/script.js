// Theme Toggle Logic
const toggleButton = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// 1. Check Local Storage or System Preference
const currentTheme = localStorage.getItem('theme') || 
    (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');

if (currentTheme) {
    htmlElement.setAttribute('data-theme', currentTheme);
}

// 2. Toggle Event Listener
if (toggleButton) {
    toggleButton.addEventListener('click', () => {
        let theme = htmlElement.getAttribute('data-theme');
        let newTheme = theme === 'light' ? 'dark' : 'light';
        
        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
}

// Hamburger Menu Logic
if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('toggle');
    });
}

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            hamburger.classList.remove('toggle');
        }
    });
});