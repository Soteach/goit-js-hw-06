const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listRef = document.querySelector("#ingredients");

const itemRef = [...ingredients];

const itemEl = document.createElement('li');
itemEl.classList.add("item")
itemEl.append(itemRef)

listRef.append(itemEl);