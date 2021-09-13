const hero = document.querySelector('.hero')
console.log(hero)
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
let perPage = 70
const base_url = `https://api.pexels.com/`
let params = `v1/search?query=${value}&per_page=`
const url = base_url + params
const req = fetch(url, options)
  .then((response) => {
    console.log(response)
    if (response.status === 200) {
      return response.json()
    } else {
      throw new Error(`ERROR`)
    }
  })
  .then((data) => {
    console.log(data)
    if (data.photos.length === 0) {
      throw new Error(`по вашему запросу ничего не найдено! Повторите ввод!`)
    }
    return data.photos
  })
  .then((photos) => {
    console.log(photos)
    // тут вызываем функцию перебора и отрисовки полученных данных
    createItems(hero, photos)
  })
  .catch((error) => {
    alert(error)
  })
console.log(req)

function createItems(place, array) {
  const list = document.createElement('ul')
  place.appendChild(list)
  list.style.display = 'flex'
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
  console.log(items)
  list.insertAdjacentHTML('beforeend', items)
}
