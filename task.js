function getDomNodesBySelector(selector) {
  let array = [];
  let prices = document.querySelectorAll('.price-value');

  for (let i = 0; i < prices.length; i++) {
    let value = Number(prices[i].textContent);
    array.push(value);
  }

  return array;
}

function applyDiscount() {
  // Ваш код
  let discountBtn = document.querySelector('.total__button');
  let totalSum = document.querySelector('.total-price-value');
  let values = getDomNodesBySelector('.price-value');

  function endSum () {
    sum = totalSum.textContent * 0.15;
    endSum = totalSum.textContent - sum;
    totalSum.textContent = endSum.toFixed(0);
    values.forEach(element => {
      sumProc = element.textContent * 0.15;
      endSum = element.textContent - sumProc;
      element.textContent = endSum.toFixed(0);
    });
    discountBtn.style.visibility = "hidden";
  }
  discountBtn.addEventListener('click', endSum);
}

applyDiscount();