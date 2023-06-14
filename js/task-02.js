const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const makeElementsList = ingredients.map(el => {
  const li = document.createElement('li');
  li.textContent = el;
  li.classList.add('item');
  return li; 
});
 
const ingrItems = document.querySelector('#ingredients');
ingrItems.append(...makeElementsList);



