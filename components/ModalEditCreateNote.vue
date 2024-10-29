<template>
  <div>
    <div class="modal">
      <button class="btn-cancel" @click="emit('cancel')">x</button>
      <BaseInput :modelValue="textNote" @textAndColor="inputComponentAdd" />
      <BaseButton class="btn-new-note" @click="addNewNote" :title="titleText" />
    </div>
  </div>
  <div>{{ textNote }}</div>
</template>

<script setup>
const props = defineProps({
  textValue: {
    type: String,
  },
  numberIndex: {
    type: Number,
  },
});

const emit = defineEmits(["cancel", "success"]);

const textNote = ref(props.textValue);

const inputComponentAdd = (value) => {
  textNote.value.title = props.textValue;
  textNote.value.bgColor = value.bgColor;
};
const addNewNote = () => {
  emit("success", textNote.value);
  textNote.value = { title: "", bgColor: "" };
};

const titleText = computed(() => {
  return typeof props.numberIndex === "number" ? "Сохранить" : "Добавить";
});
</script>

<style>
.modal {
  min-width: 250px;
  height: 230px;
  width: 320px;
  padding: 30px;
  position: absolute;
  left: calc(50% - 200px);
  top: calc(50% - 200px);
  background-color: rgb(234, 210, 175);
  border: 2px solid rgb(111, 4, 4);
}

.btn-cancel {
  margin-left: 300px;
  font-size: 13px;
  height: 20px;
  width: 20px;
}

.text-note {
  margin-top: 30px;
  height: 30px;
  width: 310px;
}

.btn-new-note {
  margin-left: calc(50% - 60px);
  margin-top: 20px;
}
</style>
