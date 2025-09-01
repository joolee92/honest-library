const myLibrary = [];
const bookShelf = document.querySelector(".bookshelf");

function Book(title, author, yearPublished, pageCount, read) {
  this.title = title;
  this.author = author;
  this.yearPublished = yearPublished;
  this.pageCount = pageCount;
  this.read = read;
}

Book.prototype.addBookToLibrary = function () {
  myLibrary.push(this);
};

const checkbox = document.querySelector('input[type="checkbox"]');

function updateShelf() {
  bookShelf.innerHTML = "";
  myLibrary.forEach((book) => {
    const newBook = document.createElement("div");
    newBook.classList.add("entry");

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete");
    deleteBtn.textContent = "delete";

    const title = document.createElement("h1");
    const author = document.createElement("h2");
    const yearPublished = document.createElement("h3");
    const pageCount = document.createElement("h5");
    const read = document.createElement("button");
    title.textContent = book.title;
    author.textContent = book.author;
    yearPublished.textContent = book.yearPublished;
    pageCount.textContent =
      book.pageCount !== "" ? `${book.pageCount} pages` : book.pageCount;
    read.textContent = `read`;
    newBook.appendChild(title);
    newBook.appendChild(author);
    newBook.appendChild(yearPublished);
    newBook.appendChild(pageCount);
    newBook.appendChild(read);
    newBook.appendChild(deleteBtn);
    bookShelf.appendChild(newBook);

    deleteBtn.addEventListener("click", () => {
      newBook.remove();
    });
  });
}

const addBook = document.getElementById("addBook");
const bookDialog = document.getElementById("bookDialog");
const outputBox = document.querySelector("output");
const closeBtn = bookDialog.querySelector("#closeBtn");
const resetBtn = bookDialog.querySelector("#resetBtn");


addBook.addEventListener("click", () => {
  document.querySelector("form").reset();
  bookDialog.showModal();
});

resetBtn.addEventListener("click", () => {
  event.preventDefault();
  document.querySelector("form").reset();
});

closeBtn.addEventListener("click", (event) => {
  event.preventDefault();
  bookDialog.close();
});

bookDialog.addEventListener("submit", (event) => {
  event.preventDefault();

  const inputs = document.querySelectorAll("input");
  const bookData = [];
  inputs.forEach((input) => {
    bookData.push(input.value);
  });

  const newBook = new Book(...bookData);

  newBook.addBookToLibrary();
  updateShelf();
  bookDialog.close();

  outputBox.value = "Book successfully added.";
});
