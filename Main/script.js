function updateClock() {
        const now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        let seconds = now.getSeconds();
        let ampm = hours >= 12 ? "PM" : "AM";

        hours = hours % 12 || 12;
        hours = String(hours).padStart(2, '0');
        minutes = String(minutes).padStart(2, '0');
        seconds = String(seconds).padStart(2, '0');

        document.getElementById("hour").textContent = hours;

        const minuteElem = document.getElementById("minute");
        if (minuteElem.textContent !== minutes) {
            minuteElem.classList.add("flip");
            setTimeout(() => {
                minuteElem.textContent = minutes;
                minuteElem.classList.remove("flip");
            }, 250);
        }

        /* ✅ NEW: Flip animation for seconds */
        const secondElem = document.getElementById("second");
        if (secondElem.textContent !== seconds) {
            secondElem.classList.add("flip");
            setTimeout(() => {
                secondElem.textContent = seconds;
                secondElem.classList.remove("flip");
            }, 250);
        }
        /* ✅ END NEW */

        document.getElementById("ampm").textContent = ampm;
    }

    setInterval(updateClock, 1000);
    updateClock();