// TASK 1
// ============================
// создать функцию, которая приминает текущий статус открытия модального окна
// и возвращает его противоположное значение
// * написать функцию тремя способами
// (FUNCTION EXPRESSION, FUNCTION DECLARATION & ARROW FUNCTION)

// code =========

// checkup =========
// console.log(toggleModal(true))
// console.log( toggleModal(false))
// ============================

// TASK 2
// ============================
// создать функцию, которая принимает любое количество чисел
// и возвращает их сумму
// * написать функцию тремя способами
// (FUNCTION EXPRESSION, FUNCTION DECLARATION & ARROW FUNCTION)

// code =========

// checkup =========
// console.log(getSumm(1, 2, 3, 4, 5, 6, 7))
// console.log(getSumm(1, '2', 3, '4', 5, '6', 7))

// ============================

// TASK 3
// создать функцию, которая принимает строчное значение текста и слова,
// на наличие которых должен проверяться этот текст.
// Функция должна вернуть ответ в виде строки с указанием,
// какие именно слова были найдены в тексте, если совпадений не найдено, то вернет сообщение об этом.
// * написать функцию тремя способами
// (FUNCTION EXPRESSION, FUNCTION DECLARATION & ARROW FUNCTION)
// ============================
// code =========
function toCheckText(text, ...args) {
  const coincidence = []
  for (let word of args) {
    if (text.includes(word)) {
      coincidence.push(word)
    }
  }
  if (coincidence.length === 0) return `no matches found in the text`
  return `matches of words found in the text: ${coincidence.join(', ')}`
}

// checkup =========
let value = `If one day you have to choose between the world and love, remember this: If you choose the world you’ll be left without love, but if you choose love, with it you will conquer the world`
let result = toCheckText(value, 'world', 'love', 'peace')
console.log(result) // `matches of words found in the text: world, love`

value = `We are slowed down sound and light waves, a walking bundle of frequencies tuned into the cosmos. We are souls dressed up in sacred biochemical garments and our bodies are the instruments through which our souls play their music.`
result = toCheckText(value, 'world', 'light', 'peace')
console.log(result) // `matches of words found in the text: light`

value = `Weak people revenge. Strong people forgive. Intelligent People Ignore.`
result = toCheckText(value, 'world', 'love', 'peace')
console.log(result) // `no matches found in the text`
// ============================

// TASK 4
// ============================
// code =========

// checkup =========
// ============================

// TASK 5
// ============================
// code =========

// checkup =========
// ============================
