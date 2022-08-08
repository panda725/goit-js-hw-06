// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

let counterValue = 0;

const valueRef = document.querySelector('#value');
const btnMinus = document.querySelector('button[data-action="decrement"]');
const btnPlus = document.querySelector('button[data-action="increment"]');

function onMinusButtonClick() {
  counterValue -= 1;
  valueRef.textContent = counterValue;
}

function onPlusButtonClick() {
  counterValue += 1;
  valueRef.textContent = counterValue;
}

btnMinus.addEventListener('click', onMinusButtonClick);
btnPlus.addEventListener('click', onPlusButtonClick);
