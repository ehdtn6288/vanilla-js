const frame = document.querySelector(".calculator-frame"),
  display = frame.querySelector(".calculator-display"),
  resetBtn = frame.querySelector(".calculator-reset"),
  resultBtn = frame.querySelector(".calculator-result"),
  numArea = document.querySelector(".numArea"),
  calArea = document.querySelector(".calArea"),
  calZone = document.querySelector(".calculating-zone");

const calBtn = frame.querySelectorAll(".calculator-calcule"),
  numBtn = frame.querySelectorAll(".calculator-number");

function reset() {
  display.innerText = "0";
  numArea.innerText = "";
  calArea.innerText = "";
  calZone.innerText = "";
}

function addNum() {
  if (calArea.innerText === "") {
    numArea.innerText += this.innerText;
    display.innerText = numArea.innerText;
  } else {
    calZone.innerText += numArea.innerText + calArea.innerText;
    numArea.innerText = this.innerText;
    calArea.innerText = "";
    display.innerText = numArea.innerText;
  }
}
function addCal() {
  if (numArea.innerText !== "" || calZone.innerText !== "") {
    calArea.innerText = this.innerText;
    result();
  }
}

function result() {
  calZone.innerText += numArea.innerText;
  const resultNum = eval(calZone.innerText);
  display.innerText = resultNum;
  numArea.innerText = "";
  calZone.innerText = resultNum;
}

resultBtn.addEventListener("click", result);
resetBtn.addEventListener("click", reset);

numBtn.forEach(function (btn) {
  btn.addEventListener("click", addNum);
});
calBtn.forEach(function (btn) {
  btn.addEventListener("click", addCal);
});
