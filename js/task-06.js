// Напиши скрипт, который при потере фокуса на инпуте (событие blur), проверяет его содержимое на правильное количество введённых символов.

// Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.

// Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.

const textInput = document.querySelector('#validation-input');
const dataLength = textInput.dataset.length;

textInput.addEventListener('blur', event => {
  if (event.currentTarget.value.length === Number(dataLength)) {
    return replaceClass('valid', 'invalid');
  }
  replaceClass('invalid', 'valid');
});

function replaceClass(add, remove) {
  textInput.classList.add(add);
  textInput.classList.remove(remove);
}
