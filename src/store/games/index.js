import getters from './getters'
import mutations from './mutations'
import actions from './actions'

export const X = 70
export const Y = 70
export const DIRECTIONS = {
  top: 'top',
  right: 'right',
  bottom: 'bottom',
  left: 'left',
}

export default {
  namespaced: true,
  state() {
    return {
      score: 0,
      pixels: [],
      snakes: [],
      direction: DIRECTIONS.right,
      readyToChangeDirection: true,
    }
  },
  getters,
  mutations,
  actions,
}
