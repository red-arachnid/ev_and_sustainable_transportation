
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


const header = document.getElementById('header');
const progress = document.getElementById('progress');

addEventListener('scroll', () => {
    const y = window.scrollY;
    const max = document.documentElement.scrollHeight - innerHeight;
    progress.style.width = `${(y / max) * 100}%`;
    header.classList.toggle('scrolled', y > 40);
}, {passive: true});