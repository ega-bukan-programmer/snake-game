import { createApp } from 'vue'
import App from './App.vue'
import store, { GAMES } from './store'
import { INIT, MOVE } from './store/games/actions'

store.dispatch(`${GAMES}/${INIT}`)
store.dispatch(`${GAMES}/${MOVE}`)

createApp(App).use(store).mount('#app')
