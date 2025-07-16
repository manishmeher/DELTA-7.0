// Practice QS 1

// let color = "green";

// if(color === "red") {
//     console.log("stop");
// }
// if(color === "yellow") {
//     console.log("wait");
// }
// if(color === "green") {
//    console.log("go");
// };

// Practice QS 2

// let size = "XL"
// let price;
// if (size === "XL") {
//     price = "250";
// } else if (size === "L") {
//     price = "200";
// } else if (size === "M") {
//     price = "100"
// } else {
//     price = "50";
// }
// console.log(price);

//Not a practice QS

// let marks = 32;

// if (marks >= 33 ) {
//     console.log ("Pass");
//     if (marks >= 80 ) {
//         console.log ("Gread: O");
//     } else {
//         console.log ("Gread A");
//     }
// } else {
//     console.log ("Better luck Next Time");
// }

//Practice QS 3

// let str = "apple";

// if ((str [0] === 'a') && (str.length > 3)) {
//     console.log ("Safe");
// } else {
//     console.log ("Unsafe");
// }

//Practice QS 4
// let num = 12;
// if ((num%3 === 0) && ((num + 1 === 15) || (num - 1 === 11))) {
//     console.log ("Safe");
// } else {
//     console.log("Unsafe")
// }

//Switch Statement
// let day = 1;

// switch (day) {
//     case 1 :
//         console.log ("Monday");
//         break;
//     case 2 :
//         console.log ("Tuesday");
//         break;
//     case 3 :
//         console.log ("wednesday");
//         break;
//     case 4 :
//         console.log ("Thursday");
//         break;
//     case 5 :
//         console.log ("Friday");
//         break;
//     case 6 :
//         console.log ("Saturday")
//         break;
//     default :
//         console.log ("Sunday");
// }

//string Method practice Qs

// let msg = "   hello   ";
// console.log (msg.trim().toUpperCase());

// let name = "ApnaCollege";
// let  newName = (name.slice(4, 9));
// console.log(newName);

// let newName = (name.indexOf("na"));
// console.log(newName);

// console.log(name.replace("Apna", "Our"));

// console.log(name.slice(4).replace("l", "t"));

//Array Methods Practice Qs
// let month = ["January", "July", "March", "August"];
// // console.log(month);
// // month.shift();
// // month.shift();
// // console.log(month);
// // month.unshift("June");
// // month.unshift("july");
// // console.log(month);

// console.log(month);
// month.splice(0, 2, "July", "June");
// console.log(month);

// let lang = ["c", "c++", "html", "javascript", "python", "java", "c#", "sql"];
// console.log(lang.reverse().indexOf("javascript"));

//Nested Arrays

// let arr = [["x", null, "o"], [null, "x", null], ["o", null, "x"]];
// console.log(arr);

// arr[0] [1] = 0;
// console.log(arr);

//Loops
// for(i = 1; i <= 15; i=i+2) {
//     console.log(i);
// }

// for(i = 2; i <= 10; i=i+2) {
//     console.log(i);
// }


// for(i = 10; i >= 2; i=i-2) {
//     console.log(i);
// }

// for(let i = 5; i <= 50; i=i+5) {
//     console.log(i);
// }

// let n = prompt("write a number");
// n = parseInt(n);

// for(let i=n; i<=n*10; i=i+n) {
//     console.log(i);
// }

//Game
// const favMovie = "war";
// let guess = prompt("guess my favorite movie");

// while((guess != favMovie) && (guess != "quit")) {
//     guess = prompt("wrong answar, please try again");
// }

// if(guess == favMovie) {
//     console.log("congrats");
// } else {
//     console.log(" you quit");
// }

//using break keyword
// const favMovie = "war";
// let guess = prompt("guess my favorite movie");

// while((guess != favMovie)) {
//     if(guess == "quit") {
//         console.log("you quit");
//         break;
//     }
//     guess = prompt("wrong answar, please try again");
// }

// if(guess == favMovie) {
//     console.log("congrats");
// }

//Looops with Arrays
// let fruits = ["mango", "apple", "banana", "litchi", "orange"];

// for(let i=0; i<fruits.length; i++) {
//     console.log(i, fruits[i]);
// }


// for(let i=fruits.length-1; i>=0; i--) {
//     console.log(i, fruits[i]);
// }


