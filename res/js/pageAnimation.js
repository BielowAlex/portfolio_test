
const bio = document.getElementById('bio');
const carH2 = document.querySelector('.car_h2');




//============================================================================\\
//============================Title_Anim======================================\\
//============================================================================\\

//
// const titleList = document.querySelectorAll('.title');
// const lines = document.querySelectorAll('.line');
// // console.log(lines);
//
// for (let i = 0;i<titleList.length;i++) {
//     titleList[i].onmouseover =function (){
//         lines[i].classList.add('line_anim');
//        titleList[i].onmouseleave = () => {
//             lines[i].classList.remove('line_anim');
//         }
//     }
//
// }



// for (let i = 0; i<project.length;i++) {
//     project[i].onmouseover = function (){
//         // project.classList.add('project_anim');
//         projH2[i].classList.add('proj_h2_anim');
//         project[i].onmouseleave = function (){
//             // project.classList.remove('project_anim');
//             projH2[i].classList.remove('proj_h2_anim');
//         }
//
//     }
// }
//============================================================================\\
//============================Title_Anim======================================\\
//============================================================================\\

//============================================================================\\
//============================Project=========================================\\
//============================================================================\\
const projImgList = document.querySelectorAll('.proj_img');
const projLineList = document.querySelectorAll('.proj_line');
const projectsList = document.querySelectorAll('.project');

for (let i = 0;i<projectsList.length;i++) {
    projectsList[i].onmouseover = ()=>{

        console.log('lol')
        projImgList[i].classList.add('proj_img_anim');
        projLineList[i].classList.add('proj_line_anim');
    }
    projectsList[i].onmouseleave = ()=>{
        projImgList[i].classList.remove('proj_img_anim');
        projLineList[i].classList.remove('proj_line_anim');
    }
}

//============================================================================\\
//============================Project=========================================\\
//============================================================================\\

//============================================================================\\
//============================Biography=======================================\\
//============================================================================\\
const img = document.getElementById('me');
img.classList.add('img__anim');

const start = pageYOffset;
const wrapBio = document.querySelector('.wrap');

window.addEventListener('scroll',function (){
    console.log(pageYOffset);
    if(pageYOffset>start){
        wrapBio.classList.add('hide_scroll');
    }else {
        wrapBio.classList.remove('hide_scroll');
    }

    if(pageYOffset>300){
        wrapBio.classList.add('no_bio');
    }else if(pageYOffset<300){
        wrapBio.classList.remove('no_bio');
    }


})

const bioH2 = document.getElementById('bio_h2')
const bioH2Line = document.getElementById('bio_title_line')


//============================================================================\\
//============================Bio_Wrap_Visible================================\\
//============================================================================\\


let carousel = document.getElementById('carrousel');
carousel.classList.add('carrousel_anim');




function bioShow() {
    bio.classList.add('bio__anim');
}

setTimeout(bioShow, 1000);
//
// function carH2Show() {
//     carH2.classList.add('car_h2_anim');
// }
//
// carH2Show();



let carItemFromList = document.querySelectorAll('.list_el');
let carItemFromListH3 = document.querySelectorAll('._h3_item_from_list');

for (let i = 0; i<carItemFromList.length; i++) {

    carItemFromList[i].onmouseover = ()=>{
        carItemFromListH3[i].classList.add('_h3_active');
        carItemFromList[i].onmouseleave = ()=>{
            carItemFromListH3[i].classList.remove('_h3_active');
        }
    }
}

