<template>
  <div class="new-note-conteiner">
    <button class="new-note">{{ newNote }}</button>
  </div>
</template>

<script setup>
defineProps({
  newNote: {},
});
</script>

<style>
.new-note-conteiner {
  width: 100px;
}
.new-note {
  width: 100px;
  border-radius: 50px;
  background: radial-gradient(circle, #e9e8e8, #0bbd08);
  border: none;
}
</style>
