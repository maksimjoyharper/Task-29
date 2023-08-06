// Задание 1

function deleteP(element) {
  element.parentNode.parentNode.remove();
}

// Задание 2

let fly = document.getElementById("imgFly");

fly.onmouseover = function (i) {
  fly.style.width = "700px";
  fly.style.height = "450px";
};

fly.onmouseout = function (i) {
  fly.style.width = "500px";
  fly.style.height = "300px";
};
