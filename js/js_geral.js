var menu = document.querySelector(".imagemmenu");
menu.addEventListener("click", function(evt) {
    console.log("button click", evt);
    document.querySelector("nav").classList.toggle("show");
});

document.addEventListener("click", function(event) {
    console.log("document click", event);
    var isClickInsideButton = menu.contains(event.target);
    if (!isClickInsideButton) {
        document.querySelector("nav").classList.remove("show");
    }
});