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
  <audio id="echo-audio" src="sigil/echo1.wav" preload="auto"></audio>

<script>
  const audio = document.getElementById("echo-audio");
  let audioTriggered = false;

  function triggerAudio() {
    if (audioTriggered) return;
    audioTriggered = true;
    audio.play().catch(() => {});
  }

  // Odpala audio przy pierwszej interakcji
  document.addEventListener("click", triggerAudio);
  document.addEventListener("mousemove", triggerAudio);
</script>

  // Glitch effect flash
  setTimeout(() => {
    document.body.style.transition = "all 0.2s";
    document.body.style.backgroundColor = "#111";
    setTimeout(() => {
      document.body.style.backgroundColor = "#000";
    }, 120);
  }, 3500);
});
