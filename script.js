const changeTextButton = document.getElementById('changeTextBtn')
const alertButton = document.getElementById('alertBtn')
const title = document.getElementById('title')

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
