// Императивный код - набор последовательных инструкций, объявление функций
// Декларативный код - вызов функций

// =============================
const arr = [1, 2, 3, 4, 5]
// Чистые функции - не мутируют глобальные переменные

// Создадим функцию, принимающую массив, хранящийся в глобальной
// переменной и значение,
// с которым эта функция будет изменять полученный массив

// В логике функции объявим локальную переменную, в которую запишем
// результат действий над исходным массивом
// Результатом вызова функции вернем локальную переменную
function pureFunc(array, value) {
  const resultArray = []
  for (let i = 0; i < array.length; i++) {
    // console.log(array[i])
    let result = array[i] * value
    // console.log('result', result)
    resultArray.push(result)
  }
  return resultArray
}
// console.log('результат чистой функции', pureFunc(arr, 2))
// console.log('исходный массив', arr)

// Такой подход считается ХОРОШЕЙ Практикой и должен использоваться повсеместно

// =============================

// Функции  с побочным эффектом - мутируют

// Создадим функцию, которая принимает массив, хранящийся в глобальной переменной и значение,
// с которым эта функция будет изменять полученный массив
function dirtyFunc(array, value) {
  //
  for (let i = 0; i < array.length; i++) {
    // console.log(array[i])
    array[i] = array[i] * value
  }
  return array
}
// При вызове такой функции и передаче ей аргументов, получим мутированный (измененный)
// исходный массив - чаще это ПЛОХО, нежели хорошо
// console.log('результат dirty функции', dirtyFunc(arr, 5))
// console.log('исходный массив', arr)

// =============================

// Перебирающие (функциональные) методы массива

// array.metod((elem, idx, arr)=>{ return result})
// array.metod((elem, idx, arr)=> result)
console.log('исходный массив', arr)
// array.forEach((elem)=>{}) // => ничего, просто переберет массив, как for...of
const forEachArray = []
const result = arr.forEach((elem, idx, arr) => {
  // console.log(elem, idx, arr)
  forEachArray.push(elem * 2)
  // return elem - ничего не возвращает
})
// console.log(result)
// console.log(forEachArray)
const students = [
  { name: 'Ira', age: 17 },
  { name: 'Anna', age: 22 },
  { name: 'Andrii', age: 31 },
  { name: 'Ivan', age: 28 },
]
// array.map((elem)=>{}) // => массив той же длины, что и исходный
const studentsAges = students.map((elem) => {
  // console.log(elem)
  return elem.age + 1
})
// console.log(studentsAges)
// console.log(students);

// array.filter((elem)=>{}) // => массив отфильтрованных элементов, даже, если он один или просто пустой
const studentsTo18 = students.filter((elem) => {
  return elem.age < 18
})
// console.log(studentsTo18)

const studentsBy18 = students.filter((elem) => {
  return elem.age >= 18
})
// console.log(studentsBy18)

const studentsBy50 = students.filter((elem) => {
  return elem.age >= 50
})
// console.log(studentsBy50)

// функция проверки массивов
function arraysCheck(arr, age) {
  // const result = arr.filter((el) => el.age >= age)
  // if (result.length === 0) {
  //   return `Ни один элемент не прошел проверку!!!`
  // }
  // return result.map((el) => el.name).join(', ')

  // через цепочку методов
  let res = arr.filter((el) => el.age > age).map((el) => el.name)
  console.log(res)
  if (res.length === 0) return `Ни один элемент не прошел проверку!!!`
}
console.log(arraysCheck(students, 50))
console.log(arraysCheck(students, 18))

// array.find((elem)=>{}) // => первый элемент, прошедший проверку, не массив - элемент!
const To18 = students.find((elem) => {
  return elem.age < 18
})
// console.log(To18)

const By18 = students.find((elem) => {
  return elem.age >= 18
})
// console.log(By18)

const By50 = students.find((elem) => {
  return elem.age >= 50
})
// console.log(By50)

// array.reduce((acc, elem)=>{}, []) // => []
// array.reduce((acc, elem)=>{}, {}) // => {}
// array.reduce((acc, elem)=>{}, 0) // => number
let reduceResult = arr.reduce(
  (acc, elem, idx, arr) => acc + elem / arr.length,
  0,
)
// console.log(reduceResult)

reduceResult = arr.reduce((newArray, number) => {
  newArray.push(number)
  return newArray
}, [])
// console.log(reduceResult)
// console.log(reduceResult === arr)
// array.reduce((acc, elem)=>{}, "") // => string

// array.every((elem)=>{}) // => true, если все true || false - &&
let isEvery = arr.every((elem) => {
  return elem % 2 === 0
})
// console.log(isEvery)
// array.some((elem)=>{}) // => false, если все false || true - ||
let isSome = arr.some((elem) => {
  // return elem % 2 === 0 // true
  return elem > 5 // false
})
// console.log(isSome)

// СОРТИРОВКА
// для символов
const names = ['Anna', 'Vitaliy', 'Evheniy', 'Valeriy', 'Vasiliy', 'Marina']
// array.sort()
// console.log(names.sort().reverse())

// для чисел
const numbers = [32, 21, 2, 6, 3, 8, 47, 1, 4]
// console.log(numbers.sort())
// array.sort((min, max)=>{min - max})
// console.log(numbers.sort((min, max) => min - max))
// array.sort((min, max)=>{max - min})
// console.log(numbers.sort((min, max) => max - min))

// цепочки методов
// Сколько конструкторов обязательно должно быть у класса?
