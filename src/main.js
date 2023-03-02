import { createApp } from 'vue'
import App from './App.vue'
import store, { GAMES } from './store'
import { INIT } from './store/games/actions'

store.dispatch(`${GAMES}/${INIT}`)

createApp(App).use(store).mount('#app')
