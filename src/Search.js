import React from 'react';
import Book from './Book';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

function Search(props) {
  return (
    <div>
      <div className="search-books">
        <div className="search-books-bar">
          <Link className='close-search' to='/'>
              Close
          </Link>
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
                <Book
                  key={book.id}
                  book={book}
                  onMoveBook={(e) => props.onMoveBook(e, book)}
                  getBookShelf={props.getBookShelf}
                />
              ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
export default withRouter(Search);
