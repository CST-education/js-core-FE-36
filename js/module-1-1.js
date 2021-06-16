'use strict'
// ЧТО ТАКОЕ JavaScript

// высокоуровневый интерпретируемый язык программирования
// однопоточный
// слаботипизируемый
// мультипарадигменный
// кроссбраузерный
// кроссплатформенный
// клиент-серверный
// с автоматической системой управления памятью

// ПОДКЛЮЧЕНИЕ СКРИПТА
{
  /* <script src="./index.js" type="module"></script> */
}

// вкладка Console в Chrome Dev Tools
// Windows и Linux - Ctrl+Shift+J или F12
// MacOS - Command+Option+J

// СИНТАКСИС
// 'use strict';
// выражение
// переменные
// операторы
// типы данных
// инструкция

// ПЕРЕМЕННЫЕ
// правила именования переменных и зарезервированные слова
// ключевые слова let & const, отличие от var

// console.log('значение переменной x:', x)
var x

let a
// console.log('значение переменной let a:', a)

a = 'my let variable'
// console.log('значение переменной let a:', a)

const b = 1
// console.log('значение переменной const b:', b)

const c = '1'

// ТИПЫ ДАННЫХ - ПРИМИТИВЫ & OBJECTS
// typeof
// console.log('тип данных let a:', typeof a)
// console.log('тип данных const b:', typeof b)
// console.log('тип данных const c:', typeof c)

// STRING
let stringValue = ''
// console.log('тип данных let stringValue:', typeof stringValue)
// console.log('значение переменной let stringValue:', stringValue)

stringValue = 'Sandra'
// console.log('тип данных let stringValue:', typeof stringValue)
// console.log('значение переменной let stringValue:', stringValue)

stringValue = '    '
// console.log('тип данных let stringValue:', typeof stringValue)
// console.log('значение переменной let stringValue:', stringValue)

stringValue = '101010101'
// console.log('тип данных let stringValue:', typeof stringValue)
// console.log('значение переменной let stringValue:', stringValue)

// NUMBER
let numberValue = 0
// console.log('тип данных let numberValue:', typeof numberValue)
// console.log('значение переменной let numberValue:', numberValue)

numberValue = 1
// console.log('тип данных let numberValue:', typeof numberValue)
// console.log('значение переменной let numberValue:', numberValue)

numberValue = 555
// console.log('тип данных let numberValue:', typeof numberValue)
// console.log('значение переменной let numberValue:', numberValue)

numberValue = NaN
// console.log('тип данных let numberValue:', typeof numberValue)
// console.log('значение переменной let numberValue:', numberValue)

numberValue = Infinity
// console.log('тип данных let numberValue:', typeof numberValue)
// console.log('значение переменной let numberValue:', numberValue)

// BOOLEAN
let boolValue = true
// console.log('тип данных let boolValue:', typeof boolValue)
// console.log('значение переменной let boolValue:', boolValue)

boolValue = false
// console.log('тип данных let boolValue:', typeof boolValue)
// console.log('значение переменной let boolValue:', boolValue)

// UNDEFINED
let zuzuzu
// console.log('тип данных let zuzuzu:', typeof zuzuzu)
// console.log('значение переменной let zuzuzu:', zuzuzu)

// NULL
let emptyValue = null
// console.log('тип данных let emptyValue:', typeof emptyValue)
// console.log('значение переменной let emptyValue:', emptyValue)

// ВЗАИМОДЕЙСТВИЕ С ПОЛЬЗОВАТЕЛЕМ
// alert()
// let answer = alert('Do you speak Js?')
// console.log(`hello`, answer)

// confirm()
// let answer = confirm('Do you speak Js?')
// console.log(answer)

// prompt()
// let value = prompt(`Enter the value please`)
// console.log(value, typeof value)

// ОСНОВНЫЕ ОПЕРАТОРЫ
// математические (+, -, /, *, **, %)
let result
let num1 = 2
let num2 = 4

result = num1 + num2
// console.log(result)

result = num1 - num2
// console.log(result)

result = num1 * num2
// console.log(result)

result = num1 / num2
// console.log(result)

result = num1 ** num2
// console.log(result)

result = num2 % num1
// console.log(result)

// сравнения (>=, <=, >, <, == & ===, != & !==)

result = num1 > num2
// console.log(result)

num1 = '3'
num2 = 3
result = num1 > num2
// console.log(result)

result = num1 >= num2
// console.log(result)

result = num1 === num2
// console.log('"3" === 3', result)

result = num1 == num2
// console.log('"3" == 3', result)

result = num1 !== num2
// console.log('"3" !== 3', result)

result = num1 != num2
// console.log('"3" != 3', result)

// ЧИСЛА
// Number.parseInt() & Number.parseFloat()
let num = Number.parseInt('3.14px')
// console.log(num, typeof num)

num = Number.parseFloat('3.14px23232')
// console.log(num, typeof num)

num = Number.parseFloat('&3.14px')
// console.log(num, typeof num)

// Number.isNaN()

// 0.1 + 0.2 != 0.3 // из-за двоичной системы исчисления
let sum = (0.1 * 10 + 0.2 * 10) / 10
// console.log(sum)

sum = (0.1 + 0.2).toFixed(3)
// console.log(sum, typeof sum)

sum = (1 + 1).toFixed(5)
// console.log(sum)

// методы объекта Math
// округление: .ceil(), .floor() & .round()
let numberCeil = 3.000000000001
numberCeil = Math.ceil(numberCeil)
// console.log(numberCeil)

let numberFloor = 3.999999999999999
numberFloor = Math.floor(numberFloor)
// console.log(numberFloor)

let numberRound1 = 3.499999999999999
numberRound1 = Math.round(numberRound1)
// console.log(numberRound1)

let numberRound2 = 3.5111111111111
numberRound2 = Math.round(numberRound2)
// console.log(numberRound2)

// найти большее/меньшее значение: .min() & .max()
// console.log(Math.min(23, 18, 41, 38, 35, 44))
// console.log(Math.max(23, 18, 41, 38, 35, 44))

// возведение в степень: .pow()

// console.log(Math.pow(2, 3))
// console.log(2 ** 3)

// псевдослучайное число: .random() - 0->1
let usualRandom = Math.random()
usualRandom = Math.round(usualRandom)
console.log(usualRandom)

// псевдослучайное число: .random()*10 - 0->10
let random1 = Math.random() * 10
random1 = Math.round(random1)
console.log(random1)

// псевдослучайное число: .random()*(10-1) + 1 - 1->10
let random2 = Math.random() * (10 - 1) + 1
random2 = Math.round(random2)
console.log(random2)

