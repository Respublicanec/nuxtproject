<template>
  <div>
    <input
      :class="['just-input', { colorChangeInput }]"
      placeholder="Введитетекст заметки"
      :value="inputData.title"
      @input="oneChange"
    />
    <input
      type="color"
      :class="['just-input', 'input-color', { colorChangeInput }]"
      :value="inputData.bgColor"
      @input="dataNote"
    />
  </div>
</template>

<script setup>
const emit = defineEmits(["textNoteModal", "color"]);

const props = defineProps({
  modelValue: {
    type: String,
    default: "",
  },
});

const inputData = ref(props.modelValue);

const oneChange = (evt) => {
  inputData.value.title = evt.target.value;
  emit("textNoteModal", inputData.value);
};

const dataNote = (evt) => {
  inputData.value.bgColor = evt.target.value;
  emit("textNoteModal", inputData.value);
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
  border: 2px solid #000000;
}
.just-input:focus {
  border-width: 3px;
  border-color: #000000;
}
.input-color {
  height: 40px;
  padding: 0px;
}
</style>
