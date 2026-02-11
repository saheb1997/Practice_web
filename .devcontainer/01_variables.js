const accountId = 12345;




// prefer use let over var because of block scope and avoid hoisting issues

let accountName = "Saheb Sarkar";

// accountId = 54321; // This will throw an error because accountId is a constant

accountCity = "Kolkata"; // This will work because accountCity is not declared with var, let, or const (but not recommended)

console.table({ accountId, accountName, accountCity });   
