let slideIndex = 1;
let textIndex = 1;
showSlides(slideIndex, textIndex);

function currentSlide(x, y) {
    showSlides(slideIndex = x, textIndex = y);
}

function showSlides(x, y) {
    let i;
    let slides = document.getElementsByClassName("slides");
    let dots = document.getElementsByClassName("dot");
    let text = document.getElementsByClassName("text");
    if (x > slides.length) {slideIndex = 1}
    if (x < 1) {slideIndex = slides.length}

    if (y > text.length) {textIndex = 1}
    if (y < 1) {textIndex = text.length}

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < text.length; i++) {
        text[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    text[textIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}
