import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelf from './BookShelf'
// import Search from './Search'
class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: []
  }

  componentDidMount() {
      BooksAPI.getAll().then((books) => {
          this.setState(() => ({ books }))
      })
  }

  handleMoveToRead(e) {
    console.log('Read: ', e)
  }

  handleMoveToCurrentlyReading(e) {
    console.log('Curently Reading: ', e)
  }

  handleMoveToWantToRead(e) {
    console.log('Want to Read: ', e)
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
          <BookShelf books={currentlyReading} bookshelfTitle={'Currently Reading'}/>
          <BookShelf books={wantToRead} bookshelfTitle={'Want to Read'}/>
          <BookShelf books={read} bookshelfTitle={'Read'}/>
        </div>
        <div className="open-search">
          <button onClick={() => this.setState({ showSearchPage: true })}>
            Add a book
          </button>
        </div>
      </div>
    )
  }
}

export default BooksApp
