let teaFlavors = ['green tea', 'black tea', 'oolong tea']

const first_tea = teaFlavors[2];

console.log(first_tea);


let teaTypes = ["herbel tea", "white tea", "masala_tea"]
teaTypes[teaTypes.length ] = "black tea";
console.log(teaTypes);

teaTypes.pop()

console.log(teaTypes);


let softCopyTeas = teaTypes;

softCopyTeas[0]="tea"


console.log(teaTypes);
console.log(softCopyTeas);



// harcopy
let topcites = ["berlin", "singapore", "New York"];
let harcopy = [...topcites];

topcites[0]="kolkata"

console.log(topcites);
console.log(harcopy);



// merge two arrays
let europeancities = ["paris", "Rome"];
let assiancities = ["Tokyo", "Bangkok"];
let worldcities = europeancities.concat(assiancities)
console.log(typeof worldcities);


// find the element in the array

if (europeancities.find("paris") == true)
    console.log("element is present");
    

