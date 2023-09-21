import { closeModal, openModal} from "./modal";
import { postData } from "../services/services";

function forms(formSelector, modalTimerId) {
    // Forms

    const forms = document.querySelectorAll(formSelector);
    const message = {
        //просто используем путь к картинке
        loading: 'img/form/spinner.svg',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    };

    forms.forEach(item => {
        bindPostData(item);
    });

    function bindPostData(form) {
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
            postData('http://localhost:3000/requests', json)
            .then(data => {
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
        openModal('.modal', modalTimerId);

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
            closeModal('.modal');
        }, 4000);
    }

    //json server url (сюда можно подставить просто сам файл)
    //запуск сервера json-server db.json или npx json-server db.json
    // fetch('http://localhost:3000/menu')
    //     .then(data => data.json())
    //     .then(response => console.log(response));
}

export default forms;