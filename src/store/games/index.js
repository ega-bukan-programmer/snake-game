import getters from './getters'
import mutations from './mutations'
import actions from './actions'

export const X = 70
export const Y = 70

export default {
  namespaced: true,
  state() {
    return {
      pixels: [],
      snakes: [],
    }
  },
  getters,
  mutations,
  actions,
}
