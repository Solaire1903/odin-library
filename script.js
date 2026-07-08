/**
 * Book constructor
*/
function Book(author, title, pages, releaseDate) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.releaseDate = releaseDate;
    this.readStatus = false;
    this.id = crypto.randomUUID();
}

Book.prototype.toggleRead = function() {
    this.readStatus = !(this.readStatus);
};

/**
 * Adds a book with given parameters to the library array
 */
function addBookToLibrary(author, title, pages, releaseDate) {
    library.push(new Book(author, title, pages, releaseDate));
}

/**
 * Displays the library array visually on the page
 */
function updateLibraryDisplay() {
    const bookDisplay = document.querySelector(".book-display");

    while (bookDisplay.childElementCount !== 0) {
        bookDisplay.lastChild.remove();
    }

    for (const book of library) {
        const bookElement = document.createElement("div");
        bookElement.classList.add("book");

        const author = document.createElement("p");
        author.classList.add("author");
        author.textContent = book.author;
        bookElement.appendChild(author);

        const title = document.createElement("p");
        title.classList.add("title");
        title.textContent = book.title;
        bookElement.appendChild(title);

        const pages = document.createElement("p");
        pages.classList.add("pages");
        pages.textContent = `${book.pages} pages`;
        bookElement.appendChild(pages);

        const releaseDate = document.createElement("p");
        releaseDate.classList.add("release-date");
        releaseDate.textContent = `Released in: ${book.releaseDate}`;
        bookElement.appendChild(releaseDate);

        const readButton = document.createElement("button");
        readButton.classList.add("read-button");
        readButton.textContent = "Toggle read";
        bookElement.appendChild(readButton);

        const readStatus = document.createElement("p");
        readStatus.classList.add("read-status");
        readStatus.textContent = (book.readStatus ? "Read" : "Not read");
        bookElement.appendChild(readStatus);

        const removeButton = document.createElement("button");
        removeButton.classList.add("remove-button");
        removeButton.textContent = "Remove";
        removeButton.addEventListener("click", removeBook);
        bookElement.appendChild(removeButton);

        bookElement.setAttribute("data-id", book.id);

        bookDisplay.appendChild(bookElement);
    }
}

function removeBook(event) {
    const bookElement = event.target.parentNode;
    for (const book of library) {
        if (book.id === bookElement.dataset.id) {
            library.splice(library.indexOf(book), 1);
        }
    }

    updateLibraryDisplay();
}

const library = [];

addBookToLibrary("Oscar Wilde", "The Picture of Dorian Gray", 320, 1891);
addBookToLibrary("George Orwell", "1984", 317, 1949);
addBookToLibrary("Homer", "Odyssey", 550, -700);

updateLibraryDisplay();

const addBookButton = document.querySelector(".add-book-button");
const dialogWindow = document.querySelector("dialog");
const closeButton = document.querySelector(".close-button");
const form = document.querySelector("#book-form");

addBookButton.addEventListener("click", () => {
    dialogWindow.showModal();
});

closeButton.addEventListener("click", () => {
    dialogWindow.close();
});

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputValues = [];
    const formInputs = document.querySelectorAll("input");
    for (const input of formInputs) {
        inputValues.push(input.value);
        input.value = "";
    }

    addBookToLibrary(inputValues[0], inputValues[1], inputValues[2], inputValues[3]);
    updateLibraryDisplay();

    dialogWindow.close();
});