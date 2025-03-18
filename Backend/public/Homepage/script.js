document.addEventListener("DOMContentLoaded", function() {
    const getStartedBtn = document.querySelector(".login-btn"); // "Get Started" button
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

    // ✅ Redirect "Get Started" (login-btn) to Sign Up page
    if (getStartedBtn) {
        getStartedBtn.addEventListener("click", function(event) {
            event.preventDefault();
            window.location.href = "/signup"; // Redirect to Sign Up page
        });
    }
});
