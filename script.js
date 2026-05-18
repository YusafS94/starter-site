document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menuToggle");
    const fullScreenMenu = document.getElementById("fullScreenMenu");
    const mobileLinks = document.querySelectorAll(".mobile-link");
    const button1 = document.querySelector(".btn-primary");
    const button2 = document.querySelector(".btn-secondary");
    const heroImage = document.querySelector(".hero-image-placeholder");
    const dmToggle = document.getElementById("dm-toggle");
    const sunIcon = document.getElementById("sun");
    const moonIcon = document.getElementById("moon");
    const root = document.documentElement;

    // Synchronize initial UI SVG Icon layout states with active scheme
    const systemSaysDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = root.getAttribute("data-theme") || (systemSaysDark ? "dark" : "light");
    updateToggleIcons(initialTheme);

    // Dynamic State Theme Switcher
    dmToggle.addEventListener("click", () => {
        // 1. Evaluate current active attribute target state, fallback gracefully to native system setting
        let activeTheme = root.getAttribute("data-theme");
        if (!activeTheme) {
            activeTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light";
        }

        // 2. Set the opposite theme context
        const nextTheme = activeTheme === "dark" ? "light" : "dark";
        root.setAttribute("data-theme", nextTheme);

        // 3. UI presentation update
        updateToggleIcons(nextTheme);
    });

    // Helper utility to switch icon visibility flags cleanly
    function updateToggleIcons(theme) {
        const isDark = theme === "dark";
        sunIcon.classList.toggle("hidden", isDark);
        moonIcon.classList.toggle("hidden", !isDark);
    }

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

    // Helper function to handle the smooth 3D flip-swap
    function swapImageWithFlip(newSrc, newAlt) {
        heroImage.classList.add("rotate3D");

        setTimeout(() => {
            heroImage.src = newSrc;
            heroImage.alt = newAlt;
            heroImage.classList.remove("rotate3D");
        }, 400);
    }

    // Bind event trigger listeners to our helper function
    button1.addEventListener("click", () => {
        swapImageWithFlip("./images/pixel_art.png", "Pixel Art Image");
    });

    button2.addEventListener("click", () => {
        swapImageWithFlip("./images/park-img.jpg", "Park Image");
    });
});