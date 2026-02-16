const newNums = [];
const myNums = [1, 2, 3, 4, 5];

myNums.forEach((num) => {
  if (num > 4) {
    newNums.push(num);
  }
});

console.log(newNums);

// this called chaining it is used to do multiple operation in one line and it is more readable and easy to use
const newNum2 = [1, 2, 3, 4, 5, 6, 7];
const newNums3 = newNum2
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num > 20);
console.log(newNums3);

// reduce function
const newNum3 = [1, 2, 3, 4, 5];
const sum = newNum3.reduce((acc, num) => acc + num, 0);
console.log(sum);

const shopItems = [
  { name: "laptop", price: 1000 },
  { name: "phone", price: 500 },
  { name: "tablet", price: 300 },
];

// use {} then we have to return the values.
const totalPrice = shopItems.reduce((acc, item) => {
  console.log(item.name);
  return acc + item.price;
}, 0);

console.log(totalPrice);
