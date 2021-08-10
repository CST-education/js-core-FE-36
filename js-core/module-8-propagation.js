// EVENT PROPAGATION

// click, input
// | WINDOW
// 🠗 1 - Capture
// * 2 - Target
// 🠗 3 - Bubbling
// | WINDOW

// x focus & blur

// // Old version with forEach
// const allBtns = document.querySelectorAll('.button')
// // const allBtns = document.getElementsByClassName('button')
// // console.log(allBtns)

// // Delegation by parent
// // ul
// const buttonsParent = document.querySelector('.filter-menu')
// // console.log(buttonsParent)
// // div.container
// const sectionWrapper = document.querySelector('.filter .container')
// // console.log(sectionWrapper)

// const filterSection = document.querySelector('.filter')
// // console.log(filterSection)

// buttonsParent.addEventListener('click', (e) => {
//   //   console.log(e)
//   //   console.dir(e.target)
//   console.log('UL - элемент, на который нажали:', e.target) // элемент, на котором
//   //   и произошел клик
//   if (e.target.nodeName === 'BUTTON') {
//     e.target.classList.toggle('activeBtn')
//   } else {
//     console.error(`ВЫ НАЖАЛИ НЕ НА КНОПКУ!!!`)
//   }
//   console.log(
//     'UL - элемент-родитель, на котором висит слушатель:',
//     e.currentTarget,
//   )
// })
// sectionWrapper.addEventListener('click', (e) => {
//   console.log('DIV - элемент, на который нажали:', e.target) // элемент, на котором

//   console.log(
//     'DIV - элемент-родитель, на котором висит слушатель:',
//     e.currentTarget,
//   )
// })

// filterSection.addEventListener('click', (e) => {
//   //   e.stopPropagation()
//   e.stopImmediatePropagation()
//   console.log('SECTION - элемент, на который нажали:', e.target) // элемент, на котором

//   console.log(
//     'SECTION - элемент-родитель, на котором висит слушатель:',
//     e.currentTarget,
//   )
// })
// window.addEventListener('click', (e) => {
//   console.log('window - элемент, на который нажали:', e.target) // элемент, на котором

//   console.log(
//     'window - элемент-родитель, на котором висит слушатель:',
//     e.currentTarget,
//   )
// })
//
// const featureList = document.querySelector('.feature-list')
// console.log(featureList)

// e.target & e.currentTarget

// e.stopPropagation()

// e.stopImmediatePropagation()
