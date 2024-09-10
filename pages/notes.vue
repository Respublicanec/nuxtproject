<template>
  <div>
    <Button v-on:click="newNote">New</Button>
  </div>
  <div class="container">
    <div>
      <h1
        :style="{
          color: inputValue.length < 5 ? 'darkred' : 'darkblue',
          fontSize: inputValue.length < 6 ? '2rem' : '1.5rem',
        }"
      >
        {{ title }}
      </h1>
      <div v-if="noteModal" class="Modal">
        <div class="modalInput">
          <input
            class="input"
            type="text"
            v-bind:placeholder="placeholderString"
            v-model="inputValue"
            v-on:keypress.enter="addNote"
          />
        </div>

        <div class="btnCon">
          <button class="btnNew" v-on:click="modalCancel">Отмена</button>
          <button class="btnNew" v-on:click="addNote">Добавить</button>
        </div>
      </div>
      <ul class="list">
        <li
          v-for="(note, index) in notes"
          :key="index"
          class="note list-item"
          :style="{ backgroundColor: note.bgColor }"
        >
          <div class="contButton">
            <button class="btn" v-on:click="notes.splice(index, 1)">x</button>
          </div>
          <!-- <span :class="note.length > 5 ? 'primary' : 'bold'"> {{toUpperCase(note)}} </span>  -->

          <!-- <span :class="{
        'primary' : true,
        'bold' : note.length > 5
      }"> {{toUpperCase(note)}} </span>  -->

          <span class="text" v-text="note.note"> </span>
        </li>
      </ul>

      <div v-if="notes.length === 0">Заметок пока нет</div>
    </div>
  </div>
  <div class="container">
    <hr />
    <strong>Общее количество: {{ itemCount }}</strong>
  </div>
</template>

<script setup>
import { ref } from "vue";

const title = ref("Ваши заметки");
const placeholderString = ref("Введите название заметки");
const inputValue = ref("");
const bgColor = ref(getRandomColor());
const notes = ref([{ note: "Заметка 1" }]);
const noteModal = ref(false);

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  console.log(color);
  return color;
}

function addNote() {
  const newNote = {
    note: inputValue.value,
    bgColor: getRandomColor(),
  };
  notes.value.push(newNote);
  inputValue.value = "";
  noteModal.value = false;
}

const itemCount = computed(() => notes.value.length);

// function addNote() {
//   if (inputValue.value.trim() !== '') {
//     notes.value.push(inputValue.value);
//     inputValue.value = '';
//     noteModal.value = false;
//   } else {
//     noteModal.value = false;
//   }
// };

function newNote() {
  noteModal.value = true;
}

function modalCancel() {
  noteModal.value = false;
}

function toUpperCase(note) {
  return note.toUpperCase();
}
</script>

<style>
.btnNew {
  width: 110px;
  background-color: #32ca49;
}

.container {
  display: flex;
  flex-wrap: wrap;
  max-width: 750px;
  margin: auto;
}
.Modal {
  min-width: 250px;
  height: 220px;
  width: 300px;
  padding: 30px;
  position: absolute;
  left: 650px;
  background-color: rgb(236, 176, 176);
}
.btnCon {
  position: absolute;
  left: 60px;
  top: 170px;
}
.modalInput {
  position: absolute;
  left: 80px;
  top: 5px;
}
.input {
  width: 280px;
  height: 40px;
  position: absolute;
  left: -40px;
  top: 30px;
}
.list {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
}

.list-item {
  display: flex;
  min-width: 220px;
  width: calc(33.33% - 20px);
  height: 250px;
  margin: 10px;
  text-align: center;
  background-color: #ca3232;
  flex-direction: column;
  overflow-wrap: break-word;
}
.text {
}
.btn {
  width: 25px;
  height: 25px;
}
.contButton {
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
}
</style>
