// Синхронный и асинхронный код
// синхронно (последовательно) исполняются инструкция за инструкцией
// асинхронно (не последовательно) исполняются инструкции

// Асинхронность и многопоточность
// код исполняется не в указанном в коде порядке друг за другомсверху вниз,
// но все-равно выполняется одна операция в один момент времени

// многопоточность обеспечивает одновременное исполнение нескольких операций параллельно в разных потоках
// в один момент времени

// Глобальные методы setTimeout(cb, time) & setInterval(cb, time) - отложенный вызов
// time фактически может быть больше, чем задан (в пределах 4мс)
// clearTimeout() & clearInterval()
// для очистки отложенного вызова, нужно его же ссылку передать аргументом

function sayHi() {
  console.log(`hi!`)
}
function myCBtimeout() {
  console.log(`Timeout`)
}
// setTimeout(callback, time)
setTimeout(myCBtimeout, 0)
setTimeout(myCBtimeout, 1000)

console.log(`hello`)
sayHi()
setTimeout(myCBtimeout, 2000)

// setInterval(callback, time)
function myCBinterval() {
  console.log(`Interval`)
}
const intervalLink = setInterval(myCBinterval, 1000)

const btn = document.getElementById('clear')
// console.log(btn)
btn.addEventListener('click', () => {
  clearInterval(intervalLink)
})
