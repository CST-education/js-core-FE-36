import data from '../db/social-links-info.js'
// console.log(data)

function createSocialListLinks(arr) {
  // ul
  const list = document.createElement('ul')
  list.className = 'socials-list list'
  // li
  //   console.log(arr)
  const items = arr.map((elem) => {
    // console.log(elem)
    // console.log(elem.class)

    const item = document.createElement('li')
    item.className = elem.class
    // console.log(item.classList)
    // a
    const link = document.createElement('a')
    // console.log(link)
    // href="#"
    link.setAttribute('href', elem.link.href)
    // class="link"
    link.classList.add(elem.link.class)
    // aria-label="ссылка на instagram"
    link.setAttribute('aria-label', elem.link.ariaLabel)
    // console.log(item)

    const icon = document.createElement('svg')
    icon.classList.add(elem.icon.class)
    const { href } = elem.icon
    // svg
    // class="footer-icon"
    // use
    // href="./images/sprint.svg#icon-instagram"
    const svg = `<svg class="footer-icon"><use href=${href}></use></svg>`
    // теперь все встраиваем друг в друга, согласно разметке
    icon.insertAdjacentHTML('afterbegin', svg)
    link.append(icon)
    item.append(link)
    return item
  })
  // console.log(items)
  list.append(...items)
  return list

}
const list = createSocialListLinks(data)
console.log(list)

const slWrapper = document.querySelector('.sl-wrapper')
console.log(slWrapper)
slWrapper.append(list)
