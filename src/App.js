import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from './Search'
import Shelf from './Shelf'
import { Route } from 'react-router-dom'
import { withRouter } from 'react-router'

class App extends React.Component {
  static CURRENTLY_READING_TITLE = 'Currently Reading'
  static CURRENTLY_READING = 'currentlyreading'
  static WANT_TO_READ_TITLE = 'Want to Read'
  static WANT_TO_READ = 'wanttoread'
  static READ_TITLE = 'Read'
  static READ = 'read'
  static NONE_TITLE = 'None'
  static NONE = 'none'

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
    this.setState({ ...this.state, books })
  }

  moveSearchBook = (e, book) => {
    book.shelf = e.target.value
    const books = this.state.books
    books.push(book)
    this.setState({ ...this.state, books })
    // I'm not certain that redirect to main bookshelf page is required. If not, remove next line
    this.props.history.push('/')
  }

  onSearchChange = (query) => {
    this.setState({
      queryBooks: [],
    })
    if (query.trim().length > 0) {
      BooksAPI.search(query).then((books) => {
        books !== undefined && this.setState(() => ({ queryBooks: books }))
      })
    } else {
      this.setState(() => ({ ...this.state, queryBooks: [], query: '' }))
    }
  }

  onBackToShelves = (e) => {
    this.setState(() => ({ ...this.state, queryBooks: [], query: '' }))
  }

  onOpenSearch = () => {
    this.setState({...this.state, queryBooks: []})
    this.props.history.push('/search')
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
        <div>
          <Route path="/search">
            <Search
              onSearchChange={this.onSearchChange}
              query={this.state.query}
              queryBooks={this.state.queryBooks}
              onMoveBook={this.moveSearchBook}
              onBackToShelves={this.onBackToShelves}
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
            />
            <Shelf
              books={wantToRead}
              bookshelfTitle={'Want to Read'}
              onMoveBook={this.moveBook}
            />
            <Shelf
              books={read}
              bookshelfTitle={'Read'}
              onMoveBook={this.moveBook}
            />
            <div className="open-search">
              <button onClick={this.onOpenSearch}>Add a book</button>
            </div>
          </Route>
        </div>
      </div>
    )
  }
}

export default withRouter(App)
