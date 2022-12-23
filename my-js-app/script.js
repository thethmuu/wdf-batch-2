const countEl = document.querySelector('.count');
const titleEl = document.querySelector('h1');
let count = 0;
let customerCounts = [];

let greeting = 'Good morning';
let customerName = 'Cheryl';

// const -> cannot be reassigned
// let -> can be reassigned
countEl.innerText = count;

function greet() {
  titleEl.innerText = greeting + ' ' + customerName;
}

function increase() {
  count = count + 1;
  countEl.innerText = count;
}

function decrease() {
  count = count - 1;
  countEl.innerText = count;
}

function save() {
  customerCounts.push(count);
  console.log(customerCounts);
}
