// Function to start the countdown timer
function startCountdown() {
    const targetDate = new Date('May 31, 2024 00:00:00').getTime();

    const timer = document.getElementById('timer');

    const updateTimer = () => {
        const now = new Date().getTime();
        const timeRemaining = targetDate - now;

        if (timeRemaining < 0) {
            timer.innerHTML = 'The countdown is over!';
            clearInterval(interval);
            return;
        }

        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        timer.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    };

    // Update the timer every second
    const interval = setInterval(updateTimer, 1000);
}

// Start the countdown when the page loads
document.addEventListener('DOMContentLoaded', startCountdown);

