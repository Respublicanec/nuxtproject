<template>
  <div>
    <select v-model="readyVarian" value="n2" @change="emitReadyVarian">
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
const emit = defineEmits(["update:acceptedOption"]);

const props = defineProps({
  acceptedOption: {
    type: String,
  },
  optionsBase: {
    type: Array,
  },
});

const readyVarian = ref(props.acceptedOption);

console.log(props.optionsBase);

const emitReadyVarian = () => {
  emit("update:acceptedOption", readyVarian.value);
};
</script>
