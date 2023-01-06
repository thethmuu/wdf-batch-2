// selectors
const movieInput = document.querySelector('.movie-input');
const form = document.querySelector('.form');
const movieList = document.querySelector('.movie-list');

{
  /* <div class='movie'>
  <li class='movie-item'>Movie Name</li>
  <button>
    <i class='fa-solid fa-trash'></i>
  </button>
</div>; */
}

// higher order function -> function that can accept another function as a parameter
// callback function -> function that is passed as a parameter to another function
// form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  // preventing form default behaviour
  event.preventDefault();
  // creating elements
  const divEl = document.createElement('div');
  divEl.classList.add('movie');

  const liEl = document.createElement('li');
  liEl.classList.add('movie-item');
  liEl.textContent = movieInput.value;

  const deleteBtn = document.createElement('button');
  deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';

  // placing elements
  divEl.appendChild(liEl);
  divEl.appendChild(deleteBtn);

  // place our new div in movie list element
  movieList.appendChild(divEl);

  // clear the input
  movieInput.value = '';
}
