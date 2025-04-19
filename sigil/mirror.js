// /sigil/mirror.js – stripped version: no fake data, only real echo

window.addEventListener("DOMContentLoaded", () => {
  const intro = document.getElementById("intro");
  if (intro) {
    setTimeout(() => {
      intro.style.transition = "opacity 0.5s ease-in-out";
      intro.style.opacity = 1;
    }, 1200);
  }

  // Inject whisper audio after delay
  const audio = new Audio("sigil/echo1.wav");
  audio.volume = 0.3;
  setTimeout(() => {
    audio.play().catch(() => {});
  }, 600);

  // Glitch effect flash
  setTimeout(() => {
    document.body.style.transition = "all 0.2s";
    document.body.style.backgroundColor = "#111";
    setTimeout(() => {
      document.body.style.backgroundColor = "#000";
    }, 120);
  }, 3500);
});
