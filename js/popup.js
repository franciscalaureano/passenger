/* APARECER O MENU */
var menu = document.querySelector(".imagemmenu");
var map = document.querySelector("#mapid");

menu.addEventListener("click", function (evt) {
  console.log("button click", evt);
  document.querySelector("nav").classList.toggle("show");
  map.style.zIndex = "-1";
});

document.addEventListener("click", function (event) {
  /*console.log("document click", event);*/
  var isClickInsideButton = menu.contains(event.target);
  if (!isClickInsideButton) {
    document.querySelector("nav").classList.remove("show");
    setTimeout(() => {
      map.style.zIndex = "1";
    }, 500);
  }
});

/* RETROCEDER A PARTIR DA SETA */
var backBtn = document.querySelector(".imagemseta");
backBtn.addEventListener("click", () => {
  const container = document.getElementById("goback-container")
  container.style.display = "block"
});

function dontGo(){
    const container = document.getElementById("goback-container")
    container.style.display = "none"
}

function goAway(){
    const container = document.getElementById("goback-container")
    container.style.display = "none"
    window.history.back();
}