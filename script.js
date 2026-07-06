function Book(title, author, pages, releaseDate) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.releaseDate = releaseDate;
    this.id = crypto.randomUUID();
}

function addBook(title, author, pages, releaseDate) {
    library.push(new Book(title, author, pages, releaseDate));
}

const library = [];