// isNaN() - проверка на НЕчисло
let value
// console.log(value, 'не число: ', isNaN(value))

// не являются НЕ числом, т.е. они числа
value = 1
// console.log(value, 'не число: ', isNaN(value))

value = 0
// console.log(value, 'не число: ', isNaN(value))

value = Infinity
// console.log(value, 'не число: ', isNaN(value))

value = null
// console.log(value, 'не число: ', isNaN(value))

value = ''
// console.log(value, 'не число: ', isNaN(value))

value = ' '
// console.log(value, 'не число: ', isNaN(value))

value = true
// console.log(value, 'не число: ', isNaN(value))

value = false
// console.log(value, 'не число: ', isNaN(value))
// не являются НЕ числом, т.е. они числа

value = NaN
// console.log(value, 'не число: ', isNaN(value))

value = 'sandra'
// console.log(value, 'не число: ', isNaN(value))

// СТРОКИ
// console.log(typeof `string`, `string`)
// console.log(typeof 'string', 'string')
// console.log(typeof 'string 12132 !@#$%%^&', 'string')

// length
let myString = 'I love JavaScript!'
// console.log(myString)
// console.log(myString.length)
// position & index
// console.log(myString[0])
// console.log(myString[1])
// console.log(myString[2])
// console.log(myString[18])

// console.log(myString[17])

// toLowerCase() ? toUpperCase()
// console.log(myString.toLowerCase())
// console.log(myString.toUpperCase())

// indexOf() & includes()
// console.log(myString.indexOf())

// console.log(myString.indexOf(' '))
// console.log(myString.indexOf('i'))
// console.log(myString.indexOf('I'))

// console.log(myString.indexOf('d'))

// console.log(myString.includes())
// console.log(myString.includes(' '))
// console.log(myString.includes('i'))
// console.log(myString.includes('I'))

// console.log(myString.includes('d'))

// конкатенация примитивы и строки
let name = 'Sandra'
let lastName = 'Hrevtsova'
// console.log(name, lastName)

let fullName = name + ' ' + lastName
// console.log(fullName)

let greeting =
  'Hello' + ' ' + name + ' ' + lastName + '!' + ' ' + 'I am glad to see you!'
// console.log(greeting)

// `шаблонная строка и интерполяция ${variable}`

greeting = `Hello ${name} ${lastName}! I am glad to see you!`
// console.log(greeting)

// способы приведения типов к

// строке: String(value) || value + ""
let myValue = true
// console.log(myValue, typeof myValue)

let result = String(myValue)
// console.log(result, typeof result)

// console.log(myValue, typeof myValue)
result = myValue + ''
// console.log(result, typeof result)

// числу: Number(value) || +value
// console.log(myValue, typeof myValue)
result = Number(myValue)
// console.log(result, typeof result)

// console.log(myValue, typeof myValue)
result = +myValue
// console.log(result, typeof result)

// булеану: Boolean(value) || !!value
// console.log(myValue, typeof myValue)
myValue = 0
// console.log(myValue, typeof myValue)

result = Boolean(myValue)
// console.log(result, typeof result)

result = !!myValue
// console.log(result, typeof result)

// falsy values
// console.log('empty string :', Boolean(''))
// console.log('0 :', Boolean(0))
// console.log('NaN :', Boolean(NaN))
// console.log('undefined :', Boolean(undefined))
// console.log('null :', Boolean(null))
// console.log('false :', Boolean(false))

// // ЛОГИЧЕСКИЕ ОПЕРАТОРЫ
// // && - вернет ПОСЛЕДНЕЕ TRUE, если все TRUE или ПЕРВОЕ FALSE
// console.log(1 && 'Js' && true)
// console.log(0 && 'Js' && true)

// // || - вернет ПОСЛЕДНЕЕ FALSE, если все FALSE или ПЕРВОЕ TRUE
// console.log(1 || 'Js' || true)
// console.log(0 || 'Js' || true)
// console.log(0 || '' || false)

