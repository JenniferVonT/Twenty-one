/**
 * @file The starting point of the application.
 * @module src/app
 * @author Johan Leitet <johan.leitet@lnu.se>
 * @author Mats Loock <mats.loock@lnu.se>
 * @author Jennifer von Trotta-Treyden <jv222th@student.lnu.se>
 * @version 2.0.0
 */

// TODO: Replace the code below with your own game logic.

import { Deck } from './Deck.js'

try {
  // Create a deck, view its 52 playing cards,...
  const deck = new Deck()
  console.log(deck.toString(), '\n')

  // ...shuffle the deck and show the playing cards again.
  deck.shuffle()
  console.log(deck.toString(), '\n')
} catch (e) {
  console.error(e.message)
}

const deck1 = new Deck()

console.log(deck1.count)

deck1.shuffle()

console.log(deck1.deal())
console.log(deck1.deal())

console.log(deck1.toString(), '\n')

console.log(deck1.count)

console.log(deck1.add())

console.log(deck1.count)
