const bookContainerTitle = document.querySelector('.title');
  const bookContainer = document.querySelector('.books-container');
  const addBookContainer = document.querySelector('.add-book-container');
  const contactContainer = document.querySelector('.contact-container');
  const list = document.querySelector('#list');
  const addNew = document.querySelector('#addNew');
  const contact = document.querySelector('#contact');

const listMenu = () => {
    bookContainerTitle.style.display = 'block';
    bookContainer.style.display = 'block';
    contactContainer.style.display = 'none';
    addBookContainer.style.display = 'none';
}

const addNewMenu = () => {
    bookContainerTitle.style.display = 'none';
    bookContainer.style.display = 'none';
    contactContainer.style.display = 'none';
    addBookContainer.style.display = 'block';
}

const contactMenu = () => {
    bookContainerTitle.style.display = 'none';
    bookContainer.style.display = 'none';
    contactContainer.style.display = 'flex';
    addBookContainer.style.display = 'none';
}
export { listMenu, contactMenu, addNewMenu };