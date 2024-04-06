import './output.css';
import loadHome from './home.js';
import loadMenu from './menu.js';
import loadAbout from './about.js';
import Icon from './ico.png';


const icon = document.createElement('link');

icon.rel = 'shortcut icon';
icon.href = Icon;

document.head.appendChild(icon);

const btns = document.querySelectorAll('button[data-value]');

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

let glitchTexts = document.querySelectorAll('.glitch');

glitchTexts.forEach((text) => {
    text.addEventListener("mouseover", (event) => {
        let iteration = 0;

        clearInterval(interval);

        interval = setInterval(() => {
            event.target.innerText = event.target.innerText.split('').map((letter, index) => {
                if (index < iteration) {
                    return event.target.dataset.value[index];
                }

                return letters[Math.floor(Math.random() * 26)]
            })
            .join("");
            
            if (iteration >= event.target.dataset.value.length) {
                clearInterval(interval);
            }

            iteration += 1 / 3;
        }, 30);
    })
})


const loader = function loadStartContent() {
    const content = document.querySelector('#content');
    loadHome();
    btns.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            if (e.target.dataset.value === 'HOME') {
                setActiveBtn(e.target);
                loadHome();
            }
            else if (e.target.dataset.value === 'MENU') {
                setActiveBtn(e.target);
                loadMenu();
            }
            else {
                setActiveBtn(e.target);
                loadAbout();
            }
        })
    })
}();

function setActiveBtn(button) {
    let activeBtn = document.querySelector('button.active');
    if (button.classList.contains('active')) return;

    if (button !== activeBtn) {
        activeBtn.classList.remove('active');
    }

    button.classList.add('active');

}