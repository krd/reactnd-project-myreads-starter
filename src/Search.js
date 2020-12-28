import React from 'react'
import Book from './Book'
import { Link } from 'react-router-dom'

function Search(props) {

    return (<div>
        <div className="search-books">
          <div className="search-books-bar">
            <button
              className="close-search"
              onClick={() => props.history.push('/')}
            >
              Close
            </button>
            <Link to='/' >Back</Link>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title or author"
                onChange={(e) => props.onSearchChange(e.target.value)}
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
              {props.queryBooks instanceof Array &&
                props.queryBooks.map((book) => (
                  <Book key={book.id} book={book} onMoveBook={(e) => ( props.onMoveBook(e, book) )} />
                ))}
            </ol>
          </div>
        </div>
      </div>)
}
export default Search
