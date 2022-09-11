const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulList = document.getElementById("ingredients");

const foodIngredients = ingredients.forEach(ingredient => {
  let item = document.createElement("li");

  item.textContent = ingredient;

  item.classList.add('item');
  

  ulList.append(item);
  console.log(item);
});
 

