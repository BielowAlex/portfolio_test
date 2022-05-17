const lngList = document.querySelectorAll('._lng');
const setLang = (lng) => {
    localStorage.setItem('lng',lng);
    langSelector();
}

if(localStorage.getItem('lng')===null){
    setLang('_eng');
}


const eng = document.querySelector('.eng');
const pl = document.querySelector('.pl');
const ukr = document.querySelector('.ukr');

const langSelector = () =>{
    let getLang = localStorage.getItem('lng');
    for (const lng of lngList) {
        if(lng.classList.contains(getLang)){
            if(lng.classList.contains('_none')){
                lng.classList.remove('_none');
            }
        }
        if(!lng.classList.contains(getLang)){
            if(!lng.classList.contains('_none')){
                lng.classList.add('_none');
            }
        }
    }

}





langSelector();


eng.onclick = () => {
    const language = '_eng';
    setLang(language);

}
pl.onclick = () => {
    const language = '_pl';
    setLang(language);
}
ukr.onclick = () => {
    const language = '_ukr';
    setLang(language);
}





