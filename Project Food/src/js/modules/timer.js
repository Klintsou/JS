function timer() {

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
}

module.exports = timer;