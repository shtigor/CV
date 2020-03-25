const locale = {
    en: {
        about: "About me",
        career: "Career",
        projects: "Projects",
        contacts: "Contacts",
        infoDescription: "Hi! My name is Igor. On this page you can see my achivements, career steps, projects. I want to become Full Stack Developer. For me learning something new really important. If I want to become a good developer I should read more books, articles. Take part in conferences to improve my skills. In future I want to relocate.",
        education: "Education",
        educationDescription: "I graduated from BSUIR in 2017.",
        courses: "Courses",
        englishCourses: "English courses",
        englishCoursesDescription: "I've finished Streamline Intermediate and Upper-Intermediate course.",
        onlineCourses: "Online courses",
        onlineCoursesDescription: "Coursera python course (<a href=\"https://www.coursera.org/learn/diving-in-python\" target=\"_blank\">Diving in python</a>)",
        technologiesTranslation: "Technologies",
        projectHeaderTranslation: "Projects",
        careerHeaderTranslation: "Career",
        fsrtCareerDate: "February 2017 - August 2018",
        fsrtCareerName: "«Center vnedreniy» Ltd",
        fsrtCareerPstn: "Programmer",
        fsrtCareerDscrptn: "Create, update configurations. Work with clients, solved their issues.",
        scndCareerDate: "August 2018 - December 2019",
        scndCareerName: "Nitka Technologies",
        scndCareerPstn: "Programmer analyst",
        scndCareerDscrptn: "Create surveys and analyze respondent data. Work in team, attend team meetings. Abilities which I've got are read other's people code, work in team, solve tasks quickly. Also I develop my English.",
        thirdCareerDate: "February 2020",
        thirdCareerName: "Syberry",
        thirdCareerPstn: "Data Engineer",
        thirdCareerDscrptn: "Create configuration files for datasets, description files of datasets. Develop parsers, which convert from one type extension to another.",
        python1: "Create scrappers (online shops, broker company)",
        python2: "Automation my work",
        python3: "Solve big variety of tasks",
    },
    ru: {
        about: "О мне",
        career: "Карьера",
        projects: "Проекты",
        contacts: "Контакты",
        infoDescription: "Меня зовут Игорь. На данной странице мы можете увидеть мои достижения, карьерную лестницу, проекты. Я хочу стать Full Stack разработчиком. Для меня изучение чего-то нового очень важно. Я читаю книги, статьи, посещаю курсы для своего развития. Так же я считаю для получения опыта необходимо участвовать в различных конференциях для улучшения своих навыков.",
        education: "Образование",
        educationDescription: "Я закончил БГУИР в 2017 году.",
        courses: "Курсы",
        englishCourses: "Курсы английского языка",
        englishCoursesDescription: "Закончил курсы английского языка в школе Стримлайн уровня Intermediate и Upper-Intermediate.",
        onlineCourses: "Онлайн курсы",
        onlineCoursesDescription: "Python курс на Coursera (Погружение в Python)",
        technologiesTranslation: "Технологии",
        projectHeaderTranslation: "Проекты",
        careerHeaderTranslation: "Карьера",
        fsrtCareerDate: "Февраль 2017 - Август 2018",
        fsrtCareerName: "ООО «Цент внедрений»",
        fsrtCareerPstn: "Инженер-программист",
        fsrtCareerDscrptn: "Создание, обновление конфигураций. Работа с клиентами.",
        scndCareerDate: "Август 2018 - Декабрь 2019",
        scndCareerName: "Nitka Technologies",
        scndCareerPstn: "Программист-аналитик",
        scndCareerDscrptn: "Создание опросов, создание таблиц для анализа данных респондентов. Работа в команде, в митингах. На данном проекте приобрел навыки работы в команде, чтение чужого кода, решение задач быстро. Также улучшил знания английского языка.",
        thirdCareerDate: "Февраль 2020",
        thirdCareerName: "Syberry",
        thirdCareerPstn: "Инженер-программист",
        thirdCareerDscrptn: "Создание конфигурационных файлов для обработки данных, создание файлов описания данных. Создание скриптов для преобразования файлов из одного типа в другой.",
        python1: "Создание скраперов",
        python2: "Автоматизировал свою работу",
        python3: "Решение различных задач",
    }
}

