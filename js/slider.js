const slider = document.querySelector('.slider2');
const slides = slider.querySelector('.slides2');
const slideList = slides.querySelectorAll('img');
const prevBtn = slider.querySelector('.prev-btn2');
const nextBtn = slider.querySelector('.next-btn2');
let currentSlide= 0;
const slideWidth = slideList[0].clientWidth;

slides.style.transform = `translateX(${-slideWidth * currentSlide}px)`;

function moveToSlide(slideIndex) {
  if (slideIndex < 0 || slideIndex >= slideList.length) {
    return;
  }
  currentSlide = slideIndex;
  slides.style.transform = `translateX(${-slideWidth * currentSlide}px)`;
}

function moveToNextSlide() {
  moveToSlide(currentSlide + 1);
}

function moveToPrevSlide() {
  moveToSlide(currentSlide - 1);
}

prevBtn.addEventListener('click', moveToPrevSlide);
nextBtn.addEventListener('click', moveToNextSlide);
