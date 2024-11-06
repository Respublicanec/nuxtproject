<template>
  <BaseSelect :sendingOption="options" @readyVarian="emitVariant"></BaseSelect>
  <div>Выбранный вариант - {{ acceptedOption }}</div>
</template>
<script setup>
const options = ref({
  key1: "№1",
  key2: "№2",
  key3: "№3",
  key4: "№4",
});

const acceptedOption = ref();

const emitVariant = (val) => {
  acceptedOption.value = val;
};
</script>
