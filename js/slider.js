const slider = document.querySelector('.sliderar');
const prevBtn = document.querySelector('.prevar');
const nextBtn = document.querySelector('.nextar');

let counter = 0;

function slide() {
  slider.style.transform = `translateX(-${counter * 500}px)`;
}

nextBtn.addEventListener('click', () => {
  counter++;
  if (counter >= 3) {
    counter = 0;
  }
  slide();
});

prevBtn.addEventListener('click', () => {
  counter--;
  if (counter < 0) {
    counter = 2;
  }
  slide();
});
