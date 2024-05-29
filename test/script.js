document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('menu-button');
    const navLinks = document.getElementById('nav-links');

    menuButton.addEventListener('click', function() {
        navLinks.classList.toggle('show');
    });
});
