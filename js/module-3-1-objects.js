// console.log(typeof {}, {})

const obj = {
  // props (key: value;)
  name: 'Sandra',
  lastName: 'Hrevtsova',
  age: 30,
}
// console.log(obj)

// Получить значения свойства в объекте
// console.log('lastName:', obj.lastName)
// console.log('name:', obj.name)
// console.log('age:', obj.age)

// console.log(obj['name'])
// console.log(obj['lastName'])
// console.log(obj['age'])

// Изменить значение свойства в объекте
obj.age = 31
// console.log(obj.age)

// console.log(obj)

// такого свойства пока еще нет - поэтому undefined
// console.log(obj.skills)

// а теперь добавлю это свойство в объект
obj.skills = []
// console.log(obj.skills)
// console.log(obj)

// добавить значения в свойство объекта
obj.skills.push('HTML', 'CSS', 'Js', 'React', 'Node')
// console.log(obj.skills)
// console.log(obj)

// Удалить ненужное свойство в объекте (ну вдруг!)
delete obj.age
// console.log(obj.age)
// console.log(obj)

// short props
let pat = 'cat'
const newObj = { pat }
// console.log(newObj)

// вычисляемые свойства obj[var]

let key1 = 'name'
let key2 = 'lastName'
let key3 = 'skills'

// console.log('key1', obj[key1])
// console.log('key2', obj[key2])
// console.log('key3', obj[key3])

console.log(obj)
// for in
for (let key in obj) {
  //   console.log('key', key)
  //   console.log('value: ', obj[key])
}
const object = {}
for (let key in object) {
  //   console.log('key', key)
}

// console.dir(Object)

// CREATE {}
const newObject = Object.create(obj)
// console.log(newObject)
newObject.pat = 'kitten'

// obj.hasOwnProperty()
// console.log('pat', newObject.hasOwnProperty('pat'))
// console.log('name', newObject.hasOwnProperty('name'))
// console.log('lastName', newObject.hasOwnProperty('lastName'))
// console.log('skills', newObject.hasOwnProperty('skills'))

for (let key in newObject) {
  if (newObject.hasOwnProperty(key)) {
    console.log('newObject key:', key)
  }
}

// Object.keys() - массив ключей
// Object.values() - массив значений
// Object.entries() - многомерный массив в виде
// [[key1, value1], [key2, value2], [key3, value3]]

const objKeys = Object.keys(obj)
console.log('objKeys', objKeys)

const objValues = Object.values(obj)
console.log('objValues', objValues)

const objEntries = Object.entries(obj)
console.log('objEntries', objEntries)

// & methods
// this

const user = {
  userName: 'Super User',

  //   ES6 method
  changeName(value) {
    console.log('userName before', this.userName)
    this.userName = value
    console.log('userName after', this.userName)
  },

  // ES5
  changeName: function (value) {
    console.log(value)
  },

  changeName: (value) => {
    console.log(value)
  },
}
user.changeName('Sandra')
// console.log(user.userName)

const { userName, changeName } = user
console.log(userName)
changeName('Bill')
