document.addEventListener("DOMContentLoaded", function () {
    const sliderScreen = document.getElementById("slider-screen");
    const logoTopLeft = document.querySelector(".top-left-logo");

    // Hide the slider screen on scroll down and show the top-left logo
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            sliderScreen.classList.add("hidden"); // Move slider screen up
            logoTopLeft.style.opacity = "1"; // Show top-left logo
        } else {
            sliderScreen.classList.remove("hidden"); // Bring back slider
            logoTopLeft.style.opacity = "0"; // Hide top-left logo
        }
    });

    // Ensure the top-left logo is hidden initially
    logoTopLeft.style.opacity = "0";
});
