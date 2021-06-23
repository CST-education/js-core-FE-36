// FUNCTION EXPRESSION

// const name = function(parametres){
// what need to do
// return result
// }
const toShowValue = function () {
  console.log(`my name is Sandra`)
}
toShowValue()
// getSum() // ТАК ДЕЛАТЬ НЕЛЬЗЯ, ПОТОМУ ЧТО ФУНКЦИЯ ХРАНИТСЯ В ПЕРЕМЕННОЙ
const getSum = function (a = 0, b = 0) {
  console.log(a, b)
  let result = a + b
  return `result: ${result}`
}

let result = getSum(1, 2)
console.log(result)

result = getSum(3, 4, 5)
console.log(result)

result = getSum(6)
console.log(result)

result = getSum()
console.log(result)

// ARROW FUNCTION
// const name = (parametres) => {
// what need to do
// return result
// }
// ||
// const name = (parametres) => result
const getPow = (num, pow) => num ** pow

result = getPow(2, 3)
console.log(result)

result = getPow(5, 3)
console.log(result)
// анонимная стрелочная функция
// (parametres) => {return result}  || () => result

// FUNCTION DECLARATION as a variable var are hoisting (поднятие в начало области)

// function name(parametres){
// what need to do
// return result
// }
let isModalOpen = false

result = toggleModal(isModalOpen)
console.log(result)

function toggleModal(value) {
  value = !value
  return value
}

isModalOpen = true
result = toggleModal(isModalOpen)
console.log(result)

// default params (a = 1, b = 2)
// pseudoarray arguments => Array.from(arguments)
const getResultsByTest = function () {
    console.log('псевдомассив', arguments)
    const normalArray = Array.from(arguments)
    console.log('массив', normalArray)
    
    let total = 0
    for (let arg of arguments) {
        // console.log(arg)
        if (Number(arg) > 0) {
            console.log('arg: ', Number(arg))
            total += Number(arg)
        }
    }
    return total
}
result = getResultsByTest('aaa@mail.com', '1', '0', '1', '0', '1', -1)
console.log(result)

const students = []
const scores = []

const getScores = (email, ...args) => {
    console.log('email', email)
    students.push(email)
    
    console.log('args', args)
    let sum = 0
    for (let num of args) {
        sum += Number(num)
    }
    scores.push(sum)
    return sum
}

result = getScores('a@mail.com', '0', '0', '1', '0', '1')
result = getScores('b@mail.com', '1', '0', '1', '0', '1')
result = getScores('c@mail.com', '1', '1', '1', '0', '1')
result = getScores('d@mail.com', '0', '0', '0', '0', '1')
result = getScores('e@mail.com', '0', '1', '1', '0', '1')
console.log('result', result)
console.log('students', students)
console.log('scores', scores)

console.log('min', Math.min(...scores))
console.log('max', Math.max(...scores))

let sumOfTests = 0
for (let value of scores) {
    console.log(value)
    sumOfTests += value
}
console.log('средний балл', sumOfTests / scores.length)

// GUARD CLAUSE if(condition) return
// global & local scopes (block & functional)

// name(arguments) for FUNCTION EXPRESSION & FUNCTION DECLARATION
// name(...args) for ARROW FUNCTION
