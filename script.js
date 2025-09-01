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

function updateShelf() {
  bookShelf.innerHTML = "";
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
    pageCount.textContent =
      book.pageCount !== "" ? `${book.pageCount} pages` : book.pageCount;
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
const confirm = bookDialog.querySelector("#confirm");
const closeBtn = bookDialog.querySelector("#closeBtn");

addBook.addEventListener("click", () => {
  bookDialog.showModal();
  text.textContent = "";
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

  console.log(bookData[0], bookData[3]);
  const newBook = new Book(...bookData);

  newBook.addBookToLibrary();
  updateShelf();
  bookDialog.close();

  outputBox.value = "Book successfully added.";
});

