import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookSearch from './BookSearch'
import MyBooks from './MyBooks'
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
    currentlyReading:[],
    wantToRead:[],
    read:[]

   
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
     this.setState(({ books }) => ({
       books: [...books.filter(({ id }) => id !== book.id), { ...book, shelf }],
     }));
     console.log("this.state.books ",this.state.books)
   };
  render() {
    // console.log('Hello App')
    return (
      <div className="app">
         <Routes>
          <Route exact path='/' element={
            <MyBooks 
            onNavigate={this.NavigatePage}
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
