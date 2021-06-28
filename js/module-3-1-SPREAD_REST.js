// SPREAD - распыление

// распыление элементов массива - Math.min(...arr)
const numbers = [1, 2, 3, 4, 5, 6, 7, 84]
// console.log(Math.max(...numbers))
// console.log(Math.min(...numbers))

// создание нового массива через паспыление исходного
const newNums = [...numbers]
// console.log('newNums', newNums)
// console.log(numbers === newNums)
// + slice() || добавить любое кол-во элементов
const bestArray = [...numbers, 'Js', ...newNums.slice(-1)]
// console.log(bestArray)

// распыление объектов {...obj1, ...obj2}, можно добавляя отдельные св-ва

const user = { name: 'Bill' }
const newUser = { company: ['IBM'] }

const superUser = { ...user, gerder: 'male', ...newUser }
// console.log('superUser', superUser)

// REST - сбор
// аргументы в функциях в полноценный массив
let result = getTotalResult(23, 45, 23, 45, 56, 15, 32, 43, 65)
console.log('result', result)

result = getTotalResult(22, 35, 1, 25, 31, 24, 44, 6, 78)
console.log('result', result)

function getTotalResult(...scores) {
  //   console.log('scores', scores)

  let total = 0
  for (let i = 0; i < scores.length; i++) {
    // console.log(scores[i])
    total += scores[i] // total = total + scores[i]
  }
  return total
}
