// DOM Navigation

// console.log(document)
// console.dir(document)
// // console.log(document.body.parentNode) // html
// console.log(document.parentNode) // null

// console.log(document.childNodes)
// // console.log(document.body.children) // 9 elems

// console.log(document.firstChild)
// // console.log(document.firstElementChild)

// console.log(document.lastChild)
// // console.log(document.lastElementChild)

// console.log(document.previousSibling) // null
// console.log(document.body.previousSibling) // #text

// // console.log(document.previousElementSibling)

// console.log(document.body.nextSibling) // null
// console.log(document.nextSibling) // null

// console.log(document.nextElementSibling)

// ========= getting 1 || first DOM node => Object ==============
// document.querySelector("tag-name")
const logoByTag = document.querySelector('span')
// console.log(logoByTag)

// document.querySelector(#id)
const logoByIdquery = document.querySelector('#headerLogo')
// console.log(logoByIdquery)
// // document.getElementById(id)
const logoById = document.getElementById('headerLogo')
// console.log(logoById)

// document.querySelector(.class)
const logoByClass = document.querySelector('.text')
// console.log(logoByClass)

// document.querySelector([attribute])
const logoLink = document.querySelector('[href="./index.html"]')
// console.log(logoLink)

// getting ALL DOM nodes by... => PSEUDOARRAY
// document.querySelectorAll(tag-name)
const allLinksByTag = document.querySelectorAll('a')
// console.log(allLinksByTag)

// document.querySelectorAll(#id) // не актуально, ибо идентификатор должен быть уникальным

// document.querySelectorAll(.class)
const linksClassLink = document.querySelectorAll('.link')
// console.log(linksClassLink)
// // document.getElementsByClassName(class)
const linksByClassName = document.getElementsByClassName('link')
// console.log(linksByClassName)

// document.querySelectorAll([attribute])
const elemsWithSRC = document.querySelectorAll('[src]')
// console.log(elemsWithSRC);

// PROPERTIES of NODES
// attributes => properties
// id, name, value, checked, src, href, hidden, etc...
// console.dir(logoByTag)
// console.log(logoByTag.id)
// console.log(logoByTag.classList)
// console.log(logoByTag.className)

// .attributes => pseudoArr
// console.log(logoByTag.attributes)
// GET
// .hasAttribute(attr) => true || false
// console.log(logoByTag.hasAttribute('name')) // false
// console.log(logoByTag.hasAttribute('id')) // true
// .getAttribute(attr) => attr.value
// console.log(logoByTag.getAttribute('id')) // headerLogo
// SET || CREATE
// .setAttribute(attrName, value)
logoByTag.setAttribute('name', 'logo-span')
// console.log(logoByTag.hasAttribute('name')) // true
// console.log(logoByTag.getAttribute('name')) // headerLogo

logoByTag.setAttribute('data-myAttr1', 'user')
logoByTag.setAttribute('data-myAttr2', '30')
logoByTag.setAttribute('data-myAttr3', 'Js')

// DELETE
// .removeAttribute(attr) => attr.value
logoByTag.removeAttribute('name')
// console.log(logoByTag.hasAttribute('name')) // false
// console.log(logoByTag.attributes)

// // data-attr
// // dadaset = {attr: value}
// console.log(logoByTag.dataset)
// console.log(logoByTag.dataset.myattr1)
// console.log(logoByTag.dataset.myattr2)
// console.log(logoByTag.dataset.myattr3)

// ============= other props ===========
// .textcontent
// console.dir(logoByTag)
// console.log(logoByTag.textContent)
logoByTag.textContent = 'Logo'
// .style => {color, backgroundColor, etc}
logoByTag.style.color = 'pink'

// .classList
// console.log(logoByTag.className)
// console.log(logoByTag.classList)

// .classList.add(className)
logoByTag.classList.add('mainLogo')

// .classList.remove(className)
logoByTag.classList.remove('header-logo')

// .classList.toggle(className)

// .classLict.contains(className)
// console.log(logoByTag.classList.contains('text')) // true
// console.log(logoByTag.classList.contains('header-logo')) // false

// .classLict.replace(oldClassName, newClassName)
logoByTag.classList.replace('mainLogo', 'main-logo')

// GENERATE DOM-elements
// as Object
// document.createElement("tag") => object with props
const headerLogoLink = document.createElement('a')
// console.log(headerLogoLink)

headerLogoLink.setAttribute('href', './index.html')
// console.log(headerLogoLink.attributes)

headerLogoLink.classList.add('logo')
// console.log(headerLogoLink.classList)

headerLogoLink.textContent = 'Studio'
// console.log(headerLogoLink.textContent)

const logoParent = document.getElementById('logo-parent')
// console.log(logoParent)

const logoSpan = document.createElement('span')
logoSpan.classList.add('text')
// console.log(logoSpan)
logoSpan.textContent = 'Web'

// Add elements to HTML
// parent.appendChild(child)
// logoParent.appendChild(headerLogoLink) // в конец родителя

// parent.insertAdjacentElement("beforebegin", child)
// parent.before(...children) // (beforebegin)

// parent.prepend(...children) // (afterbegin)
logoParent.prepend(headerLogoLink)
// headerLogoLink.prepend(logoSpan)
// parent.insertAdjacentElement("afterbegin", child)
headerLogoLink.insertAdjacentElement('afterbegin', logoSpan)
// console.log(headerLogoLink)

// parent.insertAdjacentElement("beforeend", child)
// parent.append(...children) // (beforeend)
// parent.insertAdjacentElement("aftereend", child)
// parent.after(...children) // (aftereend)

// parent.replaceWith(child, nextElem)
// parent.insertBefore(child, nextElem)

// Remove Elements
const slWrapper = document.querySelector('.sl-wrapper')
const slTitle = document.querySelector('.title-link')

console.log(slTitle)
// parentElem.removeChild(child)
// slWrapper.removeChild(slTitle)

// elem.remove()
slTitle.remove()

// CLONE NODE
const footerLogoLink = headerLogoLink.cloneNode(true)
// console.log(footerLogoLink)
// footerLogoLink.style.color = 'white'
footerLogoLink.classList.replace('logo', 'home-page')
// elem.cloneNode(true) => with children
// elem.cloneNode(false) => only this element/without children
const footerLogoParent = document.getElementById('footer-logoParent')
// console.log(footerLogoParent)
footerLogoParent.prepend(footerLogoLink)

// as string
// const title = `<h1 class=""main-title">General Title</h1>`
const className = 'address-text'
const footerAddress = `<address class=${className}>
<span class="text">г. Киев, пр-т Леси Украинки, 26</span>
<a href="mailto:info@example.com" class="link">info@example.com</a>
<a href="tel:+380991111111" class="link">+38 099 111 11 11</a>
</address>`
// console.log(footerAddress)
// Add elements to HTML
// parent.innerHTML = child
footerLogoParent.insertAdjacentHTML('beforeend', footerAddress)
// parent.insertAdjacentHTML("beforebegin", child)

// parent.insertAdjacentHTML("afterbegin", child)

// parent.insertAdjacentHTML("beforeend", child)

// parent.insertAdjacentHTML("aftereend", child)
