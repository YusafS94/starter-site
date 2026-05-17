document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menuToggle");
    const fullScreenMenu = document.getElementById("fullScreenMenu");
    const mobileLinks = document.querySelectorAll(".mobile-link");

    // Toggle menu state cleanly
    function toggleMenu() {
        const isOpened = menuToggle.classList.toggle("active");
        fullScreenMenu.classList.toggle("active");
        document.body.classList.toggle("no-scroll");

        // Dynamic Accessibility (Aria) tracking
        menuToggle.setAttribute("aria-expanded", isOpened);
    }

    // Bind event trigger listeners
    menuToggle.addEventListener("click", toggleMenu);

    // Auto close overlay if menu links are triggered (anchors navigation targets)
    mobileLinks.forEach(link => {
        link.addEventListener("click", () => {
            if (fullScreenMenu.classList.contains("active")) {
                toggleMenu();
            }
        });
    });
});