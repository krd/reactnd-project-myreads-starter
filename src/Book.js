import React from 'react'

export default function Book(props) {
  const { book, onMoveBook } = props
  const shelf = book.shelf
  const imageLink =
    book.imageLinks !== undefined ? book.imageLinks.thumbnail : ''

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
              value={shelf !== undefined ? shelf : 'none'}
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
  )
}
