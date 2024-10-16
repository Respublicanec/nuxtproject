<template>
  <div>
    <input
      @mouseover="colorChangeInput = true"
      @mouseleave="colorChangeInput = false"
      :class="['just-input', { colorChangeInput }]"
      type="text"
    />
  </div>
</template>

<script setup>
  const colorChangeInput = ref(false);
</script>

<style>
  .just-input {
    width: 200px;
    margin-left: 30px;
    border: 2px solid #505b60;
    border-radius: 5px;
  }
  .colorChangeInput {
    border: 2px solid #000000;
  }
  .just-input:focus {
    border-width: 3px;
    border-color: #000000;
  }
</style>
