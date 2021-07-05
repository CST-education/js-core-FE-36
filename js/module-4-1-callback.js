// High-order function
function highOrder(value, callback) {
  //   console.log(`Hello, I am high Order function`)
  callback(value)
}
// highOrder(`Hello, I am callback`, setMessage)

// Callback function
function setMessage(message) {
  console.log(message)
}

// setMessage(`Hello, I am callback`)

// EXAMPLES
function getCourse(cb1, cb2, cb3, cb4) {
  cb1()
  cb2()
  cb3()
  cb4()
}
// getCourse(learnJs, learnReact, learnNodeJs, learnDB)

function learnJs() {
  console.log(`I need to read Docs`)
}
function learnReact() {
  console.log(`I need to use Redux`)
}

function learnNodeJs() {
  console.log(`I need to use express`)
}

function learnDB() {
  console.log(`I need to know MongoDB & NoSQL`)
}
// EXAMPLES

const toGetFibonacci = function (value, cb) {
  let firstNumber = 0
  let secondNumber = 1
  const sequence = [firstNumber, secondNumber]
  for (let i = 1; i <= value; i++) {
    let number = firstNumber + secondNumber
    firstNumber = secondNumber
    secondNumber = number
    sequence.push(number)
  }
  //   let result = cb(sequence)
  //   return result
  return cb(sequence)
}
// console.log('toGetFibonacci', toGetFibonacci(10, getSumm))

function getSumm(arr) {
  let total = 0
  for (let i = 0; i < arr.length; i++) {
    total += arr[i]
  }
  return total
}
const numbers = [1, 2, 3, 4, 5]

function myFunc(arr, callback) {
  return callback(arr)
}

// console.log('myFunc', myFunc(numbers, getSumm))

// Abstruction
function getFibonacciSequence(n, callback) {
  const fibonacciSequence = []
  let num1 = 0
  let num2 = 1
  for (let i = 0; i <= n; i++) {
    let num = num1 + num2
    num1 = num2
    num2 = num
    fibonacciSequence.push(num)
  }
  //   console.log('fibonacciSequence: ', ...fibonacciSequence)
  let result = callback(fibonacciSequence)
  //   console.log('result:', result)
}
// getFibonacciSequence(10, getSum)

function getSum(arr) {
  let total = 0
  for (let i = 0; i < arr.length; i++) {
    total += arr[i]
  }
  return total
}
const array = [
  { name: 'Alice', age: 18 },
  { name: 'Dick', age: 19 },
  { name: 'Alan', age: 17 },
  { name: 'Bob', age: 20 },
  { name: 'Fill', age: 21 },
  { name: 'Barbra', age: 16 },
  { name: 'Sarah', age: 17 },
]

function getStudentByAge(arr) {
  console.log(arr)
  const filteredStudents = []
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
    let condition = arr[i].age >= 18
    console.log('condition', condition)
    if (condition) {
      filteredStudents.push(arr[i])
    }
  }
  console.log(filteredStudents)
}
// getStudentByAge(array)

function getYoungStudents(arr) {
  const array = []

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].age < 18) {
      array.push(arr[i])
    }
  }
  return array
}
function getOldStudents(arr) {
  const array = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].age >= 18) {
      array.push(arr[i])
    }
  }
  return array
}

function getNames(arr) {
  const names = []
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i].name)
    names.push(arr[i].name)
  }
  return names
}

function getStudents(cb, arr) {
  return cb(arr)
}
const youngStudents = getStudents(getYoungStudents, array)
// console.log(youngStudents)

const oldStudents = getStudents(getOldStudents, array)
// console.log(oldStudents)

const studensNames = getStudents(getNames, array)
// console.log(studensNames)

const studentsGoIT = [
  { name: 'Vitali', age: 18 },
  { name: 'Alisa', age: 19 },
  { name: 'Khristina', age: 17 },
  { name: 'Andrii', age: 20 },
  { name: 'Roman', age: 21 },
  { name: 'Oleh', age: 16 },
  { name: 'Ira', age: 17 },
]

const studentsNamesGoIt = getStudents(getNames, studentsGoIT)
// console.log(studentsNamesGoIt)

// Отфильтровать элементы массива, прощедшие проверку условия

function filterArray(arr, cb) {
  const filteredArray = []
  for (let i = 0; i < arr.length; i++) {
    let elem = cb(arr[i])
    if (elem) {
      filteredArray.push(elem)
    }
  }
  return filteredArray
}
// console.log(filterArray(array, filterByAge))

function filterByAge(obj) {
  if (obj.age >= 18) return obj
}
