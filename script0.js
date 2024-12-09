document.addEventListener("DOMContentLoaded", function() {
    const toggler = document.getElementById("navbar-toggler");
    const navLinks = document.getElementById("nav-links");

    toggler.addEventListener("click", function() {
        navLinks.classList.toggle("show");
    });
});