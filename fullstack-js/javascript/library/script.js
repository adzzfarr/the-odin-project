function Book(title, author, pages, isRead) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }

    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    
    this.readStatus = isRead ? 'read' : 'not read yet';

    this.info = function() {
        const message = this.title + ' by ' + this.author + ', ' + pages + ' pages, ' + this.readStatus;   
        return message;
    }
}

function addBookToLibrary(title, author, pages, isRead, library) {
    const book = new Book(title, author, pages, isRead);
    library.push(book);
}

function displayBooks(container, library) {
    container.innerHTML = '';

    library.forEach((book) => {
        const card = document.createElement('div');
        card.classList.add('book-card'); // Apply CSS class

        const titleElement = document.createElement('h1');
        titleElement.textContent = book.title;
        titleElement.style.fontSize = '1.375rem';

        const authorElement = document.createElement('p');
        authorElement.textContent = `Author: ${book.author}`;

        const pagesElement = document.createElement('p');
        pagesElement.textContent = `Pages: ${book.pages}`;

        const readElement = document.createElement('p');
        readElement.textContent = `Status: ${book.isRead ? 'Read' : 'Not Read Yet'}`;

        card.appendChild(titleElement);
        card.appendChild(authorElement);
        card.appendChild(pagesElement);
        card.appendChild(readElement);

        container.appendChild(card);
    });
}


const submit = document.querySelector('#submit');

submit.addEventListener('click', onClickSubmit);

function onClickSubmit(event) {
    event.preventDefault()

    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;

    const completionStatus = document.querySelector('input[name="completion"]:checked');
    const isRead = completionStatus && completionStatus.value == 'read';

    addBookToLibrary(title, author, pages, isRead, myLibrary);
    console.log(myLibrary[3].title)
    displayBooks(content, myLibrary);
}

const myLibrary = [];
addBookToLibrary('The Hobbit', 'J.R.R Tolkien', 295, false, myLibrary);
addBookToLibrary('The Hobbit 2', 'J.R.R Tolkien', 300, false, myLibrary);
addBookToLibrary('The Hobbit 3', 'J.R.R Tolkien', 305, false, myLibrary);

const content = document.querySelector("#content");
displayBooks(content, myLibrary);