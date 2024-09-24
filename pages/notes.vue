<template>
  <div>
    <button @click="visibilitiModal = true">New</button>
  </div>
  <div class="container">
    <div>
      <h1
        :style="{
          color: titleNoteValue.length < 5 ? 'darkred' : 'darkblue',
          fontSize: titleNoteValue.length < 6 ? '2rem' : '1.5rem',
        }"
      >
        Ваши заметки
      </h1>
      <div v-if="visibilitiModal" class="modal">
        <div class="modal-input">
          <input
            class="input"
            type="text"
            placeholder="Введите название заметки"
            v-model="titleNoteValue"
            @keypress.enter="addNote"
          />
        </div>

        <div class="wrapper">
          <button class="btn-new" @click="visibilitiModal = false">
            Отмена
          </button>
          <button class="btn-new" @click="addNote">Добавить</button>
        </div>
      </div>
      <ul class="list">
        <li
          v-for="(note, index) in notes"
          :key="index"
          class="note"
          :style="{ backgroundColor: note.bgColor }"
        >
          <div class="contButton">
            <button class="btn" @click="notes.splice(index, 1)">x</button>
          </div>
          <span class="text"> {{ note.title }}</span>
        </li>
      </ul>

      <div v-if="noteCount === 0">Заметок пока нет</div>
    </div>
  </div>
  <div class="container">
    <hr />
    <strong>Общее количество: {{ noteCount }}</strong>
  </div>
</template>

<script setup>
const titleNoteValue = ref("");

const notes = ref([{ title: "Заметка 1", bgColor: "" }]);

const visibilitiModal = ref(false);

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const addNote = () => {
  const newNote = {
    title: titleNoteValue.value,
    bgColor: getRandomColor(),
  };
  notes.value.push(newNote);
  titleNoteValue.value = "";
  visibilitiModal.value = false;
};

const noteCount = computed(() => notes.value.length);
</script>

<style scoped>
.btn-new {
  display: flex;
  width: 110px;
  background-color: #32ca49;
}

.container {
  flex-wrap: wrap;
  width: auto;
  margin: auto;
}
.modal {
  min-width: 250px;
  height: 230px;
  width: 320px;
  padding: 30px;
  position: absolute;
  left: 650px;
  background-color: rgb(236, 176, 176);
}
.wrapper {
  display: flex;
  position: absolute;
  left: 60px;
  top: 170px;
}
.modalInput {
  left: 80px;
  top: 5px;
}
.input {
  width: 280px;
  height: 40px;
  top: 30px;
}
.list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 5px;
  width: auto;
}

.note {
  display: grid;
  grid-template-columns: auto;
  text-align: center;
  max-width: auto;
}
.contButton {
  text-align: right;
}
.text {
  display: grid;
  grid-row-start: 3;
}
.btn {
  width: 25px;
  height: 25px;
}
.btn-new {
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
}
</style>
