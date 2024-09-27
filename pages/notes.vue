<template>
  <div>
    <BaseButton @click="visibilitiModal = true" newNote="Создать" />
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
          <button class="btn-modal" @click="visibilitiModal = false">
            Отмена
          </button>
          <button class="btn-modal" @click="addNote">Добавить</button>
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
            <button class="btn" @click="deleteNote(index)">x</button>
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
const loadNotes = () => {
  const storedNotes = localStorage.getItem("notes");
  if (storedNotes) {
    notes.value = JSON.parse(storedNotes);
  }
};

const saveNotes = () => {
  localStorage.setItem("notes", JSON.stringify(notes.value));
};

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
  saveNotes();
};

const noteCount = computed(() => notes.value.length);

const deleteNote = (index) => {
  notes.value.splice(index, 1);
  saveNotes();
};

onMounted(loadNotes);
</script>

<style scoped>
.new-note {
  width: 100px;
}
.btn-modal {
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
  background-color: rgb(196, 182, 182);
  border: 2px solid rgb(111, 4, 4);
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
  padding: 0px;
  margin: 0px;
  grid-template-columns: repeat(auto-fill, minmax(303px, 1fr));
  gap: 5px;
  width: auto;
}

@media (min-width: 555px) and (max-width: 920px) {
  .list {
    grid-template-columns: repeat(2, 1fr);
  }
}

.note {
  display: grid;
  width: auto;
  text-align: center;
  max-width: auto;
  border: 2px solid rgb(165, 165, 175);
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
.btn-modal {
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
}
</style>
