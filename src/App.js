import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from './Search'
import BookShelf from './BookShelf'
import { Route, Link } from 'react-router-dom'

class BooksApp extends React.Component {
  static CURRENTLY_READING_TITLE = 'Currently Reading'
  static CURRENTLY_READING = 'currentlyreading'
  static WANT_TO_READ_TITLE = 'Want to Read'
  static WANT_TO_READ = 'wanttoread'
  static READ_TITLE = 'Read'
  static READ = 'read'
  static NONE_TITLE = 'None'
  static NONE = 'none'

//   constructor(props) {
//       super(props)
//       this.history = createBrowserHistory()
//   }

  state = {
    books: [],
    query: '',
    queryBooks: [],
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState(() => ({ books: books }))
    })
  }

  moveBook = (e, book) => {
    const books = this.state.books.map((b) => {
      if (b.title === book.title) {
        return { ...b, shelf: e.target.value }
      }
      return b
    })
    this.setState({ books })
  }

  moveSearchBook = (e, book) => {
    book.shelf = e.target.value
    const books = this.state.books
    books.push(book)
    this.setState({ ...this.state, books })
  }

  onSearchChange = (query) => {
    this.setState({
      queryBooks: [],
    })
    if (query.trim().length > 0) {
      BooksAPI.search(query).then((books) => {
        books !== undefined && this.setState(() => ({ queryBooks: books }))
      })
    }
  }

  onSearchEndClick = (e) => {

  }

  onSearchClick = (e) => {
      console.log(this.props)
    // // () => this.history.push({ pathname: '/search' })
    // console.log('on search click...')
    // console.log(this.history.location)
    // this.history.push('/search')
    // console.log(this.history.location)
  }

  render() {
    let currentlyReading = this.state.books.filter(
      (book) => book.shelf === 'currentlyReading'
    )
    let wantToRead = this.state.books.filter(
      (book) => book.shelf === 'wantToRead'
    )
    let read = this.state.books.filter((book) => book.shelf === 'read')

    return (
      <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <Route
            exact
            path="/"
            render={({ history }) => (
              <div>
                <BookShelf
                  books={currentlyReading}
                  bookshelfTitle={'Currently Reading'}
                  onMoveBook={this.moveBook}
                />
                <BookShelf
                  books={wantToRead}
                  bookshelfTitle={'Want to Read'}
                  onMoveBook={this.moveBook}
                />
                <BookShelf
                  books={read}
                  bookshelfTitle={'Read'}
                  onMoveBook={this.moveBook}
                />
              </div>
            )}
          />
        </div>
        <Route
          path="/search"
          render={() => (
            <Search
              onSearchChange={this.onSearchChange}
              query={this.state.query}
              queryBooks={this.state.queryBooks}
              onMoveBook={this.moveSearchBook}
            />
          )}
        />
        <div className="open-search">
          <button
            onClick={this.onSearchClick}
          >
            Add a book
          </button>
          <Link to="/search">Add</Link>
        </div>
      </div>
    )
  }
}

export default BooksApp
