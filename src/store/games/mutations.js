import { DIRECTION, PIXELS, READY_TO_CHANGE_DIRECTION, SCORE, SNAKES } from './getters'

export const SET_SCORE = 'setScore'
const setScore = (state, payload) => {
  state[SCORE] = payload.score
}

export const SET_PIXELS = 'setPixels'
const setPixels = (state, payload) => {
  state[PIXELS] = payload.pixels
}

export const SET_SNAKES = 'setSnakes'
const setSnakes = (state, payload) => {
  state[SNAKES] = payload.snakes
}

export const SET_DIRECTION = 'setDirection'
const setDirection = (state, payload) => {
  state[DIRECTION] = payload.direction
}

export const SET_READY_TO_CHANGE_DIRECTION = 'setReadyToChangeDirection'
const setReadyToChangeDirection = (state, payload) => {
  state[READY_TO_CHANGE_DIRECTION] = payload.readyToChangeDirection
}

export default {
  setScore,
  setPixels,
  setSnakes,
  setDirection,
  setReadyToChangeDirection,
}
