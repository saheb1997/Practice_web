// let computer = { cpu: 12 };
// let lenovo = {
//     screen: "HD",
//     __proto__: computer,
// };

// let tomHardware = {};

// console.log('lenovo' , lenovo);


let generic_car = {
    tyres: 4,
};

let tesla = {
    driver: "AI",
};


Object.setPrototypeOf(tesla, generic_car);
// console.log('tesla', tesla);
console.log('tesla:', Object.getPrototypeOf(tesla));

console.log("tesla", tesla);

