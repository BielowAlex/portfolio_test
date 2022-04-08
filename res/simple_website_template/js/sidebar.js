

const sideBarElements = document.querySelectorAll('.sideBar_el');
const sideBarElementsIcon = document.querySelectorAll('._ico_down');

for (let i = 0; i < sideBarElements.length; i++) {
    sideBarElements[i].onclick = () => {
        if (!sideBarElements[i].classList.contains('sideBar_el_open')) {
            sideBarElements[i].classList.add('sideBar_el_open');

            sideBarElementsIcon[i].classList.remove('fa-angle-down');
            sideBarElementsIcon[i].classList.add('fa-angle-up');
        } else {
            sideBarElements[i].classList.remove('sideBar_el_open');

            sideBarElementsIcon[i].classList.remove('fa-angle-up');
            sideBarElementsIcon[i].classList.add('fa-angle-down');
        }
    };

}

