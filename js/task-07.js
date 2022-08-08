// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

const refs = {
  inputControl: document.querySelector('#font-size-control'),
  text: document.querySelector('#text'),
};

console.log(refs.inputControl);
console.log(refs.text);
refs.inputControl.addEventListener('input', event => {
  refs.text.style.fontSize = `${event.currentTarget.value}px`;
});
