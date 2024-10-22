<template>
  <div>
    <button @click="sendMessage">Отправить сообщение родителю</button>
    <input
      type="text"
      placeholder="Введите текст заметки"
      v-model="textInput"
      @input="textNote"
    />
  </div>
</template>

<script setup>
const emit = defineEmits(["childEvent", "bobob", "textNoteModal"]);

const textInput = ref("");

function textNote() {
  emit("textNoteModal", textInput.value);
}

function sendMessage() {
  emit("childEvent", "Привет от дочернего компонента!");
  emit("bobob", "goooooooooooooooooooooooooooo");
}
</script>
