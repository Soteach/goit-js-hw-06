const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const createList = list => {
  return list.map(item => {
    const newEl = document.createElement('li');
    newEl.textContent = item;
    return newEl;
  })
}
const list = createList(ingredients);
document.querySelector("#ingredients").append(...list);