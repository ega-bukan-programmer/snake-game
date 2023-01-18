<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import { GAMES } from "./store";
import { PIXELS, SNAKES } from "./store/games/getters";

const store = useStore();
const pixels = computed(() => store.getters[`${GAMES}/${PIXELS}`]);
const snakes = computed(() => store.getters[`${GAMES}/${SNAKES}`]);
</script>

<template>
  <div class="frame">
    <div
      v-for="(pixel, index) in pixels"
      :key="`pixel_${index}`"
      class="pixel"
      :class="{
        snake: !!snakes.find(
          (item) => item.x === pixel.x && item.y === pixel.y
        ),
      }"
    />
  </div>
</template>

<style>
body {
  margin: 0;
}

div {
  margin: 0;
  font-size: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.frame {
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

.food {
  background-color: red;
}
</style>
