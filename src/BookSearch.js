import React,{Component} from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from './BooksAPI'

class BookSearch extends Component {
    state = {
        query:'',
        searchedBooks:[]
    }

    updateQuery = async (query) => {
        this.setState({ query });
        await BooksAPI.search(query).then((books) =>
          this.setState({ searchedBooks: books })
        );
      };
    
      
    render() {
        //console.log("BookSearch ",this.props)
        const searchedStories = this.state.searchedBooks.filter(book => 
            book.title.toLowerCase().includes(this.state.query.toLowerCase())
          );
        // const searchedStories = this.state.query === ''
        // ? []
        // : this.state.searchedBooks.filter(book =>
        //     book.title.toLowerCase().includes(this.state.query.toLowerCase())
        //   );
        
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
                         value={this.state.query}
                         onChange={(event) => this.updateQuery(event.target.value)}
                         /> 
                        </div>
                    </div>
                    <div className="search-books-results"> 
                        <ol className="books-grid">
                            {searchedStories.map((book) => (
                                <li key={book.id}>
                                    <div className="book">
                                        <div className="book-top">
                                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
                                        <div className="book-shelf-changer">
                                        <select >
                                            <option value="move" disabled>Move to...</option>
                                            <option value="currentlyReading">Currently Reading</option>
                                            <option value="wantToRead">Want to Read</option>
                                            <option value="read">Read</option>
                                            <option value="none">None</option>
                                        </select>
                                        </div>
                                    </div>
                                    <div className="book-title">{book.title}</div>
                                    <div className="book-authors">{book.authors}</div>
                                </div>
                                    
                                </li>
                            ))}
                        
                        </ol>
                    </div>
                </div>
            </div>
        )
    }
}
export default BookSearch;