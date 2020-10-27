"use strict";
// Vending Machine Code
let purchaseBtn = document.querySelectorAll(".purchaseBtn");
let total = 0;
purchaseBtn.forEach((button) => {
  button.addEventListener("click", () => {
    let display = document.querySelector(".display");
    let price = parseFloat(button.getAttribute("data-price"));
    total += price;
    display.innerText = `Total Price: $${total.toFixed(2)}`;
  });
});

// Make Money Code
let form = document.querySelector(".form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let formData = new FormData(form);
  let howMany = formData.get("howMany");
  let whichCoinType = formData.get("whichCoin");
  let coinContainer = document.querySelector(".coin-container");

  for (let i = 0; i < howMany; i++) {
    let newDiv = document.createElement("div");
    newDiv.setAttribute("class", whichCoinType);
    newDiv.innerText = whichCoinType;
    newDiv.classList.add("center-text");
    coinContainer.append(newDiv);
  }
  form.reset();
});

//Light Bulb Code
let bulb = document.querySelector(".bulb");
let bulbContainer = document.querySelector(".light-bulb");
let allOpBtn = document.querySelectorAll(".opBtn");
let onBtn = document.querySelector(".onBtn");
let offBtn = document.querySelector(".offBtn");
let toggleBtn = document.querySelector(".toggleBtn");
let endBtn = document.querySelector(".endBtn");
onBtn.addEventListener("click", () => {
  bulb.classList.add("on");
});
offBtn.addEventListener("click", () => {
  bulb.classList.remove("on");
});
toggleBtn.addEventListener("click", () => {
  bulb.classList.toggle("on");
});
endBtn.addEventListener("click", () => {
  bulbContainer.removeChild(bulb);
  allOpBtn.forEach((button) => {
    button.disabled = true;
  });
});
