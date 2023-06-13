const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const arrIngr = [];
const makeElList = options => {
  const el = document.createElement('li');
  el.textContent = options;
  el.classList.add('item');
  arrIngr.push(el);
  
};
const ingrEl = ingredients.forEach(elm => {
  makeElList(elm); 
});
const ingrList = document.querySelector('#ingredients');
ingrList.append(...arrIngr);


