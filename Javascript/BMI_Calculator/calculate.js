const form = document.querySelector("form");
// console.log(form.innerHTML);
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  console.log(height, weight);

  const results = document.querySelector("#results");

  const bmi = (weight / ((height * height) / 10000)).toFixed(2);
  //show the result
  if (bmi < 18.6) {
    results.innerHTML = `<span>Your BMI is ${bmi} (Underweight)</span>`;
  } else if (bmi <= 24.9) {
    results.innerHTML = `<span>Your BMI is ${bmi} (Normal)</span>`;
  } else {
    results.innerHTML = `<span>Your BMI is ${bmi} (Overweight)</span>`;
  }
});
