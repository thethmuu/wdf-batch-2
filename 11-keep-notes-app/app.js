// global selectors
const noteContainer = document.querySelector('.note-container');
const modal = document.querySelector('#modal');
const form = document.querySelector('form');
const titleInput = document.querySelector('#title');
const noteInput = document.querySelector('#note');
const categoriesInput = document.querySelector('#categories');

let notes = [];

// Class: for creating a  new  note
class Note {
  constructor(title, body, category) {
    this.title = title;
    this.body = body;
    this.category = category;
    this.id = Math.floor(Math.random() * 2000);
  }
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (titleInput.value !== '' && noteInput.value !== '') {
    const newNote = new Note(
      titleInput.value,
      noteInput.value,
      categoriesInput.input
    );

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

//  <article class='note'>
// <span></span>
//    <h2 class='note__title'>Title</h2>
//    <p class='note__body'>Lorem ipsum dolor sit amet.</p>
//    <div class='note__btns'>
//      <button class='note__btn note__view'>
//        <i class='fa-solid fa-eye'></i>
//      </button>
//      <button class='note__btn note__delete'>
//        <i class='fa-solid fa-trash'></i>
//      </button>
//    </div>
//  </article>;

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

// Function: Show notes in UI

// Function: Show alert message

// Function: View note in modal

// Event: Close Modal

// Event: Note Buttons

// Event: Display Notes

// Event: Note Form Submit
