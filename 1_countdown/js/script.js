const Days = document.querySelector("#Days");
const Hours = document.querySelector("#Hours");
const Minuts = document.querySelector("#Minuts");
const Seconds = document.querySelector("#Seconds");

function updateTime() {
    const currentYear = new Date().getFullYear();
    const newYear = new Date(`January 1 ${currentYear + 1} 00:00:00`);
    const currentDate = new Date();
    const diff = newYear - currentDate;

    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor((diff / 1000 / 60 / 60) % 24);
    const m = Math.floor((diff / 1000 / 60) % 60);
    const s = Math.floor((diff / 1000) % 60);

    Days.innerHTML = d < 10 ? "0" + d : d;
    Hours.innerHTML = h < 10 ? "0" + h : h;
    Minuts.innerHTML = m < 10 ? "0" + m : m;
    Seconds.innerHTML = s < 10 ? "0" + s : s;
}

// Correct usage of setInterval
updateTime(); // Run once at the start
setInterval(updateTime, 1000); // Run every second