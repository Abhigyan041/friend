//Dynamic Notes / Quotes Array
const notes = [
  "You bring so much light and joy to everyone around you! 🌟",
  "Never forget how capable, smart, and amazing you are. 💫",
  "Your laugh is completely contagious—keep spreading happiness! 😊",
  "Thank you for being such an unforgettable part of my life. ✨",
  "Hope your day is full of delicious food, good vibes, and big smiles! 🌸"
];

let quoteIndex = 0;
const quoteText = document.getElementById('quoteText');
const newQuoteBtn = document.getElementById('newQuoteBtn');

if (newQuoteBtn) {
  newQuoteBtn.addEventListener('click', () => {
    quoteText.style.opacity = '0';
    setTimeout(() => {
      quoteIndex = (quoteIndex + 1) % notes.length;
      quoteText.innerText = "${notes[quoteIndex]}";
      quoteText.style.opacity = '1';
    }, 200);
  });
}

// Background Floating Elements
function createHeart() {
  const container = document.getElementById('hearts-container');
  if (!container) return;
  const heart = document.createElement('div');
  heart.classList.add('heart-bg');
  
  const icons = ['🌸', '✨', '💖', '🧸', '🌷', '⭐'];
  heart.innerText = icons[Math.floor(Math.random() * icons.length)];
  
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = (Math.random() * 3 + 5) + 's';
  
  container.appendChild(heart);

  setTimeout(() => { heart.remove(); }, 8000);
}
setInterval(createHeart, 500);

// Bouquet Builder Logic
const bouquetContainer = document.getElementById('bouquetContainer');

function addFlower(emoji) {
  const emptyMsg = document.getElementById('emptyMsg');
  if (emptyMsg) emptyMsg.style.display = 'none';
  const flower = document.createElement('span');
  flower.innerText = emoji;
  flower.style.animation = 'pop 0.3s ease';
  bouquetContainer.appendChild(flower);
}

function clearBouquet() {
  bouquetContainer.innerHTML = '<p id="emptyMsg">Your bouquet is currently empty. Click buttons above!</p>';
}

// Envelope Modal Controller
function openEnvelope(element, text) {
  document.getElementById('letterContent').innerText = text;
  document.getElementById('envelopeModal').style.display = 'flex';
}

function closeEnvelope() {
  document.getElementById('envelopeModal').style.display = 'none';
}

// Scratch Card Canvas Logic
window.addEventListener('load', initScratchCard);

function initScratchCard() {
  const canvas = document.getElementById('scratchCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  // Fill canvas with pink metallic layer
  ctx.fillStyle = '#ff8eaf';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Text pattern over layer
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 16px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('✨ Scratch Here ✨', canvas.width / 2, canvas.height / 2 + 5);

  let isScratching = false;

  function scratch(e) {
    if (!isScratching) return;
    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX || (e.touches && e.touches[0].clientX)) - rect.left;
    const y = (e.clientY || (e.touches && e.touches[0].clientY)) - rect.top;

    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, Math.PI * 2);
    ctx.fill();
  }

  canvas.addEventListener('mousedown', () => isScratching = true);
  canvas.addEventListener('mouseup', () => isScratching = false);
  canvas.addEventListener('mousemove', scratch);

  canvas.addEventListener('touchstart', (e) => { isScratching = true; scratch(e); });
  canvas.addEventListener('touchend', () => isScratching = false);
  canvas.addEventListener('touchmove', scratch);
}

// Audio Controller
const musicBtn = document.getElementById('musicBtn');
const music = document.getElementById('bgMusic');
let isPlaying = false;

if (musicBtn) {
  musicBtn.addEventListener('click', () => {
    if (isPlaying) {
      music.pause();
      musicBtn.innerText = '🎵';
    } else {
      music.play();
      musicBtn.innerText = '🎶';
    }
    isPlaying = !isPlaying;
  });
}

// Lightbox Functionality
function openLightbox(element) {
  const imgSrc = element.querySelector('img').src;
  document.getElementById('lightboxImg').src = imgSrc;
  document.getElementById('lightbox').style.display = 'flex';
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}