const currenciesContainer = document.querySelector('.currencies');
const userInput = document.querySelector('.header-input');

// let mmkResult = 0
// let

let currencyRates = {
  mmk: 3000.25,
  baht: 75,
  yen: 250,
};

let currencyCountries = ['mmk', 'baht', 'yen'];

{
  /* <article class="card">
      <p class="title">Myanmar Kyat</p>
      <p class="value">3000 MMK</p>
</article> */
}

// textContent and innerText
// innerHTML

function convert() {
  if (userInput.value === '') {
    alert('fill the amount');
  } else {
    // clean the currency container before inserting cards
    currenciesContainer.innerHTML = '';

    const amount = userInput.value;
    console.log(amount);
    let mmkResult = amount * currencyRates.mmk;
    let bahtResult = amount * currencyRates.baht;
    let yenResult = amount * currencyRates.yen;

    let calculatedResults = [
      mmkResult.toFixed(2),
      bahtResult.toFixed(2),
      yenResult.toFixed(2),
    ];

    let title = ['Myanmar Kyat', 'Thai Baht', 'Japanese Yen'];

    for (let i = 0; i < currencyCountries.length; i++) {
      const cardArticle = document.createElement('article');
      cardArticle.classList.add('card');

      const titleP = document.createElement('p');
      titleP.classList.add('title');
      titleP.textContent = title[i];
      cardArticle.appendChild(titleP);

      const valueP = document.createElement('p');
      valueP.classList.add('value');
      valueP.textContent = calculatedResults[i];
      cardArticle.appendChild(valueP);

      currenciesContainer.appendChild(cardArticle);
    }
  }
}
