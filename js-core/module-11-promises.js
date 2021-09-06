// PROMISE - object текущего состояния асинхронной операции
// console.dir(Promise)
const promise = new Promise((resolve, reject) => {
  let condition = 0
  setTimeout(() => {
    if (condition > 1) {
      resolve('Success')
    } else {
      reject('Error')
    }
  }, 3000)
})
console.log(promise)

// function callback(resolve, reject) {
//   let condition = 0
//   setTimeout(() => {
//     if (condition > 1) {
//       resolve('Success')
//     } else {
//       reject('Error')
//     }
//   }, 3000)
// }
promise
  .then(
    (handleResult) => {
      console.log('1', handleResult)
      return `ok-1`
    },
    // (handleError) => {
    //   console.log('1', handleError)
    //   return `err-1`
    // },
  )
  .then(
    (secondRes) => {
      console.log('2 then:', secondRes)
    },
    // (secondError) => {
    //   console.log('2', secondError)
    // },
  )
  .catch((error) => {
    console.log(error)
  })
  .finally(() => {
    console.log(`Финалим обработку промиса независисмо от результата`)
  })
// Pending - в ожидании
// Settled: Fullfiled & Rejected- выполнен успешно или с ошибкой

// объявление промиса
// let x = new Promise((resolve, reject) =>
// { setTimeout(()=> resolve('ok'), 1000)})

// обработка промиса, когда он станет Settled не важно - успешно или с ошибкой
// x.then(cb)
// cb(onResolve, obReject)

// .catch(cb)
// cb(obReject)

// .finally(()=>{})

// Цепочка промисов - много .then() по одному на каждую операцию,
// в конце .catch() & .finally()

// Статические методы
// Когда нужно обработать выполнение нескольких промисов одновременно
