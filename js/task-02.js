// Напиши скрипт, который для каждого элемента массива ingredients:

const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];
const listOfIngredienstsEl = document.querySelector("#ingredients");

const list = ingredients.map((list) => {
  // Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
  const listEl = document.createElement("li");

  // Добавит название ингредиента как его текстовое содержимое.
  listEl.textContent = list;

  // Добавит элементу класс item.
  listEl.classList.add("item");

  return listEl;
});

// После чего вставит все <li> за одну операцию в список ul#ingredients.
listOfIngredienstsEl.append(...list);
