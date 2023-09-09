# JS
Java Script + React

###### Markdown document<br>Обучение Полный курс по JavaScript + React - с нуля до результата на UDEMY от Ивана Петриченко (https://www.udemy.com/home/my-courses/learning/)<br><a href="https://www.udemy.com/certificate/UC-59f695ea-6985-4e1d-8a28-2f0744e70ec2/" target="_blank">Certificate</a>

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
		console.dir(Number) - просмотреть обьекты (включая методы)