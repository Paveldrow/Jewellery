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

menuToggle();

