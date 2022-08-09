function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  body: document.querySelector('body'),
  spanBackgroundColor: document.querySelector('.color'),
  btnChangeColor: document.querySelector('.change-color'),
};

refs.btnChangeColor.addEventListener('click', event => {
  let backGroundColor = getRandomHexColor();
  refs.spanBackgroundColor.textContent = backGroundColor;
  refs.body.style.backgroundColor = `${backGroundColor}`;
  console.log(backGroundColor);
});
