let button = document.querySelector("button.come_back");

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

button.addEventListener("click", topFunction);