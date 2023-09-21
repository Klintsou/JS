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
}

module.exports = modal;