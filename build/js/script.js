const pageBody = document.querySelector('.page__body');

const pageHeader = document.querySelector('.page-header');
const menuButton = document.querySelector('.page-header__button-menu');

const page = document.querySelector('.page__body');
const loginModal = document.querySelector('.modal-login');
const loginModalOpenButton = document.querySelector('.user-nav__link--login');
const loginModalcloseButton = document.querySelector('.modal-login__close-button');

const loginInputEmail = document.querySelector('.modal-login__email-input');
const modalLogin = document.querySelector('.modal-login__form');

const cartModal = document.querySelector('.modal-cart');
const addToCartButton = document.querySelector('.product__button-add-cart');
const cartModalCloseButton = document.querySelector('.modal-cart__close-button');
const cartModalCheckoutButton = document.querySelector('.modal-cart__button--checkout');

const filter = document.querySelector('.filter');
const filterField = document.querySelectorAll('.filter__field');
const openFilterButton = document.querySelector('.catalog__filter-button');
const closeFilterButton = document.querySelector('.filter__button--close');
const filterItemTitles = document.querySelectorAll('.filter__list-title');


const KEYCODE_TAB = 9;

const faqItems = document.querySelectorAll('.faq__item');

const searchInput = document.querySelector('.search-form > input');


const slider = document.querySelector('.slider');
const sliderContainer = document.querySelector('.swiper-container');
const paginationBlock = document.querySelector('.slider-pagination');
const currentDotOut = document.querySelector('.slider-mobile-pagination__current');
const totalDotsOut = document.querySelector('.slider-mobile-pagination__total');
let swiper;

const ACTIVE_BULLET_CLASS = 'swiper-pagination-bullet-active';
const BREAKPOINT_MOBILE = 767;

pageBody.classList.remove('page__body--no-js');

// Login modal
const isEscEvent = (evt) => {
  return evt.key === ('Escape' || 'Esc');
};

const onLoginModalEscKeydown = function (evt) {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closeLoginModal();
  };
};

const onLoginModalClickOverlay = function (evt) {
  if (evt.target === loginModal) {
    evt.preventDefault();
    closeLoginModal();
  };
};

const openLoginModal = function () {
  pageHeader.classList.remove('page-header--open-menu');
  page.classList.add('page__body--open-modal');
  loginModal.classList.add('modal-login--open');
  loginInputEmail.focus();
  getLocalStorage(loginInputEmail);
  document.addEventListener('keydown', onLoginModalEscKeydown);
  loginModal.addEventListener('click', onLoginModalClickOverlay);
};

const closeLoginModal = function () {
  page.classList.remove('page__body--open-modal');
  loginModal.classList.remove('modal-login--open');
  document.removeEventListener('keydown', onLoginModalEscKeydown);
  loginModal.removeEventListener('click', onLoginModalClickOverlay);
};

const setLocalStorage = (input) => {
  localStorage.setItem('login', input.value);
};

const getLocalStorage = (input) => {
  input.value = localStorage.getItem('login');
};

loginModalOpenButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  openLoginModal();
  trapFocus(loginModal);
});

loginModalcloseButton.addEventListener('click', () => {
  closeLoginModal()
});

modalLogin.addEventListener("submit", function (evt) {
  setLocalStorage(loginInputEmail);
});

// Cart modal
const onCartnModalEscKeydown = function (evt) {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closeCartModal();
  };
};

const onCartnModalClickOverlay = function (evt) {
  if (evt.target === cartModal) {
    evt.preventDefault();
    closeCartModal();
  };
};

const openCartModal = function () {
  page.classList.add('page__body--open-modal');
  cartModal.classList.add('modal-cart--open');
  cartModalCheckoutButton.focus();
  trapFocus(cartModal);
  document.addEventListener('keydown', onCartnModalEscKeydown);
  cartModal.addEventListener('click', onCartnModalClickOverlay);
};

const closeCartModal = function () {
  page.classList.remove('page__body--open-modal');
  cartModal.classList.remove('modal-cart--open');
  document.removeEventListener('keydown', onCartnModalEscKeydown);
  cartModal.removeEventListener('click', onCartnModalClickOverlay);
};

if (addToCartButton) {
  addToCartButton.addEventListener('click', () => {
    openCartModal();
  });
};

if (cartModalCloseButton) {
  cartModalCloseButton.addEventListener('click', () => {
    closeCartModal()
  });
};

