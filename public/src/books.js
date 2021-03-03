function findAuthorById(authors, id) {
  let found = Object.values(authors).find((author) => author.id === id);
  return found;
}

function findBookById(books, id) {
  let found = books.find((book) => book.id === id);
  return found;
}

function partitionBooksByBorrowedStatus(books) {
  let borrowed = books.filter((book) => { return book.borrows[0].returned === false;
  });
  let returned = books.filter((book) => { return book.borrows[0].returned === true;
   });
  const result = [borrowed, returned];
  return result;
}

function getBorrowersForBook(book, accounts) {
  return book.borrows.map((borrow) => {
    let account = accounts.find((account) => account.id === borrow.id);
    return {...account, returned: borrow.returned};
  }).slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
