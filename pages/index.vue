<script setup>
let msg = ref("Hello World");
let msg2 = ref([
  { id: 1, label: "f" },
  { id: 2, label: "d" },
  { id: 3, label: "s" },
]);
const newItemPriority = ref("low");
</script>

<template>
  <h1>{{ msg }}</h1>
  <input v-model="msg" />
  <ul>
    <li v-for="{ id, label } in msg2" :key="id">{{ label }}</li>
  </ul>

  <label>
    Prioriry:
    <select v-model="newItemPriority">
      <option value="low">Low</option>
      <option value="high">High</option>
    </select>
  </label>
</template>
