<script setup>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import { GAMES } from "./store";
import { PIXELS, SCORE, SNAKES } from "./store/games/getters";
import { CHANGE_DIRECTION, MOVE } from "./store/games/actions";

const store = useStore();
const score = computed(() => store.getters[`${GAMES}/${SCORE}`]);
const pixels = computed(() => store.getters[`${GAMES}/${PIXELS}`]);
const snakes = computed(() => store.getters[`${GAMES}/${SNAKES}`]);

let move;
const moveMs = 200;

move = setInterval(() => {
  store.dispatch(`${GAMES}/${MOVE}`);
}, moveMs);

const play = ref(true);

const togglePlayAndPause = () => {
  play.value = !play.value;
  if (play.value)
    move = setInterval(() => {
      store.dispatch(`${GAMES}/${MOVE}`);
    }, moveMs);
  else clearInterval(move);
};

window.addEventListener("keydown", (event) => {
  ["Space", "KeyP"].includes(event.code) && togglePlayAndPause();
  store.dispatch(`${GAMES}/${CHANGE_DIRECTION}`, event);
});
</script>

<template>
  <h3>Score: {{ score }}</h3>
  <div class="frame">
    <div
      v-for="(pixel, index) in pixels"
      :key="`pixel_${index}`"
      class="pixel"
      :class="{
        snake: !!snakes.find(
          (item) => item.x === pixel.x && item.y === pixel.y
        ),
        head: snakes[0].x === pixel.x && snakes[0].y === pixel.y,
      }"
    />
  </div>
  <div>
    <button @click="togglePlayAndPause">{{ !play ? "Play" : "Pause" }}</button>
  </div>
</template>

<style>
body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.frame {
  margin: 0;
  font-size: 0;
  height: 700px;
  width: 700px;
  display: inline-block;
  align-self: center;
  border: yellow solid;
}

.pixel {
  height: 8px;
  width: 8px;
  margin: 1px;
  display: inline-block;
}

.snake {
  background-color: black;
}

.snake.head {
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  background-color: transparent;
  border: 2px solid black;
}

.food {
  background-color: red;
}
</style>
