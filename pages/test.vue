<template>
  <BaseSelect v-model="acceptedOption" :optionsBase="options"></BaseSelect>
  <div>Выбранный вариант: {{ acceptedOption }}</div>
  {{ titles }}
  {{ results }}
</template>

<script setup>
const options = ref([
  { option: "n1", name: "Вариант1" },
  { option: "n2", name: "Вариант2" },
  { option: "n3", name: "Вариант3" },
]);

const notes = [
  { id: 1, title: "Заметка 1", bgColor: "red" },
  { id: 2, title: "Заметка 2", bgColor: "blue" },
  { id: 3, title: "Заметка 3", bgColor: "green" },
];

const searchById = (notes, id) => {
  return notes.filter((note) => note.id === id);
};

const searchId = 2;
const results = searchById(notes, searchId);

console.log(results);

const acceptedOption = ref("");
</script>
