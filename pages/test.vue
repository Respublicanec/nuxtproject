<template>
  <div>
    <Testg
      batten1="кнопочка"
      bob="ищищищищищищищ"
      @sendMessage="handleMessage"
      @gop="handleMessage2"
    />
    {{ gopgop }}
    {{ message }}
  </div>
</template>

<script setup>
const message = ref("");
const gopgop = ref("");

function handleMessage(f) {
  message.value = f;
}

function handleMessage2(g) {
  gopgop.value = g;
}
</script>
