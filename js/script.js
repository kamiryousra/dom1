const plus = document.querySelectorAll(".fas.fa-plus-circle");
const moins = document.querySelectorAll(".fas.fa-minus-circle");
const quantitys = document.querySelectorAll(".quantity");
plus.forEach((el) => {
  el.addEventListener("click", function (event) {
    event.target.nextElementSibling.textContent++;
    updateTotal();
  });
});
moins.forEach((el) => {
  el.addEventListener("click", function (event) {
    if (parseInt(event.target.previousElementSibling.textContent) > 0) {
      event.target.previousElementSibling.textContent--;
      updateTotal();
    }
  });
});
quantitys.forEach((el) => {
  el.addEventListener("click", function (event) {
    const quantity = parseInt(event.target.textContent);
    if (quantity > 0) {
      event.target.textContent = quantity;
    }
  });
});
const trash = document.querySelectorAll(".fas.fa-trash-alt");
const hearts = document.querySelectorAll(".fas.fa-heart");
trash.forEach((el) => {
  el.addEventListener("click", function () {
    el.closest(".card-body").parentNode.remove();
    updateTotal();
  });
});

hearts.forEach((el) => {
  el.addEventListener("click", function () {
    el.classList.toggle("liked");
  });
});
const price = document.getElementsByClassName("unit-price");
const total = document.getElementsByClassName("total");

function updateTotal() {
  let sum = 0;
  const prices = document.querySelectorAll(".unit-price");
  const quantities = document.querySelectorAll(".quantity");
  const totalDisplay = document.querySelector(".total");

  for (let i = 0; i < prices.length; i++) {
    const price = parseFloat(prices[i].textContent.replace("$", ""));
    const quantity = parseInt(quantities[i].textContent);
    sum += price * quantity;
  }

  totalDisplay.textContent = sum + " $";
}
