console.dir(Date)
// let year = 2021
// let month = 11
// let date = 20
// console.log(Date.now())
// текущая дата в нормальном виде
// // ДН МЕС Ч Г время(ч:м:с) формат (GMT+0300)
// const myDate = new Date()
// console.log('текущая дата в нормальном виде:', myDate)

// const myBD = new Date('07.11.1990')
// console.log('myBD:', myBD)

// //           год, мес (0-11), число (1-31); время (ч:м:с:мс)
// const startOfJob = new Date(year, month, date, 9, 30)
// console.log(startOfJob)
// // console.log(new Date(1990, 6, 11, 8, 30, 0))
// const unixToDate = new Date(1630949140560)
// console.log('unixToDate:', unixToDate)
// console.log(Date.now(0))

// // дата в UNIX мс от 1 января 1970
// console.log(Date.now())
// console.log(Date.parse('07.11.1990'))
// console.log(Date.parse('06.09.2021'));

const date = new Date('09.05.21')
console.log(date)
// Методы
// .getTime() - мс от 1.1.1970 до указанного времени
console.log(date.getTime()) // 1620507600000
// .getDay() - день недели 0-6
console.log(date.getDay()) //0 - sunday
// .getDate() - число 1-31
console.log(date.getDate()) // 5
// .getMonth() - месяц 0-11
console.log(date.getMonth()) // 8
// .getFullYear() - год 1000-9999
console.log(date.getFullYear()) // 2021
// .getHours() - часы
console.log(date.getHours()) // 0
// .getMinutes() - минуты
console.log(date.getMinutes()) // 0
// .getSeconds() - секунды
console.log(date.getSeconds()) // 0
// .getMilliseconds() - миллисекунды
console.log(date.getMilliseconds()) // 0

// .setFullYear(yyyy, m, d)
// .setHours(h, m, s, ms)

// Формат даты
const options = {
  weekday: 'short',
  year: 'numeric',
  month: 'short',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
}
//                 'en-US'
// .toLocaleString('Uk-uk', options)
console.log(date.toLocaleString('Uk-uk', options))
// toString() - полная дата
console.log(date.toString())
// toDateString() - только дата
console.log(date.toDateString())
// toTimeString() - только время
console.log(date.toTimeString())
// my_date instanceof Date
