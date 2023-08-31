const nameInput = document.querySelector("#validation-input");
nameInput.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  const symbolLength = nameInput.dataset.length;
  const inputContentLength = nameInput.value.length;

  if (inputContentLength === Number(symbolLength)) {
    nameInput.classList.remove("invalid");
    nameInput.classList.add("valid");
  } else {
    nameInput.classList.remove("valid");
    nameInput.classList.add("invalid");
  }
}
