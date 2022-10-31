import { DateTime } from './modules/luxon.js';
import { removeBook, addBook, clearInput,  displayBooks} from './modules/bookFunctions.js';
import { listMenu, contactMenu, addNewMenu  } from './modules/navigation.js'
  const form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    const bookTitle = document.querySelector('.book-title');
    const bookAuthor = document.querySelector('.book-author');
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

  setInterval(function () {Date.innerHTML = `${DateTime.local().toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS)}`;}, 1000);