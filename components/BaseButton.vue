<template>
  <div>
    <button class="base-button">{{ title }}</button>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
  },
});
</script>

<style>
.base-button {
  width: 100px;
  height: 40px;
  border-radius: 50px;
  background: radial-gradient(circle, #e9e8e8, #0bbd08);
  border: none;
}
</style>
