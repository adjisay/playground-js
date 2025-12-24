const changeTextButton = document.getElementById('changeTextBtn')
const alertButton = document.getElementById('alertBtn')
// const title = document.getElementById('title')

const addTextButton = document.getElementById('addText')
const contentDiv = document.getElementById('content')
const nameInput = document.getElementById('nameInput')

const countSpan = document.getElementById('count')

// Показать title при клике на кнопку
alertButton.addEventListener('click', () => {
  if (nameInput.value.trim() === '') {
    alert('Пожалуйста, введите имя в поле ввода.')
  } else {
    title.textContent = `Title is: ${nameInput.value}`
  }
})

// Изменение текста заголовка при клике на кнопку
changeTextButton.addEventListener('click', () => {
  const oldText = title.textContent
  title.textContent =
    oldText === 'Hello, World!' ? 'Text Changed!' : 'Hello, World!'
})

const userName = 'Alice'
let counter = 0
console.log(`User Name: ${userName}`)
console.log(`Counter: ${counter}`)

// Увеличение счетчика при клике на кнопку
alertButton.addEventListener('click', () => {
  counter++
  console.log(`Counter: ${counter}`)
})

// Добавление нового параграфа при клике на кнопку
addTextButton.addEventListener('click', () => {
  contentDiv.insertAdjacentHTML(
    'beforeend',
    `<p>New paragraph add at ${new Date().toLocaleString()}</p>`,
  )
})

// Обновление отображения счетчика
setInterval(() => countSpan.textContent++, 1000)
/*
let count = 0
count += 1
console.log(count)

// const name = 'Алексей'
// console.log(name)

function greet(user) {
  return `Привет, ${user}!`
}
// console.log(greet(name))

function multiply(a, b) {
  return a * b
}

const sum = (x, y) => {
  return x + y
}

console.log(multiply(3, 4))
console.log(sum(5, 7))

function pow(n) {
  return n * n
}
console.log(pow(6))
console.log(pow(9))
console.log(pow(12))

const isEven = (num) => num % 2 === 0
console.log(isEven(10))
console.log(isEven(7))
console.log(isEven(22))

const numbers = [1, 2, 3, 4, 5]

const squaredNumbers = numbers.map((num) => num * num)
console.log(squaredNumbers)

const even = numbers.filter((num) => num % 2 === 0)
console.log(even)

const somOfNumbers = numbers.reduce((acc, n) => acc + n, 0)
console.log(somOfNumbers)

const names = ['Анна', 'Борис', 'Виктория', 'Дмитрий', 'Екатерина']

const longNames = names.filter((n) => n.length > 5)
console.log(longNames)

const sumOdd = numbers.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n, 0)
console.log(sumOdd)

const user = { name: 'Алексей', age: 25, city: 'Москва' }

const { name, age } = user

console.log(`${name}, ${age}`)

const newUser = { ...user, country: 'Россия' }
console.log(newUser)

const { city, ...rest } = newUser
console.log(rest)

const cat = {
  name: 'Мурка',
  meow() {
    console.log('Мяу!')
  },
  age: 3,
  color: 'серый',
}

const newCat = { ...cat, breed: 'Британская короткошерстная' }
console.log(newCat)

const { color, ...restCat} = newCat
console.log(restCat) */

const students = [
  { name: 'Аня', score: 85 },
  { name: 'Игорь', score: 92 },
  { name: 'Лена', score: 78 },
]

students
  .filter((s) => s.score > 80)
  .map((newStudent) => console.log(newStudent.name))

console.log(students.reduce((acc, n) => (acc + n.score) / students.length, 0))
const newStudents = students.map((student) => {
  const passedStudents = { ...student, passed: true }
  return passedStudents
})
console.log(newStudents)

const h2 = document.createElement('h2')
h2.textContent = 'Day 3 - DOM practice'
document.body.appendChild(h2)

h2.style.color = 'teal'

h2.classList.add('title')

const title = document.querySelector('#title')

title.textContent = 'JS DOM is fun!'

title.classList.add('highlight')

title.addEventListener('click', () => {
  title.classList.toggle('active')
})

// document.body.addEventListener('click', (e) => {
//   console.log('clicked on body', e.target)
// })

const taskInput = document.getElementById('taskInput')
taskInput.addEventListener('input', () => {
  console.log('Текущий ввод:', taskInput.value)
})

