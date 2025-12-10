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

// let count = 0
// count += 1
// console.log(count)

// // const name = 'Алексей'
// // console.log(name)

// function greet(user) {
//   return `Привет, ${user}!`
// }
// // console.log(greet(name))

// function multiply(a, b) {
//   return a * b
// }

// const sum = (x, y) => {
//   return x + y
// }

// console.log(multiply(3, 4))
// console.log(sum(5, 7))

// function pow(n) {
//   return n * n
// }
// console.log(pow(6))
// console.log(pow(9))
// console.log(pow(12))

// const isEven = (num) => num % 2 === 0
// console.log(isEven(10))
// console.log(isEven(7))
// console.log(isEven(22))

// const numbers = [1, 2, 3, 4, 5]

// const squaredNumbers = numbers.map((num) => num * num)
// console.log(squaredNumbers)

// const even = numbers.filter((num) => num % 2 === 0)
// console.log(even)

// const somOfNumbers = numbers.reduce((acc, n) => acc + n, 0)
// console.log(somOfNumbers)

// const names = ['Анна', 'Борис', 'Виктория', 'Дмитрий', 'Екатерина']

// const longNames = names.filter((n) => n.length > 5)
// console.log(longNames)

// const sumOdd = numbers.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n, 0)
// console.log(sumOdd)

// const user = { name: 'Алексей', age: 25, city: 'Москва' }

// const { name, age } = user

// console.log(`${name}, ${age}`)

// const newUser = { ...user, country: 'Россия' }
// console.log(newUser)

// const { city, ...rest } = newUser
// console.log(rest)

// const cat = {
//   name: 'Мурка',
//   meow() {
//     console.log('Мяу!')
//   },
//   age: 3,
//   color: 'серый',
// }

// const newCat = { ...cat, breed: 'Британская короткошерстная' }
// console.log(newCat)

// const { color, ...restCat} = newCat
// console.log(restCat)
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

// Todo List Application
const todoInput = document.getElementById('todoInput')
const addTodoBtn = document.getElementById('addTodoBtn')
const todoList = document.getElementById('todoList')

addTodoBtn.addEventListener('click', () => {
  const task = todoInput.value.trim()

  if (!task) {
    console.log('Пожалуйста, введите задачу.')
    return
  }

  const li = document.createElement('li')

  li.addEventListener('click', () => {
    li.remove()
  })

  li.textContent = task
  todoList.appendChild(li)
  todoInput.value = ''
})
