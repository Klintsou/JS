/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**************************!*\
  !*** ./src/js/bundle.js ***!
  \**************************/
/******/(() => {
  // webpackBootstrap
  /******/
  var __webpack_modules__ = {
    /***/"./js/modules/calc.js":
    /*!****************************!*\
      !*** ./js/modules/calc.js ***!
      \****************************/
    /***/
    module => {
      function calc() {
        // Calculator

        const result = document.querySelector('.calculating__result span');
        let sex, height, weight, age, ratio;
        if (localStorage.getItem('sex')) {
          sex = localStorage.getItem('sex');
        } else {
          sex = 'female';
          localStorage.setItem('sex', 'female');
        }
        if (localStorage.getItem('ratio')) {
          ratio = localStorage.getItem('ratio');
        } else {
          ratio = 1.375;
          localStorage.setItem('ratio', 1.375);
        }
        function calcTotal() {
          //проверка что все данные внесены
          if (!sex || !height || !weight || !age || !ratio) {
            result.textContent = '____';
            return;
          }
          if (sex === 'female') {
            //формула из этой статьи https://fitseven.ru/zdorovie/metabolism/sutochnaya-norma-kaloriy
            result.textContent = Math.round((447.6 + 9.2 * weight + 3.1 * height - 4.3 * age) * ratio);
          } else {
            result.textContent = Math.round((88.36 + 13.4 * weight + 4.8 * height - 5.7 * age) * ratio);
          }
        }
        calcTotal();
        function initLocalSettings(selector, activeClass) {
          const elements = document.querySelectorAll(selector);
          elements.forEach(elem => {
            elem.classList.remove(activeClass);
            if (elem.getAttribute('id') === localStorage.getItem('sex')) {
              elem.classList.add(activeClass);
            }
            if (elem.getAttribute('data-ratio') === localStorage.getItem('ratio')) {
              elem.classList.add(activeClass);
            }
          });
        }
        initLocalSettings('#gender div', 'calculating__choose-item_active');
        initLocalSettings('.calculating__choose_big div', 'calculating__choose-item_active');
        function getStaticInformation(selector, activeClass) {
          const elements = document.querySelectorAll(selector);
          elements.forEach(elem => {
            elem.addEventListener('click', e => {
              if (e.target.getAttribute('data-ratio')) {
                ratio = +e.target.getAttribute('data-ratio');
                localStorage.setItem('ratio', +e.target.getAttribute('data-ratio'));
              } else {
                sex = e.target.getAttribute('id');
                localStorage.setItem('sex', e.target.getAttribute('id'));
              }
              elements.forEach(elem => {
                elem.classList.remove(activeClass);
              });
              e.target.classList.add(activeClass);
              calcTotal();
            });
          });
        }
        getStaticInformation('#gender div', 'calculating__choose-item_active');
        getStaticInformation('.calculating__choose_big div', 'calculating__choose-item_active');

        //data from inputs
        function getDynamicInformation(selector) {
          const input = document.querySelector(selector);
          input.addEventListener('input', () => {
            //regex only numbers
            if (input.value.match(/\D/g)) {
              //обводит красным
              input.style.border = "1px solid red";
            } else {
              input.style.border = 'none';
            }
            switch (input.getAttribute('id')) {
              case "height":
                height = +input.value;
                break;
              case "weight":
                weight = +input.value;
                break;
              case "age":
                age = +input.value;
                break;
            }
            calcTotal();
          });
        }
        getDynamicInformation('#height');
        getDynamicInformation('#weight');
        getDynamicInformation('#age');
      }
      module.exports = calc;

      /***/
    },

    /***/"./js/modules/cards.js":
    /*!*****************************!*\
      !*** ./js/modules/cards.js ***!
      \*****************************/
    /***/
    module => {
      function cards() {
        // Используем классы для создание карточек меню

        class MenuCard {
          constructor(src, alt, title, descr, price, parentSelector, ...classes) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);
            this.transfer = 3.32;
            this.changeToBYN();
          }
          changeToBYN() {
            this.price = this.price * this.transfer;
          }
          render() {
            const element = document.createElement('div');
            if (this.classes.length === 0) {
              this.classes = "menu__item";
              element.classList.add(this.classes);
            } else {
              this.classes.forEach(className => element.classList.add(className));
            }
            element.innerHTML = `
                <img src=${this.src} alt=${this.alt}>
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> руб/день</div>
                </div>
            `;
            this.parent.append(element);
          }
        }
        getResource('http://localhost:3000/menu').then(data => {
          // data.forEach(obj => {
          //     new MenuCard(obj.img, obj.altimg, obj.title, obj.descr, obj.price, ".menu .container").render();
          // });
          //аналог деструктуризация
          data.forEach(({
            img,
            altimg,
            title,
            descr,
            price
          }) => {
            new MenuCard(img, altimg, title, descr, price, ".menu .container").render();
          });
        });
        async function getResource(url) {
          //дожидается fetch
          let res = await fetch(url);

          //если ошибка, то fetch не выпадает в catch, поэтому обрабатываем как тут
          if (!res.ok) {
            //выпадает в консоль
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
          }

          //дожидается json
          return await res.json();
        }

        // new MenuCard(
        //     "img/tabs/vegy.jpg",
        //     "vegy",
        //     'Меню "Фитнес"',
        //     'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        //     9,
        //     ".menu .container"
        // ).render();

        // new MenuCard(
        //     "img/tabs/post.jpg",
        //     "post",
        //     'Меню "Постное"',
        //     'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
        //     14,
        //     ".menu .container"
        // ).render();

        // new MenuCard(
        //     "img/tabs/elite.jpg",
        //     "elite",
        //     'Меню “Премиум”',
        //     'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
        //     21,
        //     ".menu .container"
        // ).render();
      }

      module.exports = cards;

      /***/
    },

    /***/"./js/modules/forms.js":
    /*!*****************************!*\
      !*** ./js/modules/forms.js ***!
      \*****************************/
    /***/
    module => {
      function forms() {
        // Forms

        const forms = document.querySelectorAll('form');
        const message = {
          //просто используем путь к картинке
          loading: 'img/form/spinner.svg',
          success: 'Спасибо! Скоро мы с вами свяжемся',
          failure: 'Что-то пошло не так...'
        };
        forms.forEach(item => {
          bindPostData(item);
        });

        //Async/await block 5.90
        const postData = async (url, data) => {
          let res = await fetch(url, {
            method: "POST",
            headers: {
              'Content-Type': 'application/json'
            },
            body: data
          });
          //return res.json - promise
          return await res.json();
        };
        function bindPostData(form) {
          form.addEventListener('submit', e => {
            //стандартное поведение отключаем
            e.preventDefault();

            //вывод того что мы данные загружаем на сервер
            let statusMessage = document.createElement('img');
            statusMessage.src = message.loading;
            //лучше вынести в CSS
            statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
            //form.appendChild(statusMessage);
            //добавление после формы, а не внутрь
            form.insertAdjacentElement('afterend', statusMessage);

            //const request = new XMLHttpRequest();
            //request.open('POST', 'server.php');
            //при отправки formData в php head устанавливать не надо enctype="multipart/form-data"
            //передаем в виде JSON
            // request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
            const formData = new FormData(form);

            //перевод в json
            // const object = {};
            // formData.forEach(function(value, key){
            //     object[key] = value;
            // });
            //аналог перевода обьекта в json formdata
            //Object.entries(object)
            //Object.fromEntries(object) - обратно
            const json = JSON.stringify(Object.fromEntries(formData.entries()));

            // request.send(json);

            // request.addEventListener('load', () => {
            //     if (request.status === 200) {
            //         console.log(request.response);
            //         showThanksModal(message.success);
            //         //сброска формы
            //         form.reset();
            //         //удаление сообщения
            //         //setTimeout(() => {
            //         statusMessage.remove();
            //        // }, 2000);
            //     } else {
            //         showThanksModal(message.failure);
            //     }
            // });

            //fetch is promise
            // fetch('server.php', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     //можно отправлять и formData, не JSON, тогда headers 'Content-Type' можно убирать
            //     body: JSON.stringify(object)
            //}).then(data => data.text()) // просмотреть ответ от сервера, если не json
            //})
            //аналог роботы с php - postData(sever.php, JSON.stringify(object))
            postData('http://localhost:3000/requests', json).then(data => {
              console.log(data);
              showThanksModal(message.success);
              statusMessage.remove();
              // отрабатывает когда, к примеру не достучался до сервера, либо нет интернета, если к примеру 404 то это не catch
            }).catch(() => {
              showThanksModal(message.failure);
            }).finally(() => {
              form.reset();
            });
          });
        }
        function showThanksModal(message) {
          const prevModalDialog = document.querySelector('.modal__dialog');
          prevModalDialog.classList.add('hide');
          openModal();
          const thanksModal = document.createElement('div');
          thanksModal.classList.add('modal__dialog');
          thanksModal.innerHTML = `
            <div class="modal__content">
                <div class="modal__close" data-close>×</div>
                <div class="modal__title">${message}</div>
            </div>
        `;
          document.querySelector('.modal').append(thanksModal);
          setTimeout(() => {
            thanksModal.remove();
            prevModalDialog.classList.add('show');
            prevModalDialog.classList.remove('hide');
            closeModal();
          }, 4000);
        }

        //json server url (сюда можно подставить просто сам файл)
        //запуск сервера json-server db.json или npx json-server db.json
        // fetch('http://localhost:3000/menu')
        //     .then(data => data.json())
        //     .then(response => console.log(response));
      }

      module.exports = forms;

      /***/
    },

    /***/"./js/modules/modal.js":
    /*!*****************************!*\
      !*** ./js/modules/modal.js ***!
      \*****************************/
    /***/
    module => {
      function modal() {
        // Modal

        //[] - дата аттрибут
        const modalTrigger = document.querySelectorAll('[data-modal]'),
          modal = document.querySelector('.modal');
        //т.к. у нас одна из форма формируется динамически, то eventListener на него не привяжится
        //modalCloseBtn = document.querySelector('[data-close]');

        function openModal() {
          modal.classList.add('show');
          modal.classList.remove('hide');
          // Либо вариант с toggle - но тогда назначить класс в верстке
          //modal.classList.toggle('show');
          //убирает скролл
          document.body.style.overflow = 'hidden';
          //17 px ширина скролла
          document.body.style.marginRight = '17px';
          //если пользователь открыл окно то отменяем таймер
          clearInterval(modalTimerId);
        }
        modalTrigger.forEach(btn => {
          btn.addEventListener('click', openModal);
        });
        function closeModal() {
          modal.classList.add('hide');
          modal.classList.remove('show');
          // Либо вариант с toggle - но тогда назначить класс в верстке
          //возвращает скролл
          document.body.style.overflow = '';
          document.body.style.marginRight = '0px';
        }

        //modalCloseBtn.addEventListener('click', closeModal);

        //закрывать если нажимать на окно вне модальной формы
        //потому что modal - это окно
        modal.addEventListener('click', e => {
          if (e.target === modal || e.target.getAttribute('data-close') == '') {
            closeModal();
          }
        });

        //когда кликаем на Escape
        document.addEventListener('keydown', e => {
          if (e.code === "Escape" && modal.classList.contains('show')) {
            closeModal();
          }
        });
        const modalTimerId = setTimeout(openModal, 30000);
        function showModalByScroll() {
          //если заскролил до конца
          //pageYOffset - сколько пользователь пролистал сверху
          if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
            openModal();
            window.removeEventListener('scroll', showModalByScroll);
          }
        }
        window.addEventListener('scroll', showModalByScroll);
      }
      module.exports = modal;

      /***/
    },

    /***/"./js/modules/slider.js":
    /*!******************************!*\
      !*** ./js/modules/slider.js ***!
      \******************************/
    /***/
    module => {
      function slider() {
        // Slider

        let offset = 0;
        let slideIndex = 1;
        const slides = document.querySelectorAll(".offer__slide"),
          slider = document.querySelector('.offer__slider'),
          prev = document.querySelector(".offer__slider-prev"),
          next = document.querySelector(".offer__slider-next"),
          total = document.querySelector("#total"),
          current = document.querySelector("#current"),
          slidesWrapper = document.querySelector(".offer__slider-wrapper"),
          width = window.getComputedStyle(slidesWrapper).width,
          slidesField = document.querySelector(".offer__slider-inner");
        if (slides.length < 10) {
          total.textContent = `0${slides.length}`;
          current.textContent = `0${slideIndex}`;
        } else {
          total.textContent = slides.length;
          current.textContent = slideIndex;
        }

        //указываем ширину всего слайд колеса
        slidesField.style.width = 100 * slides.length + "%";
        slidesField.style.display = "flex";
        //плавный переход
        slidesField.style.transition = "0.5s all";
        //если выходит за рамки окна - прятать
        slidesWrapper.style.overflow = "hidden";

        //выставление всем слайдам одну ширину    
        slides.forEach(slide => {
          slide.style.width = width;
        });

        //точки абсолютно спозиционированы - его parent - relative
        slider.style.position = 'relative';

        //ordered list
        const indicators = document.createElement('ol'),
          dots = [];
        indicators.classList.add('carousel-indicators');
        slider.append(indicators);
        for (let i = 0; i < slides.length; i++) {
          //list item
          const dot = document.createElement('li');
          dot.setAttribute('data-slide-to', i + 1);
          dot.classList.add('dot');
          if (i == 0) {
            dot.style.opacity = 1;
          }
          indicators.append(dot);
          dots.push(dot);
        }
        next.addEventListener("click", () => {
          //offset - смещение
          if (offset == +width.slice(0, width.length - 2) * (slides.length - 1)) {
            offset = 0;
          } else {
            offset += +width.slice(0, width.length - 2);
          }

          //просто смещение по оси X влево
          slidesField.style.transform = `translateX(-${offset}px)`;
          if (slideIndex == slides.length) {
            slideIndex = 1;
          } else {
            slideIndex++;
          }
          if (slides.length < 10) {
            current.textContent = `0${slideIndex}`;
          } else {
            current.textContent = slideIndex;
          }
          dots.forEach(dot => dot.style.opacity = ".5");
          dots[slideIndex - 1].style.opacity = 1;
        });
        prev.addEventListener("click", () => {
          if (offset == 0) {
            offset = +width.slice(0, width.length - 2) * (slides.length - 1);
          } else {
            offset -= +width.slice(0, width.length - 2);
          }

          //просто смещение по оси X вправо
          slidesField.style.transform = `translateX(-${offset}px)`;
          if (slideIndex == 1) {
            slideIndex = slides.length;
          } else {
            slideIndex--;
          }
          if (slides.length < 10) {
            current.textContent = `0${slideIndex}`;
          } else {
            current.textContent = slideIndex;
          }
          dots.forEach(dot => dot.style.opacity = ".5");
          dots[slideIndex - 1].style.opacity = 1;
        });

        //при нажатии на точки
        dots.forEach(dot => {
          dot.addEventListener('click', e => {
            const slideTo = e.target.getAttribute('data-slide-to');
            slideIndex = slideTo;
            offset = +width.slice(0, width.length - 2) * (slideTo - 1);
            slidesField.style.transform = `translateX(-${offset}px)`;
            if (slides.length < 10) {
              current.textContent = `0${slideIndex}`;
            } else {
              current.textContent = slideIndex;
            }
            dots.forEach(dot => dot.style.opacity = ".5");
            dots[slideIndex - 1].style.opacity = 1;
          });
        });

        // simple variant
        // showSlides(slideIndex);

        // if (slides.length < 10) {
        //     total.textContent = `0${slides.length}`;
        // } else {
        //     total.textContent = slides.length;
        // }

        // function showSlides(n) {
        //     if (n > slides.length) {
        //         slideIndex = 1;
        //     }
        //     if (n < 1) {
        //         slideIndex = slides.length;
        //     }

        //     // prevModalDialog.classList.add('show');
        //     // prevModalDialog.classList.remove('hide');

        //     slides.forEach((item) => {
        //         item.classList.add('hide')
        //         item.classList.remove('fade', 'show')
        //     });

        //     slides[slideIndex - 1].classList.remove('hide')
        //     slides[slideIndex - 1].classList.add('show', 'fade');

        //     if (slides.length < 10) {
        //         current.textContent =  `0${slideIndex}`;
        //     } else {
        //         current.textContent =  slideIndex;
        //     }
        // }

        // function plusSlides (n) {
        //     showSlides(slideIndex += n);
        // }

        // prev.addEventListener('click', function(){
        //     plusSlides(-1);
        // });

        // next.addEventListener('click', function(){
        //     plusSlides(1);
        // });
      }

      module.exports = slider;

      /***/
    },

    /***/"./js/modules/tabs.js":
    /*!****************************!*\
      !*** ./js/modules/tabs.js ***!
      \****************************/
    /***/
    module => {
      function tabs() {
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
      }
      module.exports = tabs;

      /***/
    },

    /***/"./js/modules/timer.js":
    /*!*****************************!*\
      !*** ./js/modules/timer.js ***!
      \*****************************/
    /***/
    (__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_23528__) => {
      "use strict";

      __nested_webpack_require_23528__.r(__nested_webpack_exports__);
      /* harmony export */
      __nested_webpack_require_23528__.d(__nested_webpack_exports__, {
        /* harmony export */"default": () => __WEBPACK_DEFAULT_EXPORT__
        /* harmony export */
      });
      function timer() {
        // Timer

        const deadline = '2025-06-11'; //какой-то дедлайн, к примеру получаем из DB 

        function getTimeRemaining(endtime) {
          //через parse лучше, можно const t = new Date(endtime) - new Date(),
          const t = Date.parse(endtime) - Date.parse(new Date()),
            // Math.floor - округление до ближайшего целого
            // t делим 1000 ms, 60 sec, 60 minutes, 24 сколько часов в дне
            days = Math.floor(t / (1000 * 60 * 60 * 24)),
            // 1000 ms, 60 seconds, 60 minutes, % остаток от деления (24)
            hours = Math.floor(t / (1000 * 60 * 60) % 24),
            // 1000 ms, 60 seconds
            seconds = Math.floor(t / 1000 % 60),
            // 1000 ms, 60 seconds, % остаток от деления (24)
            minutes = Math.floor(t / 1000 / 60 % 60);

          //возвращается обьект, можно упростить https://attacomsian.com/blog/javascript-object-property-shorthand
          return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
          };
        }
        function getZero(num) {
          if (num >= 0 && num < 10) {
            return '0' + num;
          } else {
            return num;
          }
        }

        //установка Timer на страницу
        function setClock(selector, endtime) {
          const timer = document.querySelector(selector),
            days = timer.querySelector("#days"),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);

          //первый старт (initializing)
          updateClock();
          function updateClock() {
            const t = getTimeRemaining(endtime);
            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);
            if (t.total <= 0) {
              clearInterval(timeInterval);
            }
          }
        }
        setClock('.timer', deadline);
      }

      /* harmony default export */
      const __WEBPACK_DEFAULT_EXPORT__ = timer;

      /***/
    }

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/
  var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/
  function __nested_webpack_require_26378__(moduleId) {
    /******/ // Check if module is in cache
    /******/var cachedModule = __webpack_module_cache__[moduleId];
    /******/
    if (cachedModule !== undefined) {
      /******/return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/
    var module = __webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/exports: {}
      /******/
    };
    /******/
    /******/ // Execute the module function
    /******/
    __webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_26378__);
    /******/
    /******/ // Return the exports of the module
    /******/
    return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/compat get default export */
  /******/
  (() => {
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/__nested_webpack_require_26378__.n = module => {
      /******/var getter = module && module.__esModule ? /******/() => module['default'] : /******/() => module;
      /******/
      __nested_webpack_require_26378__.d(getter, {
        a: getter
      });
      /******/
      return getter;
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/define property getters */
  /******/
  (() => {
    /******/ // define getter functions for harmony exports
    /******/__nested_webpack_require_26378__.d = (exports, definition) => {
      /******/for (var key in definition) {
        /******/if (__nested_webpack_require_26378__.o(definition, key) && !__nested_webpack_require_26378__.o(exports, key)) {
          /******/Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key]
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/
  (() => {
    /******/__nested_webpack_require_26378__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/
  (() => {
    /******/ // define __esModule on exports
    /******/__nested_webpack_require_26378__.r = exports => {
      /******/if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /******/Object.defineProperty(exports, Symbol.toStringTag, {
          value: 'Module'
        });
        /******/
      }
      /******/
      Object.defineProperty(exports, '__esModule', {
        value: true
      });
      /******/
    };
    /******/
  })();
  /******/
  /************************************************************************/
  var __nested_webpack_exports__ = {};
  // This entry need to be wrapped in an IIFE because it need to be in strict mode.
  (() => {
    "use strict";

    /*!**********************!*\
      !*** ./js/script.js ***!
      \**********************/
    __nested_webpack_require_26378__.r(__nested_webpack_exports__);
    /* harmony import */
    var _modules_tabs__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_26378__( /*! ./modules/tabs */"./js/modules/tabs.js");
    /* harmony import */
    var _modules_tabs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_26378__.n(_modules_tabs__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */
    var _modules_modal__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_26378__( /*! ./modules/modal */"./js/modules/modal.js");
    /* harmony import */
    var _modules_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__nested_webpack_require_26378__.n(_modules_modal__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */
    var _modules_timer__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_26378__( /*! ./modules/timer */"./js/modules/timer.js");
    /* harmony import */
    var _modules_cards__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_26378__( /*! ./modules/cards */"./js/modules/cards.js");
    /* harmony import */
    var _modules_cards__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__nested_webpack_require_26378__.n(_modules_cards__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */
    var _modules_calc__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_26378__( /*! ./modules/calc */"./js/modules/calc.js");
    /* harmony import */
    var _modules_calc__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__nested_webpack_require_26378__.n(_modules_calc__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */
    var _modules_forms__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_26378__( /*! ./modules/forms */"./js/modules/forms.js");
    /* harmony import */
    var _modules_forms__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__nested_webpack_require_26378__.n(_modules_forms__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */
    var _modules_slider__WEBPACK_IMPORTED_MODULE_6__ = __nested_webpack_require_26378__( /*! ./modules/slider */"./js/modules/slider.js");
    /* harmony import */
    var _modules_slider__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__nested_webpack_require_26378__.n(_modules_slider__WEBPACK_IMPORTED_MODULE_6__);
    window.addEventListener('DOMContentLoaded', function () {
      //.js не надо прописывать. Webpack сам подставляет.
      const tabs = __nested_webpack_require_26378__( /*! ./modules/tabs */"./js/modules/tabs.js"),
        modal = __nested_webpack_require_26378__( /*! ./modules/modal */"./js/modules/modal.js"),
        timer = __nested_webpack_require_26378__( /*! ./modules/timer */"./js/modules/timer.js"),
        cards = __nested_webpack_require_26378__( /*! ./modules/cards */"./js/modules/cards.js"),
        calc = __nested_webpack_require_26378__( /*! ./modules/calc */"./js/modules/calc.js"),
        forms = __nested_webpack_require_26378__( /*! ./modules/forms */"./js/modules/forms.js"),
        slider = __nested_webpack_require_26378__( /*! ./modules/slider */"./js/modules/slider.js");
      tabs();
      modal();
      timer();
      cards();
      calc();
      forms();
      slider();
    });
  })();

  /******/
})();
/******/ })()
;
//# sourceMappingURL=script.js.map