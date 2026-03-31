// ================= GSAP SETUP =================
gsap.registerPlugin(ScrollTrigger);

// ================= ELEMENTS =================
const hamburger = document.getElementById("hamburger");
const sideMenu = document.getElementById("side-menu");
const overlay = document.getElementById("overlay");
const menuItems = document.querySelectorAll(".side-menu li");

// ================= INITIAL STATE =================
// Move menu off-screen
gsap.set(sideMenu, { x: "-100%" });

let menuOpen = false;

// ================= NAV MENU =================
hamburger.addEventListener("click", () => {
    menuOpen ? closeMenu() : openMenu();
});

overlay.addEventListener("click", closeMenu);

// Open menu
function openMenu() {
    menuOpen = true;

    gsap.to(sideMenu, {
        x: "0%",
        duration: 0.5,
        ease: "power4.out"
    });

    gsap.to(overlay, {
        opacity: 1,
        pointerEvents: "all",
        duration: 0.3
    });

    gsap.from(menuItems, {
        x: -30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.4,
        delay: 0.2
    });

    document.body.classList.add("no-scroll");
}

// Close menu
function closeMenu() {
    menuOpen = false;

    gsap.to(sideMenu, {
        x: "-100%",
        duration: 0.4,
        ease: "power3.in"
    });

    gsap.to(overlay, {
        opacity: 0,
        pointerEvents: "none",
        duration: 0.3
    });

    document.body.classList.remove("no-scroll");
}

// ================= HERO LOAD ANIMATION =================
gsap.from(".hero h1", { opacity: 0, y: 40, duration: 1 });
gsap.from(".hero p", { opacity: 0, y: 30, delay: 0.2 });
gsap.from(".hero .btn", { opacity: 0, y: 20, delay: 0.4 });

// ================= SCROLL ANIMATIONS =================

// Features header
gsap.from(".section-header", {
    scrollTrigger: {
        trigger: ".features",
        start: "top 80%"
    },
    opacity: 0,
    y: 40
});

// Cards stagger
gsap.from(".card", {
    scrollTrigger: {
        trigger: ".feature-grid",
        start: "top 80%"
    },
    opacity: 0,
    y: 50,
    stagger: 0.2
});

// CTA
gsap.from(".cta", {
    scrollTrigger: {
        trigger: ".cta",
        start: "top 85%"
    },
    opacity: 0,
    y: 50
});

// Footer
gsap.from(".footer", {
    scrollTrigger: {
        trigger: ".footer",
        start: "top 95%"
    },
    opacity: 0,
    y: 30
});

// ================= PARALLAX =================

// Background moves slower than scroll
gsap.to(".hero-bg", {
    y: "20%",
    ease: "none",
    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true
    }
});

// Floating shapes move differently
gsap.to(".shape-1", {
    y: 100,
    x: 50,
    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true
    }
});

gsap.to(".shape-2", {
    y: -80,
    x: -40,
    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true
    }
});

// Cards subtle parallax
gsap.utils.toArray(".card").forEach((card, i) => {
    gsap.to(card, {
        y: i % 2 === 0 ? 30 : -30,
        scrollTrigger: {
            trigger: card,
            start: "top 90%",
            end: "bottom 10%",
            scrub: true
        }
    });
});