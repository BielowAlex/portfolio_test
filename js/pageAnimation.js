let img = document.getElementById('me');
let bio = document.getElementById('bio');
let carH2 = document.getElementById('car_h2');
let carousel = document.getElementById('carrousel');
let h2Line = document.getElementById('bio_title_line')
let bioH2 = document.getElementById('bio_h2')
let wrapBio = document.querySelector('.wrap');
let project = document.querySelectorAll('.project')
let projH2 = document.querySelectorAll('.proj_h2')
console.log(project);

for (let i = 0; i<project.length;i++) {
    project[i].onmouseover = function (){
        // project.classList.add('project_anim');
        projH2[i].classList.add('proj_h2_anim');
        project[i].onmouseleave = function (){
            // project.classList.remove('project_anim');
            projH2[i].classList.remove('proj_h2_anim');
        }

    }
}


let start = pageYOffset;

window.addEventListener('scroll',function (){
    if(pageYOffset>start){
        wrapBio.classList.add('hide_scroll');
    }else {
        wrapBio.classList.remove('hide_scroll');
    }
})


carousel.classList.add('carrousel_anim');

img.classList.add('img__anim');

function bioShow() {
    bio.classList.add('bio__anim');
}

setTimeout(bioShow, 1000);

function carH2Show() {
    carH2.classList.add('car_h2_anim');
}

setTimeout(carH2Show, 2000);

bioH2.onmouseover = function () {
    console.log("pizda")
    h2Line.classList.add('line_anim');
    bioH2.onmouseleave = () => h2Line.classList.remove('line_anim');
}



