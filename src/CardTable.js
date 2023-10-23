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
   * Initiate all the players between 1-5.
   *
   * @param {number} numberOfPlayers - the amount of players in the game.
   */
  constructor (numberOfPlayers = 3) {
    this.#dealer = new Player('Dealer', 14)
    this.#deck = new Deck()
    this.#discardPile = []
    this.#players = []

    for (let i = 1; i <= numberOfPlayers; i++) {
      const standValue = (Math.floor(Math.random()) * 4) + 13

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
    } while (player.canHit) // As long as the stand value is not met.

    // If the player doesn't bust or isn't a natural winner. Play a round with the dealer the same way as the player.
    if (!player.isBusted || !player.isNaturalWinner) {
      do {
        dealer.addToHand(this.#deal)
      } while (dealer.canHit)
    }
  }

  /**
   * Plays the game 21 and returns the results after each round.
   *
   * @param {number} numberOfRounds - The amount of rounds in a game.
   */
  playRounds (numberOfRounds = 1) {
    // Start a counter for every round.
    for (let i = 0; i < numberOfRounds; i++) {
      // Start a counter for the number of players in the game, every player plays once every round and the dealer plays against all players.
      for (let i = 1; i <= this.#players.length;) {
        const currentPlayer = this.#players.pop()
        // The player plays a round against the dealer.
        this.#playOut(this.#dealer, currentPlayer)
        // If the player busted or is a natural winner, return the rounds result.
        // Otherwise if the dealer busted or is a natural winner, return the rounds result.
        // Otherwise compare hands and return the result.
      }
    }
  }
}
