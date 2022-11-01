import React,{useState} from "react";
import { Link } from "react-router-dom";
import BookList from "./BookList";
import * as BooksAPI from '../BooksAPI'


function BookSearch({ handleUpdateShelf }) {
    
    const[query , setQuery] = useState('');
    const[searchedBooks, setSearchedBooks] = useState([])
   
    const updateQuery = (query) => {
        setQuery(query) 
            if(query.trim().length > 0) {
                BooksAPI.search(query.trim(),1000).then((books) => {
                    if(books.length > 0) {
                        setSearchedBooks(books)
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
                                value={book.shelf ? book.shelf : "move"}
                                handleUpdateShelf={(event) => handleUpdateShelf(book, event.target.value)}/>
                            ))}
                        
                        </ol>
                    </div>
                </div>
            </div>
        )
    
}
export default BookSearch;
