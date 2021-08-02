class MainProduct {
  constructor(title = 'product', category = 'cat', price = 0) {
    this._title = title
    this._category = category
    this._price = price
  }
  get title() {
    console.log(this._title)
  }
  set title(value) {
    return (this._title = value)
  }

  get category() {
    console.log(this._category)
  }
  set category(value) {
    return (this._category = value)
  }

  get price() {
    console.log(this._price)
  }
  set price(value) {
    return (this._price = value)
  }
}

class WeightProduct extends MainProduct {
  constructor(weight, title, category, price) {
    super(title, category, price)
    this.weight = weight
  }
  incrementWeight(value) {
    return (this.weight += value)
  }
  decrementWeight(value) {
    if (this.weight - value >= 0) return (this.weight -= value)
  }
}
const bananas = new WeightProduct(3, 'Ecuador', 'fruits', 30)
// console.log(bananas)

class CountProduct extends MainProduct {
  constructor(count, title, category, price) {
    super(title, category, price)
    this.count = count
  }
  incrementCount(value) {
    return (this.count += value)
  }
  decrementCount(value) {
    if (this.count >= 0) return (this.count -= value)
  }
}
const snikers = new CountProduct(5, 'Snikers', 'sweets', 22)
console.log(snikers);