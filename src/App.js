import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookSearch from './components/BookSearch'
import MyBooks from './components/MyBooks'
import { Route, Routes } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books:[],
    showSearchPage: false,
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState(() => ({
      books
      }))
    })
    console.log(this.state.books)
  }
  
  NavigatePage = () => {
    this.setState(() => ({
      showSearchPage: true
    }))
  }

  handleUpdateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf);
    book.shelf = shelf;
    this.setState(state => ({
      books: state.books
      .filter(b => b.id !== book.id).concat(book),
    }));
    console.log(this.state.books)
   }

  render() {
    // console.log('Hello App')
    return (
      <div className="app">
         <Routes>
          <Route exact path='/' element={
            <MyBooks 
            onNavigate={this.NavigatePage}
            books={this.state.books}
            handleUpdateShelf={this.handleUpdateShelf}
            />
          }/>
          <Route exact path='/search' element={
            <BookSearch
            handleUpdateShelf={this.handleUpdateShelf}
            />
          }/>
         </Routes>
          
      
       
       
      </div>
    )
  }
}

export default BooksApp
