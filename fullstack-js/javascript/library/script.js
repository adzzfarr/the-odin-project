class Book {
    constructor(title, author, pages, isRead) {
        this.id = crypto.randomUUID();
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = isRead;
    }

    toggleReadStatus() {
        this.isRead = !this.isRead;
    }

    getMessage() {
        const readStatus = this.isRead ? 'read' : 'not read yet';
        const message = `${this.title} by ${this.author}, ${this.pages} pages, ${readStatus}`;
        return message;
    }
}

class LibraryApp {
    constructor() {
        this.library = [
            new Book('The Hobbit', 'J.R.R Tolkien', 295, false),
            new Book('The Hobbit 2', 'J.R.R Tolkien', 300, false),
            new Book('The Hobbit 3', 'J.R.R Tolkien', 305, false),
        ];

        const form = document.querySelector('form');
        form.addEventListener('submit', (event) => this.onClickSubmit(event));
        
        this.displayBooks();
    }

    addBook(title, author, pages, isRead) {
        const book = new Book(title, author, pages, isRead);
        this.library.push(book);
    }

    removeBook(bookId) {
        this.library = this.library.filter(book => book.id !== bookId);
    }

    toggleRead(bookId) {
        const book = this.library.find(book => book.id === bookId);
        if (book) {
            book.toggleReadStatus();
        }
    }

    onClickSubmit(event) {
        event.preventDefault()

        const isValid = customValidityCheck();
        if (!isValid) return;
    
        const form = document.querySelector('form');
        const title = document.querySelector('#title');
        const author = document.querySelector('#author');
        const pages = document.querySelector('#pages');
    
        const completionStatus = document.querySelector('input[name="completion"]:checked');
        const isRead = completionStatus && completionStatus.value == 'read';
    
        this.addBook(title.value, author.value, parseInt(pages.value), isRead);
        this.displayBooks();
        form.reset();  
    }

    displayBooks() {
        const content = document.getElementById('content');

        content.innerHTML = '';

        this.library.forEach((book) => {
            const card = document.createElement('div');
            card.classList.add('book-card'); // Apply CSS class
            
            // data attribute
            card.setAttribute('data-bookid', book.id);

            // title element
            const titleElement = document.createElement('h1');
            titleElement.textContent = book.title;
            titleElement.style.fontSize = '1.375rem';

            // author element
            const authorElement = document.createElement('p');
            authorElement.textContent = `Author: ${book.author}`;

            // pages element
            const pagesElement = document.createElement('p');
            pagesElement.textContent = `Pages: ${book.pages}`;

            // read element
            const readElement = document.createElement('p');
            readElement.textContent = `Status: ${book.isRead ? 'Read' : 'Not Read Yet'}`;

            // delete button
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', () => {
                this.removeBook(book.id);
                this.displayBooks();
            });

            // toggle read status button
            const toggleReadStatusButton = document.createElement('button');
            toggleReadStatusButton.textContent = 'Toggle Read Status';
            toggleReadStatusButton.addEventListener('click', () => {
                this.toggleRead(book.id);
                this.displayBooks();
            });

            card.appendChild(titleElement);
            card.appendChild(authorElement);
            card.appendChild(pagesElement);
            card.appendChild(readElement);
            card.appendChild(deleteButton);
            card.appendChild(toggleReadStatusButton);


            content.appendChild(card);
        });
    }
}

// Validation Logic
function customValidityCheck() {
    const title = document.querySelector('#title');
    const author = document.querySelector('#author');
    const pages = document.querySelector('#pages');
    const completion = document.querySelector('input[name="completion"]:checked');

    const titleError = document.querySelector("#title + span.error");
    const authorError = document.querySelector("#author + span.error");
    const pagesError = document.querySelector("#pages + span.error");
    const completionError = document.querySelector('#completion-buttons + .error');

    let valid = true;

    if (!title.validity.valid) {
        titleError.textContent = "You need to enter a title.";
        titleError.className = "error active";
        valid = false;
    } else {
        titleError.textContent = "";
        titleError.className = "error";
    }

    if (!author.validity.valid) {
        authorError.textContent = "You need to enter an author.";
        authorError.className = "error active";
        valid = false;
    } else {
        authorError.textContent = "";
        authorError.className = "error";
    }

    if (!pages.validity.valid) {
        if (pages.validity.valueMissing) {
            pagesError.textContent = "You need to enter the number of pages.";
        } else if (pages.validity.rangeUnderflow) {
            pagesError.textContent = "Number of pages must be greater than 0.";
        }
        pagesError.className = "error active";
        valid = false;
    } else {
        pagesError.textContent = "";
        pagesError.className = "error";
    }

    if (!completion) {
        completionError.textContent = "You need to specify the completion status.";
        completionError.className = "error active";
        valid = false;
    } else {
        completionError.textContent = "";
        completionError.className = "error";
    }

    return valid;
}

document.addEventListener('DOMContentLoaded', () => {
    new LibraryApp();
});