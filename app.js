
            let timer = null;
            let seconds = 1500;
            const display = document.getElementById('pomo-display');

            window.startPomo = function() {
                if(timer) return;
                timer = setInterval(() => {
                    if (seconds <= 0) {
                        clearInterval(timer);
                        alert("Session complete!");
                    } else {
                        seconds--;
                        let mins = Math.floor(seconds/60).toString().padLeft(2, '0');
                        let secs = (seconds%60).toString().padLeft(2, '0');
                        display.innerText = `${mins}:${secs}`;
                    }
                }, 1000);
            }
            window.pausePomo = function() {
                clearInterval(timer);
                timer = null;
            }
        