// Open menu
const controlMenu = function () {
  page.classList.toggle('page__body--open-modal');
  pageHeader.classList.toggle('page-header--open-menu');
};

menuButton.addEventListener('click', () => {
  controlMenu();
});

// Open Filter
const openFilterItem = function (items) {
  items.forEach((element) => {
    element.addEventListener('click', () => {
      element.parentNode.classList.toggle('filter__field--close');
    });
  });
};

const openFilter = function () {
  if (filter) {
    page.classList.add('page__body--open-modal');
    filter.classList.add('filter--open');
    openFilterItem(filterItemTitles);
  };
};

const closeFilter = function () {
  page.classList.remove('page__body--open-modal');
  filter.classList.remove('filter--open');
};

if (filter) {
  openFilterButton.addEventListener('click', () => {
    openFilter();
    openFilterItem(filterItemTitles)
  });
};

if (closeFilterButton) {
  closeFilterButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    closeFilter();
  });
};

if (filter) {
  openFilterItem(filterItemTitles);
}

// // Trap focus
const trapFocus = function (element) {
  const focusableEls = element.querySelectorAll('a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])');
  const firstFocusableEl = focusableEls[0];
  const lastFocusableEl = focusableEls[focusableEls.length - 1];
  element.addEventListener('keydown', function (e) {
    var isTabPressed = (e.key === 'Tab' || e.keyCode === KEYCODE_TAB);
    if (!isTabPressed) {
      return;
    };

    if (e.shiftKey) {
      if (document.activeElement === firstFocusableEl) {
        lastFocusableEl.focus();
        e.preventDefault();
      };
    } else {
      if (document.activeElement === lastFocusableEl) {
        firstFocusableEl.focus();
        e.preventDefault();
      };
    };
  });
};

// Input Search reset
const searchInputClean = function () {
  if (window.innerWidth <= 1023) {
    searchInput.placeholder = '';
  } else {
    searchInput.placeholder = 'Type here to search';
  };
};

searchInputClean();

window.addEventListener('resize', () => {
  searchInputClean();
});

// Faq accordeon
const openingAccordeon = function (items) {
  items.forEach((element) => {
    element.addEventListener('click', () => {
      element.classList.toggle('faq__item--open');
    });
  });
};

openingAccordeon(faqItems);

//Swiper slider
const initSwapper = function () {
  if (slider) {
    swiper = new Swiper('.swiper-container', {
      loop: true,
      slidesPerGroup: 2,
      slidesPerView: 2,
      centeredSlides: false,
      spaceBetween: 30,
      centeredSlidesBounds: true,

      pagination: {
        el: document.querySelector('.slider-pagination'),
        clickable: 'true',
        renderBullet(index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      },

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      breakpoints: {
        767: {
          slidesPerView: 2,
          slidesPerGroup: 2,
        },
        1023: {
          slidesPerView: 4,
          slidesPerGroup: 4,
        },
        1365: {
          slidesPerView: 4,
          slidesPerGroup: 4,
        },
      },
    });
    initSlider();
  };
};

const getBullets = function () {
  let bullets;
  if (paginationBlock) {
    bullets = paginationBlock.children;
  };
  return bullets;
};

const setMobileTotalBullet = function (bullets) {
  let totalBullets = bullets.length
  return totalBullets;
};

const setMobileCurrentBullet = function (bullets) {
  let currentBullet;
  Array.from(bullets).forEach((element) => {
    if (element.classList.contains(ACTIVE_BULLET_CLASS)) {
      currentBullet = +element.textContent;
    };
  });

  return currentBullet;
};

const renderMobilePagination = function (bullets) {
  totalDotsOut.textContent = setMobileTotalBullet(bullets);
  currentDotOut.textContent = setMobileCurrentBullet(bullets);
};

const realIndexChangeHandler = function (bullets) {
  swiper.on('transitionEnd', function () {
    renderMobilePagination(bullets);
  });
};

const setMobilePagination = function () {
  let bullets = getBullets();
  realIndexChangeHandler(bullets);
};

const breakpointChangeHandler = function () {
  let viewport = document.documentElement.clientWidth;

  if (viewport < BREAKPOINT_MOBILE) {
    setMobilePagination();
  };
};

const initMobilePagination = function () {
  let bullets = getBullets();
  renderMobilePagination(bullets);
};

const initSlider = function () {
  initMobilePagination();
  breakpointChangeHandler();
  swiper.on('breakpoint', breakpointChangeHandler);
};

initSwapper();
