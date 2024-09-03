// Theme Toggle
const themeToggleBtn = document.getElementById("theme-toggle");
const body = document.body;

themeToggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark-theme");
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});