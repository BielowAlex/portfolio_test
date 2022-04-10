let animItemList = document.querySelectorAll('._anim_item');
const footer = document.querySelector('.footer')

if (animItemList.length > 0) {
    window.addEventListener('scroll', scrollAnim);

    function scrollAnim() {
        // if(pageYOffset<3200){
        //     footer.classList.add('_footer_hide');
        // }else if(pageYOffset){
        //     footer.classList.remove('_footer_hide');
        // }
        for (let i = 0; i < animItemList.length; i++) {
            const animItem = animItemList[i];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offSet(animItem).top;
            const animStart = 5;

            let animItemPointStart = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPointStart = window.innerHeight - window.innerHeight / animStart;
            }

            if ((pageYOffset > animItemOffset - animItemPointStart) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_active');
            } else {
                if(!animItem.classList.contains('_anim_no_hide')) {
                    animItem.classList.remove('_active');
                }
            }
        }
    }

    function offSet(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return {top: rect.top + scrollTop, left: rect.left + scrollLeft};
    }


}


scrollAnim();