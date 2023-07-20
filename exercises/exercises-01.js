let container = document.createElement("div");
container.id = "container";
document.body.appendChild(container);

let p = document.createElement("p");
p.textContent = "Hey I'm red";
p.style.color = "red";

container.appendChild(p);

let h3 = document.createElement("h3");
h3.textContent = "I'm a blue h3!";
p.style.color = "blue";

container.appendChild(h3);