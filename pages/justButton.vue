<template>
  <div class="conteiner-just-button">
    <button
      @mouseover="colorChangeButton = true"
      @mouseleave="colorChangeButton = false"
      :class="['just-button', { colorChangeButton }]"
    >
      Label
    </button>
    <input
      @mouseover="colorChangeInput = true"
      @mouseleave="colorChangeInput = false"
      :class="['just-input', { colorChangeInput }]"
      type="text"
    />
  </div>
</template>

<script setup>
const colorChangeButton = ref(false);

const colorChangeInput = ref(false);
</script>

<style>
.conteiner-just-button {
  display: flex;
  justify-content: center;
  margin-top: 50px;
}
.just-button {
  width: auto;
  height: 60px;
  padding: 20px 40px 44px 40px;
  border-radius: 50px;
  background: #505b60;
  border-color: rgb(0, 0, 0);
  left: 200px;
  font-size: 22px;
  color: white;
}
.colorChangeButton {
  background: #9e9f9d;
}
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
