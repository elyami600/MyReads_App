import React from "react";
import { Link } from "react-router-dom";
//import BookList from "./BookList";
import PropTypes from 'prop-types';
import ShelfBook from "./ShelfBook";

const MyBooks = ({books, handleUpdateShelf, onNavigate}) => {
      // const currentlyReading = books.filter(book => book.shelf && book.shelf === "currentlyReading");
      // const wantToRead       = books.filter(book => book.shelf && book.shelf === "wantToRead");
      // const read             = books.filter(book => book.shelf && book.shelf === "read");

      //const booksFiltered = props.books.filter(book => book.shelf === props.shelf);  
      const shelves = [
        { id: "1", shelfName:"currentlyReading"},
        { id: "2", shelfName:"wantToRead"},
        { id: "3", shelfName:"read"},
      ];

      
        return(
        <div>
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            
            <div className="list-books-content">
              {shelves.map((shelf) => shelf.shelfName &&(
                <ShelfBook
                key={shelf.id}
                shelf={shelf}
                books={books}
                handleUpdateShelf={handleUpdateShelf}
                onNavigate={onNavigate}
                />
              ))}
             
            </div>
             <div className="open-search">
              <Link to='/search' onClick={onNavigate}>Add a book</Link>
            </div>
          </div>
          
        </div>
      )
}
MyBooks.propTypes = {
  books: PropTypes.array.isRequired,
  handleUpdateShelf: PropTypes.func.isRequired,
};
export default MyBooks;