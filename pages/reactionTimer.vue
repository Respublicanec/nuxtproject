<template>
  <h1>Ninja Reaction Timer</h1>
  <button class @click="start" :disabled="isPlaying">play</button>
  <Block v-if="isPlaying" :delay="delay" @end="endGame" />
  <Results v-if="showResults" :score="score" />
</template>

<script setup>
const isPlaying = ref(false);

const delay = ref(null);

const score = ref(null);

const showResults = ref(false);

const start = () => {
  delay.value = 2000 + Math.random() * 5000;
  isPlaying.value = true;
  console.log(delay.value);
  showResults.value = false;
};

const endGame = (reactionTime) => {
  score.value = reactionTime;
  isPlaying.value = false;
  showResults.value = true;
};
</script>
