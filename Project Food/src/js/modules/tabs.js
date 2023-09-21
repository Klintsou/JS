function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {

    // Tabs

    let tabs = document.querySelectorAll(tabsSelector),
		tabsContent = document.querySelectorAll(tabsContentSelector),
        //родитель (чтобы использовать делигирование событий)
		tabsParent = document.querySelector(tabsParentSelector);

    //скрываем контент
	function hideTabContent() {
        
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item => {
            //точку не ставим т.к. classList уже говорит об этом
            item.classList.remove(activeClass);
        });
	}

    //Показываем (i = 0 - параметр по умолчанию)
	function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add(activeClass);
    }
    
    hideTabContent();
    showTabContent();

	tabsParent.addEventListener('click', function(event) {
		const target = event.target;
		if(target && target.classList.contains(tabsSelector.slice(1))) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
		}
	});
}

export default tabs;