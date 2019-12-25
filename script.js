let nav = document.querySelector("nav");
let body= document.querySelector('body');
var vid = document.querySelector('video');
var overlay = document.querySelector('.video-overlay');
var parentVideo = document.querySelector('.video-wrapper');

window.addEventListener("scroll", function(){
    if (window.pageYOffset !== 0){
        nav.classList.remove('bg-transparent');
        nav.classList.add('bg-white', 'shadow');

        var chngColor = document.querySelectorAll(".nav-link");

        for (var i=0; i < chngColor.length; i++){
            chngColor[i].classList.add("color-scroll");
        }
        document.querySelector(".brand").classList.add('brand-scroll');

        document.querySelector(".item-1").style.borderBottom = "2px solid red";
    }

    else {
        nav.classList.remove('bg-white', 'shadow');
        nav.classList.add('bg-transparent');

        var chngColor = document.querySelectorAll(".nav-link");

        for (var i=0; i < chngColor.length; i++){
            chngColor[i].classList.remove("color-scroll");
        }
        document.querySelector(".brand").classList.remove('brand-scroll');

        document.querySelector(".item-1").style.borderBottom = "2px solid #fff";
    }
});

var a=1;
var hamburger = document.querySelector(".ham");
hamburger.addEventListener('click', function(){
    document.querySelector(".ham-overlay").classList.toggle('ham-overlay--click');
    if (document.querySelector(".ham-overlay").classList.contains('ham-overlay--click')){
        document.querySelector(".brand").classList.add('color-hamClick');
        document.querySelectorAll(".ham section")[0].style.background = "#000";
        document.querySelectorAll(".ham section")[1].style.background = "#000";
        document.querySelectorAll(".ham section")[2].style.background = "#000";
    } else {
        document.querySelector(".brand").classList.remove('color-hamClick');
        document.querySelectorAll(".ham section")[0].style.background = "#fff";
        document.querySelectorAll(".ham section")[1].style.background = "#fff";
        document.querySelectorAll(".ham section")[2].style.background = "#fff";
    }
});

function overlaySize(){
    parentVideo.style.width = "100%";
    overlay.style.height = vid.offsetHeight + 'px';
    overlay.style.width = vid.offsetWidth + 'px';
    parentVideo.style.height = vid.offsetHeight + 'px';
    parentVideo.style.width = vid.offsetWidth + 'px';
    if (a==20){
        document.querySelector(".brand").classList.remove('color-hamClick');
    }
}

function leftContactLoad(){
    document.querySelector(".left-contact").style.display = 'block';
}