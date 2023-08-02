// Задание 1

function deleteP(element) {
  element.parentNode.parentNode.remove();
}

// Задание 2

let fly = document.getElementById("imgFly");

fly.onmouseover = function (i) {
  fly.style.width = "300px";
  fly.style.height = "120px";
};

fly.onmouseout = function (i) {
  fly.style.width = "500px";
  fly.style.height = "300px";
};
