function openModal(modalSelector, modalTimerId) {
    const modal = document.querySelector(modalSelector);

    modal.classList.add('show');
    modal.classList.remove('hide');
    // Либо вариант с toggle - но тогда назначить класс в верстке
    //modal.classList.toggle('show');
    //убирает скролл
    document.body.style.overflow = 'hidden';
    //17 px ширина скролла
    document.body.style.marginRight = '17px';

    if (modalTimerId) {
        //если пользователь открыл окно то отменяем таймер
        clearInterval(modalTimerId);
    }
}

function closeModal(modalSelector) {
    const modal = document.querySelector(modalSelector);

    modal.classList.add('hide');
    modal.classList.remove('show');
    // Либо вариант с toggle - но тогда назначить класс в верстке
    //возвращает скролл
    document.body.style.overflow = '';
    document.body.style.marginRight = '0px';
}

function modal(triggerSelector, modalSelector, modalTimerId) {

    // Modal

    //[] - дата аттрибут
    const modalTrigger = document.querySelectorAll(triggerSelector),
        modal = document.querySelector(modalSelector);
        //т.к. у нас одна из форма формируется динамически, то eventListener на него не привяжится
        //modalCloseBtn = document.querySelector('[data-close]');
   
    modalTrigger.forEach(btn => {
        //=> чтобы функция не вызывалась сразу
        btn.addEventListener('click', () => openModal(modalSelector, modalTimerId));
    });

    //modalCloseBtn.addEventListener('click', closeModal);

    //закрывать если нажимать на окно вне модальной формы
    //потому что modal - это окно
    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') == '') {
            closeModal(modalSelector);
        }
    });

    //когда кликаем на Escape
    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modal.classList.contains('show')) { 
            closeModal(modalSelector);
        }
    });

    function showModalByScroll() {
        //если заскролил до конца
        //pageYOffset - сколько пользователь пролистал сверху
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
            openModal(modalSelector, modalTimerId);
            window.removeEventListener('scroll', showModalByScroll);
        }
    }
    window.addEventListener('scroll', showModalByScroll);
}

export default modal;
export {closeModal};
export {openModal};