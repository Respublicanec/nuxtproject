<template>
  <button @click="emit('notify', { message: 'Hello from child!' })">
    Click Me
  </button>
</template>

<script setup>
const emit = defineEmits(["notify"]);
</script>
