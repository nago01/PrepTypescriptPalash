function clockTimer() {
    console.log('called the inline script');
    let sec = new Date().getSeconds();
    let min = new Date().getMinutes();
    let hour = new Date().getHours();

    function updateTimer() {
        document.getElementById('hourval').innerText = hour;
        document.getElementById('minval').innerText = min;
        document.getElementById('secval').innerText = sec;
    }
    updateTimer();
    let timer;
    document.getElementById('startId').addEventListener('click', () => {
        timer = setInterval(() => {
            sec = sec + 1;
            if (sec > 60) {
                sec = 0;
                min = min + 1;
            }
            if (min > 60) {
                min = 0;
                hour = hour + 1;
            }
            updateTimer();
        }, 10)
    });
    document.querySelector('button').addEventListener('click', () => {
        sec = new Date().getSeconds();
        min = new Date().getMinutes();
        hour = new Date().getHours();
        clearInterval(timer);
        updateTimer();
    });
}

clockTimer();