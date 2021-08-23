// 'use strict';
// var pageHeader = document.querySelector('.page-header');
// var headerToggle = document.querySelector('.page-header__toggle');

// pageHeader.classList.remove('page-header--nojs');

// headerToggle.addEventListener('click', function () {
//   if (pageHeader.classList.contains('page-header--closed')) {
//     pageHeader.classList.remove('page-header--closed');
//     pageHeader.classList.add('page-header--opened');
//   } else {
//     pageHeader.classList.add('page-header--closed');
//     pageHeader.classList.remove('page-header--opened');
//   }
// });


// Login modal

const pageHeader = document.querySelector('.page-header');
const menuButton = document.querySelector('.page-header__button-menu');

const page = document.querySelector('.page__body');
const loginModal = document.querySelector('.modal-login');
const loginModalOpenButton = document.querySelector('.user-nav__link--login');
const loginModalcloseButton = document.querySelector('.modal-login__close-button');
const email = document.querySelector('.modal-login__form > input');

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
  page.classList.add('page__body--open-modal');
  loginModal.classList.add('modal-login--open');
  email.focus();
  document.addEventListener('keydown', onLoginModalEscKeydown);
  loginModal.addEventListener('click', onLoginModalClickOverlay);
};

const closeLoginModal = function () {
  page.classList.remove('page__body--open-modal');
  loginModal.classList.remove('modal-login--open');
  document.removeEventListener('keydown', onLoginModalEscKeydown);
  loginModal.removeEventListener('click', onLoginModalClickOverlay);
};

loginModalOpenButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  openLoginModal();
  trapFocus(loginModal);
});

loginModalcloseButton.addEventListener('click', () => {
  closeLoginModal()
});

// Cart modal

const cartModal = document.querySelector('.modal-cart');
const addToCartButton = document.querySelector('.product__button-add-cart');
const cartModalCloseButton = document.querySelector('.modal-cart__close-button');

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

// open menu

const controlMenu = function () {
  pageHeader.classList.toggle('page-header--open-menu');
};

menuButton.addEventListener('click', () => {
  controlMenu();
});

// Open Filter

const filter = document.querySelector('.filter');
const openFilterButton = document.querySelector('.catalog__filter-button ');
const closeFilterButton = document.querySelector('.filter__button--close');
const filterItemTitles = document.querySelectorAll('.filter__list-title');

const openFilterItem = function (items) {
  items.forEach((element) => {
    element.addEventListener('click', () => {
      element.parentElement.classList.toggle('filter__field--close');
    });
  });
};

const openFilter = function () {
  if (filter) {
    filter.classList.add('filter--open');
    openFilterItem(filterItemTitles);
  };
};

const closeFilter = function () {
  filter.classList.remove('filter--open');
};

if (openFilterButton) {
  openFilterButton.addEventListener('click', () => {
    openFilter();
  });
};

if (closeFilterButton) {
  closeFilterButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    closeFilter();
  });
};

// Trap focus

const trapFocus = function (element) {
  var focusableEls = element.querySelectorAll('a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])');
  var firstFocusableEl = focusableEls[0];
  var lastFocusableEl = focusableEls[focusableEls.length - 1];
  var KEYCODE_TAB = 9;

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




// Input reset

const searchInputClean = function () {
  const searchInput = document.querySelector('.search-form > input');

  if (window.innerWidth <= 1023) {
    searchInput.placeholder = '';
  } else {
    searchInput.placeholder = 'Type here to search';
  };
};

window.addEventListener('resize', () => {
  searchInputClean();
});

const faqItems = document.querySelectorAll('.faq__item');

const openingAccordeon = function (items) {
  items.forEach((element) => {
    element.addEventListener('click', () => {
      element.classList.toggle('faq__item--open');
    });
  });
};

openingAccordeon(faqItems);

