import React from 'react'
import Book from './Book'

function BookShelf(props) {
  
  const { books, bookshelfTitle } = props
  
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
                  { 
                      books.map((book) => ( 
                      <Book key={book.title} book={book} />
                  )) 
                  }
                </ol>
              </div>
            </div>

            {/* <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  <li>
                    <div className="book">
                      <div className="book-top">
                        <div
                          className="book-cover"
                          style={{
                            width: 128,
                            height: 192,
                            backgroundImage:
                              'url("http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70Rw0CCwNZh0SsYpQTkMbvz23npqWeUoJvVbi_gXla2m2ie_ReMWPl0xoU8Quy9fk0Zhb3szmwe8cTe4k7DAbfQ45FEzr9T7Lk0XhVpEPBvwUAztOBJ6Y0QPZylo4VbB7K5iRSk&source=gbs_api")',
                          }}
                        />
                        <div className="book-shelf-changer">
                          <select>
                            <option value="move" disabled>
                              Move to...
                            </option>
                            <option value="currentlyReading">
                              Currently Reading
                            </option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                          </select>
                        </div>
                      </div>
                      <div className="book-title">The Hobbit</div>
                      <div className="book-authors">J.R.R. Tolkien</div>
                    </div>
                  </li>
                  <li />
                  <li>
                    <div className="book">
                      <div className="book-top">
                        <div
                          className="book-cover"
                          style={{
                            width: 128,
                            height: 192,
                            backgroundImage:
                              'url("http://books.google.com/books/content?id=32haAAAAMAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72yckZ5f5bDFVIf7BGPbjA0KYYtlQ__nWB-hI_YZmZ-fScYwFy4O_fWOcPwf-pgv3pPQNJP_sT5J_xOUciD8WaKmevh1rUR-1jk7g1aCD_KeJaOpjVu0cm_11BBIUXdxbFkVMdi&source=gbs_api")',
                          }}
                        />
                        <div className="book-shelf-changer">
                          <select>
                            <option value="move" disabled>
                              Move to...
                            </option>
                            <option value="currentlyReading">
                              Currently Reading
                            </option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                          </select>
                        </div>
                      </div>
                      <div className="book-title">
                        The Adventures of Tom Sawyer
                      </div>
                      <div className="book-authors">Mark Twain</div>
                    </div>
                  </li>
                </ol>
              </div>
            </div> */}
          </div>
        </div>
        {/* <div className="open-search">
          <button onClick={() => this.setState({ showSearchPage: true })}>
            Add a book
          </button>
        </div> */}
      </div>
    </div>
  )
}
export default BookShelf