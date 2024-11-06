<template>
  <div>
    <select v-model="readyVarian" @change="emitReadyVarian">
      <option v-for="key in optionsBase">{{ key }}</option>
    </select>
  </div>
</template>
<script setup>
const emit = defineEmits(["readyVarian"]);

const props = defineProps({
  sendingOption: {
    type: Object,
  },
});

const optionsBase = ref(props.sendingOption);

const readyVarian = ref();

const emitReadyVarian = () => {
  emit("readyVarian", readyVarian.value);
};
</script>
