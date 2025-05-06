import "./styles.css";
import { loadHomePage } from "./home.js";
import { loadMenuPage } from "./menu.js";
import { loadAboutPage } from "./about.js";

document.addEventListener('DOMContentLoaded', () => {
    loadHomePage(document);
});

const content = document.querySelector('#content');

const homeButton = document.querySelector('#home-button');
homeButton.addEventListener('click', () => {
    // clear content
    content.innerHTML = '';
    loadHomePage(document);
});

const menuButton = document.querySelector('#menu-button');
menuButton.addEventListener('click', () => {
    // clear content
    content.innerHTML = '';
    loadMenuPage(document);
});

const aboutButton = document.querySelector('#about-button');
aboutButton.addEventListener('click', () => {
    // clear content
    content.innerHTML = '';
    loadAboutPage(document);
});