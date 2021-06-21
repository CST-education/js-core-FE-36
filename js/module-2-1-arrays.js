// ARRAY

// create
const students = ['Marta', 'Dick', 'Samantha', 'George', 'Alice', 'Brad']
// console.log('students', students)

// length
// console.log('number of students:', students.length)

// get values of elements
const firstStudent = students[0]
// console.log('firstStudent:', firstStudent)
// // console.log('students', students)

// change values
students[0] = 'Philip'
// console.log('firstStudent:', firstStudent)
// console.log('students', students)

// for & for...of
//                                   k++
//                                   k += 1
for (let k = 0; k < students.length; k = k + 1) {
  // console.log(`student-${k + 1}:`, students[k])
  //                               students[0] - Philip
  //                               students[1]
  //                               students[2]
  //                               students[3]
  //                               students[4]
  //                               students[5] - Brad
}

let i = 0
//     (let book of books)
for (let student of students) {
  // console.log(`student-${(i += 1)}:`, student)
}

// break & continue
for (let j = 0; j < students.length; j++) {
  if (j % 2 !== 0) {
    continue
  }
  // console.log(`student-${j + 1}:`, students[j])
}

let value = 0
for (let student of students) {
  if (student === 'George') {
    break
  }
  // console.log(`student-${(value += 1)}:`, student)
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
// const myArray = myString.split()
// const myArray = myString.split("")
// const myArray = myString.split(' ')
const myArray = myString.split('a')

// console.log(myString, myArray)

let multiString = multiArray.join()
// console.log(multiArray, multiString)

// indexOf() & includes()
const games = [
  'NFS Undeground I',
  'Mortal Combat',
  'Game of Thrones',
  'Civilization V',
  'Half-Life',
  'Super Mario',
]
// console.log(games.indexOf('I')) // -1
// console.log(games.indexOf('Super Mario')) // 5

// console.log(games.includes('I')) // false
// console.log(games.includes('Super Mario')) // true

// add new elements: unshift()    push()
// -----------------
// | 0, 1, 2, 3, n |
// -----------------
// remove element:   shift()       pop()

const nums = [1, 2, 3, , 4, 5]
// console.log(nums)

const shiftNums = nums.shift()
// console.log(shiftNums, nums)
const poptNums = nums.pop()
// console.log(poptNums, nums)
const unshiftNums = nums.unshift(1)
// console.log(unshiftNums, nums)
const pushNums = nums.push(5)
// console.log(pushNums, nums)

// splice(START-IDX, HOW-MANY-ELs-to_CHANGE, el-1, ..., el-n)
const cutStudents = students.splice(0, 2) // cut 2 elements
// console.log('cutStudents', cutStudents)
// console.log('students', students)

const replaceStudents = students.splice(3, 1, 'Ann') // replace 1 element
// console.log('replaceStudents', replaceStudents)
// console.log('students', students)

const addStudents = students.splice(1, 0, 'Ben', 'Jack') // add 2 elements
// console.log('addStudents', addStudents)
// console.log('students', students)

// concat()
const startArr = [1, 2, 3]
const middleArr = [4, 5, 6]
const endArr = [7, 8, 9]

const fullArr = startArr.concat(middleArr, endArr)
// const fullArr = middleArr.concat(endArr, startArr)

// console.log('fullArr', fullArr)


// LOGICAL OPERATORS