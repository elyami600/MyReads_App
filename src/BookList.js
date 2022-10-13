import React, { Component } from "react";
//import * as BooksAPI from './BooksAPI'

class BookList extends Component {
    render() {
         //console.log("BookSearch ",this.props)
         const { bookey, bookImageLinks, bookTitle, bookAuthors } = this.props;
        return(
            <div>
                <li key={bookey}>
                    <div className="book">
                            <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193}} >
                            <img src={bookImageLinks && bookImageLinks.thumbnail} alt="img" />
                            </div>
                            <div className="book-shelf-changer">
                            <select value={this.props.value}  onChange={this.props.handleUpdateShelf}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                            </div>
                        </div>
                        <div className="book-title">{bookTitle}</div>
                        <div className="book-authors">{bookAuthors}</div>
                    </div>
                    
                </li>
            </div>
        )
    }
}
export default BookList;