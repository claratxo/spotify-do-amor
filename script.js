function entrar() {
  document.getElementById("intro").style.display = "none";
  document.getElementById("spotify").classList.remove("hidden");
}

/* TEMPO JUNTOS */
const inicio = new Date("2025-11-08T17:00:00");

function getTimeDifference(start, end) {
  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();
  let days = end.getDate() - start.getDate();

  if (days < 0) {
    months--;
    days += new Date(end.getFullYear(), end.getMonth(), 0).getDate();
  }
  if (months < 0) {
    years--;
    months += 12;
  }
  return { years, months, days };
}

const anosEl = document.getElementById("anos");
const mesesEl = document.getElementById("meses");
const diasEl = document.getElementById("dias");
const horasEl = document.getElementById("horas");
const minutosEl = document.getElementById("minutos");
const segundosEl = document.getElementById("segundos");

function atualizarTempo() {
  const agora = new Date();
  let diff = agora - inicio;

  if (diff < 0) {
    if (anosEl) anosEl.innerText = 0;
    if (mesesEl) mesesEl.innerText = 0;
    if (diasEl) diasEl.innerText = 0;
    if (horasEl) horasEl.innerText = 0;
    if (minutosEl) minutosEl.innerText = 0;
    if (segundosEl) segundosEl.innerText = 0;
    return;
  }

  const { years, months, days } = getTimeDifference(inicio, agora);
  const horas = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diff % (1000 * 60)) / 1000);

  if (anosEl) anosEl.innerText = years;
  if (mesesEl) mesesEl.innerText = months;
  if (diasEl) diasEl.innerText = days;
  if (horasEl) horasEl.innerText = horas;
  if (minutosEl) minutosEl.innerText = minutos;
  if (segundosEl) segundosEl.innerText = segundos;
}

setInterval(atualizarTempo, 1000);
atualizarTempo();

/* BARRA FAKE */
let progress = 0;
const fill = document.getElementById("fill");

setInterval(() => {
  progress += 0.3;
  if (progress > 100) progress = 0;
  if (fill) fill.style.width = progress + "%";
}, 1000);

/* BOTÃO DE PLAY/PAUSE COM AUDIO */
const playBtn = document.getElementById("play-music");
const audio = document.getElementById("audio");

playBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    playBtn.innerText = "⏸";
  } else {
    audio.pause();
    playBtn.innerText = "▶";
  }
});
