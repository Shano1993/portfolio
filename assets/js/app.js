import "../styles/style.scss";

const text = document.getElementById('text');
const skill = document.getElementById('skills');
const home = document.getElementById('home');
const site = document.getElementById('site');
const contact = document.getElementById('contact');

// active page
function activePage(page, element) {
    if (window.location.search === page) {
        element.style.color = "#F9F9F9";
    }
}

activePage("?c=skills", skill);
activePage("?c=home", home);
activePage("?c=site", site);
activePage("?c=contact", contact);

if (window.location.search === "?c=home") {
    let splitText = text.innerText.split('');

    text.innerHTML = '->';
    let i = 0;

    setInterval(() => {
        letterText();
    }, 100);

    function letterText() {
        if (i < splitText.length) {
            text.innerHTML += " " + splitText[i];
            i++;
        }
    }
}

// current date & times
const date = document.querySelector("#date");
const dateToday = new Date();
const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
};
date.innerHTML = dateToday.toLocaleDateString("fr-FR", options);

function clock() {
    const time = new Date(),
        hours = time.getHours(),
        minutes = time.getMinutes(),
        seconds = time.getSeconds();
    document.querySelectorAll(".clock")[0].innerHTML = harold(hours) + ":" + harold(minutes) + ":" + harold(seconds);
    function harold(standIn) {
        if (standIn < 10) {
            standIn = '0' + standIn
        }
        return standIn;
    }
}
setInterval(clock, 0);








