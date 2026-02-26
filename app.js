// BioLoop AI | National Innovation Challenge 2026 Logic

document.addEventListener('DOMContentLoaded', () => {
    // 1. Entrance Stagger for Cards (GSAP)
    if (typeof gsap !== 'undefined') {
        gsap.from(".glass-card, .stat-card, .chart-box", {
            duration: 1,
            y: 40,
            opacity: 0,
            stagger: 0.15,
            ease: "power3.out"
        });
    }

    // 2. Interactive Hover Pulse for Graphs and Buttons
    const interactiveElements = document.querySelectorAll('.stat-card, .chart-box, .btn-main');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            el.style.boxShadow = "0 0 30px rgba(0, 255, 136, 0.3)";
        });
        el.addEventListener('mouseleave', () => {
            el.style.boxShadow = "none";
        });
    });

    // 3. System Health "Live" Pulse [cite: 140]
    const statusDot = document.querySelector('.dot');
    if (statusDot) {
        setInterval(() => {
            statusDot.style.opacity = statusDot.style.opacity === "0.2" ? "1" : "0.2";
        }, 800);
    }
});