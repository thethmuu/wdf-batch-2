const countEl = document.querySelector('.count');
const titleEl = document.querySelector('h1');
let count = 0;
let customerCounts = [];

let greeting = 'Good morning';
let customerName = 'Cheryl';

// const -> cannot be reassigned
// let -> can be reassigned
countEl.textContent = count;

function greet() {
  titleEl.textContent = greeting + ' ' + customerName;
}

function increase() {
  // count = count + 1;
  count += 1;
  countEl.textContent = count;
}

function decrease() {
  // if count > 0
  if (count > 0) {
    // count = count - 1;
    count -= 1
  }
  countEl.textContent = count;
}

function reset() {
  count = 0
  countEl.textContent = count
}

function save() {
  customerCounts.push(count);
  console.log(customerCounts);
}
