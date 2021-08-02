// 'use strict'
// this - local variable

// this - is a pronoun of object for his props & methods
// console.log('this:', this) // undefined 'use strict' || type="module" : window
// console.log(this)

const user = {
  name: 'Sandra',
  age: 31,

  showInfo() {
    console.log(`user ${this.name} is ${this.age}`)
  },
}

// console.log(user.name)
// user.showInfo()

// Контекст (this) определяется при вызове функции (expression || declaration)
// - т.е. по факту срабатывания
// для arrow function ()=>{} - при объявлении

function showThisByDecl() {
  console.log(`'this' by declaration:`, this)
}
// showThisByDecl()
user.newMethod = showThisByDecl
// user.newMethod()

const showThisByArrow = () => {
  console.log(`'this' by arrow:`, this)
}
// showThisByArrow()
user.newArrowMethod = showThisByArrow
// user.newArrowMethod()

// ПРИВЯЗКА КОНТЕКСТА (объекта, с кем работаем в этом вызове)
function sayHello(manager, doing) {
  console.log(`Hello ${this.name}, my name is ${manager}, i am ${doing}`)
}
// sayHello() // ERROR

// // 1 - мгновенный вызов ( на том же уровне) - call || apply
// // call(object, arg1, ..., argN)
// sayHello.call(user, 'Rafael', 'glad to see you')

// // apply(object, [arg1, ..., arg])
// sayHello.apply(user, ['Rafael', 'glad to see you'])

// 2 - если надо передать как callback - bind
// bind(object)

function getUserInfo(cb) {
  cb()
}
// getUserInfo(user.showInfo.bind(user))

const user1 = {
  name: 'Paris',
  age: 33,
}
// getUserInfo(user.showInfo.bind(user1))

const user2 = {
  name: 'Salma',
  age: 18,
}
// getUserInfo(user.showInfo.bind(user2))

// EXAPMLE 1
const mainProduct = {
  showPrice() {
    console.log('product price:', this.price)
  },
  updatePrice(value) {
    if (this.price === value) {
      return `Цена та же!`
    }
    return (this.price = value)
  },
  getCost(count = this.count) {
    if (this.count >= count) {
      return this.price * count
    } else {
      return `товара нет в достаточном количестве`
    }
  },
}

const product1 = {
  name: 'banana',
  price: 20,
  count: 10,
}
const product2 = {
  name: 'orange',
  price: 30,
  count: 5,
}
mainProduct.showPrice.call(product1)
mainProduct.showPrice.apply(product2)

console.log(mainProduct.updatePrice.call(product1, 20))
mainProduct.updatePrice.call(product1, 44)
mainProduct.showPrice.call(product1)

console.log(mainProduct.getCost.call(product1, 10))
console.log(mainProduct.getCost.call(product1, 11))

console.log(mainProduct.getCost.apply(product2, [6]))
console.log(mainProduct.getCost.apply(product2, [5]))

const products = [{ name: 'lemon', price: 45, count: 20 }]
products.push(product1, product2)
console.log(products)
// функция которая считает общую стоимость товаров в массиве
function getFullCost(arr) {
  let total = 0
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i])
    // console.log(mainProduct.getCost.call(arr[i]))
    total += mainProduct.getCost.call(arr[i])
  }
  //   console.log(total)
  return total
}
console.log('getFullCost', getFullCost(products))
