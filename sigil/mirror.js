// /sigil/mirror.js – extended version with audio + fingerprint

window.addEventListener("DOMContentLoaded", () => {
  const intro = document.getElementById("intro");
  if (intro) {
    setTimeout(() => {
      intro.style.transition = "opacity 0.5s ease-in-out";
      intro.style.opacity = 1;
    }, 1200);
  }

  // Display fake fingerprint
  const footer = document.createElement("div");
  footer.style.position = "fixed";
  footer.style.bottom = "10px";
  footer.style.left = "10px";
  footer.style.fontSize = "12px";
  footer.style.color = "#444";
  footer.style.fontFamily = "monospace";
  document.body.appendChild(footer);

  // Inject whisper audio after delay
  const audio = new Audio("sigil/echo1.wav");
  audio.volume = 0.3;
  setTimeout(() => {
    audio.play().catch(() => {});
  }, 600);

  // Optional glitch flash
  setTimeout(() => {
    document.body.style.transition = "all 0.2s";
    document.body.style.backgroundColor = "#111";
    setTimeout(() => {
      document.body.style.backgroundColor = "#000";
    }, 120);
  }, 3500);
});


function rand() {
  return Math.floor(Math.random() * 2);
}
