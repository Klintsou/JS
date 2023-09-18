window.addEventListener('DOMContentLoaded', function() {

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

	tabsParent.addEventListener('click', function(event) {
		const target = event.target;
		if(target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
		}
	});


    // Timer

    const deadline = '2025-06-11'; //какой-то дедлайн, к примеру получаем из DB 

    function getTimeRemaining(endtime) {
        //через parse лучше, можно const t = new Date(endtime) - new Date(),
        const t = Date.parse(endtime) - Date.parse(new Date()),
            // Math.floor - округление до ближайшего целого
            // t делим 1000 ms, 60 sec, 60 minutes, 24 сколько часов в дне
            days = Math.floor( (t/(1000*60*60*24)) ),
            // 1000 ms, 60 seconds, 60 minutes, % остаток от деления (24)
            hours = Math.floor( (t/(1000*60*60) % 24) ),
            // 1000 ms, 60 seconds
            seconds = Math.floor( (t/1000) % 60 ),
            // 1000 ms, 60 seconds, % остаток от деления (24)
            minutes = Math.floor( (t/1000/60) % 60 );

        //возвращается обьект, можно упростить https://attacomsian.com/blog/javascript-object-property-shorthand
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function getZero(num){
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
    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') == '') {
            closeModal();
        }
    });

    //когда кликаем на Escape
    document.addEventListener('keydown', (e) => {
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

    new MenuCard(
        "img/tabs/vegy.jpg",
        "vegy",
        'Меню "Фитнес"',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        9,
        ".menu .container"
    ).render();

    new MenuCard(
        "img/tabs/post.jpg",
        "post",
        'Меню "Постное"',
        'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
        14,
        ".menu .container"
    ).render();

    new MenuCard(
        "img/tabs/elite.jpg",
        "elite",
        'Меню “Премиум”',
        'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
        21,
        ".menu .container"
    ).render();

    // Forms

    const forms = document.querySelectorAll('form');
    const message = {
        //просто используем путь к картинке
        loading: 'img/form/spinner.svg',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    };

    forms.forEach(item => {
        postData(item);
    });

    function postData(form) {
        form.addEventListener('submit', (e) => {
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
            const object = {};
            formData.forEach(function(value, key){
                object[key] = value;
            });
            // const json = JSON.stringify(object);

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
            fetch('server.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                //можно отправлять и formData, не JSON, тогда headers 'Content-Type' можно убирать
                body: JSON.stringify(object)
            //}).then(data => data.text()) // просмотреть ответ от сервера, если не json
            }).then(data => {
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

});
