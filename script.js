document.addEventListener("DOMContentLoaded", function() {
    const loginBtn = document.querySelector(".login-btn");
    const menuToggle = document.createElement("div");
    const navbar = document.querySelector(".navbar");
    const navLinks = document.querySelector(".nav-links");
    
    // Create menu toggle button
    menuToggle.classList.add("menu-toggle");
    menuToggle.innerHTML = "☰";
    navbar.insertBefore(menuToggle, navbar.firstChild);
    
    // Toggle menu visibility on click
    menuToggle.addEventListener("click", function() {
        navLinks.classList.toggle("active");
    });
    
    loginBtn.addEventListener("click", function(event) {
        event.preventDefault();
        alert("Login functionality coming soon!");
    });
});
