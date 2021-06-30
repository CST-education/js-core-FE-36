// TASK 1
// ============================
// Создать объект товара со свойствами name, price,
// quantity и методами, которые показывают их текущее значение
// и методами, что изменяют их значения.
// code =========
const product = {
  // PROPERTIES
  name: '',
  price: 0,
  quantity: 0,

  //   METHODS
  showName() {
    console.log('this.name: ', this.name)
  },
  changeName(value) {
    this.name = value
  },

  showPrice() {
    console.log('this.price:', this.price)
  },
  changePrice(newPrice) {
    this.price = newPrice
  },

  showQuantity() {
    console.log('this.quantity: ', this.quantity)
  },
  changeQuantity(count) {
    this.quantity = count
  },
}
// console.log(product)

// checkup =========
// product.showName()
// product.changeName('Peach')
// product.showName()

product.changePrice(55)
// product.showPrice()

product.changeQuantity(3)
// product.showQuantity()

// TASK 2
// ============================
// Добавь к объекту product метод, который высчитывает
// стоимость общего количества текущего товара
// code =========
product.getTotalPrice = function () {
  return this.price * this.quantity
}

// checkup =========
// console.log(product.getTotalPrice())

// TASK 3
// Записать в переменную totalPrice общую стоимость
// всех товаров в массиве products
// ============================
const products = [
  { name: 'Grape', price: 80, quantity: 2 },
  { name: 'Banana', price: 30, quantity: 5 },
  { name: 'Kiwi', price: 100, quantity: 1.5 },
]
// code =========
let totalPrice = 0
for (let i = 0; i < products.length; i++) {
  const { price, quantity } = products[i]
  totalPrice += price * quantity
}

// checkup =========
// console.log('totalPrice', totalPrice)

// TASK 4
// Создать функцию, которая принимает массив продуктов, название товара и его количество
// и выводит его стоимость, если товара достаточно или сообщает о том,
// что товара нет на складе в указанном количестве
// Написать функцию тремя способами (Expression, Declaration & Arrow)
// ============================
const allProducts = [
  { name: 'bread', price: 20, quantity: 100 },
  { name: 'milk 2,5%', price: 30, quantity: 24 },
  { name: 'cheese', price: 300, quantity: 10 },
  { name: 'chorizo', price: 560, quantity: 4 },
  { name: 'lemon', price: 60, quantity: 9 },
  { name: 'lavazza', price: 250, quantity: 24 },
]
// code =========
function getProductCost(products, productName, productQuantity) {
  for (let i = 0; i < products.length; i++) {
    // console.log(products[i])
    const { name, quantity, price } = products[i]
    if (name === productName.toLowerCase()) {
      if (productQuantity <= quantity) {
        // console.log(price * productQuantity)
        return price * productQuantity
      } else {
        return `${productName} is not enough`
      }
    }
  }
  return `no match any ${productName}`
}

const getProductCost1 = function (products, productName, productQuantity) {
  for (let i = 0; i < products.length; i++) {
    const { name, quantity, price } = products[i]
    if (name === productName.toLowerCase())
      return productQuantity > quantity
        ? `${productName} is not enough`
        : price * productQuantity
  }
  return `no match any ${productName}`
}

const getProductCost2 = (products, productName, productQuantity) => {
  for (let i = 0; i < products.length; i++) {
    const { name, quantity, price } = products[i]
    if (name === productName.toLowerCase())
      return productQuantity > quantity
        ? `${productName} is not enough`
        : price * productQuantity
  }
  return `no match any ${productName}`
}

// checkup =========
// console.log(getProductCost2(allProducts, 'Bread', 10))
// console.log(getProductCost2(allProducts, 'Lemon', 10))
// console.log(getProductCost2(allProducts, 'Orange', 10))

// TASK 5
// ============================
// Создать функцию, которая принимает различное количество аргументов
// возвращает объект со свойствами из полученных аргументов
// code =========
function createObject() {
  //   console.log(arguments)
  const [name, age, skills] = arguments
  //   console.log(name, age, skills)
  const obj = { name, age, skills }
  return obj
}

const createObject1 = function () {
  const [name, age, skills] = arguments
  return { name, age, skills }
}

const createObject2 = (...params) => {
  const obj = {}
  for (let i = 0; i < params.length; i++) {
    obj[`key-${i + 1}`] = params[i]
  }
  return obj
}

// checkup =========

// console.log(createObject('Sandra', 30, ['HTML', 'CSS', 'Js']))
// console.log(createObject2('Sandra', 30, ['HTML', 'CSS', 'Js'], { friends: [] }))

// ADDITIONAL
const o = {
  x: 3,
  y: 2,
  result: 0,
  z: null,

  showResult() {
    console.log(this.result)
  },
  getPow() {
    return this.x ** this.y
  },

  changeZ(val) {
    this.z = val
  },
}

console.log(o.getPow())
o.changeZ(123456)
console.log(o.z)
