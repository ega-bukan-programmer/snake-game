import { DIRECTIONS, X, Y } from '.'
import { DIRECTION, PIXELS, READY_TO_CHANGE_DIRECTION, SNAKES } from './getters'
import { SET_DIRECTION, SET_PIXELS, SET_READY_TO_CHANGE_DIRECTION, SET_SNAKES } from './mutations'

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
  context.commit(SET_PIXELS, { [PIXELS]: pixels })

  const snakes = []
  for (let i = 1; i > -2; i--) snakes.push({
    x: parseInt((X / 2) + i),
    y: parseInt(Y / 2),
  })
  context.commit(SET_SNAKES, { [SNAKES]: snakes })
}

export const MOVE = 'move'
const move = context => {
  const snakes = context.getters[SNAKES]
  const direction = context.getters[DIRECTION]

  snakes.splice(snakes.length - 1, 1)

  const moveSnake = () => {
    let move
    switch (direction) {
      case DIRECTIONS.top:
        move = snakes[0].y + 1
        snakes.unshift({
          x: snakes[0].x,
          y: move < Y ? move : 0,
        })
        return snakes
      case DIRECTIONS.right:
        move = snakes[0].x + 1
        snakes.unshift({
          x: move < X ? move : 0,
          y: snakes[0].y,
        })
        return snakes
      case DIRECTIONS.bottom:
        move = snakes[0].y - 1
        snakes.unshift({
          x: snakes[0].x,
          y: move >= 0 ? move : Y - 1,
        })
        return snakes
      case DIRECTIONS.left:
        move = snakes[0].x - 1
        snakes.unshift({
          x: move >= 0 ? move : X - 1,
          y: snakes[0].y,
        })
        return snakes
    }
  }

  context.commit(SET_SNAKES, { [SNAKES]: moveSnake() })
  context.commit(SET_READY_TO_CHANGE_DIRECTION, { [READY_TO_CHANGE_DIRECTION]: true })
}

export const CHANGE_DIRECTION = 'changeDirection'
const changeDirection = (context, data) => {
  const direction = context.getters[DIRECTION]
  const readyToChangeDirection = context.getters[READY_TO_CHANGE_DIRECTION]

  if (!readyToChangeDirection) return

  context.commit(SET_READY_TO_CHANGE_DIRECTION, { [READY_TO_CHANGE_DIRECTION]: false })

  const allowedKeys = {
    [DIRECTIONS.top]: ['ArrowUp', 'KeyW'],
    [DIRECTIONS.right]: ['ArrowRight', 'KeyD'],
    [DIRECTIONS.bottom]: ['ArrowDown', 'KeyS'],
    [DIRECTIONS.left]: ['ArrowLeft', 'KeyA'],
  }

  const newDirection = dir => {
    switch (dir) {
      case DIRECTIONS.top:
        return direction !== DIRECTIONS.bottom ? DIRECTIONS.top : direction
      case DIRECTIONS.right:
        return direction !== DIRECTIONS.left ? DIRECTIONS.right : direction
      case DIRECTIONS.bottom:
        return direction !== DIRECTIONS.top ? DIRECTIONS.bottom : direction
      case DIRECTIONS.left:
        return direction !== DIRECTIONS.right ? DIRECTIONS.left : direction
    }
  }

  Object.keys(allowedKeys).every(item => {
    if (allowedKeys[item].includes(data.code)) {
      context.commit(SET_DIRECTION, { [DIRECTION]: newDirection(item) })
      return false
    }
    return true
  })
}

export default {
  init,
  move,
  changeDirection,
}
