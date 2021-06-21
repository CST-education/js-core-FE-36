console.log(`task-1`)

console.log(1 && true)
console.log(1 && true && 'Js')
console.log(1 && true && 'Js' && Infinity)

console.log(1 && true && 'Js' && 0 && Infinity)

console.log(0 || false || '' || NaN || 1)

console.log(0 || (false && true))

console.log(0 || (true && 'Js') || ('' && 1))
//                    Js
//                                 ""
//             Js
//                             Js

// ============
const x = [1, 2, 3]
const y = x
console.log(x, y)
console.log(x === y)

x.push('JavaScript')
console.log(x, y)
console.log(x === y)

const z = x.slice()
console.log(z, y)
console.log(z === y)

x.push('React')
console.log(z, y)
console.log(z === y)

const arr1 = ['первый массив']
const arr2 = ['первый массив']

console.log(arr1 === arr2)
