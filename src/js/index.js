const button1 = document.getElementById("button-1");
const button2 = document.getElementById("button-2");
const button3 = document.getElementById("button-3");


const button1lg = document.getElementById("button-1-lg");
const button2lg = document.getElementById("button-2-lg");
const button3lg = document.getElementById("button-3-lg");


// All elements from every page
const contentPage1 = document.getElementsByClassName("page-1");
const contentPage2 = document.getElementsByClassName("page-2");
const contentPage3 = document.getElementsByClassName("page-3");

const page3title = document.getElementById("page-3-t");

const contentPage1Lg = document.getElementById("page-1-lg");
const contentPage2Lg = document.getElementById("page-2-lg")
const contentPage3Lg = document.getElementById("page-3-lg");



button1.addEventListener("click", (e) => {
    button1.classList.remove("opacity-25");
    button2.classList.add("opacity-25");
    button3.classList.add("opacity-25");

    for (let i = 0; i < contentPage1.length; i++) {
        contentPage1[i].classList.remove("hidden");
    }

    for (let i = 0; i < contentPage2.length; i++) {
        contentPage2[i].classList.add("hidden");
    }

    for (let i = 0; i < contentPage3.length; i++) {
        contentPage3[i].classList.add("hidden");
    }

})

button2.addEventListener("click", (e) => {
    button1.classList.add("opacity-25");
    button2.classList.remove("opacity-25");
    button3.classList.add("opacity-25");



    for (let i = 0; i < contentPage1.length; i++) {
        contentPage1[i].classList.add("hidden");
    }

    for (let i = 0; i < contentPage2.length; i++) {
        contentPage2[i].classList.remove("hidden");
    }

    for (let i = 0; i < contentPage3.length; i++) {
        contentPage3[i].classList.add("hidden");
    }


})

button3.addEventListener("click", (e) => {
    button1.classList.add("opacity-25");
    button2.classList.add("opacity-25");
    button3.classList.remove("opacity-25");

    for (let i = 0; i < contentPage1.length; i++) {
        contentPage1[i].classList.add("hidden");
    }

    for (let i = 0; i < contentPage2.length; i++) {
        contentPage2[i].classList.add("hidden");
    }

    for (let i = 0; i < contentPage3.length; i++) {
        contentPage3[i].classList.remove("hidden");
    }


})



button1lg.addEventListener("click", () => {
    contentPage1Lg.scrollIntoView({ behavior: "smooth", block: "center" });
});

button2lg.addEventListener("click", () => {
    contentPage2Lg.scrollIntoView({ behavior: "smooth", block: "center" });
});

button3lg.addEventListener("click", () => {
    contentPage3Lg.scrollIntoView({ behavior: "smooth", block: "center" });
});



window.addEventListener("scroll", () => {
    var scroll = window.scrollY;
    var os2 = contentPage2Lg.offsetTop;
    var os3 = contentPage3Lg.offsetTop;

    if( os2 > scroll > 0){
        button1lg.classList.remove("opacity-25");
        button2lg.classList.add("opacity-25");
        button3lg.classList.add("opacity-25");
    } else if ( os3 > scroll && scroll > os2){
        button1lg.classList.add("opacity-25");
        button2lg.classList.remove("opacity-25");
        button3lg.classList.add("opacity-25");
    } else if( scroll > os3){
        button1lg.classList.add("opacity-25");
        button2lg.classList.add("opacity-25");
        button3lg.classList.remove("opacity-25");
    }

});
