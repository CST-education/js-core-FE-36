const myFavouriteMusic = {
  rock: {
    bands: ['Rammstein', 'Limp Biskit'],
    songs: ['Du riest so gut'],
  },
}
// 2nd level
const {
  rock: { bands, songs },
} = myFavouriteMusic

console.log(bands)
bands.push('Linkin Park')
console.log(bands)
console.log(songs)

// 1st level
const { rock: objectOfRock, rap = 'nothing for this time' } = myFavouriteMusic
console.log(objectOfRock)
console.log(rap)

// ====================
const array = ['Sandra', [], 30]
const [, , age] = array

console.log(age)
// [a, b, c]
// [, , c]
