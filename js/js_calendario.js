var popup = document.getElementById("calendario");
if(popup) {
    var show = document.querySelector("#show_viagem");
    var hidden = document.querySelector(".popup");
    var cruz = document.querySelector(".imagemcruzazul");
    show.addEventListener("click", aparecer);
    cruz.addEventListener("click", sair);
}

function aparecer() {
    hidden.style.display = "flex";
}

function sair() {
    hidden.style.display = "none";
}
