import refs from './refs.js'
const { increment, decrement, current } = refs
import createCounter from '../js/module-4-1.closure.js'
const counter1 = createCounter()

increment.addEventListener('click', () => {
  let value = counter1.increment(1)
  current.textContent = value
})

decrement.addEventListener('click', () => {
  let value = counter1.decrement(1)
  if (value) {
    current.textContent = value
  }
})
