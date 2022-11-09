import React, { useEffect, useState } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookSearch from './components/BookSearch'
import MyBooks from './components/MyBooks'
import { Route, Routes } from 'react-router-dom'


/**
 * Convert to function component using React Hooks useState and useEffect methods instead of declaring state object and componentDidMount.
 * evise the lessons on State Management and Hooks in the classroom.
 * https://classroom.udacity.com/nanodegrees/nd0191/parts/77ac09a6-a8a2-43dd-b39f-5571db6db446/modules/c4dc8662-9370-4029-8193-ca5939577c48/lessons/f49585d0-76ce-4eb9-8218-9dbcf69dde22/concepts/176a8bb8-5da9-4afe-a64e-9e1d2f9456df
 * https://classroom.udacity.com/nanodegrees/nd0191/parts/77ac09a6-a8a2-43dd-b39f-5571db6db446/modules/c4dc8662-9370-4029-8193-ca5939577c48/lessons/b8b7fc8a-7dff-491c-8d0e-963fa289907b/concepts/26fd82cd-dd93-4ddf-8447-404713026769
 */
const BooksApp = () => {
  const[books, setBooks] = useState([])
  const[showSearchPage, setShowSearchPage] = useState(false)
  
  
  const NavigatePage = () => {
    setShowSearchPage((showSearchPage) => !showSearchPage)
  }

  const handleUpdateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf);
    book.shelf = shelf;
    setBooks(books.filter(b => b.id !== book.id).concat(book))
   }

   useEffect(() => {
    let unmounted = false;
    const getBooks = async () => {
      const res = await BooksAPI.getAll();
      setBooks(res)
    };
    if(!unmounted) {
      getBooks()
    }
    return () => {
      unmounted = true;
    }
  },[])

  
    return (
      <div className="app">
         <Routes>
          <Route exact path='/' element={
            <MyBooks 
            books={books}
            onNavigate={NavigatePage}
            handleUpdateShelf={handleUpdateShelf}
            />
          }/>

          <Route exact path='/search' element={
            <BookSearch
            books={books}
            handleUpdateShelf={handleUpdateShelf}
            />
          }/>
         </Routes>
      </div>
    )
  
}

export default BooksApp
