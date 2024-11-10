const countDownDuration = 10 * 24 * 60 * 60 * 1000; // 10 days in milliseconds
let endDate = new Date().getTime() + countDownDuration;

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = endDate - now;

    if (timeLeft <= 0) {
        // Reset the countdown
        endDate = new Date().getTime() + countDownDuration;
    }

    const days = String(Math.floor(timeLeft / (1000 * 60 * 60 * 24))).padStart(2, '0');
    const hours = String(Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
    const minutes = String(Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
    const seconds = String(Math.floor((timeLeft % (1000 * 60)) / 1000)).padStart(2, '0');

    updateElement("days", days);
    updateElement("hrs", hours);
    updateElement("mins", minutes);
    updateElement("secs", seconds);
}

function updateElement(id, value) {
    const element = document.getElementById(id);
    if (element.textContent != value) {
        element.textContent = value;
    }
}

setInterval(updateCountdown, 1000);
