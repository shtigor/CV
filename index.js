function loadJSON(callback) {   

    var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
    xobj.open('GET', 'locale.json', true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
          }
    };
    xobj.send(null);  
}

function init() {
    loadJSON(function(response) {
     // Parse JSON string into object
    //    var actual_JSON = JSON.parse(response);
       console.log(JSON.parse(response))
    });
}

init();
// const locale = JSON.parse(xhr.responseText);

let welcome = document.querySelector('.hi')

// define language using window hash
if (window.location.hash) {
    if (window.location.hash === "#ru") {
        welcome.textContent = locale["ru"]["welcome"];
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