<template>
  <button
    @mouseover="colorChangeButton = true"
    @mouseleave="colorChangeButton = false"
    :class="['base-button', { colorChangeButton }]"
    :style="{
      borderRadius: borderRadius,
      boxShadow: boxShadow,
      padding: padding,
      width: width,
      borderColor: borderColor,
    }"
  >
    <slot>{{ title }}</slot>
  </button>
</template>

<script setup>
defineProps({
  title: {
    type: String,
  },
  borderRadius: {
    default: "50px",
  },
  boxShadow: {
    default: "5px 10px 8px #9e9f9d",
  },
  padding: {
    default: "20px",
  },
  width: {
    default: "auto",
  },
  borderColor: {
    default: "black",
  },
});

const colorChangeButton = ref(false);
</script>

<style>
.base-button {
  height: 60px;
  background: #656f74;
  font-size: 16px;
  color: white;
}
.colorChangeButton {
  background: #9e9f9d;
}
</style>
