function Book(title, author, pages, releaseDate) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.releaseDate = releaseDate;
    this.id = crypto.randomUUID();
}


