let lastScrollTop = 0; // Track the last scroll position
window.onload = function() {
    // Detect scroll event to hide or show the slider screen
    window.addEventListener('scroll', function() {
        var sliderScreen = document.getElementById('slider-screen');
        var currentScroll = window.scrollY; // Get current scroll position

        if (currentScroll > lastScrollTop) {
            // Scrolling down - hide the slider screen
            sliderScreen.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up - show the slider screen
            sliderScreen.style.transform = 'translateY(0)';
        }

        // Update the last scroll position to the current scroll
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Prevent negative scroll values
    });
};
document.addEventListener("DOMContentLoaded", function () {
    const sliderScreen = document.getElementById("slider-screen");
    const logoTopLeft = document.querySelector(".top-left-logo");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            logoTopLeft.style.opacity = "1";
        } else {
            logoTopLeft.style.opacity = "0";
        }
    });

    // Optional: Hide initially
    logoTopLeft.style.opacity = "0";
});

