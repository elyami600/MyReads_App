import React,{Component} from "react";
import { Link } from "react-router-dom";
import BookList from "./BookList";
import * as BooksAPI from './BooksAPI'

class BookSearch extends Component {
    state = {
        query:'',
        searchedBooks:[]
    }

    updateQuery = (query) => {
        this.setState({ query }, () => {
            if(query.trim().length > 0) {
                BooksAPI.search(query.trim(),1000).then((books) => {
                    if(books.length > 0) {
                        this.setState({ searchedBooks : books })
                    } else {
                        this.setState({ searchedBooks :[] })
                    }
                })  
            }
            else {
                this.setState({ searchedBooks:[] })
            }

        })
    }
      
    render() {
        //console.log("BookSearch ",this.props)
        const{ query, searchedBooks } = this.state
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
                         onChange={(event) => this.updateQuery(event.target.value)}
                         /> 
                        </div>
                    </div>
                    <div className="search-books-results"> 
                        <ol className="books-grid">
                            {searchedStories.map((book) => (
                                <BookList 
                                key={book.id}
                                bookey={book.id}
                                bookImageLinks={book.imageLinks.smallThumbnail}
                                bookTitle={book.title}
                                bookAuthors={book.authors}

                                />
                            ))}
                        
                        </ol>
                    </div>
                </div>
            </div>
        )
    }
}
export default BookSearch;