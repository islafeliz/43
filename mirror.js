// /sigil/mirror.js

window.addEventListener("DOMContentLoaded", () => {
  const intro = document.getElementById("intro");

  setTimeout(() => {
    intro.style.transition = "opacity 2s ease-in-out";
    intro.style.opacity = 1;
  }, 2000);

  const fakeIP = `IP: ${randomIP()} // Browser: ${navigator.userAgent.split(' ')[0]}`;

  const footer = document.createElement("div");
  footer.style.position = "fixed";
  footer.style.bottom = "10px";
  footer.style.left = "10px";
  footer.style.fontSize = "12px";
  footer.style.color = "#444";
  footer.style.fontFamily = "monospace";
  footer.innerText = `we see you. ${fakeIP}`;

  document.body.appendChild(footer);
});

function randomIP() {
  return `${rand()}${rand()}.${rand()}${rand()}.${rand()}${rand()}.${rand()}${rand()}`;
}

function rand() {
  return Math.floor(Math.random() * 2);
}
