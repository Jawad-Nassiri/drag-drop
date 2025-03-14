const openModalBtn = document.querySelector(".open-modal");
const modal = document.querySelector(".modal-screen");
const createTodoBtn = document.querySelector(".continue");
const modalCloseBtn = document.querySelector(".close");
const todoInput = document.querySelector(".todo-input");
const todoSection = document.querySelector(".status-section.default");
const doingSection = document.querySelector(".status-section.in-progress");
const completeSection = document.querySelector(".status-section.complete");
const spanSection = document.querySelector(".status-section.trash");

function showAddTodoModal() {
  // Write Codes
}

function hideAddTodoModal() {
  // Write Codes
}

function addTodo() {
  // Write Codes
}

function dragStartHandler(event) {
  // Write Codes
}

function dragOverHandler(event) {
  // Write Codes
}

function dropHandler(event) {
  // Write Codes
}

openModalBtn.addEventListener("click", showAddTodoModal);
createTodoBtn.addEventListener("click", addTodo);
modalCloseBtn.addEventListener("click", hideAddTodoModal);

todoSection.addEventListener("dragover", dragOverHandler);
doingSection.addEventListener("dragover", dragOverHandler);
completeSection.addEventListener("dragover", dragOverHandler);
spanSection.addEventListener("dragover", dragOverHandler);

todoSection.addEventListener("drop", dropHandler);
doingSection.addEventListener("drop", dropHandler);
completeSection.addEventListener("drop", dropHandler);
spanSection.addEventListener("drop", dropHandler);
