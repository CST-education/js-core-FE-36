const b = document.querySelector('body')
// console.log(myVar)
// console.dir(b)

let myVar = 1
// console.log(myVar)
let a = 3
if (a > 0) {
  //   console.log(`Hello`)
}
// console.log(Boolean(''))
// console.log(Boolean(0))
// console.log(Boolean(NaN))
// console.log(Boolean(null))
// console.log(Boolean(undefined))
// console.log(Boolean(false))
// console.log([1, 2, 3, 4, 5])
function getSum(a) {
  //   console.log(arguments)
  //   console.log([...arguments])
  //   console.log(Array.from(arguments));
  let i = 0

  function showResult() {
    console.log(2 + 3)
  }

  return { showResult }
}
// console.dir(getSum)
// getSum(2, 3, 4, 566)

// ARROW FUNCTION
const getRes = () => {
  // нет arguments, но ...args
  //   console.log(this)
  const getResult = () => this
  return { getResult }
}
const result = getRes()
// console.log(result)
// console.log(result.getResult())
// есть быстрый (не явный) возврат

const obj = {
  name: 'User',
  getData() {
    // console.log('ES6 method:', this.name)
  },
  showName: () => {
    // console.log(this)
    // console.log(obj.name)
    console.log('arrow', this.name)
  },
}

const newUser1 = {
  name: 'Oleg',
}

const newUser2 = {
  name: 'Denis',
}

obj.getData()
obj.getData.call(newUser1)
obj.getData.call(newUser2)
// call(obj, arg1, ..., argN)
// apply(obj, [ard1, ..., argN])
const args = [1, 2, 3]
function greet() {
  return `${this.name} is my name`
}
// console.log(greet.call(newUser2, ...args))
// console.log(greet.apply(newUser1, args))
// obj.showName()

function toShowLK(cb) {
  b.style.color = 'green'
  return cb()
}
console.log(toShowLK(greet.bind(newUser1)))
// ФУНКЦИОНАЛЬНЫЕ МЕТОДЫ МАССИВА
import users from '../../db/newUsers.js'
// console.log(users);

// Destructuring - Клименко Игорь и Нелли
const user = {
  name: 'Sandra',
  age: 31,
  skills: {
    dev: ['html'],
  },
  friends: [
    {
      name: 'Masha',
      age: 29,
    },
    {
      name: 'Tanya',
      age: 37,
    },
    {
      name: 'Sasha',
      age: 36,
    },
    {
      name: 'Max',
      age: 32,
    },
  ],
}

let dev = 'CSS'
console.log(user.skills.dev)
const { dev: devProp } = user.skills
console.log(devProp)
// function getFriends({ friends }) {
//   friends.map((el) => {
//     console.log(el)
//   })
// }
// getFriends(user)

function getFriends(arr) {
  arr.map((el) => {
    // console.log(el)
  })
}

const { friends } = user
getFriends(friends)

// PROTOTYPE
class Product {
  constructor(price) {
    this.price = price
  }
  changePrice(value) {
    console.log('PRICE:', this.price)
    return (this.price = value)
  }
}

const prod1 = new Product(10)
console.log(Product.prototype.__proto__.hasOwnProperty);
console.log(prod1.toSource())

// toShowLK(prod1.changePrice.bind(prod1))

// example
const inventory = {
  items: ['Knife', 'Gas mask'],
  add(itemName) {
    console.log(`Adding ${itemName} to inventory`)

    this.items.push(itemName)
  },
  remove(itemName) {
    console.log(`Removing ${itemName} from inventory`)

    this.items = this.items.filter((item) => item !== itemName)
  },
}

const invokeInventoryAction = function (itemName, action) {
  console.log(`Invoking action on ${itemName}`)
  action(itemName)
}

// invokeInventoryAction('Medkit', inventory.add.bind(inventory))
// Invoking action on Medkit
// Adding Medkit to inventory

// console.log(inventory.items) // ['Knife', 'Gas mask', 'Medkit']

// invokeInventoryAction('Gas mask', inventory.remove.bind(inventory))
// Invoking action on Gas mask
// Removing Gas mask from inventory

// console.log(inventory.items) // ['Knife', 'Medkit']

// ARRAY METHODS
// let number = 0
// const getFriends = (users) => {
//   const allfriends = users.flatMap((user) => user.friends)

//   const friendsList = allfriends.filter(
//     (friend, index, array) => array.indexOf(friend) === index,
//   )
// }

// const getFriends = (users) => {
//   const allfriends = users.flatMap((user) => user.friends)
//   const friendsList = []
//   allfriends.filter((friend, index, array) => {
//     if (array.indexOf(friend) === index) {
//       friendsList.push(friend)
//     }
//   })
//   return friendsList
// }

// Rest & Spread

// Марина Трипецкая
// написать функцию, которая принимает два массива и объединяет их, беря
// элементы из каждого массива по очереди
// [a, b, c, d, e], [1, 2, 3, 4, 5] => [a, 1, b, 2, c, 3, d, 4, e, 5]
// [1, 2, 3], [a, b, c, d, e, f] => [1, a, 2, b, 3, c, d, e, f]

function concatArray(arr1, arr2) {
  console.log(arr1, arr2)

  const newArr = []
  for (let i = 0; i < arr1.length || i < arr2.length; i++) {
    // console.log(arr1[i], arr2[i])
    if (arr1[i] !== undefined) newArr.push(arr1[i])
    if (arr2[i] !== undefined) newArr.push(arr2[i])
  }
  return newArr
}
console.log(Function.prototype.toSource())

// console.log(concatArray(['a', 'b', 'c', 'd', 'e'], [1, 2, 3, 4, 5]))
console.log(concatArray([1, 2, 3], ['a', 'b', 'c', 'd', 'e']))
// function newArr(arr1, arr2) {
//   //   console.log(arr1, arr2)
//   const newArr = []
//   for (let i = 0; i < arr1.length || i < arr2.length; i++) {
//     if (arr1[i] !== undefined) newArr.push(arr1[i])
//     if (arr2[i] !== undefined) newArr.push(arr2[i])
//   }
//   return newArr
// }
// console.log(newArr(['a', 'b', 'c', 'd', 'e'], [1, 2, 3, 4, 5, 6, 7]))
// console.log(newArr([1, 2, 3], ['a', 'b', 'c', 'd', 'e']))
