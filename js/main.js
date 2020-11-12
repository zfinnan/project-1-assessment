let decreaseBtn = document.getElementById("buttonDecrease");
let increaseBtn = document.getElementById("buttonIncrease");
let counter = document.getElementById("counter");
let quantity = document.getElementById("quantity");
let count = 0;

decreaseBtn.addEventListener("click", () => {
  count -= addInput();
  counter.innerHTML = count;
  counterStyle();
});

increaseBtn.addEventListener("click", () => {
  count += addInput();
  counter.innerHTML = count;
  counterStyle();
});

function counterStyle() {
  if (count < 0) {
    counter.classList.add("negative");
    counter.classList.remove("positive");
  } else if (count > 0) {
    counter.classList.add("positive");
    counter.classList.remove("negative");
  } else {
    counter.classList.remove("negative");
    counter.classList.remove("positive");
  }
}

function addInput() {
  return parseInt(quantity.value);
}