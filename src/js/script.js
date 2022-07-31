// Slick Carousel

$('.carousel').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  autoplay: true,
});

// Modal Popup

const requestButton = document.querySelectorAll('.request');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

requestButton.forEach((item) => {
  item.addEventListener('click', () => {
    modal.style.display = 'block';
    overlay.style.display = 'block';
  });
});

overlay.addEventListener('click', () => {
  modal.style.display = 'none';
  overlay.style.display = 'none';
});

// Cards details

const titles = document.querySelectorAll('.card p:not(.descr)');

titles.forEach((title, key) => {
  let isOpen = false;
  title.addEventListener('click', (event) => {
    const shadow = event.target.nextElementSibling;
    const descr = shadow.nextElementSibling;
    if (!isOpen) {
      title.style.transition = '.3s all';
      title.style.bottom = '165px';

      shadow.style.background =
        'linear-gradient(180deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.6) 100%)';
      shadow.style.height = '99%';
      shadow.style.borderRadius = '10px';
      shadow.style.backgroundBlendMode = 'multiply';
      shadow.style.bottom = '2px';

      descr.style.visibility = 'visible';
      isOpen = true;
    } else {
      title.style.bottom = '32px';
      descr.style.opacity = '0';
      descr.style.visibility = 'hidden';
      shadow.style.background =
        'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%)';
      isOpen = false;
    }
  });
});
