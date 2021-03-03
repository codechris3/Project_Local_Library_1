function findAccountById(accounts, idNumber) {
  let found = accounts.find((account) => account.id === idNumber);
  return found;
}

function sortAccountsByLastName(accounts) {
  let sorted = accounts.sort((accountA, accountB) => accountA.name.last > accountB.name.last ? 1 : -1);
  return sorted;
}

function getTotalNumberOfBorrows(account, books) {
  let result = books.reduce((acc, book) => {
    for ( let i = 0; i < book.borrows.length; i++){
      if ( book.borrows[i].id === account.id) {
        acc++;
      } 
    } return acc;
  }, 0);
   return result;
}

function addAuthor(authors, books) {
  for ( let i = 0; i < books.length; i++) {
    for ( let j = 0; j < authors.length; j++) {
      if ( books[i].authorId === authors[j].id) {
        books[i].author = authors[j];
      }
    }
  } return books;
}

function getBooksPossessedByAccount(account, books, authors) {
  let result = books.reduce((acc, book) => {
    for (let i = 0; i < book.borrows.length; i++) {
      if ( book.borrows[i].id === account.id && book.borrows[i].returned === false) {
        acc.push(book);
      }
    } return acc;
  }, []);
  let author = addAuthor(authors, result);
  return author;
}


module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
