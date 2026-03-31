// ================= SELECT ELEMENTS =================
const hamburger = document.getElementById("hamburger");
const sideMenu = document.getElementById("side-menu");
const overlay = document.getElementById("overlay");
const menuItems = document.querySelectorAll(".side-menu li");

// ================= INITIAL STATE =================
// Place menu off-screen (left)
gsap.set(sideMenu, { x: "-100%" });

// Track whether menu is open or closed
let menuOpen = false;

// ================= EVENT LISTENERS =================

// Toggle menu when hamburger clicked
hamburger.addEventListener("click", () => {
    if (!menuOpen) {
        openMenu();
    } else {
        closeMenu();
    }
});

// Close menu when overlay clicked
overlay.addEventListener("click", closeMenu);

// ================= OPEN MENU =================
function openMenu() {
    menuOpen = true;

    // Slide menu in
    gsap.to(sideMenu, {
        x: "0%",
        duration: 0.5,
        ease: "power4.out"
    });

    // Fade in overlay
    gsap.to(overlay, {
        opacity: 1,
        pointerEvents: "all",
        duration: 0.3
    });

    // Animate menu items one by one (stagger)
    gsap.from(menuItems, {
        x: -30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.4,
        delay: 0.2
    });

    // Disable background scrolling
    document.body.classList.add("no-scroll");
}

// ================= CLOSE MENU =================
function closeMenu() {
    menuOpen = false;

    // Slide menu out
    gsap.to(sideMenu, {
        x: "-100%",
        duration: 0.4,
        ease: "power3.in"
    });

    // Fade out overlay
    gsap.to(overlay, {
        opacity: 0,
        pointerEvents: "none",
        duration: 0.3
    });

    // Re-enable scrolling
    document.body.classList.remove("no-scroll");
}