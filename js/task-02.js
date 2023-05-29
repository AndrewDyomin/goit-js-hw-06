const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('#ingredients');

ingredients.forEach(function callback(element) {
  const lastItem = document.createElement("li");
  lastItem.textContent = element;
  lastItem.className = 'item';
  ingredientsEl.append(lastItem);
});
