// Qs 1
// let num = 20;

// if (num%10 === 0) {
//     console.log ("good");
// } else {
//     console.log ("Bad");
// }

//Qs2
// let myName = prompt("Write your Name");
// let age = prompt("Write your age");
// alert (`name is ${myName} age is ${age} years old.`); 

//Qs3

// let month = 1

// switch (month) {
//     case 1 :
//         console.log ("January, February, March");
//         break;
//      case 2 :
//         console.log ("april, May, June");
//         break;
//      case 3 :
//         console.log ("july, August, September");
//         break;
//     case 4 :
//         console.log ("Octuber, November, December");
// }


//Qs 4
// let str = "apples";

// if((str[0] === 'a'|| str[0] === 'A') && (str.length > 5)) {
//     console.log ("Golden String");
// } else {
//     console.log ("not a golden string");
// }

//Qs 5
// let a = 22;
// let b = 18;
// let c = 20;

// if (a > b) {
//     if ( a > c) {
//         console.log (a, "is largest");
//     } else {
//         console.log (c, "is largest");
//     } 
// } else {
//     if (b > c) {
//         console.log (b, "is largest");
//     } else {
//         console.log (c, "is largest");
//     }
// }

//Qs 6
let num1 = 32;
let num2 = 47852;

if ((num1%10) === (num2%10)) {
    console.log ("number have the same last digit which is", num1%10);
} else {
    console.log ("numbers dont have the same last digit");
}