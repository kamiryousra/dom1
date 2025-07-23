const plus = document.querySelectorAll(".fas.fa-plus-circle");
const moins = document.querySelectorAll(".fas.fa-minus-circle");
const quantitys = document.querySelectorAll(".quantity");
plus.forEach((el) => {
  el.addEventListener("click", function (event) {
    event.target.nextElementSibling.textContent++;
  });
});
moins.forEach((el) => {
  el.addEventListener("click", function (event) {
    if (parseInt(event.target.previousElementSibling.textContent) > 0) {
      event.target.previousElementSibling.textContent--;
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
    el.closest(".card-body").remove();
    el.closest(".card-img-top").remove();
  });
});

hearts.forEach((el) => {
  el.addEventListener("click", function () {
    el.classList.toggle("liked");
  });
});
const total=document.getElementsByClassName('total-price');
