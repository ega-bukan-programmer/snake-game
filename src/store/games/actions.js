import { X, Y } from '.'
import { SET_PIXELS, SET_SNAKES } from './mutations'

export const INIT = 'init'
const init = context => {
  const pixels = []
  for (let i = 0; i < Y; i++) {
    for (let j = (X - 1); j >= 0; j--)
      pixels.unshift({
        x: j,
        y: i,
      })
  }
  context.commit(SET_PIXELS, { pixels })
}

export const MOVE = 'move'
const move = context => {
  const snakes = [
    {
      x: 0,
      y: 0,
    },
    {
      x: 0,
      y: 1,
    },
    {
      x: 1,
      y: 1,
    },
  ]
  context.commit(SET_SNAKES, { snakes })
}

export default {
  init,
  move,
}
