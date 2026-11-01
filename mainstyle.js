if (typeof Swiper !== 'undefined') {
  new Swiper('.mySwiper', {
    loop: true,
    navigation: {
      nextEl: '#next',
      prevEl: '#prev',
    },
  });
}

const cartIcons = document.querySelectorAll('.cart-icon');
const cartTab = document.querySelector('.cart-tab');
const closeBtn = document.querySelector('.close-btn');

cartIcons.forEach((cartIcon) => {
  cartIcon.addEventListener('click', (event) => {
    event.preventDefault();
    cartTab?.classList.add('cart-tab-active');
  });
});

closeBtn?.addEventListener('click', (event) => {
  event.preventDefault();
  cartTab?.classList.remove('cart-tab-active');
});