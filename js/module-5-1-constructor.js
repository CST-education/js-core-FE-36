const Constructor = function (param) {
  this.prop = param
}
const newObj = new Constructor('my param')
console.log(newObj)
console.dir(Constructor)

//
function Const(param1 = 1, param2 = 0) {
  this.prop1 = param1
  this.prop2 = param2
  this.method1 = function () {
    console.log(this.prop1)
  }
}
console.log(Const.prototype)

Const.prototype.method2 = function () {
  console.log(this.prop2)
}

Const.prototype.method3 = function () {
  console.log(`I am a method3`)
}

const newObj2 = new Const('my param1', 'my param2')
console.log(newObj2)
newObj2.method1()

const newObj3 = new Const()
console.log(newObj3)
newObj3.method1()

// call & construct

// prototype

// const a = {}
// const b = { key: 'b' }
// const c = { key: 'c' }

// console.log(a)
// console.log(b)
// console.log(c)
// a[b] = 1
// console.log(a[b])

// a[c] = 2
// console.log(a[b])
// console.log(a)
