import React from "react";
import { Link } from "react-router-dom";
import BookList from "./BookList";

const MyBooks = (props) => {
      const currentlyReading = props.books.filter(book => book.shelf && book.shelf === "currentlyReading");
      const wantToRead       = props.books.filter(book => book.shelf && book.shelf === "wantToRead");
      const read             = props.books.filter(book => book.shelf && book.shelf === "read");

      //const booksFiltered = props.books.filter(book => book.shelf === props.shelf);
      
        return(
        <div>
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {currentlyReading.map((book) => currentlyReading && (
                      <BookList 
                      key={book.id}
                      bookey={book.id}
                      bookImageLinks={book.imageLinks}
                      bookTitle={book.title}
                      bookAuthors={book.authors} 
                      /* =------update-------= */
                      value={book.shelf}
                      handleUpdateShelf={(event) => props.handleUpdateShelf(book,event.target.value)}/>
                    ))}
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {wantToRead.map((book) => wantToRead && (
                      <BookList 
                      key={book.id}
                      bookey={book.id}
                      bookImageLinks={book.imageLinks || {}} // if the img is undefine 
                      bookTitle={book.title}
                      bookAuthors={book.authors ? book.authors.join(', ') : "UnKonow Author"} 
                      /* =------update-------= */
                      value={book.shelf}
                    
                      handleUpdateShelf={(event) => props.handleUpdateShelf(book,event.target.value)}/>
                    ))}
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {read.map((book) =>  read && (
                      <BookList 
                      key={book.id}
                      bookey={book.id}
                      bookImageLinks={book.imageLinks}
                      bookTitle={book.title}
                      bookAuthors={book.authors} 
                      /* =------update-------= */
                      value={book.shelf}
                      handleUpdateShelf={(event) => props.handleUpdateShelf(book,event.target.value)}/>
                    ))}
                    </ol>
                  </div>
                </div>
              </div>
            </div>
             <div className="open-search">
              <Link to='/search' onClick={() => props.onNavigate}>Add a book</Link>
            </div>
          </div>
          
        </div>
      )
}
export default MyBooks;