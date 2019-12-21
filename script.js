let nav = document.querySelector("nav");
let body= document.querySelector('body');
var vid = document.querySelector('video');
var overlay = document.querySelector('.video-overlay');
var parentVideo = document.querySelector('.video-wrapper');

window.addEventListener("scroll", function(){
    if (window.pageYOffset !== 0){
        nav.classList.remove('bg-transparent');
        nav.classList.add('bg-white');

        var chngColor = document.querySelectorAll(".nav-link");

        for (var i=0; i < chngColor.length; i++){
            chngColor[i].classList.add("color-scroll");
        }
        document.querySelector(".navbar-brand").style.color= "#000";

        var hamburger = document.querySelector(".navbar-toggler");
        hamburger.classList.add("nav-toggler-scroll");
        hamburger.classList.remove("navbar-toggler-without-scroll");

        var hamIcons = document.querySelectorAll(".ham-icons");
        for (var i=0; i < hamIcons.length; i++){
            hamIcons[i].classList.add('ham-scroll');
        }

        document.querySelector(".home").style.borderBottom = "2px solid red";
    }

    else {
        nav.classList.remove('bg-white');
        nav.classList.add('bg-transparent');

        var chngColor = document.querySelectorAll(".nav-link");

        for (var i=0; i < chngColor.length; i++){
            chngColor[i].classList.remove("color-scroll");
        }
        document.querySelector(".navbar-brand").style.color= "#fff";

        var hamburger = document.querySelector(".navbar-toggler");
        hamburger.classList.remove("nav-toggler-scroll");
        hamburger.classList.add("navbar-toggler-without-scroll");

        var hamIcons = document.querySelectorAll(".ham-icons");
        for (var i=0; i < hamIcons.length; i++){
            hamIcons[i].classList.remove('ham-scroll');
        }

        document.querySelector(".home").style.borderBottom = "2px solid #fff";
    }
});

function overlaySize(){
    parentVideo.style.width = "100%";
    overlay.style.height = vid.offsetHeight + 'px';
    overlay.style.width = vid.offsetWidth + 'px';
    parentVideo.style.height = vid.offsetHeight + 'px';
    parentVideo.style.width = vid.offsetWidth + 'px';
}

function leftContactLoad(){
    document.querySelector(".left-contact").style.display = 'block';
}