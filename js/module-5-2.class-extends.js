// ИСХОДНЫЙ КЛАСС
class MainUser {
  constructor(name = 'user') {
    this.name = name
  }
  showName() {
    console.log(this.name)
  }
  toGetSum(a, b) {
    return a + b
  }
}
const mainUser = new MainUser('Sandra')
// mainUser.showName()

// НАСЛЕДУЕМЫЙ КЛАСС

class CurrentUser extends MainUser {
  static name = 'class Current'
  static showClassName() {
    console.log(this.name)
  }
  constructor(age, zzz) {
    super(zzz)
    this.age = age
  }
  updateAge() {
    // return (this.age += 1)
    return super.toGetSum(this.age, 1)
  }
}
const currentUser = new CurrentUser(30, 'zzzzzz')
// currentUser.showName()
// console.log(currentUser.updateAge())
// console.dir(CurrentUser)
// console.log(CurrentUser.name);
// console.log(currentUser)
// currentUser.showClassName()// нельзя вызвать статический метод на экземпляре

// ===========================
// const myFunc = function () {
//   console.log(`Это функциональное выражение без имени`)
// }
// myFunc()
// console.dir(myFunc)

// function declFunc() {
//   console.log('Функция без переменной')
// }
// console.dir(declFunc)