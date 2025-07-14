//Qs 1

// let array = [7, 9, 0, -2];
// let n = 3;

// let ans = array.slice(0, n);
// console.log(ans);

//Qs 2
// let array = [7, 9, 0, -2];
// let n = 3;

// let ans = array.splice(array.length-n);
// console.log(ans);

//Qs 3

// let str = prompt(); 
// if (str.length == 0) {
//     console.log("str is empity");
// } else {
//     console.log("str is not empity");
// }

//Qs 4
// let str = "CHArACTER";
// let idx = 2;

// if (str[idx] == str[idx].toLowerCase()) {
//     console.log("yes this is lowercase");
// } else {
//     console.log("not lowercase");
// }

//Qs 5
// let str = prompt("write something here");
// console.log(`orginal string = ${str}`);
// console.log(`string without space = ${str.trim()}`);

//Qs 6
let arr = ["hello", "a", 23, 64, 99, -6];
let item = 64;

if (arr.indexOf(item) != -1) {
    console.log("element exist in array");
} else {
    console.log("element doesn't exist in array");
}
