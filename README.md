# JS
Java Script + React

###### Markdown document<br>Обучение Полный курс по JavaScript + React - с нуля до результата на UDEMY от Ивана Петриченко (https://www.udemy.com/course/javascript_full)<br><a href="https://www.udemy.com/certificate/UC-59f695ea-6985-4e1d-8a28-2f0744e70ec2/" target="_blank">Certificate</a>

	links
		https://learn.javascript.ru/
		https://karmazzin.gitbook.io/eloquentjavascript_ru/

### Раздел 1: Подготовка к работе
	course repository https://github.com/yankovalenko94/JS_task_answers
	JS structure https://miro.com/app/board/o9J_kxm_io0=/
	Список необходимых плагинов (https://docs.google.com/document/d/1NVTjkgn_ZauALdGppyEL9nXMOkV_LBX92cgqC_KI36w/edit): 
		All Autocomplete
		Auto Complete Tag
		Code Runner
		Import Cost
		JavaScript (ES6) code snippets
		jshint
		Live Server
		Multiple clipboards for VSCode
		Reactjs code snippets
		Sass
		Theme - Oceanic Next
		vscode-icons
	ESlint - подсказка ошибок как в IDEA IDE https://eslint.org/
		ESLint - plugin
		npm init
		npm init @eslint/config
		автоформатирование при сохранение (Ctrl+S)
			1. настройки (save) Text Editor -> Formatting
			2. Text Editor -> Default Formatter (ESLint)
			3. кнопка срава вверху Open Settings (JSON) 
				    "editor.formatOnSave": true,
					"editor.defaultFormatter": "dbaeumer.vscode-eslint",
					надо дописать:
					"editor.codeActionsOnSave": {
						"source.fixAll.eslint": true
					},
					"eslint.validate": ["javascript"]
	VSCode https://code.visualstudio.com/
		hotkeys https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf
	Node.js https://nodejs.org/en (npm https://www.npmjs.com/ - менеджер пакетов)

### Раздел 2: Основы JavaScript

	classification https://drive.google.com/file/d/1Nm2PDGru199Yf0c9l1T-upYbi0UkEj1F/view

	Базовые ссылки на html/css
		selectors https://learn.javascript.ru/css-selectors
		html https://developer.mozilla.org/ru/docs/Learn/HTML/Introduction_to_HTML
		css https://developer.mozilla.org/ru/docs/Learn/CSS/First_steps
	Variables and scrict mode
		picture https://drive.google.com/file/d/13TdbVsWl7r_GX6TZJcd60HrtvISkMZ7m/view
		strict mode - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
		code-style - https://drive.google.com/file/d/1B8iEjwnWyWasNPhGmGFy43dyQ-5griVN/view
	Взаимодействие с пользователем
		alert, confirm, prompt, +prompt (преобразование) - работают только внутри браузера
	Интерполяция (ES6) - вместо конкатенация как в Java
		косые ковычки ``
			const variable = 'toys';
			console.log(`https://someurl.com${vaiable}/5`);
	Операторы JS
		впринципе как в java
		=== строго сравнение, значение и тип
		приоритеты https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#Table
	Сетевые протоколы
		HTTP protocol https://developer.mozilla.org/ru/docs/Web/HTTP/Overview
		HTTPS vs SSH в git https://ourtechroom.com/tech/https-vs-ssh-in-git/
		Git SSH https://docs.github.com/en/authentication/connecting-to-github-with-ssh
	Условия
		https://developer.mozilla.org/ru/docs/Learn/JavaScript/Building_blocks/conditionals
	Логические операторы
		приоритет https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
		number если больше 0 значит boolean значание is true
		логическая операция всегда что то возвращает
	Циклы
		3 способа как в JAVA (while, do-while, for)
		https://drive.google.com/file/d/1oM1HzpbJTwBi5pdgeHjS3j2FW_FqKy1u/view
		https://learn.javascript.ru/while-for
	Функции
		классификация функций, таблица https://drive.google.com/file/d/1Xuw7feRJ-2ZzE_U7E4MZMXh1HLVljcU8/view
		замыкание функции - сама функция со всеми внешними переменными которые ей доступны
	Методы строк и чисел
		числа - https://learn.javascript.ru/number
				https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Number
		строки - https://learn.javascript.ru/string
				 https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String
				 trim https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
		console.dir(Number) - просмотреть обьекты (включая методы)
	Callback functions
		https://learn.javascript.ru/callbacks
	Objects
		https://javascript.ru/tutorial/object/intro
		деструктуризация обьекта https://learn.javascript.ru/destructuring#destrukturizatsiya-obekta
		Дескрипторы, геттеры и сеттеры свойств
			https://learn.javascript.ru/descriptors-getters-setters
		for .. in - переборка свойств
			https://learn.javascript.ru/object-for-in
		сокращенная запись обьекта ES6
			https://attacomsian.com/blog/javascript-object-property-shorthand
	Массивы и псевдомассивы
		https://drive.google.com/file/d/17D4THU5-UJtzihybKVjSDHeX67pz3xLR/view
		отличия for .. of от for .. if
			https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/for...of#%D1%80%D0%B0%D0%B7%D0%BB%D0%B8%D1%87%D0%B8%D1%8F_%D0%BC%D0%B5%D0%B6%D0%B4%D1%83_for...of_%D0%B8_for...in
		Алгоритмы в JavaScript
			https://web.archive.org/web/20221025084508/http://mathhelpplanet.com/static.php?p=javascript-algoritmy-poiska
	Перадача по ссылке или по значению
		примитивы передаются по значению
		обьекты передает ссылку
		статья про клонирование https://medium.com/@stasonmars/%D0%BA%D0%BE%D0%BF%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%BE%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D0%BE%D0%B2-%D0%B2-javascript-d25c261a7aff
		Object assign https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
	ООП
		Прототипно ориентированное программирование
		Про __proto__ https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/proto
		наследование без proto https://javascript.info/prototype-methods
	Динамическая типизация
		матрица сравнений
			https://dorey.github.io/JavaScript-Equality-Table/
	Замыкание и лексическое окружение
		В JavaScript функция – это значение. В JavaScript функции – это тип объекты.
		Замыкание (Closure) https://learn.javascript.ru/closure
			https://medium.com/nuances-of-programming/%D1%8F-%D0%BD%D0%B8%D0%BA%D0%BE%D0%B3%D0%B4%D0%B0-%D0%BD%D0%B5-%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%BB-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-javascript-%D1%87%D0%B0%D1%81%D1%82%D1%8C-%D0%BF%D0%B5%D1%80%D0%B2%D0%B0%D1%8F-3c3f02041970
		Устройство JavaScript-движков http://jsflow.org/docs/js-engines/
		обьект функции https://learn.javascript.ru/function-object
	Получение элементов со страницы
		про селекторы https://learn.javascript.ru/css-selectors
		псевдомассивы https://habr.com/ru/articles/336136/
	События и их обработчики
		events https://oddler.ru/blog/i63
		Справочник https://developer.mozilla.org/ru/docs/Web/Events
		addEventListener https://developer.mozilla.org/ru/docs/Web/API/EventTarget/addEventListener
		event https://developer.mozilla.org/ru/docs/Web/API/Event
		removeEventListener https://developer.mozilla.org/ru/docs/Web/API/EventTarget/removeEventListener
	DOM navigation
		data-attribute https://developer.mozilla.org/ru/docs/Learn/HTML/Howto/Use_data_attributes
	Mobile events
		смотри в папке JS\2. Java basics\2.49 mobile events\
		Статьи: https://habr.com/ru/companies/sibirix/articles/227175/
				https://youon.ru/%D0%90%D0%BD%D0%B4%D1%80%D0%BE%D0%B8%D0%B4/%D0%A0%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B0/touch-sobytiya-na-javascript-multitach-realizatsiya
	Оптимизация загрузки скриптов
		смотри в папке JS\2. Java basics\2.50 оптимизация загрузки скриптов\
		
### Раздел 4: JavaScript в работе
	ClassList и делигирование событий
		ClassList https://developer.mozilla.org/ru/docs/Web/API/Element/classList
		Matches https://developer.mozilla.org/ru/docs/Web/API/Element/matches
		Делигирование событий:
			https://learn.javascript.ru/event-delegation
			https://medium.com/@stasonmars/%D0%B4%D0%B5%D0%BB%D0%B5%D0%B3%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D1%81%D0%BE%D0%B1%D1%8B%D1%82%D0%B8%D0%B8%CC%86-%D0%B2-javascript-d91cbdd8916a
	Время выполнения setTimeout, setInterval
		JS animation https://learn.javascript.ru/js-animation
	Работа с датами
		документация: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date
		статья: https://learn.javascript.ru/date
	Document, window and screen parameters
		смотри JS\3. Java in work\4.71 document and window\document window screen.docx
	Конструктор, оператор "new"
		https://learn.javascript.ru/constructor-new
	This. Контекст вызова
		https://tproger.ru/translations/javascript-this-keyword
	Классы (ES6)
		Как таковых классов в JS не существует (это синтаксический "сахар")
			документация https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Classes
			http://jsraccoon.ru/es6-classes
	Rest оператор и параметры по умолчанию (ES6)
		Аналог Spread (раскладывает сущность раскладывая на отдельные элементы, аналог Java троеточие в параметре ...)
			https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Functions/Rest_parameters
		параметры по умолчанию https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Functions/Default_parameters
			как в груви

### Раздел 5: продвинутый JavaScript
	Локальные серверы
		MAMP - https://www.mamp.info/en/windows/
		OS Panel (Windows) - https://ospanel.io/
	JSON - JavaScript Object Notation
		JSON - https://ru.wikipedia.org/wiki/JSON
		http - https://ru.wikipedia.org/wiki/HTTP
		копирование обьектов - https://medium.com/@stasonmars/%D0%BA%D0%BE%D0%BF%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%BE%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D0%BE%D0%B2-%D0%B2-javascript-d25c261a7aff
	AJAX
		XMLHttpRequest (устаревшая технология) - https://developer.mozilla.org/ru/docs/Web/API/XMLHttpRequest
												 https://developer.mozilla.org/ru/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest
									 ready state https://developer.mozilla.org/ru/docs/Web/API/XMLHttpRequest/readyState
		HTTP headers https://ru.wikipedia.org/wiki/%D0%97%D0%B0%D0%B3%D0%BE%D0%BB%D0%BE%D0%B2%D0%BA%D0%B8_HTTP
		HTTP response status https://ru.wikipedia.org/wiki/%D0%A1%D0%BF%D0%B8%D1%81%D0%BE%D0%BA_%D0%BA%D0%BE%D0%B4%D0%BE%D0%B2_%D1%81%D0%BE%D1%81%D1%82%D0%BE%D1%8F%D0%BD%D0%B8%D1%8F_HTTP
		FormData - ключ-значение, передача с формы и не только (enctype="multipart/form-data")
			https://developer.mozilla.org/ru/docs/Web/API/FormData/Using_FormData_Objects
			formData to JSON https://ilikekillnerds.com/2017/09/convert-formdata-json-object/
	Promise (ES6) технология для работы с асинхронными операциями
		https://learn.javascript.ru/promise-basics
		https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise
		https://stasonmars.ru/javascript/promisy-v-javascript-dlya-chainikov/
	Fetch API
		Fetch API предоставляет интерфейс JavaScript для работы с запросами и ответами HTTP
		https://developer.mozilla.org/ru/docs/Web/API/Fetch_API/Using_Fetch
		Free fake API for testing and prototyping.	https://jsonplaceholder.typicode.com/
	Array methods
		filter - https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
		map - https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/map
		reduce - https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
		Object.entries() - https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
			Object.fromEntries(object) - обратно
	JSON server
		documentation https://github.com/typicode/json-server
		npm install json-server --save-dev
		запуск в терминале     json-server db.json (db.json file path)
		    если не сработало: npx json-server db.json
	Async/Await
		Всегда работают в паре
		Async - перед функцией, внутри метода будет асинхронный код
		Await - оператор, нужно ставить перед теми операциями, перед которыми нужно дождаться ответ (по сути сделать синхронно - но под копотом это не так)
	LocalStorage
		статья про localStorage https://tproger.ru/articles/localstorage
		проверить вместимость хранилища http://dev-test.nemikor.com/web-storage/support-test/
	getters/setters
		https://learn.javascript.ru/property-accessors
	Encapsulation
		http://www.codenet.ru/progr/cpp/ipn.php
		private fields https://medium.com/devschacht/javascripts-new-private-class-fields-c60daffe361b
	Паттерн модуль
		Все данные модуля существуют в области видимости модуля
		https://habr.com/ru/companies/ruvds/articles/419997/