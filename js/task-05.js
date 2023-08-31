const nameInput = document.querySelector("#name-input");
const title = document.querySelector("#name-output");

nameInput.addEventListener("input", onInputChange);

function onInputChange(event) {
  const inputValue = event.currentTarget.value.trim();
  if (inputValue === "") {
    title.textContent = "Anonymous";
  } else {
    title.textContent = inputValue;
  }
}
