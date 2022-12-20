import "../styles/style.scss";
import { Chart } from "chart.js/auto";

const text = document.getElementById('text');
const skill = document.getElementById('skill');
const home = document.getElementById('home');
const site = document.getElementById('site');
const contact = document.getElementById('contact');

function activePage(page, element) {
    if (window.location.search === page) {
        element.className = "text-shadow";
    }
}

activePage("?c=skills", skill);
activePage("?c=home", home);
activePage("?c=site", site);
activePage("?c=contact", contact);

if (window.location.search === "?c=home") {
    let splitText = text.innerText.split('');

    text.innerHTML = '';
    let i = 0;

    setInterval(() => {
        letterText();
    }, 100);

    function letterText() {
        if (i < splitText.length) {
            text.innerHTML += splitText[i];
            i++;
        }
    }
}

const chart = document.getElementById('myChart').getContext('2d');

let myChart = new Chart(chart, {
    type : "bar",
    data: {
        labels: [
            "100%",
            "HTML5",
            "CSS3",
            "SASS",
            "JavaScript",
            "jQuery",
            "PHP",
            "SQL",
            "TypeScript",
        ],
        datasets: [
            {
                label: "Compétences du langage",
                data: [100, 90, 85, 65, 75, 55, 60, 80, 50],
                backgroundColor: [
                    "red",
                    "#fd651c",
                    "#2aa7e1",
                    "#cd6799",
                    "#fade23",
                    "#6699d2",
                    "#5967a6",
                    "#2788cf",
                    "#0042be",
                ],
                hoverBorderWidth: 3,
            }
        ],
    },
    options: {
        indexAxis: 'y',
        legend: {
            display: false,
        }
    },
})








