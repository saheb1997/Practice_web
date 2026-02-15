const arr = [1, 2, 3, 4, 5];
// for of loop
for (const val of arr) {
  //   console.log(val + " ");
}

// maps

const map = new Map();
map.set("IN", "India");
map.set("USA", "USA");

for (const [key, val] of map) {
  //   console.log(key, val);
}

const myobj = {
  game1: "NFS",
  game2: "Spiderman",
};

for (const [key, val] of Object.entries(myobj)) {
  //   console.log(key, val);
}

for (const key in myobj) {
  //   console.log(key, myobj[key]);
}

// ***************** important ****************

// 📌 WHY for...in WORKS ON OBJECTS BUT for...of DOES NOT (ONE-BLOCK NOTE)

// CODE:
// const obj = {
//   game1: "NFS",
//   game2: "Spiderman"
// };

// 🚫 for...of (NOT WORKING)
// --------------------------------
// for (const item of obj) {
//   console.log(item);
// }

// ❌ Error: TypeError: obj is not iterable

// REASON:
// - for...of works only on ITERABLES
// - Iterables = Arrays, Strings, Maps, Sets
// - Plain objects DO NOT have Symbol.iterator
// - So JS cannot iterate values directly

// ✅ for...in (WORKING)
// --------------------------------
// for (const key in obj) {
//   console.log(key, obj[key]);
// }

// OUTPUT:
// game1 NFS
// game2 Spiderman

// REASON:
// - for...in loops over ENUMERABLE KEYS (properties) of an object
// - Objects are key-value collections → so for...in is designed for them

// 🔬 INTERNAL DIFFERENCE (CORE CONCEPT)

// for...in  → loops over KEYS (object properties)
// for...of  → loops over VALUES of ITERABLES (uses Symbol.iterator)

// 📊 ARRAY EXAMPLE (BOTH WORK BUT DIFFERENT)
// --------------------------------
// const arr = [10, 20, 30];

// for (const i in arr) {
//   console.log(i);
// }
// // Output: 0 1 2 (indexes)

// for (const val of arr) {
//   console.log(val);
// }
// // Output: 10 20 30 (values)

// 🔥 HOW TO USE for...of WITH OBJECT (CORRECT WAY)
// --------------------------------
// const obj = { a: 1, b: 2 };

// for (const [key, val] of Object.entries(obj)) {
//   console.log(key, val);
// }

// WHY IT WORKS:
// Object.entries(obj) → converts object into ARRAY (iterable)

// 🧠 ONE-LINE MEMORY:
// Objects are NOT iterable → use for...in for objects,
// use for...of for arrays/strings (iterables).

const coding = ["JavaScript", "Python", "Java"];
coding.forEach((item, index) => {
  //   console.log(index, item);
});

const myCoding = [
  {
    languagename: "JavaScript",
    type: "scripting language",
    uses: "web development",
  },
  {
    languagename: "Python",
    type: "programming language",
    uses: "data science",
  },
  {
    languagename: "Java",
    type: "programming language",
    uses: "enterprise applications",
  },
];

myCoding.forEach((item, index) => {
  console.log(index, item.languagename, item.type, item.uses);
});
