const popupSlider = document.querySelector('.popup-slider');
const popupSliderWrapper = document.querySelector('.popup-slider-wrapper');
const popupSliderSlides = document.querySelectorAll('.popup-slider-slide');
const popupSliderControls = document.querySelector('.popup-slider-controls');
const popupSliderControlItems = document.querySelectorAll('.popup-slider-control');

let slideIndex = 0;

// Display the first slide
popupSliderSlides[slideIndex].classList.add('active');
popupSliderControlItems[slideIndex].classList.add('active');

// Next slide
function nextSlide() {
  popupSliderSlides[slideIndex].classList.remove('active');
  popupSliderControlItems[slideIndex].classList.remove('active');
  slideIndex++;
  if (slideIndex >= popupSliderSlides.length) {
    slideIndex = 0;
  }
  popupSliderSlides[slideIndex].classList.add('active');
  popupSliderControlItems[slideIndex].classList.add('active');
}

// Previous slide
function prevSlide() {
  popupSliderSlides[slideIndex].classList.remove('active');
  popupSliderControlItems[slideIndex].classList.remove('active');
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = popupSliderSlides.length - 1;
  }
  popupSliderSlides[slideIndex].classList.add('active');
  popupSliderControlItems[slideIndex].classList.add('active');
}

// Add event listeners to the control items
popupSliderControlItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    popupSliderSlides[slideIndex].classList.remove('active');
    popupSliderControlItems[slideIndex].classList.remove('active');
    slideIndex = index;
    popupSliderSlides[slideIndex].classList.add('active');
    popupSliderControlItems[slideIndex].classList.add('active');
  });
});

// Open the popup slider
function openPopupSlider() {
  popupSlider.style.display = 'flex';
}

// Close the popup slider
function closePopupSlider() {
  popupSlider.style.display = 'none';
}

// Add event listeners to the wrapper and controls
popupSliderWrapper.addEventListener('click', (e) => {
  e.stopPropagation();
});
popupSliderControls.addEventListener('click', (e) => {
  e.stopPropagation();
});
popupSliderWrapper.addEventListener('swipeleft', () => {
  nextSlide();
});
popupSliderWrapper.addEventListener('swiperight', () => {
  prevSlide();
});
document.addEventListener('keydown', (e) => {
  if (e.keyCode === 37) {
    prevSlide();
  } else if (e.keyCode === 39) {
    nextSlide();
  }
});

// Add event listeners to open and close the popup slider
document.querySelector('.open-popup-slider').addEventListener('click', openPopupSlider);
document.querySelector('.close-popup-slider').addEventListener('click', closePopupSlider);
