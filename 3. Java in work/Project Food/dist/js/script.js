/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
window.addEventListener('DOMContentLoaded', function () {
  // Tabs
  let tabs = document.querySelectorAll('.tabheader__item'),
    tabsContent = document.querySelectorAll('.tabcontent'),
    //родитель (чтобы использовать делигирование событий)
    tabsParent = document.querySelector('.tabheader__items');

  //скрываем контент
  function hideTabContent() {
    tabsContent.forEach(item => {
      item.classList.add('hide');
      item.classList.remove('show', 'fade');
    });
    tabs.forEach(item => {
      //точку не ставим т.к. classList уже говорит об этом
      item.classList.remove('tabheader__item_active');
    });
  }

  //Показываем (i = 0 - параметр по умолчанию)
  function showTabContent(i = 0) {
    tabsContent[i].classList.add('show', 'fade');
    tabsContent[i].classList.remove('hide');
    tabs[i].classList.add('tabheader__item_active');
  }
  hideTabContent();
  showTabContent();
  tabsParent.addEventListener('click', function (event) {
    const target = event.target;
    if (target && target.classList.contains('tabheader__item')) {
      tabs.forEach((item, i) => {
        if (target == item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });
});
/******/ })()
;
//# sourceMappingURL=script.js.map