var overlay = document.querySelector(".overlay")
var pop = document.querySelector(".pop")
var cont = document.querySelector(".contact2")
var adpop = document.getElementById("add-pop")
var popup = document.getElementById("uppop")
var remo = document.getElementById("rem")
var form = document.getElementById("frm")
var close = document.getElementById("close")
var msg=document.getElementById("success-msg")
var nav = document.querySelector(".navbar")
var poup = document.getElementById("upop")


function closeMsg(){
    document.getElementById("success-msg").style.display = "none";
    overlay.style.display = "none"
}


adpop.addEventListener("click", function () {
    overlay.style.display = "block"
    pop.style.display = "block"
    cont.style.display = "block"
    window.scrollTo({
        top:0,
        behaviour:"smooth"
    })
})

remo.addEventListener("click", function () {
    overlay.style.display = "none"
    pop.style.display = "none"
    cont.style.display = "none"
})
var liv =document.querySelector(".linenv")
var link =document.querySelector(".nav1")
liv.addEventListener("click",function () {
    link.classList.toggle("show");
    window.scrollTo({
        top:0,
        behaviour:"smooth",
    })
})


window.addEventListener("scroll", function () {

    let navbar = document.querySelector(".navbar");
    let logotext = document.querySelector(".logotext");
    let logimg = document.getElementById("logimg")
    let logo = document.querySelector(".lo")
    let l1 = document.querySelector(".lop")
    
    if (window.scrollY > 50) {
        navbar.style.height = "60px"
        logotext.style.display = "flex"
        logimg.style.width = "45px"
        logo.style.fontSize = "20px"
        l1.style.padding = "1px 5px"
        liv.style.margin = "4px 0 0 30px"
    }
    else {
        logo.style.padding=""
        navbar.style.height = ""
        logotext.style.display = ""
        logimg.style.width = ""
        l1.style.padding = ""
        liv.style.margin = "0 0 0 80px"
    }
})

poup.addEventListener("click", function () {

    overlay.style.display = "block"
    pop.style.display = "block"
    cont.style.display = "block"
})

popup.addEventListener("click", function () {

    overlay.style.display = "block"
    pop.style.display = "block"
    cont.style.display = "block"
    nav.style.zIndex = "0"
})

form.addEventListener("submit", function(event){
    event.preventDefault()
    fetch("/contact", {
        method: "POST",
        body: new FormData(form)
    })
    .then(response => response.json())
    .then(data => {
        overlay.style.display = "block"
        pop.style.display = "none"
        msg.style.display = "block"
        form.reset()
    })
})
    

close.addEventListener("click", function(event){
    event.preventDefault()
    overlay.style.display = "none"
    pop.style.display = "none"
})

let slides = document.querySelectorAll(".slide");

let index = 0;

function showSlide(){

    slides.forEach(slide => {
        slide.classList.remove("active");
    });

    slides[index].classList.add("active");

}

document.querySelector("#next").onclick = () => {

    index++;

    if(index >= slides.length){
        index = 0;
    }

    showSlide();

}

document.querySelector("#prev").onclick = () => {

    index--;

    if(index < 0){
        index = slides.length - 1;
    }

    showSlide();

}

setInterval(() => {

    index++;

    if(index >= slides.length){
        index = 0;
    }

    showSlide();

}, 4000);
