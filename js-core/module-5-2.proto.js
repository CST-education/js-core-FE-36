// ИСХОДНЫЙ КОНСТРУКТОР
function MainUser(name = 'user') {
  this.name = name
}
MainUser.prototype.showName = function () {
  console.log(this.name)
}

const mainUser = new MainUser('Sandra')
mainUser.showName()

// НАСЛЕДУЕМЫЙ КОНСТРУКТОР
function CurrentUser(age, name) {
  // для привязки к исходному конструктору
  MainUser.call(this, name)
  this.age = age
}

CurrentUser.prototype = Object.create(MainUser.prototype)
// {} = Object.create({..., __proto__: {MainUser.prototype}})
CurrentUser.prototype.constructor = CurrentUser
CurrentUser.prototype.updateAge = function () {
  return (this.age += 1)
}
const currentUser = new CurrentUser(30, 'Nastya')
currentUser.showName() //пока нельзя вызывать
