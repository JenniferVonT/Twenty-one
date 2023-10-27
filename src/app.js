/**
 * @file The starting point of the application.
 * @module src/app
 * @author Johan Leitet <johan.leitet@lnu.se>
 * @author Mats Loock <mats.loock@lnu.se>
 * @author Jennifer von Trotta-Treyden <jv222th@student.lnu.se>
 * @version 2.0.0
 */

import { CardTable } from './CardTable.js'

/**
 * To start the game send the amount of rounds and players as integer numbers.
 *
 * @param {number} numberOfRounds - Number of rounds of the game between 1-5.
 * @param {number} numberOfPlayers - Number of players in the game between 1-7.
 * @returns {string} - A string with the results from the game played.
 */
const startGame = function (numberOfRounds, numberOfPlayers) {
  const createNewGame = new CardTable(numberOfPlayers)
  return createNewGame.playRounds(numberOfRounds)
}

const gameArg = process.argv.slice(2)

const playGame21 = startGame(Number(gameArg[0] || 1), Number(gameArg[1] || 3))

try {
  console.log(playGame21)
} catch (err) {
  console.error(err.message)
  process.exitCode = 1
}
