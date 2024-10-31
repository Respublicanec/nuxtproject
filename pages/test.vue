<template>
  <div>
    Фильтровать по:
    <select
      v-model="selectedFilter"
      v-for="note in filteredNotes"
      :key="note.id"
    >
      <option value="">Выберите фильтр</option>
      <option value="data">дате добавления</option>
      <option value="name">Названию</option>
      <option value="colors">Цвету</option>
    </select>
  </div>
  <div>{{ notes }}</div>
</template>

<script setup>
const notes = ref([
  { id: 1, name: "Banana", color: "ccc" },
  { id: 2, name: "Apple", color: "aaa" },
  { id: 3, name: "Cherry", color: "bbb" },
]);

const selectedFilter = ref("");

const filteredNotes = computed(() => {
  let filtered = notes.value;

  if (selectedFilter.value === "name") {
    filtered = filtered.sort((a, b) => a.name.localeCompare(b.name));
  } else if (selectedFilter.value === "data") {
    filtered = filtered.sort((a, b) => a.id - b.id);
  } else if (selectedFilter.value === "colors") {
    filtered = filtered.sort((a, b) => a.color.localeCompare(b.color));
  }

  return filtered;
});
</script>
