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

let length = 4;

function callback() {
    console.log(this.length);
}
const object = {
    length: 5,
    method(callback) {
        callback();
    },

};
object.method(callback, 1, 2);