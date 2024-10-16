<template>
  <div>
    <button
      @mouseover="colorChangeButton = true"
      @mouseleave="colorChangeButton = false"
      :class="['base-button', { colorChangeButton }]"
    >
      {{ title }}
    </button>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
  },
});

const colorChangeButton = ref(false);
</script>

<style>
.base-button {
  width: auto;
  height: 60px;
  padding: 20px;
  border-radius: 50px;
  background: #505b60;
  border-color: rgb(0, 0, 0);
  left: 200px;
  font-size: 16px;
  color: white;
}
.colorChangeButton {
  background: #9e9f9d;
}
</style>
