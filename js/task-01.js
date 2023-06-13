
const itemList = document.querySelectorAll('.item');
console.log(`Number of categories: ${itemList.length}`);
const nameCategoriesItem = itemList.forEach(el => {
    const nameCategories = el.firstElementChild.textContent;
    const quantityElementsItem =el.lastElementChild.children.length
    console.log(`Category: ${nameCategories}\nElements: ${quantityElementsItem}`);
})


