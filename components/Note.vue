<template>
  <li class="note" :style="{ backgroundColor: note.bgColor }">
    <div class="editing-button">
      <button @click="editNote">edit</button>
      <button class="btn" @click="deleteNote">x</button>
    </div>
    <span>
      <slot name="title"></slot>
      <div class="date">
        <slot name="date"></slot>
      </div>
    </span>
  </li>
  {{ titles }}
</template>
<script setup>
defineProps({
  note: {
    type: Object,
  },
});

const emit = defineEmits(["editNote", "deleteNote"]);

const deleteNote = () => {
  emit("deleteNote");
};

const editNote = () => {
  emit("editNote");
};
</script>

<style>
.editing-button,
.date {
  text-align: right;
}
.note {
  display: grid;
  width: auto;
  text-align: center;
  max-width: auto;
  border: 2px solid rgb(0, 0, 0);
}
</style>
