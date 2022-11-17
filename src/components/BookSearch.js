import React,{useState} from "react";
import { Link } from "react-router-dom";
import BookList from "./BookList";
import * as BooksAPI from '../BooksAPI'
import PropTypes from 'prop-types';
//import { debounce } from 'throttle-debounce';

 export default function BookSearch( { books, handleUpdateShelf } ) {
    const[query , setQuery] = useState('');
    const[searchedBooks, setSearchedBooks] = useState([])
    console.log("prop.books ", books)

    const updateQuery = (query) => {
        setQuery(query)
            if(query.trim().length > 0) {
                BooksAPI.search(query.trim(),100).then((booksRep) => {
                    if(booksRep.length > 0) {
                        booksRep.forEach(bookFound => {
                            console.log(bookFound)
                            bookFound.shelf ='none'
                           for(let i = 0; i < books.length; i++) {
                            if(books[i].id === bookFound.id) {
                                bookFound.shelf = books[i].shelf
                            }
                           
                           }    
                        });
                          setSearchedBooks(booksRep)
                        
                    } else {
                        setSearchedBooks([])
                    }
                })  
            } else {
                setSearchedBooks([])
            }
    }


    const searchedStories = searchedBooks.filter(book => 
        book.title.toLowerCase().includes(query.toLowerCase()));

    return(
      
        <div>
            <div className="search-books">
                <div className="search-books-bar">
                <Link to='/'>
                <button className="close-search" >Close</button>
                </Link>
                    <div className="search-books-input-wrapper">
                    <input 
                    type="text"
                    placeholder="Search by title or author"
                    value={query}
                    onChange={(event) => updateQuery(event.target.value)}
                    /> 
                    </div>
                </div>

                <div className="search-books-results"> 
                    <ol className="books-grid">
                        {searchedStories.map((book) => (
                           <li key={book.id}>
                            <BookList
                            key={book.id}
                            book={book}  
                             handleUpdateShelf={(event) => handleUpdateShelf(book, event.target.value)} />
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </div>
    )
    
}
BookSearch.propTypes = {
    books: PropTypes.array.isRequired,
    handleUpdateShelf: PropTypes.func.isRequired
};

