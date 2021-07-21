import data from '../db/users.js'
// TASK 1
// ============================
// Создать функцию, которая принимает массив элементов и получает
// из него все уникальные (без повторов) значения
const numbers = [1, 4, 6, 8, 4, 1, 2, 1, 3, 41, 1]
const words = ['hello', 'js', 'html', 'js', 'node', 'html', 'hello', 'js']

function getUniqueValues(arr) {
  //   console.log(arr)
  const newArr = []
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i]
    // console.log(item)
    if (!newArr.includes(item)) {
      newArr.push(item)
    }
  }
  return newArr
}
// console.log('RESULT-task-1', getUniqueValues(numbers))
// console.log('RESULT-task-1', getUniqueValues(words))

// Второй вариант через filter
function getUnVal(arr) {
  return arr.filter((el, idx, array) => array.indexOf(el) === idx)
}
// console.log(getUnVal(numbers))
// console.log(getUnVal(words))

// TASK 2
// ============================
// Создать функцию, которая принимает массив элементов и удаляет
// из него все уникальные (не повторяющиеся) значения
function deleteUniqueValues(arr) {
  //   console.log(arr)
  const x = []
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i]
    // console.log(x[item])
    if (x[item] === undefined) {
      x[item] = 0
    }
    x[item] += 1
    // [hello: 1, js: 2, html: 1, node: 1 ]
  }
  const results = []
  for (let i = 0; i < arr.length; i++) {
    console.log(`значение исходника: ${arr[i]} - повторений ${x[arr[i]]}`)
    if (x[arr[i]] > 1) {
      results.push(arr[i])
    }
  }
  return results
}

// [-, 0, -, -, 0, -, 0, -, 0, ...,  0]
//  0  1  2  3  4  5  6  7  8  ...  41

// console.log(deleteUniqueValues(numbers))
// deleteUniqueValues(words)

// Второй вариант через filter

function delUnVal(arr) {
  console.log(arr)
  return arr.filter((el, idx, array) => {
    // console.log(
    //   `curentIdx: ${array.indexOf(el)}- lastIdx: ${array.lastIndexOf(el)}`,
    // )
    let firstIdx = array.indexOf(el)
    let lastIdx = array.lastIndexOf(el)

    // with idx
    let condition = (!(firstIdx === idx) || !(lastIdx === idx)) && true

    // without idx
    // let condition = currentIdx !== lastIdx

    // let condition = array.indexOf(el) === array.lastIndexOf(el) // получить только уникальные
    // console.log(condition)
    return condition
  })
}
const delUn = (arr) =>
  arr.filter((el, idx, array) => array.indexOf(el) !== array.lastIndexOf(el))

// console.log(delUn(numbers))
// console.log(delUnVal(numbers))
// TASK 3
// ============================
// Создать функцию, возвращающуую значение среднего элемента в массиве,
// если элементов нечетное количесвто
// или среднее значение двух средних элементов - если количество элементов четное

function getMiddleValue(arr) {
  //   console.log(arr.length) // 10
  //   console.log(arr)

  //   let total = arr.reduce((total, el) => total + el, 0)
  //   console.log('total', total / arr.length)

  if (arr.length % 2 === 0) {
    console.log(arr.length / 2) // 5
    let prevElemIdx = arr.length / 2 - 1 // 4
    let nextElemIdx = arr.length / 2 // 5
    console.log(prevElemIdx, nextElemIdx)
    console.log('2 средних элемента', arr[prevElemIdx] + arr[nextElemIdx])
    let sum = arr[prevElemIdx] + arr[nextElemIdx] // 5
    let middleValue = sum / 2
    return middleValue
  }
  if (arr.length % 2 !== 0) {
    // console.log(Math.floor(arr.length / 2))
    let idx = Math.floor(arr.length / 2)
    return arr[idx]
  }
}
getMiddleValue(numbers)

// TASK 4
// 4-1

function getScByBorn(arr) {
  console.log(arr)
  return arr.filter((el) => {
    const { born } = el
    // console.log(born)
    console.log(born, born >= 1800 && born < 1900)
    if (born >= 1800 && born < 1900) {
      return el
    }
  })
}

const getByBorn = (arr) => arr.filter(({ born }) => born >= 1800 && born < 1900)
// console.log(getScByBorn(data))
// console.log(getByBorn(data))

// 4-2
function getTotalAge(arr) {
  console.log(arr)
  return arr.reduce((total, el) => {
    const { born, dead } = el
    let age = dead - born
    console.log(born, dead, age)
    return (total += age)
  }, 0)
}
// console.log(getTotalAge(data))

const getTotAge = (arr) =>
  arr.reduce((total, { born, dead }) => total + (dead - born), 0)

// console.log(getTotAge(data))

// 4-3

function sortByName(arr) {
  console.log(arr)
  return arr.sort((a, z) => {
    console.log(`${a.surname} ${a.name}`)
    let fullNameA = `${a.surname} ${a.name}`
    let fullNameZ = `${z.surname} ${z.name}`

    return fullNameA.localeCompare(fullNameZ) // по полному имени
    // return a.name[0] - z.name[0]
  })
}
console.log(sortByName(data))
