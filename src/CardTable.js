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
   * @throws {Error} - If the argument is not a valid integer between 1-7 or 52.
   */
  constructor (numberOfPlayers = 3) {
    // Check if the numberOfPlayers is a valid argument.
    if ((!Number.isInteger(numberOfPlayers) || numberOfPlayers < 1 || numberOfPlayers > 7) && numberOfPlayers !== 52) {
      throw new Error('27')
    }
    this.#dealer = new Player('Dealer', 14)
    this.#deck = new Deck()
    this.#discardPile = []
    this.#players = []

    for (let i = 1; i <= numberOfPlayers; i++) {
      let standValue = ''
      standValue = Math.floor(Math.random() * 5) + 13

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
    if (player.isBusted || dealer.isNaturalWinner) {
      return 'Dealer wins! ☹️ '
    } else if (player.isNaturalWinner || dealer.isBusted) {
      return `${player.nickname} wins! 🎉 `
    } else if (player.valueOf() > dealer.valueOf()) {
      return `${player.nickname} wins! 🎉 `
    } else {
      return 'Dealer wins! ☹️ '
    }
  }

  /**
   * Deals the next card in the deck.
   *
   * @returns {PlayingCard[]} - The next card in the card deck.
   * @throws {Error} - If the cards run out.
   */
  #deal () {
    // Check if there is any cards left to be put back into the draw pile.
    if (this.#discardPile.length === 0 && this.#deck.count === 1) {
      throw new Error('28')
    }
    return this.#deck.deal()
  }

  /**
   * One round of the game 21.
   *
   * @param {Player} dealer - The dealers round.
   * @param {Player} player - The players round.
   */
  #playOut (dealer, player) {
    while (player.canHit) { // As long as the stand value is not met.
      if (this.#deck.count === 1) {
        this.#deck.add(this.#discardPile)
        this.#deck.shuffle()
      }
      player.addToHand(this.#deal()) // Remove the top card from the deck and give to the players hand.
    }

    // If the player doesn't bust or isn't a natural winner. Play a round with the dealer the same way as the player.
    if (!(player.isNaturalWinner || player.isBusted)) {
      while (dealer.canHit) {
        if (this.#deck.count === 1) {
          this.#deck.add(this.#discardPile)
          this.#deck.shuffle()
        }
        dealer.addToHand(this.#deal())
      }
    }
  }

  /**
   * Plays the game 21 and returns the results after each round.
   *
   * @param {number} numberOfRounds - The amount of rounds in a game.
   * @returns {object[]} - The result of the game.
   * @throws {Error} - If the number is not an integer or in the correct range 1-5.
   */
  playRounds (numberOfRounds = 1) {
    // Check if the argument is a valid integer between 1-5.
    if (!Number.isInteger(numberOfRounds) || (numberOfRounds < 1 || numberOfRounds > 5)) {
      throw new Error('26')
    }

    this.#deck.shuffle() // Shuffle the deck first.
    const result = []

    // Start a counter for every round.
    for (let round = 1; round <= numberOfRounds; round++) {
      const playersResult = []

      // Give each player a card in the beginning of each round.
      for (let i = 0; i < this.#players.length; i++) {
        this.#players[i].addToHand(this.#deal())
      }

      // Start a counter for the number of players in the game, every player plays once every round and the dealer plays against all players.

      for (let player = 1; player <= this.#players.length; player++) {
        let winner = ''
        const index = player - 1

        const currentPlayer = this.#players[index]

        // The player plays a round against the dealer.
        this.#playOut(this.#dealer, currentPlayer)

        // Decide if the player or dealer busted.
        let bustedPlayer = ' '
        let bustedDealer = ' '
        if (currentPlayer.isBusted) {
          bustedPlayer = ' BUSTED! '
        } else if (this.#dealer.isBusted) {
          bustedDealer = ' BUSTED! '
        }

        // Otherwise compare hands and return the result.
        winner = this.#compareHands(this.#dealer, currentPlayer)

        playersResult.push(`${currentPlayer.toString()} ${bustedPlayer} ${this.#dealer.toString()} ${bustedDealer} ${winner} `)

        // Throw all the cards from both hands into the discard pile.
        this.#discardPile.push(...currentPlayer.discardHand())
        this.#discardPile.push(...this.#dealer.discardHand())
      }
      result.push(`Round #${round} --------------- ${playersResult}|`)
    }
    return result
  }
}
