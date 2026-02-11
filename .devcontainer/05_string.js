// tring in JavaScript (Quick Revision)

// ✅ Use This
// const name = "hitesh"
// Primitive string
// Fast & simple
// Recommended


// ❌ Avoid This
// const name = new String("hitesh")
// Creates object
// Uses more memory
// Can cause === comparison issues
// Always truthy


// 🔥 Important
// "hello" === new String("hello") // false
// 🚀 Final Rule
// 👉 Always use primitive strings ("text")
// ❌ Avoid new String()





const val = "  hitesh "
const repoCount = 50
// console.log (name + repoCount + "value")

//strign intrepolation 
console.log(`Hellow my name is ${ val } and my repo count is ${repoCount}`);

// another way to declear the string
const gameName = new String("string")

console.log(val.toUpperCase());

console.log(val.trim());


// replace
const url = "https://saheb@sarkar.com"
console.log(url.replace('@',"_"))



