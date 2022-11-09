import React,{useState} from "react";
import { Link } from "react-router-dom";
import BookList from "./BookList";
import * as BooksAPI from '../BooksAPI'





 export default function BookSearch( { books, handleUpdateShelf } ) {
    const[query , setQuery] = useState('');
    const[searchedBooks, setSearchedBooks] = useState([])
   
    const updateQuery = (query) => {
        setQuery(query)
            if(query.trim().length > 0) {
                BooksAPI.search(query.trim(),100).then((booksRep) => {
                    if(booksRep.length > 0) {
                        searchedBooks.forEach((element) => {
                            element.shelf = "none";
                            for(let i  = 0; i< books.length; i++) {
                                if(element.id === books[i].id) {
                                    element.shelf = books[i].shelf
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
                    {/* {JSON.stringify(this.state)} */}
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
                            <BookList 
                            key={book.id}
                            bookey={book.id}
                            bookImageLinks={book.imageLinks || {}} // if the img is undefine 
                            bookTitle={book.title}
                            bookAuthors={book.authors ? book.authors.join(', ') : "UnKonow Author"} 
                            /* =------update-------= */
                            value={books.shelf}
                            handleUpdateShelf={(event) => handleUpdateShelf(book, event.target.value)}/>
                        ))}
                    
                    </ol>
                </div>
            </div>
        </div>
    )
    
}

