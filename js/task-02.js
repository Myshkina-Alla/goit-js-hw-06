const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const container = document.querySelector("#ingredients");
const markup = ingredients.map((item) => {
  const liElements = document.createElement("li");
  liElements.textContent = item;
  liElements.classList = "item";
  return liElements;
});
container.append(...markup);
