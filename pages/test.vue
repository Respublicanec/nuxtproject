<template>
  <BaseSelect
    v-model="acceptedOption"
    :optionsBase="options"
    @update:acceptedOption="emitVariant"
  ></BaseSelect>
  <div>Выбранный вариант: {{ acceptedOption }}</div>
</template>

<script setup>
import { ref } from "vue";

const options = ref(["n1", "n2", "n3", "n4"]);

const acceptedOption = ref("n1");

const emitVariant = (val) => {
  acceptedOption.value = val;
};
</script>
