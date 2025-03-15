document.addEventListener("DOMContentLoaded", function () {
    const sliderScreen = document.getElementById("slider-screen");

    // Hide the slider screen after 3 seconds
    setTimeout(() => {
        sliderScreen.classList.add("hidden");
    }, 3000);
});
