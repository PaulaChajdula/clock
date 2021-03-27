   var hours = 0;
   var minutes = 0;
   var seconds = 0;
   var idInterval = null;
   var isPauseTimer = false;
   var isPlayTimer = false;



   function addOptionToSelect() {
      var hoursSelect = document.getElementById("hoursSelect");
      for (var i = 0; i < 24; i++) {
         var option = document.createElement("option");
         option.text = i;
         hoursSelect.add(option);
      }
      var minutesSelect = document.getElementById("minutesSelect");
      for (var i = 0; i < 60; i++) {
         var option = document.createElement("option");
         option.text = i;
         minutesSelect.add(option);
      }
      var secondsSelect = document.getElementById("secondsSelect");
      for (var i = 0; i < 60; i++) {
         var option = document.createElement("option");
         option.text = i;
         secondsSelect.add(option);
      }
   }

   function playTimer() {
      if (isPauseTimer == false && isPlayTimer == false) {
         hours = document.getElementById("hoursSelect").value;
         minutes = document.getElementById("minutesSelect").value;
         seconds = document.getElementById("secondsSelect").value;
         document.querySelector('.time div').textContent = parseTime();
      }
      if ((hours != 0 || minutes != 0 || seconds != 0) && isPlayTimer == false) {
         idInterval = setInterval(odliczanie, 1000);
         isPauseTimer = false;
         isPlayTimer = true;
      }
   }

   function stopTimer() {
      if (isPlayTimer == true) {
         isPlayTimer = false;
         clearInterval(idInterval);
         isPauseTimer = true;
      }
   }

   function resetTimer() {
      hours = 0;
      minutes = 0;
      seconds = 0;
      /*document.getElementById("hoursSelect").value = 0;
      document.getElementById("minutesSelect").value = 0;
      document.getElementById("secondsSelect").value = 0;*/
      document.querySelector('.time div').textContent = `00:00:00`;
      clearInterval(idInterval);
      isPauseTimer = false;
      isPlayTimer = false;
   }

   function parseTime() {
      const h = hours < 10 ? "0" + hours : hours;
      const min = minutes < 10 ? "0" + minutes : minutes;
      const sec = seconds < 10 ? "0" + seconds : seconds;
      return `${h}:${min}:${sec}`;
   }

   const odliczanie = () => {
      if (seconds > 0) {
         seconds--;
      }
      if (seconds == 0 && minutes > 0) {
         minutes--;
         seconds = 59;
      }
      if (minutes == 0 && hours > 0) {
         hours--;
         minutes = 59;
      }
      if (hours == 0 && minutes == 0 && seconds == 0) {
         resetTimer();
      }

      const parsedTime = parseTime();
      document.querySelector('.time div').textContent = parsedTime;
   }