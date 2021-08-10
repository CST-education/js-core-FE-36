// EVENTS
// click,
// submit - form (change, input - input:text & textarea),
// focus (blur),
// keydown (keyup, keypress)

// CLICK ===================

const allBtn = document.getElementById('all')
// console.log(allBtn)

// //                     e, ewt, event
// allBtn.addEventListener('click', (event) => {
//   //   console.log(`Событие клик произошло`)
//   console.log(event) // тут был клик

//   console.log(event.target) // тут был клик

//   //   allBtn.style.background = 'red'
//   allBtn.classList.toggle('activeBtn')
// })

const allBtns = document.querySelectorAll('.button')
// const allBtns = document.getElementsByClassName('button')
console.log(allBtns)

allBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    // btn.style.background = 'green'
    console.log(btn.classList)
    btn.classList.toggle('activeBtn')
  })
})

// CLICK ===================

// INPUT ===================
const input = document.querySelector('[type="email"]')
// console.log(input)

// input.addEventListener('input', (ewt) => {
//   console.log(ewt.target.value)
// })
// input.addEventListener('change', (e) => {
//   console.log(e)
// })
const form = document.querySelector('.js-speaker-form')
console.log(form)
// form.addEventListener('submit', (e) => {
//   // сначала останавливаем дефолтное событие отправки
//   e.preventDefault()
//   console.log(e.target.elements) // HTMLFormControlsCollection
//   console.log(e.target.elements.email.value)
// })
// INPUT ===================

// KEYDOWN ===================
// window.addEventListener('keydown', (e) => {
//   console.log(e)
//   //   code не меняется!
//   console.log('code: ', e.code, 'key:', e.key)
// })

// window.addEventListener('keypress', (e) => {
//   console.log(e)
//   //   НЕ РАБОТАЕТ НА СИСТЕМНЫХ КНОПКАХ
//   console.log('code: ', e.code, 'key:', e.key)
// })

// window.addEventListener('keyup', (e) => {
//   console.log(e)
//   //   code не меняется!
//   console.log('code: ', e.code, 'key:', e.key)
// })
// KEYDOWN ===================
// FOCUS ===================
function handleCallback(e) {
  console.log(e)
  e.target.style.background = 'red'
}
input.addEventListener('focus', handleCallback)
input.removeEventListener('focus', handleCallback)

input.addEventListener('blur', (e) => {
  e.target.style.background = 'green'
})
// FOCUS ===================

// elem.addEventListener("eventName", callback)
// &
// elem.removeEventListener("eventName", callback)
// this => elem
// если нужен иной контекст, то передаем его через bind в callback

// CALLBACK is
// (event) => {}
// console.log(event)
// console.log(event.target)
// console.log(event.currentTarget)

// event.preventDefault() for "submit" by form & "click" by link (a)

// event.key (`) & event.code (Backquote)
// event.key (ё) & event.code (Backquote)

// event.key (Tab) & event.code (Tab)
// event.key (Escape) & event.code (Escape)
// event.key (Shift) & event.code (ShiftLeft)

// event.key (G) & event.code (KeyG)
// event.key (п) & event.code (KeyG)

// document.querySelector('body').addEventListener('keydown', (e) => {
//   console.log(e.key, e.code)
// })

// FOCUS for click by mouse or Tab

// например нам нужно отрисовать баннер с обратным отсчетом до конца действия акции
// обратный отсчет должен запуститься с полной загрузкой html
// document.addEventListener('DOMContentLoaded', callback)

// событие срабатывает при полнй загрузке всех скриптов и стилей
// используется редко
// document.addEventListener('load', callback)

//
// document.addEventListener('unload', callback)
// document.addEventListener('beforeunload', callback)

// window.addEventListener('beforeunload', (event) => {
//   event.preventDefault()
//   // Chrome требует установки возвратного значения.
//   event.returnValue = ''
// })
