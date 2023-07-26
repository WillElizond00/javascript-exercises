


let container = document.createElement("div");
container.id = "container";
container.style.backgroundColor = ("grey")
document.body.appendChild(container);

let p = document.createElement("p");
p.textContent = "Hey I'm red";
p.style.color = "red";

container.appendChild(p);

let h3 = document.createElement("h3");
h3.textContent = "I'm a blue h3!";
h3.style.color = "blue";

container.appendChild(h3);


let containerTwo = document.createElement("div");
containerTwo.id = "containerTwo";
containerTwo.style.border  = "solid black";
containerTwo.style.backgroundColor = "pink";

document.body.appendChild(containerTwo);

let h1 = document.createElement("h1");
h1.textContent = "I'm in a div";
containerTwo.appendChild(h1);

let p2 = document.createElement("p");
p2.textContent = "ME TOO!";
containerTwo.appendChild(p2);

let containerThree = document.createElement("div");
containerThree.style.border = "grey";
containerThree.style.backgroundColor = "red";
document.body.appendChild(containerThree);

let h2 = document.createElement("h2");
h2.textContent = "This is my own div I made -Mocci"
containerThree.appendChild(h2);
containerThree.style.backgroundColor = "purple";

window.onload = function(){
const btn = document.querySelector("#btn");
//btn.onclick = () => alert("Hello World");
//Other method to use ^^
btn.addEventListener('click', function(e){
    alert("Hello world");
    console.log(e);
    console.log("The button was clicked!");

    console.log("The target element is:", e.target);
});
}

document.body.appendChild(btn);


