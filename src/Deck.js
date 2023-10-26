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

    for (const suit of PlayingCard.suits) { // For every suit of the PlayingCard array.
      for (const rank of PlayingCard.ranks) { // And for every rank of the PlayingCard array.
        this.#playingCards.push(new PlayingCard(rank, suit)) // Push the combined suit and rank into the empty #playingCards array until all combinations are completed.
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
   * Deals the card from the top of the deck.
   *
   * @returns {PlayingCard} - The card that is dealt.
   */
  deal () {
    // Put the last card of the deck (array) in the dealtCard constant and use the toString method to display the suit and rank together.
    const dealtCard = this.#playingCards.pop().toString()
    return dealtCard
  }

  /**
   * Add the discarded cards back to the deck.
   *
   * @param {PlayingCard[]} playingCards - An array representing a deck of cards.
   */
  add (playingCards) {
    this.#playingCards.push(...playingCards) // The remaining card in the pile + The discarded card deck.
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
    return this.#playingCards.join(' ') // Join the suit and rank combinations into one string to represent the cards.
  }
}
