/**
 * @file Module for the class CardTable.
 * @module src/CardTable
 * @author Jennifer von Trotta-Treyden <jv222th@student.lnu.se>
 * @version 2.0.0
 */

import { PlayingCard } from './PlayingCard.js'
import { Player } from './Player.js'
import { Deck } from './Deck.js'

/**
 * Represents a Card Table.
 */
export class CardTable {
  /**
   *Refers to a player object that represents the dealer.
   *
   * @type {Player}
   */
  #dealer

  /**
   * Refers to the card deck.
   *
   * @type {Deck}
   */
  #deck

  /**
   * Refers to the throw pile/deck.
   *
   * @type {PlayingCard[]}
   */
  #discardPile

  /**
   * Refers to all the players in the game.
   *
   * @type {Player[]}
   */
  #players

  /**
   * Initiate all the players.
   *
   * @param {number} numberOfPlayers - the amount of players in the game.
   */
  constructor (numberOfPlayers = 1) {
    this.#dealer = new Player('Dealer', 16)
    this.#deck = new Deck()
    this.#discardPile = []
    this.#players = []

    for (let i = 1; i <= numberOfPlayers; i++) {
      const standValue = (Math.floor(Math.random()) * 6) + 13

      this.#players.push(new Player(`Player #${i}`, standValue))
    }
  }

  /**
   * Compare the dealers hand with the players hand and returns the winner.
   *
   * @param {Player} dealer - The dealers hand.
   * @param {Player} player - The players hand.
   * @returns {string} - Returns a string saying who the winner is.
   */
  #compareHands (dealer, player) {
    if (dealer.valueOf() > player.valueOf()) {
      return 'Dealer wins! ☹️'
    } else {
      return 'Player wins! 🎉'
    }
  }

  /**
   * Deals the next card in the deck.
   *
   * @returns {PlayingCard[]} - The next card in the card deck.
   */
  #deal () {
    return this.#deck.deal()
  }

  /**
   * One round of the game 21.
   *
   * @param {Player} dealer - The dealers round.
   * @param {Player} player - The players round.
   */
  #playOut (dealer, player) {
    this.#deck.shuffle() // Shuffle the deck first.

    do {
        player.addToHand(this.#deal) // Remove the top card from the deck and give to the players hand.
    } while (player.)
  }
}
