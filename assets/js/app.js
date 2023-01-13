import "../styles/style.scss";

const skill = document.getElementById('skills');
const home = document.getElementById('home');
const application = document.getElementById('application');
const contact = document.getElementById('contact');

// active page
function activePage(page, element) {
    if (window.location.search === page) {
        element.style.color = "black";
    }
}

activePage("?c=home&a=skills", skill);
activePage("?c=home", home);
activePage("?c=home&a=application", application);
activePage("?c=home&a=contact", contact);

let text = "Bievenue sur mon portfolio, n'hésitez pas à m'envoyer un message !";
let target = document.getElementById("target");
let i = 0;

function typeWriter() {
    if (i < text.length) {
        target.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 70);
    }
}

typeWriter();

let cursor= document.getElementById("cursor");

function blinkCursor() {
    cursor.style.visibility = (cursor.style.visibility === "visible") ? "hidden" : "visible";
    setTimeout(blinkCursor, 500);
}

blinkCursor();






