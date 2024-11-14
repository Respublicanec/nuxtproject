<template>
  <div>
    <select :value="modelValue" @input="emitReadyVarian">
      <option v-for="val in optionsBase" :value="val.option">
        {{ val.name }}
      </option>
    </select>
  </div>
</template>
<script setup>
const emit = defineEmits(["update:modelValue"]);

const props = defineProps({
  modelValue: {
    type: String,
  },
  optionsBase: {
    type: Array,
  },
});

const emitReadyVarian = (val) => {
  emit("update:modelValue", val.target.value);
};
</script>
