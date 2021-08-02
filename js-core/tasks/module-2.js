// TASK 1
// ============================
// создать функцию, которая приминает текущий статус открытия модального окна
// и возвращает его противоположное значение
// * написать функцию тремя способами
// (FUNCTION EXPRESSION, FUNCTION DECLARATION & ARROW FUNCTION)
// code =========
// 1
// const showModal = function (value) {
//   return !value
// }
// 2
// function showModal(value) {
//   return !value
// }
// 3
const showModal = (value) => !value

// checkup =========
// console.log('result', showModal(true))
// console.log('result', showModal(false))
// ============================

// TASK 2
// ============================
// создать функцию, которая принимает любое количество чисел
// и возвращает их сумму
// * написать функцию тремя способами
// (FUNCTION EXPRESSION, FUNCTION DECLARATION & ARROW FUNCTION)

// code =========
// const getSumm = function () {
//   console.log(arguments)
//   let total = 0
//   for (let elem of arguments) {
//     if (Number(elem) > 0) {
//       total += Number(elem)
//     }
//   }
//   return total
// }
// function getSumm() {
//   console.log(arguments)
//   let total = 0
//   for (let i = 0; i < arguments.length; i++) {
//     if (Number(arguments[i]) > 0) {
//       total += Number(arguments[i])
//     }
//   }
//   return total
// }
const getSumm = (...allParams) => {
  console.log(allParams)
  let total = 0
  for (let elem of allParams) {
    if (Number(elem) > 0) {
      total += Number(elem)
    }
  }
  return total
}

// checkup =========
// console.log(getSumm(1, 2, 3, 4, 5, 6, 7))
// console.log(getSumm(1, '2', 3, '4', 5, '6', 7))

// ============================

// TASK 3
// создать функцию, которая принимает строчное значение текста и слова,
// на наличие которых должен проверяться этот текст.
// Функция должна вернуть ответ в виде строки с указанием,
// какие именно слова были найдены в тексте,
// если совпадений не найдено, то вернет сообщение об этом.
// * написать функцию тремя способами
// (FUNCTION EXPRESSION, FUNCTION DECLARATION & ARROW FUNCTION)
// ============================
// code =========
// const toCheckText = function (text, ...words) {
//   // console.log(text)
//   // console.log(words)
//   const includesWords = []
//   for (let i = 0; i < words.length; i++) {
//     // console.log('word:', words[i])
//     // console.log(`${words[i]}: `, text.includes(words[i]))
//     let condition = text.includes(words[i])
//     if (condition) {
//       includesWords.push(words[i])
//     }
//   }
//   console.log(includesWords)
//   if (includesWords.length > 0)
//     return `matches of words found in the text: ${includesWords.join(', ')}`
//   return `no matches found in the text`
// }
// function toCheckText(text, ...words) {
//   const includesWords = []
//   for (let i = 0; i < words.length; i++) {
//     if (text.includes(words[i])) {
//       includesWords.push(words[i])
//     }
//   }
//   if (includesWords.length > 0)
//     return `matches of words found in the text: ${includesWords.join(', ')}`
//   return `no matches found in the text`
// }

const toCheckText = (text, ...words) => {
  const includesWords = []
  for (let i = 0; i < words.length; i++) {
    if (text.includes(words[i])) {
      includesWords.push(words[i])
    }
  }
  if (includesWords.length > 0)
    return `matches of words found in the text: ${includesWords.join(', ')}`
  return `no matches found in the text`
}

// // checkup =========
let val = `If one day you have to choose between the world and love, remember this: If you choose the world you’ll be left without love, but if you choose love, with it you will conquer the world`
let result = toCheckText(val, 'world', 'love', 'peace')
// console.log(result) // `matches of words found in the text: world, love`

val = `We are slowed down sound and light waves, a walking bundle of frequencies tuned into the cosmos. We are souls dressed up in sacred biochemical garments and our bodies are the instruments through which our souls play their music.`
result = toCheckText(val, 'world', 'light')
// console.log(result) // `matches of words found in the text: light`

val = `Weak people revenge. Strong people forgive. Intelligent People Ignore.`
result = toCheckText(val, 'world', 'love', 'peace')
// console.log(result) // `no matches found in the text`
// ============================

// TASK 4
// ============================
// Как сделать include но через for?
// Напиши функцию includes(array, value),
// которая делает тоже самое, что и метод массива
// массив.includes(значение) - проверяет, есть ли
// в массиве array значение value,
// возвращая true если есть и false в противном случае.
// При выполнении этой задачи в теле функции includes()
// нельзя использовать метод массив.includes(значение).
// code =========
function include(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) return true
  }
  return false
}
console.log(include([1, 2, 3], 1))
console.log(include([1, 2, 3], 6))

// checkup =========
// ============================

// TASK 5
// ============================
// code =========

// checkup =========
// ============================
