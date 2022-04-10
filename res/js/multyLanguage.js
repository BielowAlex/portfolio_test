const lngList = document.querySelectorAll('._lng');
console.log(lngList);

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


const setLang = (lng) => {
    console.log('lol')
    localStorage.setItem('lng',lng);
    langSelector();
}

langSelector();


eng.onclick = () => {
    language = '_eng';
    setLang(language);

}
pl.onclick = () => {
    language = '_pl';
    setLang(language);
}
ukr.onclick = () => {
    language = '_ukr';
    setLang(language);
}





