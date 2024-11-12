<template>
  <li class="note" :style="{ backgroundColor: note.bgColor }">
    <div class="EditingButton">
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
.EditingButton,
.date {
  text-align: right;
}
</style>
