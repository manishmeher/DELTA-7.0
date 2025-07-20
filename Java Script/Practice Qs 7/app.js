//Qs 1
// let arr = [1, 2, 3, 4, 5, 6];
// const arrayAverage = (arr) => {
//   let total = 0;
//   for(let number of arr) {
//     total += number;
//   }
//   return total / arr.length;
// };
// console.log(arrayAverage(arr));

//Qs 2

// const isEven = (num) => {
//     if(num%2 == 0) {
//         console.log("this is even");
//     } else {
//         console.log("this is not even");
//     }
//      return num;
// };

//Qs 3

// const object = {
//     message: "Hello, World",

//     logMessage() {
//         console.log(this.message);
//     }
// }
// setTimeout(object.logMessage, 1000);

//Qs 4

// let length = 4;

// function callback() {
//     console.log(this.length);
// }
// const object = {
//     length: 5,
//     method(callback) {
//         callback();
//     },

// };
// object.method(callback, 1, 2);

//Every

// let arr = [2, 4, 6, 1].every((el) => el%2 == 0);
// console.log(arr);

//Reduce
// let arr = [1, 4, 2, 5, 6, 7 , 9, 2];

// let max = -1;
// for(let i = 0; i < arr.length; i++) {
//     if(max < arr[i]) {
//         max = arr[i];
//     }
// }
// console.log(max);

// let max = arr.reduce((max, el) => {
//     if(max < el) {
//         console.log(el);
//         return el;
//     } else {
//         console.log(max);
//         return max;
//     }
// });
// console.log(max);

//Practice Qs 
// let nums = [10, 20, 30, 40, 5];

// let ans = nums.every((el) => el % 10 == 0);
// console.log(ans);

// function getMin(nums) {
//     let min = nums.reduce((min, el) => {
//         if(min < el) {
//             return min;
//         } else {
//             return el;
//         }
//     });
//     return min;
// }

// function sum(a, b = 2) {
//     return a + b;
// }

//Spread 
// let arr = [1, 2, 3, 4, 5, 6, 7,];
// console.log(Math.min(...arr));
// console.log(...arr);

// let myName = "manish";
// console.log(...myName);

//Spread (Array Literals)
// let arr = [1, 2, 3, 4, 5];
// console.log(arr);
// let newArr = [... arr];
// console.log(newArr);

// let chars = [..."hello"];
// console.log(chars);

// let odd = [1, 3, 5, 7, 9];
// console.log(odd)
// let even = [2, 4, 6, 8, 10];
// console.log(even);

// let nums = [...odd, ...even];
// console.log(nums);

//Spread (Object Literals)
// let data = {
//     email: "manish@gmail.com",
//     password: "abcd"
// };
// let dataCopy = {...data, id: 123, country: "india"};
// console.log(dataCopy);

// let arr = [1, 2, 3, 4, 5];
// let obj1 = {...arr};
// console.log(obj1);

// let obj2 = {..."hello"};
// console.log(obj2);

//Rest
// function sum(...args) {  //arguments
//     for(let i = 0; i < args.length; i++) {
//         console.log("you give us: ", args[i]);
//     }
// }

// function sum(...args) {
//     return args.reduce((sum, el) => sum + el);
// }

// function min(msg, ...args) { 
//     console.log(msg);
//     return args.reduce((min, el) => {
//         if(min > el) {
//             return el;
//         } else {
//             return min;
//         }
//     });
// }

// function min(a, b, c, d) {
//     console.log(argumnet);
//     console.log(arguments.length);
// }

// Destructuring
// let names = ["tony", "bruce", "steve", "peter", "abc", "xyz", "pyq"];
// let [winner, runnerup, ...others] = names;
// console.log(winner, runnerup);
// console.log(others);

// Destructuring Object

// const student = {
//     name: "kiara",
//     class: 9,
//     age: 14,
//     subject: ["hindi", "english", "math", "science"],
//     username: "kiara@123",
//     password: "abcd",
//     city: "pune"
// };
// let {username: user, password: secret, city: place = "Mumbai"} = student;