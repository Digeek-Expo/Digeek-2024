const button11 = document.getElementById("button-1-movil-1");
const button21 = document.getElementById("button-2-movil-1");
const button31 = document.getElementById("button-3-movil-1");

const button12 = document.getElementById("button-1-movil-2");
const button22 = document.getElementById("button-2-movil-2");
const button32 = document.getElementById("button-3-movil-2");

const button13 = document.getElementById("button-1-movil-3");
const button23 = document.getElementById("button-2-movil-3");
const button33 = document.getElementById("button-3-movil-3");


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




const scrollToSection = (sectionNumber) => {
    var section = document.getElementById('page-movil-' + sectionNumber);
    
    section.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "start"

    })
}

const buttonAction = (buttonid) => {
    if(buttonid==1){

        scrollToSection(1)

        button11.classList.remove("bg-zinc-700");
        button11.classList.add("bg-white");
        button12.classList.remove("bg-zinc-700");
        button12.classList.add("bg-white");
        button13.classList.remove("bg-zinc-700");
        button13.classList.add("bg-white");

        button21.classList.add("bg-zinc-700");
        button22.classList.add("bg-zinc-700");
        button23.classList.add("bg-zinc-700");

        button31.classList.add("bg-zinc-700");
        button32.classList.add("bg-zinc-700");
        button33.classList.add("bg-zinc-700");
    } else if(buttonid == 2) {

        scrollToSection(2)

        button11.classList.add("bg-zinc-700");
        button12.classList.add("bg-zinc-700");
        button13.classList.add("bg-zinc-700");

        button21.classList.remove("bg-zinc-700");
        button21.classList.add("bg-white")
        button22.classList.remove("bg-zinc-700");
        button22.classList.add("bg-white")
        button23.classList.remove("bg-zinc-700");
        button23.classList.add("bg-white")

        button31.classList.add("bg-zinc-700");
        button32.classList.add("bg-zinc-700");
        button33.classList.add("bg-zinc-700");
    } else if(buttonid == 3) {

        scrollToSection(3)

        button11.classList.add("bg-zinc-700");
        button12.classList.add("bg-zinc-700");
        button13.classList.add("bg-zinc-700");

        button21.classList.add("bg-zinc-700");
        button22.classList.add("bg-zinc-700");
        button23.classList.add("bg-zinc-700");

        button31.classList.remove("bg-zinc-700");
        button31.classList.add("bg-white");
        button32.classList.remove("bg-zinc-700");
        button32.classList.add("bg-white");
        button33.classList.remove("bg-zinc-700");
        button33.classList.add("bg-white");
    }
}


button11.addEventListener("click", (e) => buttonAction(1))
button12.addEventListener("click", (e) => buttonAction(1))
button13.addEventListener("click", (e) => buttonAction(1))

button21.addEventListener("click", (e) => buttonAction(2))
button22.addEventListener("click", (e) => buttonAction(2))
button23.addEventListener("click", (e) => buttonAction(2))

button31.addEventListener("click", (e) => buttonAction(3))
button32.addEventListener("click", (e) => buttonAction(3))
button33.addEventListener("click", (e) => buttonAction(3))



button1lg.addEventListener("click", () => {
    contentPage1Lg.scrollIntoView({ behavior: "smooth", block: "center" });
});

button2lg.addEventListener("click", () => {
    contentPage2Lg.scrollIntoView({ behavior: "smooth", block: "center"});
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
