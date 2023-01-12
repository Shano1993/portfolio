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

activePage("?c=skills", skill);
activePage("?c=home", home);
activePage("?c=application", application);
activePage("?c=contact", contact);








