# MyReads Project

The MyReads Project is an application designed to help users organize their reading books.  The books are organized in a reading bookshelf containing three different shelves.  

## Pages
The application consists of two pages:  the 'BookShelf' page and the 'Add a Book' page.

#### BookShelf Page:
*  Defined within the ```Shelf.js``` file.
*  Displays each shelf.
*  Displays the books on each shelf.
*  Allows users to move books between shelves.
*  Allows users to remove books from the Bookshelf page.
*  The Bookshelf page displays the entire bookshelf with books currently residing on each individual shelf.

### Add a Book Page:
*  Defined within ```Search.js``` file.
*  Allows users to search for a book via the search form field.
*  Allows users to add a new book to a specified bookshelf.
*  Allows users to remove books from the Bookshelf page.


## UI Components
The main UI components of the of the pages are shelves, books and search.

### Shelves
Each shelf within the bookshelf is responsible for displaying all the books on the shelf.  Shelves UI component and associated functionality are defined within the ```Shelf.js``` file.

The three default shelves within the bookshelf are:

*  Currently Reading - Displays books currently being read by the user.
*  Want to Read - Displays books the user wishes to read.
*  Read - Displays the books already read by the user.

Shelves may be added to or removed from the application by editing the SHELVES constant array defined in the ```Constants.js``` file.

### Books
The books UI component and associated functionality are defined within the ```Book.js``` file.  

Each book displays:

*  An image of the book cover if available.  If no image is available then a placeholder image will be used.
*  The book title.
*  The book authors.
*  A shelf selection dropdown box.

The Shelf selection dropdown box includes all of the shelves defined in the ```Constants.js``` file.  A book's current shelf is highlighted as the book's current shelf.  Making a selection in the drop down will move the book to the new shelf or remove it completely if the 'None' option is selected.

### Search and Add a book
The search functionality component is defined with the ```Search.js``` file.

The Search and Add a book components displays:
*  Search form for books.
*  A list of books returned by the search. 


## Setup

To get started developing right away:

* install all project dependencies with `npm install`
* start the development server with `npm start`

## Project Files
```bash
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted collection of search terms for the app.
├── package.json
├── public
│   ├── favicon.ico 
│   └── index.html
└── src
    ├── App.css # Styles for the app. 
    ├── App.js # The root of the MyReads app.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend.
    ├── Book.js
    ├── Constants.js
    ├── Search.js
    ├── Shelf.js
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── images
    │   └── imageNotAvailableCropped.png # Fallback image for books.
    ├── index.css # Global styles.
    └── index.js
```

## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

