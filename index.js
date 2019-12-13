const locale = {
    en: {
        about: "About me",
        career: "Career",
        projects: "Projects",
        contacts: "Contacts",
        infoDescription: "Hi! My name is Igor. On this page you can see my achivements, career steps, projects. I want to become Full Stack Developer. For me learning something new really important. If I want to become a good developer I should read more books, articles. Take part in conferences to improve my skills. In future I want to relocate.",
        education: "Education",
        educationDescription: "I've graduated from BSUIR in 2017.",
        courses: ""
    },
    ru: {
        about: "О мне",
        career: "Карьера",
        projects: "Проекты",
        contacts: "Контакты",
        infoDescription: "Меня зовут Игорь. На данной странице мы можете увидеть мои достижения, карьерную лестницу, проекты. Я хочу стать Full Stack разработчиком. Для меня изучение чего-то нового очень важно. Я читаю книги, статьи, посещаю курсы для своего развития. Так же я считаю для получения опыта необходимо участвовать в различных конференциях для улучшения своих навыков.",
        education: "Образование",
        educationDescription: "Я закончил БГУИР в 2017 году.",
    }
}

let about = document.querySelector('#about-me')
let career = document.querySelector('#career-nav')
let projects = document.querySelector('#projects')
let contacts = document.querySelector('#contacts')

let headerDescription = document.querySelector('.info__about--header')
let description = document.querySelector('#description')
let description = document.querySelector('.education')

// define language using window hash
if (window.location.hash) {
    if (window.location.hash === "#ru") {
        about.textContent = locale.ru.about;
        career.textContent = locale.ru.career;
        projects.textContent = locale.ru.projects;
        contacts.textContent = locale.ru.contacts;
        headerDescription.textContent = locale.ru.about;
        description.textContent = locale.ru.infoDescription;
    }
}

let dataReload = document.querySelector(".languages")
// define language reload onclick
for (i = 0; i < dataReload.children.length; i++) {
    dataReload.children[i].addEventListener('click', (click) => {
        location.hash = click.currentTarget.hash;
        location.reload(true);
    });
}
