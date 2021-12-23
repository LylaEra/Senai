function startTimer(duration, display) {

    let timer = duration, day, hour, minutes, seconds;

    setInterval(function () {

        day = parseInt(timer / (3600*24))  
        hour = parseInt(timer % (3600*24) / 3600)  
        minutes = parseInt(timer % 3600 / 60);
        seconds = parseInt(timer % 60);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = day + ":" + hour + ":" + minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);

}

window.onload = function () {

    let duration = 3600 * 24;
    display = document.querySelector('#timer'); 
    startTimer(duration, display); 

};