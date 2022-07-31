$('.carousel').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  autoplay: true,
});

// Modal Popup

const requestButton = document.querySelector('#request');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

requestButton.addEventListener('click', () => {
  modal.style.display = 'block';
  overlay.style.display = 'block';
});

overlay.addEventListener('click', () => {
  modal.style.display = 'none';
  overlay.style.display = 'none';
});
