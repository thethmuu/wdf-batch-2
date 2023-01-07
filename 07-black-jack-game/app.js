// variable declaration and assignment
let sum = 0;
let hasBlackjack = false;
let isAlive = false;
let message = '';
let cards = [];

const messageEl = document.querySelector('#message');
const greetingEl = document.querySelector('#greeting');
const sumEl = document.querySelector('#sum');
const cardsEl = document.querySelector('#cards');
const inputForm = document.querySelector('.input-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');

inputForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const player = {
    name: nameInput.value,
    email: emailInput.value,
  };
  // || -> or
  // && -> and
  if (nameInput.value !== '' || emailInput.value !== '') {
    const greetingText = `Good morning, ${player.name} and your email is ${player.email}`;

    greetingEl.textContent = greetingText;
  } else {
    alert('Please fill in all data')
  }
});

function getRandomNumber() {
  const result = Math.floor(Math.random() * 13) + 1;
  return result;
}

// expression -> a piece of JS code that can produce a value

// conditional -> knows only true or false
function startGame() {
  let firstCard = getRandomNumber();
  let secondCard = getRandomNumber();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  checkResult();
  isAlive = true;
}

function checkResult() {
  if (sum < 21) {
    message = 'You can draw a new card';
  } else if (sum === 21) {
    message = 'Congrats! You got blackjack! 🙋';
    // reassigned or updated
    hasBlackjack = true;
  } else {
    message = 'Game over 😥';
    isAlive = false;
  }
  messageEl.textContent = message;
  sumEl.textContent = 'Sum: ' + sum;

  cardsEl.textContent = 'Cards: ';
  for (let i = 0; i < cards.length; i += 1) {
    cardsEl.textContent += cards[i] + ', ';
  }
  // cardsEl.textContent = 'Cards: ' + cards[0] + ', ' + cards[1];
}

function pullNewCard() {
  // newCard = 5
  // recalculate
  // isAlive, hasBlackjack
  // sum === 2 && age < 18
  if (isAlive === true && hasBlackjack === false) {
    let newCard = getRandomNumber();
    sum += newCard;
    cards.push(newCard);
    checkResult();
  } else if (isAlive === false) {
    alert('You are out of game!');
  } else if (hasBlackjack === true) {
    alert('You have already won!');
  }
}
