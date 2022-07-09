var imgSlider = (anything) => {
  document.querySelector(".starbucks").src = anything;
};

var changeCircleColor = (color) => {
  const circle = document.querySelector(".circle");
  circle.style.background = color;
};

var textColorChange = (colors) => {
  const text = document.querySelector(".texts");
  text.style.color = colors;
};
var buttonBackground = (colours) => {
  const background = document.querySelector(".button");
  background.style.background = colours;
};
