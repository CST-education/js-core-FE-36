class Const {
  constructor(param1 = 1, param2 = 0) {
    this.prop1 = param1
    this.prop2 = param2
  }
  method1() {
    console.log(this.prop1)
  }
  method2() {
    console.log(this.prop2)
  }
  method3() {
    console.log(`I am a method3`)
  }
}

const classObj = new Const()
console.log(classObj)

// EXAMPLES

class User {
  constructor(login, pass) {
    this._login = login
    this._pass = pass
    this._name = 'user'
    this._email = ''
    this._phone = ''
    this.balance = 0
  }
  // методы изменения свойств пользователя
  // после регистрации

  updateBalance(value = 0) {
    if (this.balance + value < 0) alert(`недостаточно средств на счету`)
    return (this.balance += value)
  }

  showLogin() {
    console.log(this.login)
  }
  updateLogin(value) {
    this.login = value
  }
  // алтернатива таких методов - это ГЕТТЕР И СЕТТЕР
  get login() {
    return this._login
  }
  set login(newLogin) {
    return (this._login = newLogin)
  }
  //   =
  get pass() {
    return this._pass
  }
  set pass(newPass) {
    return (this._pass = newPass)
  }
  //   =
  get name() {
    return this._name
  }
  set name(newName) {
    return (this._name = newName)
  }
  // =
  get email() {
    return this._email
  }
  set email(newEmail) {
    return (this._email = newEmail)
  }
  //   =
  get phone() {
    return this._phone
  }
  set phone(newPhone) {
    return (this._phone = newPhone)
  }
}

// в момент регистрации создаем объект нового пользователя
const newUser = new User('login', 'password')
console.log('newUser', newUser)
// зайдя в ЛК после регистрации, изменяем значения логина и пароля
// для отображения текущего значения мы выозем геттеры пароля и логина
console.log('текущее значение через геттер:', newUser.login)
console.log('текущее значение через геттер:', newUser.pass)
// для их изменения вызвем их сеттеры
newUser.login = 'my new Login'
newUser.pass = 'my new Password'
newUser.name = 'Sandra'
newUser.email = 'hrevtsova@yahoo.de'
newUser.phone = '0501231122'
console.log('текущее значение через геттер:', newUser.login)
console.log('текущее значение через геттер:', newUser.pass)

newUser.updateBalance(100)
newUser.updateBalance(-10)
newUser.updateBalance(-10)

console.log('newUser', newUser)
