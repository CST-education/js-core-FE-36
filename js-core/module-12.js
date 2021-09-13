const hero = document.querySelector('.hero')
const input = document.querySelector('[name="search"]')
const photoList = document.querySelector('.photoList')
console.log(photoList)
// https://bookstore.com/api/orders/289
// http - без защиты

// 400 (404) - ошибка со стороны клиента (браузера)
// 500 (501) - ошибка на сервере
// 200 (201) - успешный запрос

// get - GET
// create/set - POST
// update/set - PUT || PATCH
// delete - DELETE
console.dir(fetch)
const API_KEY = `563492ad6f91700001000001390f9fee0a794c1182a72e49e0e0eae2`
const options = {
  method: 'GET', // POST || PUT || PATCH || DELETE
  headers: {
    Authorization: API_KEY,
  },
  //   body: {} // в методах POST || PUT || PATCH
}
let value = 'lotus'
let per_page = 7
const base_url = `https://api.pexels.com/`

input.addEventListener('change', (e) => {
  console.log(e.target.value)
  const { value } = e.target
  photoList.innerHTML = ''
  getFetch(value, per_page, createItems) // вызов
  e.target.value = ''
})
// создание функции и указание ПАРАМЕТРОВ
function getFetch(search, perPage = 10, cb) {
  let params = `v1/search?query=${search}&per_page=${perPage}`
  const url = base_url + params

  const req = fetch(url, options)
    .then((r) => {
      //   console.log(response)
      if (r.status === 200) {
        return r.json()
      } else {
        throw new Error(`ERROR`)
      }
    })
    .then((data) => {
      //   console.log(data)
      if (data.photos.length === 0) {
        throw new Error(`по вашему запросу ничего не найдено! Повторите ввод!`)
      }
      return data.photos
    })
    .then((photos) => {
      console.log(photos)
      // тут вызываем функцию перебора и отрисовки полученных данных
      cb(photoList, photos)
    })
    .catch((error) => {
      alert(error)
    })
}

function createItems(place, array) {
  place.style.display = 'flex'
  place.style.flexFlow = 'row wrap'

  let items = array
    .map((item) => {
      const {
        src: { tiny },
        photographer,
      } = item
      return `
        <li>
          <img src="${tiny}" alt="${photographer}">
          <h3>${photographer}</h3>
        </li>`
    })
    .join('')
  //   console.log(items)
  place.insertAdjacentHTML('beforeend', items)
}
