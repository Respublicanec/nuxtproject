<template></template>

<script setup>
const posts = ref([]);

const error = ref(null);

const load = async () => {
  try {
    let data = await fetch();
    console.log(data);
  } catch (err) {}
};
load();
</script>
