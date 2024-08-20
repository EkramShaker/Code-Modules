import { loadHome } from './home.mjs';
import { loadMenu } from './menu.mjs';
import { loadContact } from './contact.mjs';

const content = document.getElementById('content');

document.getElementById('homeBtn').addEventListener('click', () => {
    loadHome(content);
});

document.getElementById('menuBtn').addEventListener('click', () => {
    loadMenu(content);
});

document.getElementById('contactBtn').addEventListener('click', () => {
    loadContact(content);
});

// Load the home page by default
loadHome(content);
