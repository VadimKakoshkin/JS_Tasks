function getDomNodesBySelector(selector) {
    let array = [];
    let prices = document.querySelectorAll('.price-value');

    for (let i = 0; i < prices.length; i++) {
      let value = Number(prices[i].textContent);
      array.push(value);
    }

    return array;
  }
  
  console.log(getDomNodesBySelector('.price-value'));