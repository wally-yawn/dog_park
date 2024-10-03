var form = document.querySelector(".hero form");
var input = document.querySelector("#dog-name");
var headerText = document.querySelector(".hero h1 strong");

form.addEventListener("submit", displayDogName);

function displayDogName(event) {
  event.preventDefault();
  var dogName = input.value;
  headerText.innerText = dogName;
}
