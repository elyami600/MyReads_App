import React, { useEffect, useState } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookSearch from './components/BookSearch'
import MyBooks from './components/MyBooks'
import { Route, Routes } from 'react-router-dom'



const BooksApp = () => {
  const[books, setBooks] = useState([])
  const[showSearchPage, setShowSearchPage] = useState(false)
  
  
  // const NavigatePage = () => {
  //   setShowSearchPage((showSearchPage) => !showSearchPage)
  // }

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

  const handleUpdateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf);
    book.shelf = shelf;
    setBooks(books.filter(b => b.id !== book.id).concat(book))
   }
   console.log('books' ,books)

    return (
      <div className="app">
         <Routes>
          <Route exact path='/' element={
            <MyBooks 
            books={books}
            handleUpdateShelf={handleUpdateShelf}
            // onNavigate={NavigatePage}
            onClick={() => setShowSearchPage(!showSearchPage)}
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


