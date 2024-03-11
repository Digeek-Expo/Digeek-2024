const button11 = document.getElementById("button-1-movil-1");
const button21 = document.getElementById("button-2-movil-1");
const button31 = document.getElementById("button-3-movil-1");

const button12 = document.getElementById("button-1-movil-2");
const button22 = document.getElementById("button-2-movil-2");
const button32 = document.getElementById("button-3-movil-2");

const button13 = document.getElementById("button-1-movil-3");
const button23 = document.getElementById("button-2-movil-3");
const button33 = document.getElementById("button-3-movil-3");


const buttonT11 = document.getElementById("button-1-tablet-1");
const buttonT21 = document.getElementById("button-2-tablet-1");
const buttonT31 = document.getElementById("button-3-tablet-1");

const buttonT12 = document.getElementById("button-1-tablet-2");
const buttonT22 = document.getElementById("button-2-tablet-2");
const buttonT32 = document.getElementById("button-3-tablet-2");

const buttonT13 = document.getElementById("button-1-tablet-3");
const buttonT23 = document.getElementById("button-2-tablet-3");
const buttonT33 = document.getElementById("button-3-tablet-3");


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

const contentPage1T = document.getElementById("page-tablet-1");
const contentPage2T = document.getElementById("page-tablet-2")
const contentPage3T = document.getElementById("page-tablet-3");




const scrollToSection = (sectionNumber) => {
    var section = document.getElementById('page-movil-' + sectionNumber);
    
    section.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "start"

    })
}

const scrollToSectionTablet = (sectionNumber) => {
    var section = document.getElementById('page-tablet-' + sectionNumber);
    
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




const buttonActionT = (buttonid) => {
    if(buttonid==1){

        scrollToSectionTablet(1)

        buttonT11.classList.remove("bg-zinc-700");
        buttonT11.classList.add("bg-white");
        buttonT12.classList.remove("bg-zinc-700");
        buttonT12.classList.add("bg-white");
        buttonT13.classList.remove("bg-zinc-700");
        buttonT13.classList.add("bg-white");

        buttonT21.classList.add("bg-zinc-700");
        buttonT22.classList.add("bg-zinc-700");
        buttonT23.classList.add("bg-zinc-700");

        buttonT31.classList.add("bg-zinc-700");
        buttonT32.classList.add("bg-zinc-700");
        buttonT33.classList.add("bg-zinc-700");
    } else if(buttonid == 2) {

        scrollToSectionTablet(2)

        buttonT11.classList.add("bg-zinc-700");
        buttonT12.classList.add("bg-zinc-700");
        buttonT13.classList.add("bg-zinc-700");

        buttonT21.classList.remove("bg-zinc-700");
        buttonT21.classList.add("bg-white")
        buttonT22.classList.remove("bg-zinc-700");
        buttonT22.classList.add("bg-white")
        buttonT23.classList.remove("bg-zinc-700");
        buttonT23.classList.add("bg-white")

        buttonT31.classList.add("bg-zinc-700");
        buttonT32.classList.add("bg-zinc-700");
        buttonT33.classList.add("bg-zinc-700");
    } else if(buttonid == 3) {

        scrollToSectionTablet(3)

        buttonT11.classList.add("bg-zinc-700");
        buttonT12.classList.add("bg-zinc-700");
        buttonT13.classList.add("bg-zinc-700");

        buttonT21.classList.add("bg-zinc-700");
        buttonT22.classList.add("bg-zinc-700");
        buttonT23.classList.add("bg-zinc-700");

        buttonT31.classList.remove("bg-zinc-700");
        buttonT31.classList.add("bg-white");
        buttonT32.classList.remove("bg-zinc-700");
        buttonT32.classList.add("bg-white");
        buttonT33.classList.remove("bg-zinc-700");
        buttonT33.classList.add("bg-white");
    }
}


buttonT11.addEventListener("click", (e) => buttonActionT(1))
buttonT12.addEventListener("click", (e) => buttonActionT(1))
buttonT13.addEventListener("click", (e) => buttonActionT(1))

buttonT21.addEventListener("click", (e) => buttonActionT(2))
buttonT22.addEventListener("click", (e) => buttonActionT(2))
buttonT23.addEventListener("click", (e) => buttonActionT(2))

buttonT31.addEventListener("click", (e) => buttonActionT(3))
buttonT32.addEventListener("click", (e) => buttonActionT(3))
buttonT33.addEventListener("click", (e) => buttonActionT(3))





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
