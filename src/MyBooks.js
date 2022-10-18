import React, { Component } from "react";
import { Link } from "react-router-dom";
import BookList from "./BookList";

class MyBooks extends Component {
    render() {
        // console.log("MyBooks props ", this.props)
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
                    {this.props.books.map((book) => book.shelf && book.sheld === "CurrentlyReading" && (
                      <BookList 
                      key={book.id}
                      bookey={book.id}
                      bookImageLinks={book.imageLinks}
                      bookTitle={book.title}
                      bookAuthors={book.authors} 
                      /* =------update-------= */
                      value={this.state.value}
                      handleUpdateShelf={(event) => this.props.handleUpdateShelf(book,event.target.value)}/>
                    ))}
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {this.props.books.map((book) =>  book.shelf && book.sheld === "WanttoRead" && (
                      <BookList 
                      key={book.id}
                      bookey={book.id}
                      bookImageLinks={book.imageLinks}
                      bookTitle={book.title}
                      bookAuthors={book.authors} 
                      /* =------update-------= */
                      value={this.state.value}
                      handleUpdateShelf={(event) => this.props.handleUpdateShelf(book,event.target.value)}/>
                    ))}
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {this.props.books.map((book) => book.shelf && book.sheld === "Read" &&(
                      <BookList 
                      key={book.id}
                      bookey={book.id}
                      bookImageLinks={book.imageLinks}
                      bookTitle={book.title}
                      bookAuthors={book.authors} 
                      /* =------update-------= */
                      value={this.state.value}
                      handleUpdateShelf={(event) => this.props.handleUpdateShelf(book,event.target.value)}/>
                    ))}
                    </ol>
                  </div>
                </div>
              </div>
            </div>
             <div className="open-search">
              <Link to='/search' onClick={() => this.props.onNavigate}>Add a book</Link>
            </div>
          </div>
          
            </div>
        )
    }

}

export default MyBooks;