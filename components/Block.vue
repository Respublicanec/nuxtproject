<template>
  <div class="block" v-if="showBlock" @click="stopTimer">click me</div>
</template>

<script setup>
import ReactionTimer from "~/pages/reactionTimer.vue";

const props = defineProps({
  delay: {
    type: Number,
    required: true,
  },
});

const showBlock = ref(false);

const timer = ref(null);

const reactionTime = ref(0);

const emit = defineEmits(["end"]);

onMounted(() => {
  setTimeout(() => {
    showBlock.value = true;
    startTimer();
  }, props.delay);
});

const startTimer = () => {
  timer.value = setInterval(() => {
    reactionTime.value += 10;
  }, 10);
};

const stopTimer = () => {
  clearInterval(timer.value);
  emit("end", reactionTime.value);
};
</script>

<style>
.block {
  width: 400px;
  border-radius: 20px;
  background: #0faf87;
  color: white;
  text-align: center;
  padding: 100px 0;
  margin: 40px auto;
}
</style>
