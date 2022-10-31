import { DateTime } from './modules/luxon.js';
import { addBook, displayBooks } from './modules/bookFunctions.js';
import { listMenu, contactMenu, addNewMenu } from './modules/navigation.js';

const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  let bookTitle = document.querySelector('.book-title');
  let bookAuthor = document.querySelector('.book-author');
  e.preventDefault();
  addBook(bookTitle.value, bookAuthor.value);
});

window.onload = displayBooks();

const list = document.querySelector('#list');
const addNew = document.querySelector('#addNew');
const contact = document.querySelector('#contact');

list.addEventListener('click', () => {
  listMenu();
});

addNew.addEventListener('click', () => {
  addNewMenu();
});

contact.addEventListener('click', () => {
  contactMenu();
});

const Date = document.querySelector('.date-time');

setInterval(() => { Date.innerHTML = `${DateTime.local().toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS)}`; }, 1000);