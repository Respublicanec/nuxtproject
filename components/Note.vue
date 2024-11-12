<template>
  <li class="note" :style="{ backgroundColor: note.bgColor }">
    <div class="contButton">
      <button @click="editNote(index)">edit</button>
      <button class="btn" @click="deleteNote(index)">x</button>
    </div>
    <span>
      {{ note.title }}
      <div class="date">{{ formatDate(note.date) }}</div>
    </span>
  </li>
</template>
<script setup>
const props = defineProps({
  note: {
    type: Object,
  },
});

const emit = defineEmits(["editNote", "deleteNote"]);

const deleteNote = (index) => {
  emit("deleteNote", index);
};

const editNote = (index) => {
  emit("editNote", index);
};
</script>

<style>
.contButton {
  text-align: right;
}
.date {
  text-align: right;
}
.contButton {
  text-align: right;
}
.note {
  display: grid;
  width: auto;
  text-align: center;
  max-width: auto;
  border: 2px solid rgb(165, 165, 175);
}
</style>
