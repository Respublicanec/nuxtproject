<template>
  <div>
    <input
      :class="['just-input', { colorChangeInput: props.type === 'color' }]"
      placeholder="Введите текст заметки"
      :value="modelValue"
      @input="oneChange"
      :type="props.type"
    />
  </div>
  <div>{{}}</div>
</template>

<script setup>
const emit = defineEmits([""]);

const props = defineProps({
  modelValue: {
    type: String,
  },
  type: {
    type: String,
    default: "text",
    validator: (value) => {
      return ["color", "text"].includes(value);
    },
  },
});

const inputData = ref(props.modelValue);

const oneChange = (evt) => {
  emit("update:modelValue", evt.target.value);
};
</script>

<style>
.just-input {
  width: 200px;
  margin-left: 50px;
  border: 2px solid #505b60;
  border-radius: 5px;
}
.just-input:hover {
  border: 3px solid #505b60;
}
.colorChangeInput {
  margin-left: 105px;
  margin-top: 10px;
  border: 2px solid #000000;
  height: 40px;
  width: 100px;
  padding: 0px;
  border-radius: 10px;
}
.just-input:focus {
  border-width: 3px;
  border-color: #000000;
}
</style>
