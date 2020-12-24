import React from 'react'
import Book from './Book'

function BookShelf(props) {
  const { books, bookshelfTitle, onMoveBook } = props

  return (
    <div>
      <div className="list-books">
        {/* <div className="list-books-title">
          <h1>MyReads</h1>
        </div> */}
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">{bookshelfTitle}</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {books.map((book) => (
                    <Book
                      key={book.title}
                      book={book}
                      onMoveBook={onMoveBook}
                    />
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default BookShelf
