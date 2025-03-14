const modalScreen = document.querySelector('.modal-screen')
const modal = document.querySelector('.modal')
const addTodoBtn = document.querySelector('.open-modal')
const createTodoBtn = document.querySelector('.continue')
const cancelBtn = document.querySelector('.close')
const cancelBtnX = document.querySelector('.close-modal')
const inputElement = document.querySelector('.todo-input')
const todoSection = document.querySelector('.status-section.to-do')
const sectionElements = document.querySelectorAll('.status-section')







function addTodo() {
  modalScreen.style.display = 'flex'
}

function closeModal() {
  modalScreen.style.display = 'none'
}

document.addEventListener('keydown', (e) => {
  if(e.key === 'Escape') {
    modalScreen.style.display = 'none'
  }
})

document.addEventListener('click', (e) => {
  if(!modal.contains(e.target) && !addTodoBtn.contains(e.target)) {
    modalScreen.style.display = 'none'
  }
})


function createTodo() {
  let todoText = inputElement.value.trim()
  
  if(inputElement.value !== "") {

    let randomId = `todo-${1000 + Math.floor(Math.random() * 9999)}`;

    todoSection.insertAdjacentHTML(
      'beforeend',
      `
        <article class="todo" draggable="true" id="${randomId}">
          <p>${todoText}</p>
        </article>
      `
    )
  
    modalScreen.style.display = 'none'
  }
  
  inputElement.value = ""
}


document.addEventListener('dragstart', (event) => {
  if (event.target.classList.contains('todo')) {
    event.dataTransfer.setData('elementId', event.target.id);
  }
});



sectionElements.forEach((sectionElement) => {
  sectionElement.addEventListener('dragover', (event) => {
    event.preventDefault()
  })
})


sectionElements.forEach((sectionElement) => {
  sectionElement.addEventListener('drop', (event) => {
    let elementId = event.dataTransfer.getData('elementId')
    let draggableElement = document.getElementById(elementId)
    sectionElement.appendChild(draggableElement)
  })
})








addTodoBtn.addEventListener('click', addTodo)
cancelBtn.addEventListener('click', closeModal)
cancelBtnX.addEventListener('click', closeModal)
createTodoBtn.addEventListener('click', createTodo)











