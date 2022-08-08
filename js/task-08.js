// Обработка отправки формы form.login-form должна быть по событию submit.

// Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены.

// Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, где имя поля будет именем свойства, а значение поля - значением свойства. Для доступа к элементам формы используй свойство elements.

// Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.

const form = document.querySelector('.login-form');
console.log(form);
form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    return alert('Все поля должны быть заполнены');
  }

  console.log(`Email: ${email.value},Password ${password.value}`);
  event.currentTarget.reset();
}
