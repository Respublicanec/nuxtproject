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

      Фильтровать по:
      <select v-model="selectedFilter">
        <option value="name">Названию</option>
        <option value="colors">Цвету</option>
      </select>
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
        <li v-for="(note, index) in filteredNotes" class="note">
          <Note
            @deleteNote="deleteNote(index)"
            @editNote="editNote(index)"
            :note="note"
          />
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

const defaultValue = ref({
  title: "",
  bgColor: "#ffffff",
  favorite: "false",
});

const editNoteIndex = ref(null);

const editNote = (index) => {
  editNoteIndex.value = index;
  defaultValue.value.title = notes.value[index].title;
  defaultValue.value.bgColor = notes.value[index].bgColor;
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
  if (
    editNoteIndex.value !== null &&
    editNoteIndex.value < notes.value.length
  ) {
    notes.value[editNoteIndex.value].title = note.title;
    notes.value[editNoteIndex.value].bgColor = note.bgColor;
  } else {
    notes.value.push({
      title: note.title,
      bgColor: note.bgColor,
      favorite: false,
      date: new Date().toISOString(),
    });
  }

  visibilitiModal.value = false;
  editNoteIndex.value = null;
  defaultValue.value.title = "";
  defaultValue.value.bgColor = "#ffffff";
  defaultValue.value.favorite = false;
  saveNotes();
};
const noteCount = computed(() => notes.value.length);

const deleteNote = (index) => {
  notes.value.splice(index, 1);
  console.log(index);
  saveNotes();
};

const selectedFilter = ref("");

const filteredNotes = computed(() => {
  let filtered = notes.value.slice();

  let localFavorite = filtered.filter((note) => note.favorite === true);

  let nonFavorite = filtered.filter((note) => note.favorite !== true);

  if (selectedFilter.value === "name") {
    localFavorite.sort((a, b) => a.title.localeCompare(b.title));
    nonFavorite.sort((a, b) => a.title.localeCompare(b.title));
  } else if (selectedFilter.value === "colors") {
    localFavorite.sort((a, b) => a.bgColor.localeCompare(b.bgColor));
    nonFavorite.sort((a, b) => a.bgColor.localeCompare(b.bgColor));
  }

  filtered = [...localFavorite, ...nonFavorite];

  return filtered;
});

const choiceFavorites = (index) => {
  notes.value[index].favorite = !notes.value[index].favorite;
  saveNotes();
};

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
.btn {
  width: 25px;
  height: 25px;
}
.date {
  text-align: right;
}
</style>
