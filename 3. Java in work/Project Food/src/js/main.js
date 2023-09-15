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
        modal = document.querySelector('.modal'),
        modalCloseBtn = document.querySelector('[data-close]');

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
    
    modalCloseBtn.addEventListener('click', closeModal);

    //закрывать если нажимать на окно вне модальной формы
    //потому что modal - это окно
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
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

});