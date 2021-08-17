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

const faqItem = document.querySelectorAll('.faq__item');

const menuToggle = function () {
  const pageHeader = document.querySelector('.page-header');
  const buttonMenu = document.querySelector('.page-header__button-menu');

  buttonMenu.addEventListener('click', () => {
    pageHeader.classList.toggle('page-header--open-menu');
  });
};

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

const openingAccordeon = function (items) {
  items.forEach((element) => {
    element.addEventListener('click', () => {
      element.classList.toggle('faq__item--open');
    });
  });
}

menuToggle();
openingAccordeon(faqItem);

const openFilterButton = document.querySelector('.filter__button--open-filter');
const closeFilterButton = document.querySelector('.filter__button--close');
const filter = document.querySelector('.filter');
const filterItem = document.querySelectorAll('.filter__field');


const openingFilterItem = function (items) {
  items.forEach((element) => {
    element.addEventListener('click', () => {
      element.classList.toggle('filter__field--close');
    });
  });
}

const closeFilter = function () {
  closeFilterButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    filter.classList.remove('filter--open');
  })
}

const openFilter = function () {
  openFilterButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    filter.classList.add('filter--open');
    openingFilterItem(filterItem)
    closeFilter();
  })
}

openFilter();
