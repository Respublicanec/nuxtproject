<template>
  <div>
    <div class="modal">
      <button class="btn-cancel" @click="emit('cancel')">x</button>
      <BaseInput v-model="textNote" @textNoteModal="inputComponentAdd" />
      <BaseButton class="btn-new-note" @click="addNewNote" title="Добавить" />
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(["cancel", "addNote"]);

const textNoteComponent = ref("");

const inputComponentAdd = (add) => {
  textNoteComponent.value = add;
};
const addNewNote = () => {
  emit("addNote", textNoteComponent.value);
  textNoteComponent.value = "";
};
</script>

<style>
.modal {
  min-width: 250px;
  height: 230px;
  width: 320px;
  padding: 30px;
  position: absolute;
  left: calc(50% - 200px);
  top: calc(50% - 200px);
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
  margin-left: calc(50% - 70px);
  margin-top: 40px;
}
</style>
