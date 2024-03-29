import "../styles/style.scss";
import "../styles/application.scss";
import "../styles/login.scss";

const success = document.querySelector('.success')

function getMessage(message) {
    setTimeout(function () {
        message.remove();
    }, 5000)
}

getMessage(success);

const skill = document.getElementById('skills');
const home = document.getElementById('home');
const application = document.getElementById('application');
const contact = document.getElementById('contact');

// active page
function activePage(page, element) {
    if (window.location.search === page) {
        element.style.color = "#f80e0e";
    }
}

activePage("?c=skills", skill);
activePage("?c=home", home);
activePage("?c=app", application);
activePage("?c=home&a=contact", contact);

let text = "Bienvenue sur mon portfolio, n'hésitez pas à m'envoyer un message !";
let target = document.getElementById("target");
let i = 0;

function typeWriter() {
    if (i < text.length) {
        target.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 40);
    }
}

typeWriter();

let cursor= document.getElementById("cursor");

function blinkCursor() {
    cursor.style.visibility = (cursor.style.visibility === "visible") ? "hidden" : "visible";
    setTimeout(blinkCursor, 500);
}

blinkCursor();








