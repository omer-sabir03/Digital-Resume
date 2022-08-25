const open = document.getElementById("open");
const close = document.getElementById("close");
const content = document.querySelector(".content");
const nav = document.querySelector(".show-nav");

open.addEventListener("click", () => content.classList.add("show-nav"));
close.addEventListener("click", () => content.classList.remove("show-nav"));
