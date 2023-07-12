const initialPrice = document.querySelector(".initial-price");
const quantityOfStocks = document.querySelector(".quantity-of-stocks");
const currentPrice = document.querySelector(".current-price");
const output = document.querySelector("#output");
const clickButton = document.querySelector("#click-button");

function clickHandler() {
  var ip = Number(initialPrice.value);
  var qty = Number(quantityOfStocks.value);
  var curr = Number(currentPrice.value);

  calculateProfitAndLoss(ip, qty, curr);
}

function calculateProfitAndLoss(initial, quantity, current) {
  if (initial > current) {
    var loss = (initial - current) * quantity;
    var lossPercentage = (loss / initial) * 100;

    showOutput(
      `Hey, the loss is ${loss} and the percent is ${lossPercentage}%`
    );
  } else if (current > initial) {
    var profit = (current - initial) * 100;
    var profitPercentage = profit / initial;

    showOutput(
      `Hey, the profit is ${profit} and the percent is ${profitPercentage}%`
    );
  } else {
    showOutput(`No pain no gain and no gain no pain`);
  }
}

function showOutput(messsge) {
  output.innerHTML = messsge;
}

clickButton.addEventListener("click", clickHandler);
