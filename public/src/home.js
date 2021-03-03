function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  let result = books.reduce((acc, book) => {
    for ( let i = 0; i < book.borrows.length; i++) {
      if ( book.borrows[i].returned === false) {
        acc++;
      }
    } return acc;
  }, 0);
  return result;
}

function getMostCommonGenres(books) { 
  let countObj = {};
  books.forEach(book => {
    if (countObj[book.genre] != null) {
      countObj[book.genre]++;
    } else {
      countObj[book.genre] = 1;
    }
  })
  let countArray = [];
  for (let [key, value] of Object.entries(countObj)) {
    countArray.push({
      'name' : key,
      'count' : value
    }); 
  }
  countArray.sort((a,b) => b.count - a.count);
  return countArray.slice(0, 5);
}

function getMostPopularBooks(books) {
  let countObj = {};
  books.forEach(book => {
    if (!countObj[book.title]) {
      countObj[book.title] = book.borrows.length;
    } else {
      countObj[book.title] = 1;
    } 
  })
  let countArray = [];
  for (let [key, value] of Object.entries(countObj)) {
    countArray.push({
      'name' : key,
      'count' : value
    });
    console.log(countArray);
  }
  countArray.sort((a,b) => b.count - a.count);
  return countArray.slice(0, 5);
}

function getMostPopularAuthors(books, authors) {
  let countObj = {};
 books.forEach(book => {
   if (!countObj[book.authorId]) {
     countObj[book.authorId] = book.borrows.length;
   } else {
     countObj[book.authorId] += book.borrows.length;
   } 
 })
 let countArray = [];
 for (let [authorId, totalBorrows] of Object.entries(countObj)) {
   const author = authors.find((author) => parseInt(authorId) === author.id)
   countArray.push({
     name: `${author.name.first} ${author.name.last}`,
     count: totalBorrows
   });
 }
   countArray.sort((a,b) => b.count - a.count);
   return countArray.slice(0, 5);
}


module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
