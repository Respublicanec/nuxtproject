<template>
  <div>
    <input
      :class="['just-input', { colorChangeInput }]"
      placeholder="Введитетекст заметки"
      :value="modelValue"
      @input="oneChange"
    />
  </div>
</template>

<script setup>
const emit = defineEmits(["textNoteModal"]);

const props = defineProps({
  modelValue: {
    type: String,
    default: "",
  },
});

const oneChange = (evt) => {
  emit("textNoteModal", evt.target.value);
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
</style>
