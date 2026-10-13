
//! FAQ BOXES
const faqBoxes =  [...document.getElementById('faq-container').children];

faqBoxes.forEach(box => {
    box.addEventListener('click', (e) => {
        if (box.classList.contains('active')) {
            box.classList.remove('active');
            return;
        }
        removeActive();
        box.classList.toggle('active');
    });
});

function removeActive() {
    faqBoxes.forEach(box => box.classList.remove('active'));
}

//! HEADER PROGRESS BAR
const header = document.getElementById('header');
const progress = document.getElementById('progress');

addEventListener('scroll', () => {
    const y = window.scrollY;
    const max = document.documentElement.scrollHeight - innerHeight;
    progress.style.width = `${(y / max) * 100}%`;
    header.classList.toggle('scrolled', y > 40);
}, {passive: true});


//! LOADER HOME PAGE
const loadPercentage = document.getElementById('load-percent');

setTimeout(() => {
    const start = performance.now(), duration = 1200;
    (function tick(now) {
        const t = Math.min((now - start) / duration, 1);
        const eased = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
        const percent = `${Math.round(eased * 100)}%`;
        loadPercentage.textContent = percent;
        if (t < 1) requestAnimationFrame(tick);
    })(start);
}, 500);

//! REVEAL ANIMATION
const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (!e.isIntersecting) return;
        e.target.classList.add('visible');
        revealObserver.unobserve(e.target);
    });
}, {threshold: 0.15});
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));