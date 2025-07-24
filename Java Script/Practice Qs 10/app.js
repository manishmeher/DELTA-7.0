//Qs 1
// let div = document.querySelector("div");
// div.addEventListener("mouseout", function() {
//     console.log("Im outside the box");
// });

// let input = document.querySelector("input");
// input.addEventListener("keypress", function() {
//     console.log("key was pressed");
// });


// window.addEventListener("scroll", function() {
//     console.log("image loaded");
// });

//Qs 2

// let btn = document.createElement("button");
// btn.innerText = "click me";
// document.querySelector("body").append(btn);

// btn.addEventListener("click", function() {
//     btn.style.backgroundColor = "green";
//     console.log("buttton was clicked");
// });

//Qs 3
let inp = document.querySelector("input");
let h2 = document.querySelector("h2");

inp.addEventListener("input", function() {
    let filtered = inp.value.replace(/[^a-zA-Z ]/g, "");
    h2.innerText = filtered;
});

