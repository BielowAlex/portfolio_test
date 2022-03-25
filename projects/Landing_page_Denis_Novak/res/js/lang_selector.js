
let langList = document.querySelectorAll('.lang');
console.log(langList);

let languages = [
    popup_nav = {
        ru: ['Главная', "Обо мне", "Навыки", "Портфолио", "Контакт"],
        eng: ['Home', "About me", "Skills", "Portfolio", "Contact"]
    },
    header_nav = {
        ru: ['Главная', "Обо мне", "Навыки", "Портфолио", "Контакт"],
        eng: ['Home', "About me", "Skills", "Portfolio", "Contact"]
    },
    header_body_title = {
        ru: ["Denis Novak", "UX | UI-дизайнер\n 24 года, Минск."],
        eng: ["Denis Novak", "UX | UI designer\n 24 years old, Minsk."]
    },
    about_me = {
        ru: ["Обо мне", "Привет, я Денис — UX/UI дизайнер из Минска. Интересуюсь дизайном и всем, что с ним связано.",
            "Я учусь на курсах \"Веб и мобильный дизайн интерфейсов\" в IT-Академии.",
            "Готовы реализовать отличные проекты с замечательными людьми."],
        eng: ["About me", "Hi, I'm Denis – UX/UI designer from Minsk. I'm interested in design and everything connected with it.",
            "I'm studying at courses \"Web and mobile design interfaces\" in IT-Academy.",
            "Ready to implement excellent projects with wonderful people."]
    },
    skills = {
        ru: ["Навыки", "Работаю с такими программами как"],
        eng: ["Skills", "I work in such programs as"]
    },
    portfolio ={
        ru: ["Портфолио"],
        eng: ["Portfolio"]
    },
    contact_title = {
        ru: ["Контакт","Хотите узнать больше или просто поболтать? Добро пожаловать!","Написать сообщение"],
        eng: ["Contacts","Want to know more or just chat?\n You are welcome!","Send Message"]
    },
    copyright = {
        ru: ["Оцени меня на LinkedIn, Instagram, Behance, Dribble"],
        eng: ["Like me on LinkedIn, Instagram, Behance, Dribble"]
    }
];
console.log(languages.length);


let langBtn1 = document.querySelector('.language_btn');
let langBtn1Children = langBtn1.children;
console.log();
langBtn1.onclick = () => {
    if (langBtn1Children[1].classList.length > 1) {
        langBtn1Children[1].classList.remove('pressed');
        langBtn1Children[0].classList.add('pressed');
        localStorage.setItem('lang_DN', langBtn1Children[0].classList[0]);
        langInit();
    } else if (langBtn1Children[0].classList.length > 1) {
        langBtn1Children[0].classList.remove('pressed');
        langBtn1Children[1].classList.add('pressed');
        localStorage.setItem('lang_DN', langBtn1Children[1].classList[0]);
        langInit();
    }
}

let langBtn2 = document.querySelector('.language_btn2');
let langBtn2Children = langBtn2.children;
console.log();
langBtn2.onclick = () => {
    if (langBtn2Children[1].classList.length > 1) {
        langBtn2Children[1].classList.remove('pressed');
        langBtn2Children[0].classList.add('pressed');
        localStorage.setItem('lang_DN', langBtn2Children[0].classList[0]);
        langInit();
    } else if (langBtn2Children[0].classList.length > 1) {
        langBtn2Children[0].classList.remove('pressed');
        langBtn2Children[1].classList.add('pressed');
        localStorage.setItem('lang_DN', langBtn2Children[1].classList[0]);
        langInit();
    }
}


function langInit() {
    let lang = localStorage.getItem('lang_DN');
    if (lang === 'ru') {
        // btn1
        langBtn1Children[1].classList.remove('pressed');
        langBtn1Children[0].classList.add('pressed');
        // btn2
        langBtn2Children[1].classList.remove('pressed');
        langBtn2Children[0].classList.add('pressed');

        localStorage.setItem('lang_DN', langBtn2Children[0].classList[0]);

        for (let i = 0; i < languages.length; i++) {
            let arr = languages[i].ru;
            let child = langList[i].children;

            for (let j = 0; j < arr.length; j++) {
                child[j].innerText = arr[j];
            }
        }
    } else if (lang === 'eng') {
        // btn1
        langBtn1Children[0].classList.remove('pressed');
        langBtn1Children[1].classList.add('pressed');
        // btn2
        langBtn2Children[0].classList.remove('pressed');
        langBtn2Children[1].classList.add('pressed');

        localStorage.setItem('lang_DN', langBtn2Children[1].classList[0]);

        for (let i = 0; i < languages.length; i++) {
            let arr = languages[i].eng;
            let child = langList[i].children;

            for (let j = 0; j < arr.length; j++) {

                child[j].innerText = arr[j];
            }
        }
    }

}

