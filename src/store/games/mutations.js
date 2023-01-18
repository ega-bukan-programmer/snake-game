import { PIXELS, SNAKES } from './getters'

export const SET_PIXELS = 'setPixels'
const setPixels = (state, payload) => {
  state[PIXELS] = payload.pixels
}

export const SET_SNAKES = 'setSnakes'
const setSnakes = (state, payload) => {
  state[SNAKES] = payload.snakes
}

export default {
  setPixels,
  setSnakes,
}
