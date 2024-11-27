<template>
  <div>
    <BaseButton
      @click="visibilitiModal = true"
      title="Создать"
      border-radius="20px"
      box-shadow="5px 5px 8px #9e9f9d"
      padding="10px"
      width="150px"
      borderColor="#3797c4"
    />
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
      <div class="sort">
        <div class="sort-parameter">
          Сортировать по:

          <BaseSelect
            :value="sd"
            v-model="selectedFilter"
            :optionsBase="options"
          ></BaseSelect>
        </div>
        <div class="sort-parameter">
          Только редактируемые
          <BaseInput v-model="checkbox" type="checkbox" />
        </div>
      </div>
      <div>
        <ModalEditCreateNote
          v-if="visibilitiModal"
          @cancel="cancelModal"
          @success="handleNewNotes"
          :textValue="defaultValue"
          :numberIndex="editNoteIndex"
        />
      </div>
      <ul class="list">
        <Note
          v-for="(note, index) in filteredNotes"
          @deleteNote="deleteNote(note.id)"
          @editNote="editNote(note.id)"
          :note="note"
        />
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

const defaultValue = ref({
  title: "",
  bgColor: "#ffffff",
});

const editNoteIndex = ref(null);

const searchNote = (notes, id) => {
  return notes.find((note) => note.id === id);
};

const editNote = (id) => {
  const note = searchNote(notes.value, id);
  defaultValue.value.title = note.title;
  defaultValue.value.bgColor = note.bgColor;
  editNoteIndex.value = notes.value.indexOf(note);

  visibilitiModal.value = true;
};

const titleNoteValue = ref("");

const notes = ref([{}]);

const visibilitiModal = ref(false);

const cancelModal = () => {
  visibilitiModal.value = false;
  editNoteIndex.value = null;
  defaultValue.value.title = "";
  defaultValue.value.bgColor = "#ffffff";
};

const handleNewNotes = (note) => {
  if (editNoteIndex.value !== null) {
    notes.value[editNoteIndex.value].title = note.title;
    notes.value[editNoteIndex.value].bgColor = note.bgColor;
    notes.value[editNoteIndex.value].dateEdited = new Date().toISOString();
  } else {
    notes.value.push({
      title: note.title,
      bgColor: note.bgColor,
      date: new Date().toISOString(),
      id: new Date().getTime(),
      dateEdited: null,
    });
  }

  visibilitiModal.value = false;
  editNoteIndex.value = null;
  defaultValue.value.title = "";
  defaultValue.value.bgColor = "#ffffff";

  saveNotes();
};
const noteCount = computed(() => notes.value.length);

const deleteNote = (id) => {
  notes.value = notes.value.filter((note) => note.id !== id);
  saveNotes();
};

const options = ref([
  { option: "dateAscending", name: "от старых к новым" },
  { option: "dateDescending", name: "от новых к старым" },
]);

const selectedFilter = ref("");

const checkbox = ref(false);

const editingCheck = () => {
  if (checkbox.value === true) {
    return notes.value.filter((note) => note.dateEdited !== null);
  } else {
    return notes.value;
  }
};

const filteredNotes = computed(() => {
  const filtered = editingCheck();
  if (selectedFilter.value === "dateAscending") {
    return [...filtered].sort((a, b) => new Date(a.date) - new Date(b.date));
  } else if (selectedFilter.value === "dateDescending") {
    return [...filtered].sort((a, b) => new Date(b.date) - new Date(a.date));
  }
  return filtered;
});

onMounted(loadNotes);
</script>

<style scoped>
.new-note {
  width: 100px;
}

.btn-modal {
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

.btn {
  width: 25px;
  height: 25px;
}
.sort {
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr;
  width: 500px;
}

.sort-parameter {
  grid-template-columns: 1fr;
  padding-right: 50px;
}
</style>
