import './style.css'
import home from './home.js';
import menu from './menu.js';
import contact from './contact.js';

home()

const homeBtn = document.querySelector(".btn.home");
const menuBtn = document.querySelector(".btn.menu");
const contactBtn = document.querySelector(".btn.contact");

homeBtn.addEventListener("click", () => {
    home();
});

menuBtn.addEventListener("click", () => {
    menu();
});

contactBtn.addEventListener("click", () => {
    contact();
});