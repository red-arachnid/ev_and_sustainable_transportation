
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