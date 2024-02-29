const button1 = document.getElementById("button-1");
const button2 = document.getElementById("button-2");
const button3 = document.getElementById("button-3");

button1.addEventListener("click", (e) => {
    button1.classList.remove("opacity-25");
    button2.classList.add("opacity-25");
    button3.classList.add("opacity-25");
})

button2.addEventListener("click", (e) => {
    button1.classList.add("opacity-25");
    button2.classList.remove("opacity-25");
    button3.classList.add("opacity-25");
})

button3.addEventListener("click", (e) => {
    button1.classList.add("opacity-25");
    button2.classList.add("opacity-25");
    button3.classList.remove("opacity-25");
})