//Qs 1
// let nums = [1, 2, 3, 4, 5]; 

// const square = nums.map((nums) => nums * nums);
// console.log(square);

// let sum = square.reduce((acc, curr) => acc + curr, 0);

// let avg = sum / nums.length;
// console.log(avg);

//Qs 2
// let number = [2, 4, 6, 8 -2, -4];

// console.log(number.map((number) => number + 5));

//Qs 3
// let strings = ["adam","bob","catlyn","donald","eve"];
// console.log(strings.map((string) => string.toUpperCase()));

//Qs 4
// const doubleAndReturnArgs = (arr, ...argus) => [
//     ...arr,
//     ...argus.map((v) => v * 2),
// ];

// doubleAndReturnArgs([1, 2, 3], 4, 4);
// doubleAndReturnArgs([2], 10, 4);

//Qs 5
const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});
mergeObjects({a: 1, b: 2}, {c: 3, d: 4});
