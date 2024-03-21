var animateButton = function (e) {
  e.preventDefault;
  //reset animation
  e.target.classList.remove("animate");

  e.target.classList.add("animate");
  setTimeout(function () {
    e.target.classList.remove("animate");
  }, 700);
};

var navButtons = document.getElementsByClassName("nav-button");

for (var i = 0; i < navButtons.length; i++) {
  navButtons[i].addEventListener("click", animateButton, false);
}
