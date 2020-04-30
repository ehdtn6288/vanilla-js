const TIMMER = document.querySelector("h2");
function getTime() {
  // Don't delete this.
  const xmasDay = new Date("2020-12-24:00:00:00+0900");
  const now = new Date();
  const distance = xmasDay - now;
  console.log(now);
  const d = Math.floor(distance / (1000 * 60 * 60 * 24));
  const h = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const m = Math.floor((distance / (1000 * 60)) % 60);
  const s = Math.floor((distance / 1000) % 60);

  TIMMER.innerText = `${d}d ${h}h ${m}m ${s}s`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}
init();
