// CLOSURE - способность функции использовать переменные из области,
// где она была объявлена

function createCounter() {
  // LEXICAL ENVIRONMENT
  let current = 0

  function increment(value) {
    return (current += value)
  }

  function decrement(value) {
    if (current <= 0) return
    return (current -= value)
  }
  // LEXICAL ENVIRONMENT
  return { increment, decrement }
}

export default createCounter

// CARRING

// рассмотрим ситуацию, когда у пользователя есть личный кабинет
// у него в профиле есть информация о том, что он имеет дисконт,
// скажет 10%.
// Т.о. все расчеты товаров должны быть произведены с учетом такой скидки

// можно создать функцию
function getPrice(discount, price) {
  return (price * (100 - parseInt(discount))) / 100
}
// console.log(getPrice('10%', 10))
// console.log(getPrice('10%', 100))
// console.log(getPrice('10%', 1000))

// но в таком случае при расчете суммы заказа постоянно придется
// передавать в вызов одно и то же значение скидки

// перепишем нашу функцию через каррирование
function getTotalPrice(discount) {
  return (price) => {
    return (price * (100 - parseInt(discount))) / 100
  }
}
const discount10 = getTotalPrice('10%')
// console.log(discount10)
// console.log('discount 10%:', discount10(10))
// console.log('discount 10%:', discount10(100))
// console.log('discount 10%:', discount10(1000))

const discount15 = getTotalPrice('15%')
// console.log(discount15)
// console.log('discount 15%:', discount15(10))
// console.log('discount 15%:', discount15(100))
// console.log('discount 15%:', discount15(1000))
