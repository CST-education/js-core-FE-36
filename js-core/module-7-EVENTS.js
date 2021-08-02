// EVENTS
// click,
// submit - form (change, input - input:text & textarea),
// focus (blur),
// keydown (keyup, keypress)

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

// document.addEventListener('DOMContentLoaded', callback)
// document.addEventListener('load', callback)
// document.addEventListener('unload', callback)
// document.addEventListener('beforeunload', callback)

// window.addEventListener('beforeunload', (event) => {
//   event.preventDefault()
//   // Chrome требует установки возвратного значения.
//   event.returnValue = ''
// })
