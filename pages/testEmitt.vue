<template>
  <div>
    <h1>Родительский компонент</h1>
    <TestEmit
      @childEvent="handleChildEvent"
      @bobob="fafa"
      @textNoteModal="gopstop"
    />
    <BaseInput @textNoteModal="gjjj"></BaseInput>
    <p>Сообщение от дочернего компонента: {{ message }}</p>
    <div>{{ bobobv }}</div>
    <div>{{ faaa }}</div>
  </div>
</template>

<script setup>
const message = ref("");
const bobobv = ref("");
const faaa = ref("");

function handleChildEvent(gg) {
  message.value = gg; // Обновляем сообщение из дочернего компонента
}

const fafa = (gh) => {
  bobobv.value = gh;
};

const gjjj = (fd) => {
  faaa.value = fd;
};

const gopstop = (fff) => {
  faaa.value = fff;
};
</script>
