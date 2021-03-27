 var minutes = 0;
 var seconds = 0;
 var miliseconds = 0;
 var idInterval = null;
 var isStartStoper = false;

 const odliczanie = () => {
     miliseconds++;
     if (miliseconds == 100) {
         miliseconds = 0;
         seconds++;
     }
     if (seconds == 60) {
         seconds = 0;
         minutes++;
     }
     const parsedTime = parseTime();
     document.querySelector('.time div').textContent = parsedTime;
 }

 function parseTime() {
     const sec = seconds < 10 ? "0" + seconds : seconds;
     const min = minutes < 10 ? "0" + minutes : minutes;
     const milisec = miliseconds < 10 ? "0" + miliseconds : miliseconds;
     return `${min}:${sec}:${milisec}`;
 }

 function startTimer() {
     if (seconds == 0 && minutes == 0 && miliseconds == 0)
         document.querySelector('.time div').textContent = `00:00:00`;
     document.getElementById('startStopBtn').firstChild.textContent = "Stop";
     document.getElementById('startStopBtn').onclick = stopTimer;
     idInterval = setInterval(odliczanie, 10);
     isStartStoper = true;
 }

 function stopTimer() {
     document.getElementById('startStopBtn').firstChild.textContent = "Start";
     document.getElementById('startStopBtn').onclick = startTimer;
     clearInterval(idInterval);
     isStartStoper = false;
 }

 function resetTimer() {
     minutes = 0;
     seconds = 0;
     miliseconds = 0;
     document.querySelector('.time div').textContent = `00:00:00`;
     stopTimer();
     clearMeasurement();
 }


 // dodaj pomiar
 function addMeasurement() {
     if (isStartStoper == true) {
         var measurement = document.createElement("p");
         var text = document.createTextNode(parseTime());
         measurement.appendChild(text);
         var element = document.getElementById("pomiary"); // uchwyt do div
         element.appendChild(measurement);
     }
 }

 function clearMeasurement() {
     const div = document.getElementById("pomiary");
     div.innerHTML = '';
 }

