<template>
  <li class="note" :style="{ backgroundColor: note.bgColor }">
    <div class="editing-button">
      <button @click="editNote">edit</button>
      <button class="btn" @click="deleteNote">x</button>
    </div>
    <span>
      <slot name="title"></slot>
      <slot name="description"></slot>
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
  top: -10px;
}
.note {
  display: grid;
  width: auto;
  text-align: center;
  top: -133px;
  max-width: auto;
  border: 2px solid rgb(0, 0, 0);
}
.title {
  position: relative;
  top: -20px;
}
.description {
  display: flex;
  justify-content: flex-start;
  margin-left: 10px;
  margin-top: -20px;
  text-align: left;
}
</style>
