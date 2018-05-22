// JavaScript source code
var currSlide = 0;
var timer = showSlides();

function plusSlides(n) {
    switchSlides(currSlide += n);
}

function currentSlide(n) {
    switchSlides(currSlide = n);
}

function switchSlides(n) {
    window.clearTimeout(timer);
    var i;
    var slides = document.getElementsByClassName("slides");
    if (n > slides.length) { currSlide = 1 }
    if (n < 1) { currSlide = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[currSlide - 1].style.display = "block";
    timer = setTimeout(showSlides, 4000);
}

function showSlides() {
    window.clearTimeout(timer);
    var i;
    var slides = document.getElementsByClassName("slides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    currSlide++;
    if (currSlide > slides.length) { currSlide = 1 }
    slides[currSlide - 1].style.display = "block";
    timer = setTimeout(showSlides, 4000);
}