//Nested Loops with Nested Arrays 
// let heroes = [["ironman", "spiderman", "thor"], ["superman", "wonder woman", "flash"]];
// for(let i=0; i<heroes.length; i++) {
//     console.log(i, heroes[i], heroes.length);
//     for(let j=0; j<heroes[i].length; j++) {
//         console.log(`j= ${j}, ${heroes[i][j]}`);
//     }
// }

//object Literals
// const post = {
//     username: "@manishmeher_",
//     content: "This is my #firstPost",
//     likes : 150,
//     reposts: 5,
//     tags: ["@apnacollege", "@delta"]
// };

// const student = {
//     name: "manish",
//     age: 24,
//     marks: 94.4,
//     city: "delhi"
// };

//Object Of Objects
// const classInfo = {
//     manish: {
//         grade: "A+",
//         city: "mumbai"
//     },
//     kiara: {
//         grade: "A",
//         city: "puna"
//     },
//     shraddha: {
//         grade: "O",
//         city: "delhi"
//     }
// };

// Array of objects
// const classInfo = [
//     {
//         name: "manish",
//         grade: "A+",
//         city: "mumbai"
//     },
//     {
//         name: "kiara",
//         grade: "A",
//         city: "puna"
//     },
//     {
//         name: "shraddha",
//         grade: "O",
//         city: "delhi"
//     }
// ];

//Math object

// let random = Math.floor(Math.random() * 5) + 1;

//Guessing Game

// const max = prompt("enter the max number");

// const random = Math.floor(Math.random() * max) + 1;

// let guess = prompt("guess the number");

// while(true) {
//     if(guess == "quit") {
//         console.log("user quit");
//         break;
//     }

//     if(guess == random) {
//         console.log("you are right! congrats!! random number was", random);
//         break;
//     } else if (guess < random) {
//         guess = prompt("your guess was too small");
//     } else {
//         guess = prompt("your guess was too large");
//     }
// }

//Functions

//Practice Qs 1
// function printPoem() {
//     console.log("Twinkle Twinkle, little star");
//     console.log("how I wonder what you are");
// }

// printPoem();

//Practice Qs 2
// function dice() {
//     console.log(Math.floor(Math.random() * 6) + 1);
// }

// dice();

//  Practice Qs 3

// function calcAvg(a, b, c) {
//     let avg = (a+b+c)/3;
//     console.log(avg);
// }

// calcAvg(2, 4, 6);

//Practice Qs 4

// function multiTable(n) {
//     for(let i = n; i<=n*10; i+=n) {
//         console.log(i);
//     }
// }

// multiTable(2);

//Practice Qs 5

// function getSum(n) {
//     let sum = 0;
//     for(i=1; i<=n; i++) {
//         sum += i;
//     }
//     return sum;
// }

//Practice Qs 6

// let str = ["hi", "hello", "bye", "!"];

// function concat(str) {
//     let result = "";
//     for(let i=0; i<str.length; i++) {
//         result += str[i];
//     }

//     return result;
// }

//Scope
// let greet = "hello" //global scope

// function outerGreet() {
//     let greet = "namasta"; //function scope
//     console.log(greet);

//     function innerGreet() {
//         console.log(greet); //lexical scope
//     }
//     innerGreet();
// }

// console.log(greet);
// outerGreet();

//Function Expressions

// const sum = function(a, b) {
//     return a + b;
// }

//Higher order functions

// function multipleGreet (func, n) {
//     for(let i=1; i<=n; i++) {
//         func();
//     }
// }

// let greet = function() {
//     console.log("hello");
// }

// multipleGreet(greet, 2);

//Returns a function
// let odd = function(n) {
//     console.log(!(n%2 == 0));
// }

// let even = function(n) {
//     console.log(n%2 == 0);
// }

// function oddOrEvenFactory(request) {
//     if(request == "odd") {
//         let odd = function(n) {
//             console.log(!(n%2 == 0));
//         }

//         return odd;
//     } else if(request == "even") {
//         let even = function(n) {
//             console.log(n%2 == 0);
//         }

//         return even;
//     } else {
//         console.log('wrong request');
//     }
// }

// let request = "odd"; //even

//Methods

const calculator = {
    num: 55,
    add: function (a, b) {
        return a+b;
    },
     sub: function (a, b) {
        return a-b;
    },
     mul: function (a, b) {
        return a*b;
    }
};