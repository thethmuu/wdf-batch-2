const firstNoEl = document.querySelector('.first-no');
const secondNoEl = document.querySelector('.second-no');

const resultEl = document.querySelector('.result');

let firstNo = 20;
let secondNo = 4;
firstNoEl.textContent = firstNo;
secondNoEl.textContent = secondNo;

function add() {
  resultEl.textContent = firstNo + secondNo;
}
function substract() {
  resultEl.textContent = firstNo - secondNo;
}
function multiply() {
  resultEl.textContent = firstNo * secondNo;
}
function divide() {
  resultEl.textContent = firstNo / secondNo;
}
