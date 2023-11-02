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
   * The value sum of the cards on the players hand where the player stands.
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
    if (this.valueOf() < this.#standValue || this.#hand.length <= 1) {
      return true
    } else {
      return false
    }
  }

  /**
   * If the players hand is bigger than 21 return true, otherwise false.
   *
   * @returns {boolean} - If the player is busted (true) or not (false).
   */
  get isBusted () {
    if (this.valueOf() > 21) {
      return true
    } else {
      return false
    }
  }

  /**
   * If the player is a natural winner return true, otherwise false.
   *
   * @returns {boolean} - If the player is a natural winner return true.
   */
  get isNaturalWinner () {
    if (this.valueOf() === 21 || (this.#hand.length >= 5 && this.valueOf() < 21)) {
      return true
    } else {
      return false
    }
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
    this.#hand.push(playingCard)
  }

  /**
   * Removes all the cards on hand and returns them.
   *
   * @returns {PlayingCard[]} - returns an array of the players cards on hand.
   */
  discardHand () {
    const throwHand = []
    throwHand.push(...this.#hand)
    this.#hand.length = 0
    return throwHand
  }

  /**
   * Returns the value sum of the players hand.
   *
   * @returns {number} - The sum of all the cards on hand.
   */
  valueOf () {
    const sum = []

    for (let i = 0; i < this.#hand.length; i++) {
      const number = this.#hand[i]
      let numberFromCard = []

      if (number.charAt(0) === 'J') {
        sum.push(11)
      } else if (number.charAt(0) === 'Q') {
        sum.push(12)
      } else if (number.charAt(0) === 'K') {
        sum.push(13)
      } else if (number.charAt(0) === 'A' && (i === 0 || sum.reduce((a, b) => a + b, 0) + 14 > 21)) {
        sum.push(1)
      } else if (number.charAt(0) === 'A' && (sum.reduce((a, b) => a + b, 0) + 14) <= 21) {
        sum.push(14)
      } else if (number.length === 2) {
        numberFromCard = number.slice(0, 1)
        sum.push(parseInt(numberFromCard))
      } else if (number.length === 3) {
        numberFromCard = number.slice(0, 2)
        sum.push(parseInt(numberFromCard))
      }
    }
    return sum.reduce((a, b) => a + b, 0)
  }

  /**
   * Returns a string representing the class object.
   *
   * @returns {string} - A string gathering info about player
   */
  toString () {
    let hand = ` ${this.#hand}`
    let sumOfHand = ` (${this.valueOf()})`

    if (this.#hand.length === 0) {
      hand = ' -'
      sumOfHand = ''
    }

    return `${this.#nickname}:${hand}${sumOfHand}`
  }
}
