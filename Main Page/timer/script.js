const timerElement = document.getElementById('timer');
const quoteElement = document.getElementById('quote');
const startButton = document.getElementById('start-btn');
const pauseButton = document.getElementById('pause-btn');
const resetButton = document.getElementById('reset-btn');

let time = 0;
let interval;
let quotes = [
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Success is not the key to happiness. Happiness is the key to success. - Albert Schweitzer",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
];
let currentQuoteIndex = -1;

function updateTime() {
  const minutes = Math.floor(time / 60).toString().padStart(2, '0');
  const seconds = (time % 60).toString().padStart(2, '0');
  timerElement.textContent = `${minutes}:${seconds}`;
}

function updateQuote() {
  currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
  quoteElement.textContent = quotes[currentQuoteIndex];
}

function startTimer() {
  interval = setInterval(() => {
    time++;
    updateTime();
  }, 1000);
  startButton.disabled = true;
  pauseButton.disabled = false;
}

function pauseTimer() {
  clearInterval(interval);
  startButton.disabled = false;
  pauseButton.disabled = true;
}

function resetTimer() {
  clearInterval(interval);
  time = 0;
  updateTime();
  startButton.disabled = false;
  pauseButton.disabled = true;
}

startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);

// Display a random quote every 10 seconds
setInterval(updateQuote, 10000);