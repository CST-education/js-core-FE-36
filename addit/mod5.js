const atTheOldToad = {
  potions: [
    { name: 'Speed potion', price: 460 },
    { name: 'Dragon breath', price: 780 },
    { name: 'Stone skin', price: 520 },
  ],
  getPotions() {
    return this.potions
  },
  addPotion(potionName) {
    if (this.potions.includes(potionName)) {
      return `Potion ${potionName} is already equipped!`
    }
    this.potions.push(potionName)
  },
  removePotion(potionName) {
    const { potions } = this
    // console.log(potions)
    for (let potion of potions) {
      if (potion.name === potionName) {
        const potionIndex = this.potions.indexOf(potion)
        this.potions.splice(potionIndex, 1)
        // return potion
      }
    }
    return `Potion ${potionName} is not in inventory!`
  },
  updatePotionName(oldName, newName) {
    const { potions } = this
    for (const potion of potions) {
      if (potion.name === oldName) {
        return (potion.name = newName)
      }
    }
    return `Potion ${oldName} is not in inventory!`
  },
}
// console.log(atTheOldToad.removePotion('Zzzz'))
let pass = 'pass'

let msg = prompt()
console.log(msg)

if (msg === null) {
  msg = 'Cancel'
} else if (msg === pass) {
  msg = 'Welcome'
} else {
  msg = 'Error'
}
console.log(msg)
