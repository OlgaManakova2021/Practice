// Courtesy of https://www.spltjs.com/
// https://svgshare.com/i/ZDE.svg
const button = document.querySelector("#button");
const npmIcon = document.querySelector(".npm-icon");

// click function for NPM animation
button.addEventListener("click", (e) => {
  e.preventDefault;

  npmIcon.classList.remove("is_animating");
  void npmIcon.offsetWidth;
  npmIcon.classList.add("is_animating");
});