<template>
  <div>
    <div class="modal">
      <div>
        <button class="btn-cancel" @click="cancel">x</button>
        <input
          class="text-note"
          type="text"
          v-model="textNote"
          placeholder="Введите текст заметки"
        />
        <button class="btn-new-note" @click="addNewNote">Добавить</button>
      </div>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(["cancel", "newNotes"]);
const textNote = ref("");

const cancel = () => {
  emit("cancel");
};
const addNewNote = () => {
  emit("newNotes", textNote.value);
  textNote.value = "";
};
</script>

<style>
.modal {
  min-width: 250px;
  height: 230px;
  width: 320px;
  padding: 30px;
  position: absolute;
  left: 400px;
  top: 150px;
  background-color: rgb(234, 210, 175);
  border: 2px solid rgb(111, 4, 4);
}
.btn-cancel {
  margin-left: 300px;
  font-size: 13px;
  height: 20px;
  width: 20px;
}
.text-note {
  margin-top: 30px;
  height: 30px;
  width: 310px;
}
.btn-new-note {
  margin-left: 50px;
  margin-top: 40px;
  width: 200px;
  background-color: rgb(72, 239, 111);
}
</style>
