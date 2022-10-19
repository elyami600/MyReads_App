import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookSearch from './components/BookSearch'
import MyBooks from './components/MyBooks'
import { Route, Routes } from 'react-router-dom'

class BooksApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    books:[],
    showSearchPage: false,
    }
  }
  
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState(() => ({
      books
      }))
    })
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
   }

  render() {
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
