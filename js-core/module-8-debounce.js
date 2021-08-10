// <!-- THROTTLE & DEBOUNCE подключаем через CDN в index.html -->
//* <script src="https://cdn.jsdelivr.net/npm/debounce-throttle@1.0.4/index.min.js"></script> */

// console.dir(_);
// _.throttle(() => {}, 500);
// _.debounce(() => {}, 500);

// Вызывает функцию не раньше, чем через заданный промежуток времени, но может и позже
// группирует много вызовов колбекав один

const input = document.getElementById('email')
console.dir(input)
input.style.border = '1px solid rgb(204, 74, 74)'
// input.style.borderColor = 'blue'

// input.addEventListener('input', (e) => {
//   console.log(e.target.value)
// })

const user = {
  name: 'Denis',
  getInputValue() {
    input.addEventListener(
      'input',
      _.debounce((e) => {
        console.log(e.target.value)
      }, 3000),
    )
  },
}
user.getInputValue()