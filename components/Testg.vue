<template>
  <button @click="handleClick">{{ batten1 }}</button>
  <div>{{ bob }}</div>
</template>

<script setup>
defineProps({
  batten1: {
    type: String,
  },
  bob: {
    type: String,
  },
});

const emit = defineEmits(["sendMessage", "gop"]);

function handleClick() {
  sendMessage();
  gop();
}

function sendMessage() {
  emit("sendMessage", "Привет от дочернего компонента!");
}

function gop() {
  emit("gop", "gopgopgop");
}
</script>
