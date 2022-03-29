const slideList = document.querySelectorAll('.slide');
const slideNums = document.querySelectorAll('.sq');
const left = document.querySelector('.slider_left_btn');
const right = document.querySelector('.slider_right_btn');


left.onclick = ()=>{
    for (const slide of slideList) {
        if((!slide.classList.contains('slide_right')) && slide.classList.contains('sl1')){
            slideList[0].classList.remove('hide');
            slideList[0].classList.remove('slide_right');
            slideNums[0].classList.remove('_active');
            slideNums[2].classList.add('_active');
            slide.classList.add('hide');
            setTimeout(()=>{
                slide.classList.add('slide_right');
            },300);
            break;
        }else if((!slide.classList.contains('slide_right')) && slide.classList.contains('sl3')){
            slideList[1].classList.remove('hide');
            slideList[1].classList.remove('slide_right');
            slideNums[2].classList.remove('_active');
            slideNums[1].classList.add('_active');
            slide.classList.add('hide');
            setTimeout(()=>{
                slide.classList.add('slide_right');

            },300);
            break;
        }else if((!slide.classList.contains('slide_right')) && slide.classList.contains('sl2')){
            slideList[2].classList.remove('hide');
            slideList[2].classList.remove('slide_right');
            slideNums[1].classList.remove('_active');
            slideNums[0].classList.add('_active');
            slide.classList.add('hide');
            setTimeout(()=>{
                slide.classList.add('slide_right');
            },300);
            break;
        }

    }
}

right.onclick = ()=>{
    for (const slide of slideList) {
        if((!slide.classList.contains('slide_right')) && slide.classList.contains('sl1')){
            slideList[1].classList.remove('slide_right');
            slideNums[0].classList.remove('_active');
            slideNums[1].classList.add('_active');
            setTimeout(()=>{
                slideList[1].classList.remove('hide');
                slide.classList.add('slide_right');
                slide.classList.add('hide');
            },300);
            break;
        }else if((!slide.classList.contains('slide_right')) && slide.classList.contains('sl2')){
            slideList[0].classList.remove('slide_right');
            slideNums[1].classList.remove('_active');
            slideNums[2].classList.add('_active');
            setTimeout(()=>{
                slideList[0].classList.remove('hide');
                slide.classList.add('slide_right');
                slide.classList.add('hide');
            },300);
            break;
        }else if((!slide.classList.contains('slide_right')) && slide.classList.contains('sl3')){
            slideList[2].classList.remove('slide_right');
            slideNums[2].classList.remove('_active');
            slideNums[0].classList.add('_active');
            setTimeout(()=>{
                slideList[2].classList.remove('hide');
                slide.classList.add('slide_right');
                slide.classList.add('hide');
            },300);
            break;
        }

    }
}
