function createCounter() {
  // Лексическое окружение функции при объявлении

  let current = 0

  function increment(value) {
    // current доступна функции increment всегда,
    // где бы она не была вызвана
    return (current += value)
  }

  function decrement(value) {
    // current доступна функции decrement всегда,
    // где бы она не была вызвана
    if (current === 0) return
    return (current -= value)
  }

  return { increment, decrement }
}

export default createCounter
