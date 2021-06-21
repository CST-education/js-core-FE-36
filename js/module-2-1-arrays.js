// ARRAY

// create
const students = ['Marta', 'Dick', 'Samantha', 'George', 'Alice', 'Brad']
// console.log('students', students)

// length
// console.log('number of students:', students.length)

// get values of elements
const firstStudent = students[0]
// console.log('firstStudent:', firstStudent)
// console.log('students', students)

// change values
students[0] = 'Philip'
// console.log('firstStudent:', firstStudent)
// console.log('students', students)

// for & for...of
for (let i = 0; i < students.length; i = i + 1) {
  //   console.log(`student-${i + 1}:`, students[i])
}

let i = 0
for (let student of students) {
  //   console.log(`student-${(i += 1)}:`, student)
}
// break & continue
for (let i = 0; i < students.length; i = i + 1) {
  if (i % 2 === 0) {
    //   выведем только четные индексы
    continue
  }
  //   console.log(`student-${i + 1}:`, students[i])
}

let j = 0
for (let student of students) {
  if (student === 'Samantha') {
    //   перебираем элементы до определенного значения
    break
  }
  //   console.log(`student-${(j += 1)}:`, student)
}

// arrays in array
const multiArray = [
  [1, '1', 1],
  ['2', 2, '2'],
  [3, '3', 3],
]
// console.log('multiArray', multiArray)

// METHODS

// primitives by value & arrays by references
let num = 1

let myNumber = num

// console.log(
//   `num: ${num}, myNumber: ${myNumber}, num === myNumber;`,
//   num === myNumber,
// )

num = 0

// console.log(
//   `num: ${num}, myNumber: ${myNumber}, num === myNumber;`,
//   num === myNumber,
// )

const myArr = ['I', 'love', 'JavaScript']
const copyArr = myArr

// console.log(
//   `myArr: ${myArr}, copyArr: ${copyArr}, myArr === copyArr;`,
//   myArr === copyArr,
// )

myArr[3] = 'very much'
// console.log(
//   `myArr: ${myArr}, copyArr: ${copyArr}, myArr === copyArr;`,
//   myArr === copyArr,
// )

// slice(START-IDX, to-FINISH-IDX)
const newMulti = multiArray.slice() // all els copied
// console.log('newMulti', newMulti)
// console.log('multiArray === newMulti:', multiArray === newMulti)

const miniMulti = multiArray.slice(1, 2) // only 1 el copied
// console.log('miniMulti', miniMulti)
// console.log('multiArray === miniMulti:', multiArray === miniMulti)

// split() & join()
let myString = 'I love JavaScript'
const myArray = myString.split()
// const myArray = myString.split("")
// const myArray = myString.split(' ')
// const myArray = myString.split('a')

// console.log(myString, myArray)

// indexOf() & includes()
const games = [
  'NFS Undeground',
  'Mortal Combat',
  'Game of Thrones',
  'Civilization V',
  'Half-Life',
  'Super Mario',
]
// console.log(games.indexOf('I'))
// console.log(games.indexOf('Super Mario'))

// console.log(games.includes('I'))
// console.log(games.includes('Super Mario'))

// add new elements: push() & unshift()
// remove element: pop() & shift()

// splice(START-IDX, HOW-MANY-ELs-to_CHANGE, el-1, ..., el-n)
const cutStudents = students.splice(0, 3) // cut 3 elements
// console.log('cutStudents', cutStudents)
// console.log(students)

const replaceStudents = students.splice(0, 1, 'Ann') // replace 1 element
// console.log('replaceStudents', replaceStudents)
// console.log(students)

const addeStudents = students.splice(1, 0, 'Ben', 'Jack') // add 2 elements
// console.log('addeStudents', addeStudents)
// console.log(students)

// concat()
const startArr = [1, 2, 3]
const middleArr = [4, 5, 6]
const endArr = [7, 8, 9]

const fullArr = startArr.concat(middleArr, endArr)

// console.log('fullArr', fullArr)
