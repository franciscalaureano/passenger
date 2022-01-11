let intViewportWidth = window.innerWidth - 90;
let intViewportHeight = window.innerHeight - 90;

const chat = document.querySelector("#btnchat");
const users = document.querySelector("#btnusers");
const agendar = document.querySelector("#btnagendar");
console.log(intViewportWidth, intViewportHeight);

users.style.position = "absolute";
users.style.top = intViewportHeight + "px";
users.style.left = intViewportWidth - 100 + "px";
users.style.zIndex = "5";

chat.style.position = "absolute";
chat.style.top = intViewportHeight + "px";
chat.style.left = intViewportWidth - 180 + "px";
chat.style.zIndex = "5";

agendar.style.position = "absolute";
agendar.style.top = intViewportHeight + "px";
agendar.style.left = intViewportWidth - 20 + "px";
agendar.style.zIndex = "5";