document.body.addEventListener('click', () => {
  console.log('Clicked on body')
})

document.querySelector('#title').addEventListener('click', (e) => {
  console.log('Clicked on title')
  e.stopPropagation()
})

const btnAdd = document.createElement('button')
btnAdd.textContent = 'Add paragraph'
document.body.appendChild(btnAdd)

btnAdd.addEventListener('click', () => {
  const p = document.createElement('p')
  p.textContent = 'Новый абзац ' + Math.random().toFixed(2)
  document.body.appendChild(p)

  p.addEventListener('click', () => {
    p.remove()
  })
})

document.body.insertAdjacentHTML(
  'beforeend',
  '<footer class="footer">© 2024 My To-do App</footer>',
)

document.body.addEventListener('click', (e) => {
  if (e.target.matches('.footer')) {
    e.target.remove()
  }
})

// Todo List Application
const todoInput = document.getElementById('todoInput')
const addTodoBtn = document.getElementById('addTodoBtn')
const todoList = document.getElementById('todoList')
const filters = document.getElementById('filters')

let tasks = []

const saved = localStorage.getItem('tasks')
if (saved) {
  tasks = JSON.parse(saved)
  renderAllTasks(tasks)
}

addTodoBtn.addEventListener('click', () => {
  addNewTaskFromInput()
})

todoInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    addNewTaskFromInput()
  }
})

todoList.addEventListener('click', (e) => {
  if (e.target.matches('.delete-btn')) {
    if (!confirm('Вы уверены, что хотите удалить эту задачу?')) return

    const li = e.target.closest('li')
    removeTask(li.dataset.id, li)

    if (tasks.length === 0) renderAllTasks(tasks)
  }

  if (e.target.matches('.task-text')) {
    const li = e.target.closest('li')
    const id = Number(li.dataset.id)
    const task = tasks.find((t) => t.id === id)

    if (task) {
      task.done = !task.done
      saveTasks()
      li.classList.toggle('done')
    }
  }
})

filters.addEventListener('click', (e) => {
  const filter = e.target.dataset.filter
  if (!filter) return

  document
    .querySelectorAll('#filters button')
    .forEach((btn) => btn.classList.remove('active-filter'))
  e.target.classList.add('active-filter')

  let filtered

  if (filter === 'all') {
    filtered = tasks
  } else if (filter === 'active') {
    filtered = tasks.filter((t) => !t.done)
  } else if (filter === 'done') {
    filtered = tasks.filter((t) => t.done)
  }

  renderAllTasks(filtered)
})

// --- ФУНКЦИИ ---

// Функция 1: Добавление новой задачи из поля ввода
function addNewTaskFromInput() {
  const taskText = todoInput.value.trim()

  if (!taskText) {
    console.log('Пожалуйста, введите задачу.')
    return
  }

  const task = { id: Date.now(), text: taskText, done: false }

  // Добавляем в массив данных
  tasks.push(task)
  // Обновляем localStorage
  saveTasks()
  // Рендерим все задачи заново
  renderAllTasks(tasks)

  todoInput.value = ''
  todoInput.focus()
}

// Функция 2: Удаление задачи из данных и DOM
function removeTask(taskId, liElement) {
  // Удаляем из массива данных
  tasks = tasks.filter((t) => t.id !== Number(taskId))

  // Обновляем localStorage
  saveTasks()

  // Удаляем из DOM
  liElement.remove()
}

// Функция 3: Создание DOM-элемента
function createTodoElement(task) {
  const li = document.createElement('li')
  li.dataset.id = task.id

  if (task.done) li.classList.add('done')

  const span = document.createElement('span')
  span.textContent = task.text
  span.classList.add('task-text')

  const deleteBtn = document.createElement('button')
  deleteBtn.textContent = 'Удалить'
  deleteBtn.classList.add('delete-btn')

  li.append(span, deleteBtn)
  return li // Возвращаем готовый элемент
}

// Функция 4: Рендер всех задач на странице
function renderAllTasks(tasks) {
  todoList.innerHTML = '' // Очищаем список перед рендером

  if (tasks.length === 0) {
    todoList.innerHTML = "<p class='empty'>Список пуст</p>"
    return
  }

  tasks.forEach((task) => {
    const taskElement = createTodoElement(task)
    todoList.append(taskElement)
  })
}

// Функция 5: Сохранение в localStorage
function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks))
}
