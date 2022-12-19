import "../styles/style.scss";

const text = document.getElementById('text');
let splitText = text.innerText.split('');

text.innerHTML = '';
let i = 0;

setInterval(() => {
    letterText();
}, 100)

function letterText() {
    if (i < splitText.length) {
        text.innerHTML += splitText[i];
        i++;
    }
}