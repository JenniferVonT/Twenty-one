/**
 * @file Module for the class Deck.
 * @module src/Deck
 * @author Johan Leitet <johan.leitet@lnu.se>
 * @author Mats Loock <mats.loock@lnu.se>
 * @author Jennifer von Trotta-Treyden <jv222th@student.lnu.se>
 * @version 2.0.0
 */

import { PlayingCard } from './PlayingCard.js'

/**
 * Represents a deck.
 */
export class Deck {
  /**
   * Array of playing cards.
   *
   * @type {PlayingCard[]}
   */
  #playingCards

  /**
   * Initializes a new instance of the Deck class.
   */
  constructor () {
    this.#playingCards = []

    for (const suit of PlayingCard.suits) {
      for (const rank of PlayingCard.ranks) {
        this.#playingCards.push(new PlayingCard(rank, suit))
      }
    }
  }

  /**
   * Returns the current amount of cards in the deck.
   *
   * @returns {number} - Amount of cards left.
   */
  get count () {
    return this.#playingCards.length
  }

  /**
   * Add cards back to the dealer-pile.
   *
   * @returns {playingCards[]} - a full deck again.
   */
  add () {
  }

  /**
   * Deals the card from the top of the deck.
   *
   * @returns {PlayingCard} - The card that is dealt.
   */
  deal () {
    const dealtCard = this.#playingCards.pop()
    return dealtCard.toString()
  }

  /**
   * Shuffles the array of playing cards in place.
   */
  shuffle () {
    for (let i = this.#playingCards.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1))
      ;[this.#playingCards[i], this.#playingCards[randomIndex]] = [this.#playingCards[randomIndex], this.#playingCards[i]]
    }
  }

  /**
   * Returns a string representing the object.
   *
   * @returns {string} A string that represents the current object.
   */
  toString () {
    return this.#playingCards.join(' ')
  }
}
