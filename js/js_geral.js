/* APARECER O MENU */
var menu = document.querySelector(".imagemmenu");
var map = document.querySelector("#mapid");
map.style.zIndex = "1";

menu.addEventListener("click", function (evt) {
  console.log("button click", evt);
  document.querySelector("nav").classList.toggle("show");
  map.style.zIndex = "-100";
});

document.addEventListener("click", function (event) {
  console.log("document click", event);
  var isClickInsideButton = menu.contains(event.target);
  if (!isClickInsideButton) {
    document.querySelector("nav").classList.remove("show");
    map.style.zIndex = "1";
  }
});

/* RETROCEDER A PARTIR DA SETA */
var backBtn = document.querySelector(".imagemseta");
backBtn.addEventListener("click", () => {
  window.history.back();
});
