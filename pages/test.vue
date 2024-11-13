<template>
  <BaseSelect v-model="acceptedOption" :optionsBase="options"></BaseSelect>
  <div>Выбранный вариант: {{ acceptedOption }}</div>
  {{ titles }}
</template>

<script setup>
const options = ref(["n1", "n2", "n3", "n4"]);

const acceptedOption = ref("n1");
</script>
