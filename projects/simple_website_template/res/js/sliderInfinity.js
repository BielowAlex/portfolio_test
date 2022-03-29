const qSlideList = document.querySelectorAll('.q_slide');
let id = 0;
let timer;
autoSlide();


function autoSlide(){
    timer = setTimeout(()=>{

        if(id+2!==qSlideList.length) {
            if(!qSlideList[id].classList.contains('_second_slide')) {
                qSlideList[id].classList.add('_hide_slide');

                qSlideList[id + 1].classList.remove('_second_slide');

                qSlideList[id + 2].classList.remove('_hide_slide');
                qSlideList[id + 2].classList.add('_second_slide');

                id++;
                autoSlide();
            }else{
                console.log('lol')
                qSlideList[qSlideList.length-1].classList.add('_hide_slide');

                qSlideList[id].classList.remove('_second_slide');
                qSlideList[id].classList.remove('_hide_slide');

                qSlideList[id + 1].classList.remove('_hide_slide');
                qSlideList[id + 1].classList.add('_second_slide');

                autoSlide();
            }
        }else if(id+2===qSlideList.length){
            qSlideList[id].classList.add('_hide_slide');

            qSlideList[id + 1].classList.remove('_second_slide');

            qSlideList[0].classList.remove('_hide_slide');
            qSlideList[0].classList.add('_second_slide');

            id=0;
            autoSlide();
        }

    },2500);
}

