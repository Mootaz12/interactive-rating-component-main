"uses strict";
const submitButton = document.querySelector(".btn-submit");
const rateNum = document.querySelectorAll(".btn-number");
const thankingContainer = document.querySelector(".thanking-container");
const ratingContainer = document.querySelector(".rating-container");
const chosenRate = document.querySelector(".chosen-rate");
let chosenNumber;
rateNum.forEach((Number) => {
  Number.addEventListener("click", (e) => {
    chosenNumber = Number.textContent;
  });
});
submitButton.addEventListener("click", function () {
  chosenRate.textContent = chosenNumber;
  ratingContainer.classList.add("hidden");
  thankingContainer.classList.remove("hidden");
});
