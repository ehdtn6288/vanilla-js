const COUNTRY = "country";
const select = document.querySelector("select");
const selectedCountry = localStorage.getItem(COUNTRY);
function saveTheValue(value) {
  localStorage.setItem(COUNTRY, value);
}

function addSelected() {
  const selectedValue = select.value;
  saveTheValue(selectedValue);
}

function loadTheCountry() {
  select.addEventListener("change", addSelected);
  select.value = selectedCountry;

  /*select의 value값은 select에서 선택된 옵션의 value값이다. 즉, select의 value값의 변경을 통해, 선택된 select를 변경할 수 있다. (즉, selected 대신 사용가능!!) */

  /*for (var i = 0; i < select.options.length; i++) {
    if (select.options[i].value === selectedCountry) {
      select.options[i].setAttribute("selected", "select");
    }
  }*/
}

function init() {
  loadTheCountry();
}

init();
