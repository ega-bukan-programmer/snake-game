export const SCORE = 'score'
const score = state => state.score

export const PIXELS = 'pixels'
const pixels = state => state.pixels

export const SNAKES = 'snakes'
const snakes = state => state.snakes

export const DIRECTION = 'direction'
const direction = state => state.direction

export const READY_TO_CHANGE_DIRECTION = 'readyToChangeDirection'
const readyToChangeDirection = state => state.readyToChangeDirection

export default {
  score,
  pixels,
  snakes,
  direction,
  readyToChangeDirection,
}
