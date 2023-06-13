const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const makeElementsList = ingredients.map(el => {
   const makeEl = document.createElement('li');
  makeEl.textContent = el;
  makeEl.classList.add('item');
  return makeEl;
})
 
const ingrList = document.querySelector('#ingredients');
ingrList.append(...makeElementsList);
