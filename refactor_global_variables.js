// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(arr, bookName) {
  const newBookList = [...arr, bookName];
  return newBookList;
  // Change code above this line
}

// Change code below this line
function remove(arr, bookName) {
  const book_index = arr.indexOf(bookName);
  if (book_index >= 0) {
    const newBookList = [...arr];
    newBookList.splice(book_index, 1);
    return newBookList;
  }
  return arr;
  // Change code above this line
}

// Example usage:
const updatedBookList = add(bookList, "New Book");
console.log(updatedBookList);

const removedBookList = remove(bookList, "The Hound of the Baskervilles");
console.log(removedBookList);
