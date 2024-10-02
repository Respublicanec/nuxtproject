<template>
  <div class="new-note-conteiner">
    <button class="base-button">{{ title }}</button>
  </div>
</template>

<script setup>
defineProps({
  title: {},
});
</script>

<style>
.new-note-conteiner {
  width: 100px;
}
.base-button {
  width: 100px;
  border-radius: 50px;
  background: radial-gradient(circle, #e9e8e8, #0bbd08);
  border: none;
}
</style>
