// Menu Hover
let search1 = document.querySelector('#search1');

search1.onclick = function () {
    console.log("Clicked on Search1")
}

// Toggle
let toggle = document.querySelector('#toggle');
let search2 = document.querySelector('#search2');
let navslider = document.querySelector('.nav-slider');
let searchslider = document.querySelector('.search-slider');
let close1 = document.querySelector('.close1');
let close2 = document.querySelector('.close2');
let body = document.body

toggle.onclick = function () {
    navslider.classList.toggle('active');
    body.classList.toggle('active');
};

search2.onclick = function () {
    searchslider.classList.toggle('active');
    body.classList.toggle('active');
    document.getElementById('searchinput').classList.toggle('active');
    setTimeout(inputsearhh, 500)
};

let test = document.getElementById('searchinput');
var testClass = test.className;
function inputsearhh() {
    if (test.className = 'active') {
        test.focus();
    };
};

close1.onclick = function () {
    navslider.classList.toggle('active');
    body.classList.toggle('active');
};


close2.onclick = function () {
    searchslider.classList.toggle('active');
    body.classList.toggle('active');
};

// Lazy Loading Images
let lazy = document.querySelectorAll('img');
for (i = 0; i < lazy.length; i++) {
    lazy[i].setAttribute("loading", "lazy")
}