// // && приоритетнее перед ||
// console.log(0 || ('Js' && true))
// console.log((0 && 'Js') || true)

// // ! - приводит значение к типу boolean и переворачивает его -
// // т.е. вернет его противоположное, но уже булевое значение
// console.log(!'')
// console.log(!false)
// console.log(!0)
// console.log(!NaN)
// console.log(!null)
// console.log(!undefined)

// // !! - приводит значение к типу boolean и дважды переворачивает его,
// // т.е. вернет его прямое булевое значение
// console.log(!!'')
// console.log(!!false)
// console.log(!!0)
// console.log(!!NaN)
// console.log(!!null)
// console.log(!!undefined)

// ВЕТВЛЕНИЯ
// if(){} - одно условие
// if(){} else{} - одно условие и все остальное
// if(){} else if(){} else if(){} - множество условий
// if(){} else if(){} else if(){} else{} - множество условий и все остальное
// if ('dfkhvsfjdkhvklefs') {
//   console.log('Условие выполнено')
// }

// let condition = 0
// console.log(condition)

// if (condition) {
//   console.log('Условие выполнено')
// } else {
//   console.log('Условие не выполнено')
// }

// console.log(condition)
// console.log(Boolean(condition))

// if (condition) {
//   console.log('Условие 1 выполнено')
// } else if (condition + 0 + 0) {
//   console.log('Условие 2 выполнено')
// } else if (condition + 0) {
//   console.log('Условие 3 выполнено')
// } else {
//   console.log('Условие не выполнено')
// }

// let day = prompt('Enter the day')

// if (day === 'mon') {
//   alert('workday')
// } else if (day === 'tue') {
//   alert('workday')
// } else if (day === 'wed') {
//   alert('workday')
// } else if (day === 'thu') {
//   alert('workday')
// } else if (day === 'fri') {
//   alert('workday')
// } else if (day === 'sat') {
//   alert('holiday')
// } else if (day === 'sun') {
//   alert('holiday')
// } else {
//   alert('ВЫ ВВЕЛИ ЕРУНДУ')
// }

// switch (day) {
//   case 'mon':
//     alert('workday')
//     break

//   case 'tue':
//     alert('workday')
//     break

//   case 'wed':
//     alert('workday')
//     break

//   case 'thu':
//     alert('workday')
//     break

//   case 'fri':
//     alert('workday')
//     break

//   case 'sat':
//     alert('holiday')
//     break

//   case 'sun':
//     alert('holiday')
//     break

//   default:
//     alert('ВЫ ВВЕЛИ ЕРУНДУ')
// }

// switch (day) {
//   case 'mon':
//   case 'tue':
//   case 'wed':
//   case 'thu':
//   case 'fri':
//     alert('workday')
//     break

//   case 'sat':
//   case 'sun':
//     alert('holiday')
//     break

//   default:
//     alert('ВЫ ВВЕЛИ ЕРУНДУ')
// }

// (условие) ? (если TRUE) : (если FALSE) - тернарный оператор
// альтернатива
// if(условие){ если TRUE } else{ если FALSE } - одно условие и все остальное
// condition = 0
// console.log(condition)
// condition
//   ? console.log('Условие выполнено')
//   : console.log('Условие не выполнено')

// switch(){case: break; default:}

// break & continue

// ОБЛАСТЬ ВИДИМОСТИ
// локальная (блочная) и глобальная

// ЦИКЛЫ

// while(){} && do{}while()
let x = 0

while (x == 5) {
  console.log('Hello')
}

do {
  console.log('Hello')
} while (x == 5)

// for(){}
let int = 10 // GLOBAL Variable

for (let i = 0; i <= 15; i = i + 1) {
  //   console.log(`итерация ${i}`)
  let int = 'JavaScript' // LOCAL Variable
  console.log('int в цикле', int + 1)
}
console.log(int)

for (let i = 0; i <= 15; i = i + 5) {
  console.log(`new итерация ${i}`)
}
