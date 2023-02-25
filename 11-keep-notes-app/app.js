// global selectors
const noteContainer = document.querySelector('.note-container');
const categoriesContainer = document.querySelector('.categories-container');

const modal = document.querySelector('#modal');
const form = document.querySelector('form');
const titleInput = document.querySelector('#title');
const noteInput = document.querySelector('#note');
const categoriesInput = document.querySelector('#categories');
const toggleBtn = document.querySelector('.toggle-btn');
const searchInput = document.querySelector('#search');

let notes = [];
let filteredNotes = [];
const categories = [
  {
    id: 1,
    name: 'Music',
  },
  {
    id: 2,
    name: 'Coding',
  },
  {
    id: 3,
    name: 'Finance',
  },
];

let theme = 'light';

window.addEventListener('DOMContentLoaded', () => {
  showAllNotes();
  showAllCategories();
  if (localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme');
  }
  loadTheme();
});

function toggleTheme() {
  theme === 'light' ? (theme = 'dark') : (theme = 'light');

  loadTheme();
}

function loadTheme() {
  const root = document.querySelector('body');
  root.setAttribute('color-scheme', theme);
  toggleBtn.innerHTML =
    theme === 'light'
      ? `<i class="fa-solid fa-lightbulb"></i>`
      : `<i class='fa-solid fa-moon'></i>`;
}

toggleBtn.addEventListener('click', () => {
  toggleTheme();
  localStorage.setItem('theme', theme);
});

searchInput.addEventListener('keyup', filterNote);

function filterNote() {
  const searchTerm = searchInput.value.toLowerCase();

  filteredNotes = notes.filter((note) => {
    return [note.title, note.body].join('').toLowerCase().includes(searchTerm);
  });

  addFilteredNoteToUI(filteredNotes);
}

function addFilteredNoteToUI(notes) {
  noteContainer.innerHTML = '';
  notes.forEach((note) => {
    addNoteToUIList(note);
  });
}

function filterNoteByCategory(categoryId) {
  console.log(notes);
  let categorizedNotes = notes.filter(
    (note) => Number(note.category) === Number(categoryId)
  );
  console.log(categorizedNotes);
  addFilteredNoteToUI(categorizedNotes);
}

categoriesContainer.addEventListener('click', (event) => {
  const currentItem = event.target.closest('.category-item');
  const id = currentItem.querySelector('.hidden-id').textContent;
  filterNoteByCategory(id);
});

noteContainer.addEventListener('click', (event) => {
  if (event.target.classList.contains('note__delete')) {
    // closest = find nearest element with class
    const currentNote = event.target.closest('.note');
    const id = currentNote.querySelector('span').textContent;
    const confirmDelete = confirm('Sure to delete the note?');
    if (confirmDelete === true) {
      // 1. remove from localStorage
      removeNote(id);
      // 2. remove from UI
      currentNote.remove();
      alert('Note deleted');
    }
  }

  if (event.target.classList.contains('note__view')) {
    const currentNote = event.target.closest('.note');
    const noteTitle = currentNote.querySelector('.note__title').textContent;
    const noteBody = currentNote.querySelector('.note__body').textContent;

    openNoteModal(noteTitle, noteBody);
  }
});

function openNoteModal(noteTitle, noteBody) {
  const modalTitle = document.querySelector('.modal__title');
  const modalBody = document.querySelector('.modal__body');
  modalTitle.textContent = noteTitle;
  modalBody.textContent = noteBody;
  modal.showModal();
}

// close modal
document
  .querySelector('.modal__btn')
  .addEventListener('click', () => modal.close());

function removeNote(id) {
  // let notes = getNotes();
  console.log(notes);
  notes = notes.filter((note) => note.id !== Number(id));
  localStorage.setItem('keep.notes', JSON.stringify(notes));
}

// Class: for creating a  new  note
class Note {
  constructor(title, body, category) {
    this.title = title;
    this.body = body;
    this.category = category;
    this.id = Math.floor(Math.random() * 2000);
  }
}

function showAllCategories() {
  categories.forEach((category) => {
    addCategoryToSidebar(category);
    addCategoryToSelectList(category);
  });
}

function addCategoryToSidebar(category) {
  const li = document.createElement('li');
  li.classList.add('category-item');
  li.innerHTML = `
    <span class='hidden-id' hidden>${category.id}</span>
    <span>${category.name}</span>
  `;
  categoriesContainer.appendChild(li);
}

function addCategoryToSelectList(category) {
  const optionEl = document.createElement('option');
  optionEl.setAttribute('value', category.id);
  optionEl.textContent = category.name;
  categoriesInput.appendChild(optionEl);
}

// Function: Show notes in UI
function showAllNotes() {
  notes = getNotes();

  notes.forEach((note) => {
    addNoteToUIList(note);
  });
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (titleInput.value !== '' && noteInput.value !== '') {
    const newNote = new Note(
      titleInput.value,
      noteInput.value,
      categoriesInput.value
    );

    console.log(newNote);

    // add newNote to UI
    addNoteToUIList(newNote);

    // add note to localStorage
    saveNoteToLocalStorage(newNote);

    // reset form data
    titleInput.value = '';
    noteInput.value = '';
    // show alert message
    alert('Saved successfully');
  } else {
    alert('Please fill both inputs');
  }
});

function addNoteToUIList(note) {
  const newUINote = document.createElement('article');
  newUINote.classList.add('note');
  newUINote.innerHTML = `
    <span hidden>${note.id}</span>
    <h2 class='note__title'>${note.title}</h2>
    <p class='note__body'>${note.body}</p>
   <div class='note__btns'>
     <button class='note__btn note__view'>
       <i class='fa-solid fa-eye'></i>
     </button>
     <button class='note__btn note__delete'>
       <i class='fa-solid fa-trash'></i>
     </button>
   </div>
  `;
  noteContainer.appendChild(newUINote);
}

function getNotes() {
  if (localStorage.getItem('keep.notes')) {
    notes = JSON.parse(localStorage.getItem('keep.notes'));
  }

  return notes;
}

function saveNoteToLocalStorage(note) {
  // get notes from localStorage
  let oldNotes = getNotes();
  oldNotes.push(note);

  localStorage.setItem('keep.notes', JSON.stringify(oldNotes));
}

// Saving to localStorage
// Function: Retreive notes from local storage

// Function: Add a note to local storage

// Function: remove a note  from local storage

// UI UPDATES
// Function: Create new note in UI

// Function: Show alert message

// Function: View note in modal

// Event: Close Modal

// Event: Note Buttons

// Event: Display Notes

// Event: Note Form Submit
