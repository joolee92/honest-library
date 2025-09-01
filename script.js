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


Book.prototype.addBookToLibrary = function () {
  myLibrary.push(this);
};



/*
function addBook() {

}
*/
function updateShelf() {
    bookShelf.innerHTML = '';
  myLibrary.forEach((book) => {
    const newBook = document.createElement("div");
    newBook.classList.add("entry");
    const title = document.createElement("h1");
    const author = document.createElement("h2");
    const yearPublished = document.createElement("h3");
    const pageCount = document.createElement("h5");
    const read = document.createElement("button");
    title.textContent = book.title;
    author.textContent = book.author;
    yearPublished.textContent = book.yearPublished;
    pageCount.textContent = `${book.pageCount} pages`;
    read.textContent = `read`;
    newBook.appendChild(title);
    newBook.appendChild(author);
    newBook.appendChild(yearPublished);
    newBook.appendChild(pageCount);
    newBook.appendChild(read);
    bookShelf.appendChild(newBook);
  });
}


const addBook = document.getElementById("addBook");
const bookDialog = document.getElementById("bookDialog");
const outputBox = document.querySelector("output");
const confirmBtn = bookDialog.querySelector("#confirmBtn");

addBook.addEventListener("click", () => {
  bookDialog.showModal();
  text.textContent = "";
});

// "Cancel" button closes the dialog without submitting because of [formmethod="dialog"], triggering a close event.
bookDialog.addEventListener("close", (e) => {
  outputBox.value =
    bookDialog.returnValue === "default"
      ? "No return value."
      : `ReturnValue: ${bookDialog.returnValue}`; // Have to check for "default" rather than empty string
});

confirmBtn.addEventListener("click", (event) => {
  event.preventDefault();

  const inputs = document.querySelectorAll("input"); // Get all input elements
  const bookData = [];
  inputs.forEach((input) => {
    bookData.push(input.value);
  });
  const newBook = new Book(...bookData);
  newBook.addBookToLibrary();
  updateShelf();
  bookDialog.close();
});
