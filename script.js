const myLibrary = [];
const bookShelf = document.querySelector(".bookshelf");

function Book(title, author, yearPublished, pageCount, read) {
    this.title = title;
    this.author = author;
    this.yearPublished = yearPublished;
    this.pageCount = pageCount;
    this.read = read;
    this.id = crypto.randomUUID();
}

const farewellMyLovely = new Book("Farewell, my Lovely", "Raymond Chandler", 1940, 292, false);
const nakedLunch = new Book("Naked Lunch", "William S. Burroughs", 1959, 232, false);

Book.prototype.addBookToLibrary = function () {
    myLibrary.push(this);
}

farewellMyLovely.addBookToLibrary();
nakedLunch.addBookToLibrary();



/*
function addBook() {

}
*/
function updateShelf() {
    myLibrary.forEach(book => {
        const newBook = document.createElement("div");
        newBook.classList.add("card");
        newBook.innerText = `${book.title}, by ${book.author}. Year Published: ${book.yearPublished} - Page Count: ${book.pageCount}. Read? : ${book.read}`;
        bookShelf.appendChild(newBook);
    });
}

updateShelf();