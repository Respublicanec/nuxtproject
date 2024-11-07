<template>
  <div>
    <select :value="modelValue" @input="emitReadyVarian">
      <option
        v-for="(option, index) in optionsBase"
        :key="index"
        :value="option"
      >
        {{ option }}
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
