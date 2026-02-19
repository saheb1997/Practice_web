const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
let IntervalId;
const startChangingcolor = function () {
  if (IntervalId == null) {
    IntervalId = setInterval(changeBgColor, 2000);
  }
  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }
  //   console.log(startColor);
};

const stopchangingcolor = function () {
  clearInterval(IntervalId);
  IntervalId = null;
};

document.querySelector("#start").addEventListener("click", startChangingcolor);

document.querySelector("#stop").addEventListener("click", stopchangingcolor);
