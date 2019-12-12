const locale = {
    en: {
        welcome: "Hello everybody!"
    },
    ru: {
        welcome: "Всем привет!"
    }
}

let welcome = document.querySelector('.hi')

// define language using window hash
if (window.location.hash) {
    if (window.location.hash === "#ru") {
        welcome.textContent = locale.ru.welcome;
    }
}

let dataReload = document.querySelector(".languages")
// define language reload onclick
for (i = 0; i < dataReload.children.length; i++) {
    dataReload.children[i].addEventListener('click', (click) => {
        location.hash = click.target.hash;
        location.reload(true);
    });
}