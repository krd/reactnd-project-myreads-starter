import React from 'react';

function Book(props) {
  const { book, onMoveBook, getBookShelf } = props;
  const imageLink =
    book.imageLinks !== undefined ? book.imageLinks.thumbnail : '';

  return (
    <div>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 174,
              backgroundImage: `url(${imageLink})`,
            }}
          />
          <div className="book-shelf-changer">
            <select
              value={getBookShelf(book)}
              onChange={(e) => onMoveBook(e, book)}
            >
              <option value="move" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">
          {book.authors !== undefined && book.authors.map((author) => author)}
        </div>
      </div>
    </div>
  );
}
export default Book;
