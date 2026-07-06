/**
 * Book constructor
*/
function Book(author, title, pages, releaseDate) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.releaseDate = releaseDate;
    this.id = crypto.randomUUID();
}

/**
 * Adds a book with given parameters to the library array
 */
function addBookToLibrary(author, title, pages, releaseDate) {
    library.push(new Book(author, title, pages, releaseDate));
}

/**
 * Displays the library array visually on the page
 */
function displayLibrary() {
    const bookDisplay = document.querySelector(".book-display");

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

        bookDisplay.appendChild(bookElement);
    }
}

const library = [];