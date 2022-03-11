let img = document.getElementById('me');
let bio = document.getElementById('bio');
let carH2 = document.getElementById('car_h2');
let carousel = document.getElementById('carrousel');

carousel.classList.add('carrousel_anim');

img.classList.add('img__anim');
function bioShow() {
    bio.classList.add('bio__anim');
}
setTimeout(bioShow,1000);

function carH2Show() {
    carH2.classList.add('car_h2_anim');
}
setTimeout(carH2Show,2000);



