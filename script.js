const header = document.querySelector(".header-one");
const inputEl = document.getElementById("input-one");
const deleteButton = document.getElementById("del-btn-one");
const activateButton = document.getElementById("activate-btn-one");

inputEl.addEventListener("change", (e) => {
  header.innerHTML = e.target.value;
});

inputEl.addEventListener("input", (e) => {
  const inputLength = e.target.value.length;

  if (inputLength > 50) {
    e.target.disabled = true;
  }
});

activateButton.addEventListener("click", (e) => {
  inputEl.value = "";
  inputEl.disabled = false;
});

deleteButton.addEventListener("click", (e) => {
  header.innerHTML = "";
  inputEl.value = "";
});
