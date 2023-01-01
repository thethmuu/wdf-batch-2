const movieInput = document.querySelector('.movie-input');
const form = document.querySelector('.submit-form');
const movieList = document.querySelector('.movie-list');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  console.log(movieInput.value);

  //       <div class="movie">
  //         <li class="movie-item">Movie Name</li>
  //         <button class="delete-btn"><i class="fa-solid fa-trash"></i></button>
  //         <button><i class="fa-solid fa-circle-check"></i></button>
  //       </div>
  const newDiv = document.createElement('div');
  newDiv.classList.add('movie');
  const li = document.createElement('li');
  li.textContent = movieInput.value;
  newDiv.appendChild(li);

  const trashBtn = document.createElement('button');
  trashBtn.classList.add('delete-btn');
  trashBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';

  newDiv.appendChild(trashBtn);

  movieList.appendChild(newDiv);
});

// object -> person
// name, age, address

// printData()
// 'name' is 'age' years old and lives at 'address'

let person = {
  name: 'John',
  age: 22,
  address: 'Mandalay',
};

function printData() {
  console.log(
    `${person.name} is ${person.age} years old and lives at ${person.address}`
  );
}

// exercise 2
// write conditional console.log
//  less than 6 -> free
// 6 to 17 years old -> child discount
// 18 to 26 -> student discount
// greater than 26

let countries = ['Myanmar', 'China', 'US', 'UK'];

for (i = 0; i < countries.length; i++) {
  console.log(countries[i]);
}

// add 'Korea' to the last of array
// add 'Japan' to the first
// remove first item from the array
