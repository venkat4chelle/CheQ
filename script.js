document.addEventListener("DOMContentLoaded", function () {
    // Elements
    const openingScreen = document.getElementById("opening-screen");
    const header = document.querySelector("header");
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");
    const contactForm = document.getElementById("contact-form");
    
    // Hide the opening screen after 2 seconds with a fade effect
    setTimeout(() => {
        openingScreen.classList.add("hidden");
    }, 2000);
    
    // Header scroll effect
    window.addEventListener("scroll", function() {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
    
    // Mobile menu toggle functionality
    if (menuToggle) {
        menuToggle.addEventListener("click", function() {
            navMenu.classList.toggle("active");
            menuToggle.classList.toggle("active");
        });
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener("click", function(e) {
        if (navMenu && navMenu.classList.contains("active") && 
            !e.target.closest("nav") && !e.target.closest(".menu-toggle")) {
            navMenu.classList.remove("active");
            menuToggle.classList.remove("active");
        }
    });
    
    // Smooth scrolling for navigation links with offset for fixed header
    document.querySelectorAll("nav a, .hero a").forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            
            // Close mobile menu if open
            if (navMenu && navMenu.classList.contains("active")) {
                navMenu.classList.remove("active");
                menuToggle.classList.remove("active");
            }
            
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                // Calculate header height dynamically
                const headerHeight = header.offsetHeight;
                
                window.scrollTo({
                    top: targetElement.offsetTop - headerHeight,
                    behavior: "smooth"
                });
            }
        });
    });
    
    // Contact form submission handler
    if (contactForm) {
        contactForm.addEventListener("submit", function(e) {
            e.preventDefault();
            
            // Simple form validation
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();
            
            if (!name || !email || !message) {
                alert("Please fill in all fields");
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert("Please enter a valid email address");
                return;
            }
            
            // Here you would typically send the form data to your server
            // For now, we'll just show a success message
            alert("Thank you for your message! We'll get back to you soon.");
            contactForm.reset();
        });
    }
    
    // Add animation to sections when they come into view
    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.2
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all sections
    document.querySelectorAll("section").forEach(section => {
        section.classList.add("fade-in");
        observer.observe(section);
    });
});
