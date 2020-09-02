let hour, min, sec, interval, time;
        function startInterval () {
            time = document.querySelector('.input').value;

            time = time.split(':');

            hour = time[0];
            min = time[1];
            sec = time[2];

            if (hour == "" || hour == "0" || min == "" || min == "0" || sec == "" || sec == "0" || time.length !== 3) {
                alert("Put time in HH:MM:SS format");
                update('00:00:00');
            } else {
                update(hour + ":" + min + ":" + sec);
                document.querySelector('.input').style.display = "none";
                interval = setInterval(startTimer,1000);
            }
        }
        
        function startTimer() {
            sec = changeValue(sec);

            if (min == 0 && hour == 0 && (sec == 0 || sec == 59) ) {
                update('00:00:00');
                closeInterval();
            } else {
                if (sec == 59 && min >= 0) {
                    min = changeValue(min);
                    if (min == 59 && hour >= 0) {
                        hour = changeValue(hour);
                    }
                }
    
                update(hour+':'+min+':'+sec);
            }
        }

        function closeInterval() {
            update('00:00:00');
            clearInterval(interval);
            document.querySelector('.input').style.display = "block";
            document.querySelector('.input').value = null;
        }

        function pauseInterval() {
            clearInterval(interval);
            val = document.querySelector('.display').innerHTML;
            document.querySelector('.input').value = val;
        }

        function changeValue(val) {
            if (val <= 60 && val > 0) {
                val--;
                if (val < 10) {
                    return ('0' + val);
                }
                return(val);
            } else if (val == 0) {
                val = 59;
                return(val);
            }
        }

        function update(val) {
            document.querySelector('.display').innerHTML = val;
        }
       
