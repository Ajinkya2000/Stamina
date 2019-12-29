const burger = document.querySelector('.burger');

const navSlide = () => {
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li')
    const logoDot = document.querySelector('.brand span');
    const burgerLines = document.querySelectorAll('.burger div');
    const navItem = document.querySelectorAll('.nav-links li a'); 

    burger.addEventListener('click', () => {
        //Toggle Nav
        nav.classList.toggle('nav-active');

        //Animate Links
        navLinks.forEach((link,index)=>{
            if (link.style.animation){
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`
            }
        });

        //Burger Animation
        burger.classList.toggle('toggle');

        if (window.pageYOffset == 0){
            logoDot.classList.toggle('white');

            burgerLines.forEach((line) => {
                line.style.backgroundColor = '';
                line.classList.toggle('bg-black');
            });

            navItem.forEach((link) => {
                link.classList.toggle('black');
            });
        }
    });
}

const navHeight = () => {
    const nav = document.querySelector('nav');
    const logo = document.querySelector('.brand');
    const navLinks = document.querySelectorAll('.nav-links li a');
    const burgerBgColor = document.querySelectorAll('.burger div');
    const NavLinksBgHeight = document.querySelector('.nav-links');

    window.addEventListener('scroll', () => {

        if (burger.classList.contains('toggle') == false){

            if (window.pageYOffset != 0){

                nav.classList.add('nav-height');

                logo.classList.add('black');
            
                navLinks.forEach((link)=>{
                    link.classList.add('black');
                });

                burgerBgColor.forEach((line)=>{
                    line.classList.add('bg-black');
                });

                if (window.innerWidth <= 768){
                    NavLinksBgHeight.classList.add('bg-height');
                } else {
                    NavLinksBgHeight.classList.remove('bg-height');
                }

                if (window.pageYOffset > 10){
                    document.querySelector('.nav-links .item-1').classList.add('border-bottom');
                } else {
                    document.querySelector('.nav-links .item-1').classList.remove('border-bottom');
                }


            } else{
                nav.classList.remove('nav-height');

                logo.classList.remove('black');

                navLinks.forEach((link)=>{
                    link.classList.remove('black');
                });

                burgerBgColor.forEach((line)=>{
                    line.classList.remove('bg-black');
                });

                if (window.innerWidth <= 768){
                    NavLinksBgHeight.classList.remove('bg-height');
                }
            }
        }
    });
}

function resizeNavHeight(){
    const NavLinksBgHeight = document.querySelector('.nav-links');
    if (window.innerWidth <= 768){
        NavLinksBgHeight.classList.add('bg-height');
    } else {
        NavLinksBgHeight.classList.remove('bg-height');
    }
}

navHeight();
navSlide();