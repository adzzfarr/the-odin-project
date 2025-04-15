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
    constructor(contentSelector, submitButtonSelector) {
        this.library = [
            new Book('The Hobbit', 'J.R.R Tolkien', 295, false),
            new Book('The Hobbit 2', 'J.R.R Tolkien', 300, false),
            new Book('The Hobbit 3', 'J.R.R Tolkien', 305, false),
        ];

        this.content = document.querySelector(contentSelector);
        this.submitButton = document.querySelector(submitButtonSelector);
        this.submitButton.addEventListener('click', (event) => this.onClickSubmit(event));
        
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
    
        const title = document.querySelector('#title').value;
        const author = document.querySelector('#author').value;
        const pages = document.querySelector('#pages').value;
    
        const completionStatus = document.querySelector('input[name="completion"]:checked');
        const isRead = completionStatus && completionStatus.value == 'read';
    
        this.addBook(title, author, pages, isRead);
        this.displayBooks();
    }

    displayBooks() {
        this.content.innerHTML = '';

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

            this.content.appendChild(card);
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new LibraryApp('#content', '#submit');
})