document.addEventListener("DOMContentLoaded", function () {
    const openingScreen = document.getElementById("opening-screen");

    // Hide the opening screen after 2 seconds
    setTimeout(() => {
        openingScreen.classList.add("hidden");
    }, 2000);

    // Smooth scrolling for navigation links
    document.querySelectorAll("nav a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop - 50,
                behavior: "smooth"
            });
        });
    });
});
