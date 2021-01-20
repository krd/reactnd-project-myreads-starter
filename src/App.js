import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import Search from './Search';
import Shelf from './Shelf';
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router';

class App extends Component {
  static CURRENTLY_READING_TITLE = 'Currently Reading';
  static CURRENTLY_READING = 'currentlyreading';
  static WANT_TO_READ_TITLE = 'Want to Read';
  static WANT_TO_READ = 'wanttoread';
  static READ_TITLE = 'Read';
  static READ = 'read';
  static NONE_TITLE = 'None';
  static NONE = 'none';

  state = {
    books: [],
    query: '',
    queryBooks: [],
  };

  componentDidMount() {
    this.getBooks();
  }

  /**
   * @description Fetches all books via external API call and sets state with results
   */
  getBooks = () => {
    BooksAPI.getAll().then((books) => {
      this.setState(() => ({ books: books }));
    });
  };

  /**
   * @description Finds selectedBook's shelf in existing bookshelves, if it has already been set.  otherwise returns 'none'
   * @param {Object} selectedBook - The book whose current shelf is being looked up
   * @returns {String} The name of the shelf the book shelf the is currently on
   */
  getBookShelf = (selectedBook) => {
    const book = this.state.books.find((book) => book.id === selectedBook.id);
    return book !== undefined && book.shelf !== undefined ? book.shelf : 'none';
  };

  /**
   * @description Updates the bookshelf of the provided book
   * @param {Object} book The book to be updated
   * @param {tring} shelf The shelf where the book is to be updated to
   */
  updateBookShelves = (book, shelf) => {
    const books = this.state.books.map((b) => {
      if (b.title === book.title) {
        return { ...b, shelf: shelf };
      }
      return b;
    });
    this.setState({ ...this.state, books });
  };

  /**
   * @description Moves the provided book to the shelf value provided by the event.target.value
   * @param {Event} e Event object which provides the new shelf value via event.target.value
   * @param {Object} book The book object being moved
   */
  moveBook = (e, book) => {
    BooksAPI.update(book, e.target.value);
    this.updateBookShelves(book, e.target.value);
    this.getBooks();
  };

  /**
   * @description Queries the BooksAPI with the provide query value
   * @param {string} query The string to be looked up via the API call
   */
  onSearchChange = (query) => {
    this.setState({
      queryBooks: [],
    });
    if (query.trim().length > 0) {
      BooksAPI.search(query).then((books) => {
        books !== undefined && this.setState(() => ({ queryBooks: books }));
      });
    } else {
      this.setState(() => ({ ...this.state, queryBooks: [], query: '' }));
    }
  };

  /**
   * @description Resets query books array and navigates to the search page
   */
  onOpenSearch = () => {
    this.setState({ ...this.state, queryBooks: [] });
    this.props.history.push('/search');
  };

  render() {
    let currentlyReading = this.state.books.filter(
      (book) => book.shelf === 'currentlyReading'
    );
    let wantToRead = this.state.books.filter(
      (book) => book.shelf === 'wantToRead'
    );
    let read = this.state.books.filter((book) => book.shelf === 'read');

    return (
      <div className="app">
        <div>
          <Route path="/search">
            <Search
              onSearchChange={this.onSearchChange}
              query={this.state.query}
              queryBooks={this.state.queryBooks}
              onMoveBook={this.moveBook}
              getBookShelf={this.getBookShelf}
              getAllBooks={this.getAllBooks}
            />
          </Route>
        </div>
        <div className="list-books">
          <Route exact path="/">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <Shelf
              books={currentlyReading}
              bookshelfTitle={'Currently Reading'}
              onMoveBook={this.moveBook}
              getBookShelf={this.getBookShelf}
            />
            <Shelf
              books={wantToRead}
              bookshelfTitle={'Want to Read'}
              onMoveBook={this.moveBook}
              getBookShelf={this.getBookShelf}
            />
            <Shelf
              books={read}
              bookshelfTitle={'Read'}
              onMoveBook={this.moveBook}
              getBookShelf={this.getBookShelf}
            />
            <div className="open-search">
              <button onClick={this.onOpenSearch}>Add a book</button>
            </div>
          </Route>
        </div>
      </div>
    );
  }
}

export default withRouter(App);
