let para1 = document.createElement("p");
para1.innerText = "Hey I'm Red!";
document.querySelector("body").append(para1);

para1.classList.add("red");

let heading = document.createElement("h3");
heading.innerText = "I'm a Blue h3!";
document.querySelector("body").append(heading);

heading.classList.add("blue");

let div = document.createElement("div");
let h1 = document.createElement("h1");
let para2 = document.createElement("para2");
document.querySelector("body").append(div);


h1.innerText = "I'm in a div";
para2.innerText = "ME TOO";

div.append(h1);
div.append(para2);
div.classList.add("box");
document.querySelector("body").append(div);
