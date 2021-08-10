// <!-- THROTTLE & DEBOUNCE подключаем через CDN в index.html -->
//* <script src="https://cdn.jsdelivr.net/npm/debounce-throttle@1.0.4/index.min.js"></script> */

console.dir(_)
// ================ КОНСПЕКТ =====================
//                           input
// element.addEventListener('event', callback)
// Вызывает колбек 1 раз за установленный промежуток времени
//  ||
// _.throttle(callback, 500);
// _.debounce(callback, 500);
//  ||
// element.addEventListener('event', _.throttle(callback, 1000))
// element.addEventListener(
//   'event',
//   _.throttle((e) => {
//     console.log(e)
//   }, 1000),
// )
// ================ КОНСПЕКТ =====================

// Пример
window.addEventListener(
  'scroll',
  _.throttle((e) => {
    console.log(e)
  }, 5000),
)
