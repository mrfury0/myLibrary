const shelf = document.getElementById('shelf');




let myLibrary = [
  {
    name: "The haunting",
    author: "hannan",
  },
  { name: "the true bender", author: "mannan" },
];

function Book(name, author) {
  this.name = name;
  this.author = author;
}

function addBookToLibrary(books) {
  books.forEach(book){
    const row = document.createElement('div');
    row.add.classList.add("row")  

    const bookName = document.createElement('div');
    bookName.classList.add('one-half column');

    const author = document.createElement('div');
    author.classList.add('one-half column');

    bookName.innerHTML = `<h2>${book.name}</h2>`;
    author.innerHTML = `<h2>${book.author}</h2>`;

    row.appendChild(bookName);
    row.appendChild(author);
    shelf.appendChild(row);

  }
}
