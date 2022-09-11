const totalCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${totalCategories.length}`);

const categoriesArray = [...totalCategories]
.map(
    category => `Category: ${category.firstElementChild.textContent}
Elements: ${category.children[1].children.length}`
)
.join("\n");
console.log(categoriesArray);

