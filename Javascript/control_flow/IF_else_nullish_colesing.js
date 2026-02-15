// "==="" this will also check the type also !== this will check that is value is same and type also check

const isuserloggedin = true;

// false values : false , 0 ,-0 , BigInt(0n), null , undefined , NaN

// truthy values
//  "0","false"," ", [],{},fucntion(){},

const user = new Array(1, 2, 3);

// nullish coalescing Operator (??)
// This is one type of fallback if it not get the value it will assign null other wise it will store first not null or undefined value.
let val1;
val1 = 5 ?? 10;

val2 = null ?? 10;

console.log(val2);