let about = document.querySelector('#about-me')
let career = document.querySelector('#career-nav')
let projects = document.querySelector('#projects-nav')
let contacts = document.querySelector('#contacts-nav')

let headerDescription = document.querySelector('.info__about--header')
let description = document.querySelector('#description')
let education = document.querySelector('.education')
let educationDescription = document.querySelector('#educationDescription')

let courses = document.querySelector('.courses')
let englishCourses = document.querySelector('.english-courses')
let englishCoursesDescription = document.querySelector('.english-courses-description')
let onlineCourses = document.querySelector('.online-courses')
let onlineCoursesDescription = document.querySelector('.online-courses-description')
let technologiesTranslation = document.querySelector('.technologies-translation')
let projectHeaderTranslation = document.querySelector('.project-header-translation')

let careerHeaderTranslation = document.querySelector('.career-header-translation')

let fsrtCareerDate = document.querySelector('.fsrt-career-date')
let fsrtCareerName = document.querySelector('.fsrt-career-name')
let fsrtCareerPstn = document.querySelector('.fsrt-career-pstn')
let fsrtCareerDscrptn = document.querySelector('.fsrt-career-dscrptn')

let scndCareerDate = document.querySelector('.scnd-career-date')
let scndCareerName = document.querySelector('.scnd-career-name')
let scndCareerPstn = document.querySelector('.scnd-career-pstn')
let scndCareerDscrptn = document.querySelector('.scnd-career-dscrptn')

let thirdCareerDate = document.querySelector('.third-career-date')
let thirdCareerName = document.querySelector('.third-career-name')
let thirdCareerPstn = document.querySelector('.third-career-pstn')
let thirdCareerDscrptn = document.querySelector('.third-career-dscrptn')

let python1 = document.querySelector('.python1')
let python2 = document.querySelector('.python2')
let python3 = document.querySelector('.python3')


// define language using window hash
if (window.location.hash) {
    if (window.location.hash === "#ru") {
        about.textContent = locale.ru.about;
        career.textContent = locale.ru.career;
        projects.textContent = locale.ru.projects;
        contacts.textContent = locale.ru.contacts;
        headerDescription.textContent = locale.ru.about;
        description.textContent = locale.ru.infoDescription;
        education.textContent = locale.ru.education;
        educationDescription.textContent = locale.ru.educationDescription;

        courses.textContent = locale.ru.courses;
        englishCourses.textContent = locale.ru.englishCourses;
        englishCoursesDescription.textContent = locale.ru.englishCoursesDescription;
        onlineCourses.textContent = locale.ru.onlineCourses;
        onlineCoursesDescription.textContent = locale.ru.onlineCoursesDescription;
        technologiesTranslation.textContent = locale.ru.technologiesTranslation;
        projectHeaderTranslation.textContent = locale.ru.projectHeaderTranslation;

        careerHeaderTranslation.textContent = locale.ru.careerHeaderTranslation;
        fsrtCareerDate.textContent = locale.ru.fsrtCareerDate;
        fsrtCareerName.textContent = locale.ru.fsrtCareerName;
        fsrtCareerPstn.textContent = locale.ru.fsrtCareerPstn;
        fsrtCareerDscrptn.textContent = locale.ru.fsrtCareerDscrptn;

        scndCareerDate.textContent = locale.ru.scndCareerDate;
        scndCareerName.textContent = locale.ru.scndCareerName;
        scndCareerDscrptn.textContent = locale.ru.scndCareerDscrptn;

        thirdCareerDate.textContent = locale.ru.thirdCareerDate;
        thirdCareerPstn.textContent = locale.ru.thirdCareerPstn;
        thirdCareerDscrptn.textContent = locale.ru.thirdCareerDscrptn;

        python1.textContent = locale.ru.python1;
        python2.textContent = locale.ru.python2;
        python3.textContent = locale.ru.python3;
    }
}

let dataReload = document.querySelector(".languages")
// define language reload onclick
for (let i = 0; i < dataReload.children.length; i++) {
    dataReload.children[i].addEventListener('click', (click) => {
        location.hash = click.currentTarget.hash;
        location.reload(true);
    });
}


let navigation = document.querySelector('.nav__links');
let menu = document.querySelector('.menu');
menu.addEventListener('click', () => {
    if (navigation.style.display === "block") {
        navigation.style.display = "none";
    } else {
        navigation.style.display = "block";
    }
})