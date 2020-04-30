const body = document.querySelector("body"),
  range = document.querySelector(".input-range"),
  inputText = document.querySelector(".input-text"),
  result = document.querySelector(".result"),
  status = document.querySelector(".status");
const playBtn = document.querySelector(".playBtn"),
  MAX_NUM = body.querySelector(".max");

function rangeHandler() {
  MAX_NUM.innerText = range.value;
}

function getRanNum() {
  const max = parseInt(range.value),
    youNum = parseInt(inputText.value);
  const ranNum = Math.floor(Math.random() * (max + 1));
  status.innerText = `You chose : ${youNum}, The machine chose : ${ranNum}`;
  if (ranNum === youNum) {
    result.innerText = "You won!";
  } else {
    result.innerText = "You lose!";
  }
}

function init() {
  MAX_NUM.innerText = range.value;
  range.oninput = rangeHandler;
  playBtn.addEventListener("click", getRanNum);
}

init();
