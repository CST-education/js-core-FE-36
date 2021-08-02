let message
let value1
let value2
let operator
let result

// к числу приводится только первое введенное значение
value1 = prompt('Введите первое число')
console.log('перед циклом', value1)
// if(!isNaN(value1)){

// }

while (value1.trim()) {
  if (value1 == '' || value1 == 'Infinity') {
    value1 = prompt('Вы ввели не число. Введите первое число').trim()
    continue
  } else {
    // делаем проверку на "плохое значение" и если оно таки пришло,
    break
    // то продолжаем (continue) выполнение цикла
  }
  console.log('в цикле', value1)
}
console.log('за циклом', value1)

// value2 = Number(prompt('Введите второе число'))
// while (isNaN(value2)) {
//   value2 = prompt('Вы ввели не число. Введите второе число')
// }

// operator = prompt('Введите знак действия (+, -, *, /')
// while (operator !== '+' || '-' || '*' || '/') {
//   operator = prompt(
//     'Введен некорректный знак действия. Введите знак действия (+, -, *, /)',
//   )
// }

// switch (operator) {
//   case '+':
//     result = value1 + value2
//     console.log(result)
//     console.log(`Результат суммы чисел = ${result}`)
//     break
//   case '-':
//     result = value1 - value2
//     console.log(`Результат разницы чисел = ${result}`)
//     break
//   case '*':
//     result = value1 * value2
//     console.log(`Результат умножения чисел = ${result}`)
//     break
//   case '/':
//     result = value1 / value2
//     console.log(`Результат деления чисел = ${result}`)
//     break

//   default:
//     console.log('...')
// }

//

// let totalSpent = 100
// const payment = 12
// const valuta = 'грн.'
// let discount
// let userDiscountStatus

// if (totalSpent >= 100 && totalSpent < 1000) {
//   discount = 2
//   userDiscountStatus = 'бронзовый'
// } else if (totalSpent >= 1000 && totalSpent < 5000) {
//   discount = 5
//   userDiscountStatus = 'серебрянный'
// } else if (totalSpent >= 5000) {
//   discount = 10
//   userDiscountStatus = 'золотой'
// } else {
//   discount = 0
// }

// const findingPercOfNum = (payment / 100) * discount
// const totalPrice = (payment - findingPercOfNum).toFixed(2)

// if (discount === 0) {
//   console.log(
//     `У вас еще нет партнерской скидки, чтобы получить партнерскую програму общая сума потраченого должна составлять минимально 100${valuta} :(`,
//   )
//   console.log(
//     `Ваша общая сумма потраченного у нас на даное время: ${totalSpent}${valuta}`,
//   )
//   console.log(`Оформляем заказ на сумму ${payment}${valuta} БЕЗ скидки`)
//   console.log(`Конечная сумма: ${totalPrice}${valuta}`)
// } else {
//   console.log(
//     `Ура, вы наш ${userDiscountStatus} партнер, у вас действует скидка ${discount}%`,
//   )
//   console.log(
//     `Оформляем заказ на сумму ${payment}${valuta} со скидкой ${discount}%`,
//   )
//   console.log(`Конечная сумма со скидкой: ${totalPrice}${valuta}`)
// }

// totalSpent += payment
// console.log(
//   `Если вы совершите покупку ваша общая сума потраченого станет ${totalSpent}${valuta}`,
// )
