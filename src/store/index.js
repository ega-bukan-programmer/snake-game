import { createStore } from 'vuex'

import games from './games'
export const GAMES = 'games'

export default createStore({
  modules: {
    games,
  }
})
