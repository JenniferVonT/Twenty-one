/**
 * @file Module for the class Player.
 * @module src/Player
 * @author Jennifer von Trotta-Treyden <jv222th@student.lnu.se>
 * @version 2.0.0
 */

import { PlayingCard } from './PlayingCard'

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
}
