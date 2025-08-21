// Task :
// - convert ui into tailwind css : ✅
//  - on refresh default set personal selection ✅
//  - On click complete button set completed : true in localstorage and shoe check mark ✅
//  - personal/professional task maintain ✅
//      - Changes localstorage key name (personal/professional) ✅
//      - on add button store data accordingly active tab ✅
//      - on clear completed button store data accordingly active tab clean all todos ✅
//      - on clear completed button store data accordingly active tab only remove completed : true ✅

const btnTaskPersonal = document.querySelector('.task-type > .task-personal')
const btnTaskProfessional = document.querySelector('.task-type > .task-professional')
const btnAdd = document.querySelector(' .add-button')
const btnInput = document.querySelector('.todo-input-type')

const todoList = document.querySelector('.todo-list')
const clearAll = document.querySelector('.clear-completed')

const noTodo = document.querySelector('.no-todo')
let tabIndex = 0

window.onload = function() {
  setActiveTab('personal')

  btnTaskPersonal.addEventListener('click', () => {
    setActiveTab('personal')
    tabIndex = 0
    clearAllTodo()
    fetchInitialTodoItems()
  })
}
btnTaskProfessional.addEventListener('click', () => {
  setActiveTab('professional')
  tabIndex = 1
  clearAllTodo()
  fetchInitialTodoItems()
})
btnAdd.addEventListener('click', () => {
  if (btnInput.value) {
    const keyName = tabIndex === 0 ? 'personal' : 'professional'

    const todoItems = localStorage.getItem(keyName)
    const todos = todoItems ? JSON.parse(todoItems) : []
    const newId = Date.now()

    const newTodoItem = {
      id: newId,
      title: btnInput.value,
      completed: false
    }

    todos.push(newTodoItem)
    localStorage.setItem(keyName, JSON.stringify(todos))

    addTodo(newTodoItem)
    btnInput.value = ''

    clearAll.classList.remove('hidden')
    noTodo.classList.add('hidden')
  }
})

btnInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    btnAdd.click()
  }
})

function setActiveTab(type) {
  document.querySelectorAll('.task-type-option ').forEach(el => {
    el.classList.remove('text-black','border-b-[4px]','border-solid','border-[#D98326]')
  })

  if (type === 'personal') {
    btnTaskPersonal.classList.add('text-black','border-b-[4px]','border-solid','border-[#D98326]')

  } else {
    btnTaskProfessional.classList.add('text-black','border-b-[4px]','border-solid','border-[#D98326]')
  }
}

function addTodo(todoObj) {

  const todo = todoObj.title
  const todoItem = document.createElement('div')
  todoItem.setAttribute('class', 'todo-item w-[91%] mx-[40px] flex flex-row items-center')
  todoList.appendChild(todoItem)

  const inputType = document.createElement('input')
  inputType.setAttribute('hidden', 'true')
  inputType.setAttribute('id', todoObj.id)
  inputType.setAttribute('name', 'work')
  inputType.setAttribute('type', 'checkbox')

  if (todoObj.completed) {
    inputType.setAttribute('checked', 'true')
  }

  inputType.addEventListener('click', () => {
    const checkTodo = tabIndex === 0 ? 'personal' : 'professional'
    const getTodoList = JSON.parse(localStorage.getItem(checkTodo))
    const findTodo = getTodoList.find((todo) => todo.id === todoObj.id)
    findTodo.completed = !findTodo.completed
    localStorage.setItem(checkTodo, JSON.stringify(getTodoList))
    if (findTodo.completed) {
      inputType.setAttribute('checked', 'true')
      todoListTitle.classList.add ('line-through','text-[#969696]')
    } else {
      inputType.removeAttribute('checked')
      todoListTitle.classList.remove ('line-through','text-[#969696]')
    }
  })
  todoItem.appendChild(inputType)

  const circleCheck = document.createElement('label')
  circleCheck.setAttribute('class', 'circle-checkbox inline-block w-[27px] h-[25px] border-[3px] border-solid border-[#555] rounded-[50%] cursor-pointer relative ease')
  circleCheck.setAttribute('for', todoObj.id)
  todoItem.appendChild(circleCheck)

  const todoListTitle = document.createElement('div')
  todoListTitle.setAttribute('class', 'todo-list-title w-full p-[15px] text-[25px] font-Poppins font-normal tracking-[1px] border-b border-solid border-[#76B7CD]')
  todoListTitle.innerText = todo
  if (todoObj.completed) {
    todoListTitle.classList.add ('line-through','text-[#969696]')
  }
  todoItem.appendChild(todoListTitle)

  const deleteIcon = document.createElement('i')
  deleteIcon.setAttribute('class', 'material-icons text-[#B30B04] opacity-65 cursor-pointer text-[30px]')
  deleteIcon.innerText = 'delete'
  todoItem.appendChild(deleteIcon)

  deleteIcon.addEventListener('click', () => {
    todoItem.remove()

    const removeTodo = tabIndex === 0 ? 'personal' : 'professional'
    const getTodoList = localStorage.getItem(removeTodo)
    const filterTodoList = JSON.parse(getTodoList).filter((todo) => todo.id !== todoObj.id)
    localStorage.setItem(removeTodo, JSON.stringify(filterTodoList))

    if (todoList.children.length === 0) {
      clearAll.classList.add('hidden')
      noTodo.classList.remove('hidden')
    }
  })
}

clearAll.addEventListener('click', () => {
  const todoItems = document.querySelectorAll('.todo-item')
  const removeAllTodo = tabIndex === 0 ? 'personal' : 'professional'

  const getTodoList = localStorage.getItem(removeAllTodo)
  const filterTodoList = JSON.parse(getTodoList).filter((todo) => !todo.completed)
  const inputCheck = document.querySelectorAll('input[type="checkbox"]')

  todoItems.forEach((todo, index) => {
    if (inputCheck[index].checked) {
      todo.remove()
      localStorage.setItem(removeAllTodo, JSON.stringify(filterTodoList))
    }
  })

  if (!filterTodoList.length) {
    noTodo.classList.remove('hidden')
    clearAll.classList.add('hidden')
  }
})

function fetchInitialTodoItems() {
  const getTodo = tabIndex === 0 ? 'personal' : 'professional'
  const todoItems = localStorage.getItem(getTodo)
  const todos = todoItems ? JSON.parse(todoItems) : []

  todos.forEach((todo) => {
    addTodo(todo)
  })

  if (todos.length) {
    clearAll.classList.remove('hidden')
    noTodo.classList.add('hidden')
  }
}

function clearAllTodo() {
  const todoItems = document.querySelectorAll('.todo-item')
  todoItems.forEach((todo) => {
    todo.remove()
  })
  noTodo.classList.remove('hidden')
  clearAll.classList.add('hidden')
}

fetchInitialTodoItems()
