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
import { Player } from './Player.js'
import { PlayingCard } from './PlayingCard.js'
/*
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
*/

const Deck1 = new Deck()
Deck1.shuffle()

const player1 = new Player('Favourite', 16)
const player2 = new Player('Underdog', 25)

console.log(player1.canHit)

console.log(player2.isBusted)

console.log(player1.nickname)
console.log(player2.nickname)

/*
const Deck1 = new Deck()

console.log(Deck1.toString(), '\n')
Deck1.shuffle()
console.log(Deck1.count)

console.log(Deck1.toString(), '\n')

console.log(Deck1.deal())
console.log(Deck1.deal())

console.log(Deck1.count)

console.log(Deck1.toString(), '\n')

console.log(Deck1.toString(), '\n')
console.log(Deck1.count)
*/
