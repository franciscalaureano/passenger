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

var successBtn = document.getElementById("successoViagem");
successBtn.addEventListener("click", () => {
  alert("Viagem agendada com sucesso! \n Podes encontrá-la no menu principal em Viagens");
})

/* RETROCEDER A PARTIR DA SETA */
var backBtn = document.querySelector(".imagemseta");
backBtn.addEventListener("click", () => {
  window.history.back();
});

