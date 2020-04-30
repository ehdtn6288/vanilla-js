const toDoForm = document.querySelector(".toDoForm"),
  toDoInput = toDoForm.querySelector(".toDoInput"),
  pendingList = document.querySelector(".pending-list"),
  finishedList = document.querySelector(".finished-list");

const TODOS_LS = "toDos",
  FINITODO_LS = "finiToDos";
let toDos = [];
let finiToDos = [];

function saveToDo(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function deleteToDo(event) {
  event.preventDefault();
  const btn = event.target;
  const li = btn.parentNode;
  pendingList.removeChild(li);
  const cleanToDos = toDos.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
  });
  toDos = cleanToDos;
  saveToDo(TODOS_LS, toDos);
}
function deleteFiniToDo(event) {
  event.preventDefault();
  const btn = event.target;
  const li = btn.parentNode;
  finishedList.removeChild(li);
  const cleanToDos = finiToDos.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
  });
  finiToDos = cleanToDos;
  saveToDo(FINITODO_LS, finiToDos);
}

function finishToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  pendingList.removeChild(li);
  toDos.forEach(function (toDo) {
    if (toDo.id === parseInt(li.id)) {
      const finiObj = {
        text: toDo.text,
        id: toDo.id,
      };
      paintFiniToDo(finiObj.text);
    }
  });
  const cleanToDos = toDos.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
  });
  toDos = cleanToDos;
  saveToDo(TODOS_LS, toDos);
}

function returnToDo() {
  const btn = event.target;
  const li = btn.parentNode;
  finishedList.removeChild(li);
  finiToDos.forEach(function (toDo) {
    if (toDo.id === parseInt(li.id)) {
      const toDoObj = {
        text: toDo.text,
        id: toDo.id,
      };
      paintToDo(toDoObj.text);
    }
  });
  const cleanToDo = finiToDos.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
  });
  finiToDos = cleanToDo;
  saveToDo(FINITODO_LS, finiToDos);
}

function paintToDo(text) {
  const li = document.createElement("li"),
    span = document.createElement("span"),
    delBtn = document.createElement("button"),
    finiBtn = document.createElement("button");
  delBtn.addEventListener("click", deleteToDo);
  finiBtn.addEventListener("click", finishToDo);
  const newId = toDos.length + 1;
  pendingList.appendChild(li);
  li.appendChild(span);
  li.id = newId;
  span.innerText = text;
  li.appendChild(delBtn);
  li.appendChild(finiBtn);
  delBtn.innerText = "❌";
  finiBtn.innerText = "✅";
  const toDoObj = {
    text: text,
    id: newId,
  };
  toDos.push(toDoObj);
  saveToDo(TODOS_LS, toDos);
}

function paintFiniToDo(text) {
  const li = document.createElement("li"),
    span = document.createElement("span"),
    delBtn = document.createElement("button"),
    returnBtn = document.createElement("button");
  delBtn.addEventListener("click", deleteFiniToDo);
  returnBtn.addEventListener("click", returnToDo);
  const newId = finiToDos.length + 1;
  finishedList.appendChild(li);
  li.appendChild(span);
  li.id = newId;
  span.innerText = text;
  li.appendChild(delBtn);
  li.appendChild(returnBtn);
  delBtn.innerText = "❌";
  returnBtn.innerText = "⏪";
  const toDoObj = {
    text: text,
    id: newId,
  };
  finiToDos.push(toDoObj);
  saveToDo(FINITODO_LS, finiToDos);
}
function submitHandler(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue, pendingList);
  toDoInput.value = "";
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  const loadedFiniToDos = localStorage.getItem(FINITODO_LS);
  console.log(loadedFiniToDos);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function (toDo) {
      paintToDo(toDo.text, pendingList);
    });
    const parsedFiniToDos = JSON.parse(loadedFiniToDos);
    parsedFiniToDos.forEach(function (toDo) {
      paintFiniToDo(toDo.text);
    });
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", submitHandler);
}
init();
