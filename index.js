// Задание 1

let text = document.getElementById("text");

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");

btn1.addEventListener("click", () => {
  text.style.color = "blue";
  text.textContent = "example1";
});

btn2.addEventListener("click", () => {
  text.style.color = "green";
  text.textContent = "example2";
});

btn3.addEventListener("click", () => {
  text.style.color = "red";
  text.textContent = "example3";
});

// Задание 2

function newText() {
  let textInp = document.getElementById("textInp").value;
  let list = document.createElement("li");
  let listElement = document.createTextNode(textInp);
  list.appendChild(listElement);

  let ul = document.getElementById("ul");
  ul.appendChild(list);
}
