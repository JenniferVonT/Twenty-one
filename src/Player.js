/**
 * @file Module for the class Player.
 * @module src/Player
 * @author Jennifer von Trotta-Treyden <jv222th@student.lnu.se>
 * @version 2.0.0
 */

import { PlayingCard } from './PlayingCard.js'
/**
 * Represents the player.
 */
export class Player {
  /**
   * The players cards on hand.
   *
   * @type {PlayingCard[]}
   */
  #hand

  /**
   * The players nickname.
   *
   * @type {string}
   */
  #nickname

  /**
   * The value sum of the cards on the players hand.
   *
   * @type {number}
   */
  #standValue

  /**
   * Initializes a new instance of the player class.
   *
   * @param {string} nickname - The nickname of the player.
   * @param {number} standValue - The sum of the cards on the players hand.
   */
  constructor (nickname, standValue = 14) {
    this.#nickname = nickname
    this.#standValue = standValue

    this.#hand = []
  }

  /**
   * If the value on the players hand is less than 14, return true otherwise false.
   *
   * @returns {boolean} - If the player can hit or not.
   */
  get canHit () {
    return (this.#standValue < 14)
  }

  /**
   * If the players hand is bigger than 21 return true, otherwise false.
   *
   * @returns {boolean} - If the player is busted (true) or not (false).
   */
  get isBusted () {
    return (this.#standValue > 21)
  }

  /**
   * If the player is a natural winner return true, otherwise false.
   *
   * @returns {boolean} - If the player is a natural winner return true.
   */
  get isNaturalWinner () {
  }

  /**
   * Returns the nickname of the player.
   *
   * @returns {string} - The players nickname.
   */
  get nickname () {
    return this.#nickname
  }

  /**
   * Adds a card to the players hand.
   *
   * @param {PlayingCard} playingCard - Add a card to the hand.
   */
  addToHand (playingCard) {
    this.#hand += playingCard
  }

  /**
   * Removes all the cards on hand and returns them.
   *
   * @returns {PlayingCard[]} - returns an array of the players cards on hand.
   */
  discardHand () {
    const length = this.#hand.lenght
    let showHand = []
    for (let i = length; i > 0; i--) {
      showHand += this.#hand.pop()
    }
    return showHand
  }
}
