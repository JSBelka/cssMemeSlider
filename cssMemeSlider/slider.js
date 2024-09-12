const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const texts = document.querySelectorAll('.text');
let slideIndex = 0;

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        slideIndex = index;
        slides.forEach(slide => slide.classList.remove('active'));
        slides[slideIndex].classList.add('active');
        dots.forEach(dot => dot.classList.remove('active'));
        dot.classList.add('active');
        texts.forEach(text => text.classList.remove('active'));
        texts[slideIndex].classList.add('active');
    });
});
