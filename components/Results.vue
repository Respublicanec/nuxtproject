<template>
  <p>Reaction time: {{ score }}ms</p>
  <p class="rank">{{ rank }}</p>
</template>

<script setup>
const props = defineProps({
  score: Number,
  rank: {
    type: String,
  },
});
const rank = ref("");

onMounted(() => {
  if (props.score < 250) {
    rank.value = "Ninja Fingers";
  } else if (props.score < 400) {
    rank.value = "Rapid Reflexes";
  } else {
    rank.value = "Snail pace..";
  }
});
</script>

<style>
.rank {
  font-size: 1.4em;
  color: #15ad87;
  font-weight: bold;
}
</style>
