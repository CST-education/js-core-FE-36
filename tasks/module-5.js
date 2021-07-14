// Создать конструктор с общим набором свойств и методов для создания
// экземпляров товаров:
// свойства: title, price, category,
// методы: showTitle, showCategory, showPrice
// updateTitle, updateCategory, updatePrice
function MainProduct(title = 'product', category = 'cat', price = 0) {
  this.title = title
  this.category = category
  this.price = price
}
MainProduct.prototype.showTitle = function () {
  console.log(this.title)
}
MainProduct.prototype.showCategory = function () {
  console.log(this.category)
}
MainProduct.prototype.showPrice = function () {
  console.log(this.price)
}
MainProduct.prototype.updateTitle = function (value) {
  return (this.title = value)
}
MainProduct.prototype.updateCategory = function (value) {
  return (this.category = value)
}
MainProduct.prototype.updatePrice = function (value) {
  return (this.price = value)
}

// создать конструктор на базе исходного для весовых товаров
function WeightProduct(title, category, price, weight) {
  MainProduct.call(this, title, category, price)
  this.weight = weight
}
WeightProduct.prototype = Object.create(MainProduct.prototype)
WeightProduct.prototype.constructor = WeightProduct

WeightProduct.prototype.incrementWeight = function (value) {
  return (this.weight += value)
}
WeightProduct.prototype.decrementWeight = function (value) {
  if (this.weight - value >= 0) return (this.weight -= value)
}
const sugar = new WeightProduct('sugar', 'sweets', 25, 1)
// console.log(sugar)

// создать конструктор на базе исходного для товаров поштучно
function CountProduct(count, title, category, price) {
  MainProduct.call(this, title, category, price)
  this.count = count
}
CountProduct.prototype = Object.create(MainProduct.prototype)
CountProduct.prototype.constructor = CountProduct

CountProduct.prototype.incrementCount = function (value) {
  return (this.count += value)
}
CountProduct.prototype.decrementCount = function (value) {
  if (this.count >= 0) return (this.count -= value)
}
const mango = new CountProduct(5, 'mango', 'fruits', 50)
console.log(mango)
