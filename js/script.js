window.onload = function() {

    const startButton = document.querySelector('[data-action="start"]');
    const stopButton  = document.querySelector('[data-action="stop"]');
    const lapButton   = document.querySelector('[data-action="lap"]');
    const resetButton = document.querySelector('[data-action="reset"]');
    const minutes     = document.querySelector('.minutes');
    const seconds     = document.querySelector('.seconds');
    let timerTime     = 00;
    let isRunning     = false;
    let interval;    
    var laps = document.getElementById('laps');
    var lastLap = { minutes: 0, seconds: 0};
    

    function sayhi(){
        alert('hi');
    }
    function startTimer() {
      if (isRunning) return;
      isRunning = true;
      interval  = setInterval(incrementTimer, 1000);
    }
    function stopTimer() {
      if (!isRunning) return;
      isRunning = false;
      clearInterval(interval);
    }
    function addLap() {
      // add lap change in time to the lap list
      var lapSeconds = seconds.innerText - lastLap.seconds;
      var lapMinutes = minutes.innerText - lastLap.minutes;
      lastLap = {
        minutes: minutes.innerText, 
        seconds: seconds.innerText
      };
      console.log(seconds);
      laps.innerHTML += "<li class=\"list-group-item\">" + pad(lapMinutes) + ":" + pad(lapSeconds) + "</li>";
    }
    function resetTimer() {
      stopTimer();
      timerTime = 0;
      laps.innerHTML = ''; // clear lap list
      minutes.innerText = '00';
      seconds.innerText = '00';
    }
    function incrementTimer() {
      timerTime++;
      const numOfMinutes = Math.floor(timerTime / 60);
      const numOfSeconds = timerTime % 60;
      minutes.innerText = pad(numOfMinutes);
      seconds.innerText = pad(numOfSeconds);
    }
    function pad(number) {
      return (number < 10) ? '0' + number : number;
      // if (number < 10) {
      //   return '0' + number;
      // } else {
      //   return number;
      // }
    }
    startButton.addEventListener('click', startTimer);
    stopButton.addEventListener('click', stopTimer);
    resetButton.addEventListener('click', resetTimer);
    lapButton.addEventListener('click', addLap);
}