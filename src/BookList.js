import React, { Component } from "react";

class BookList extends Component {
    render() {
         //console.log("BookSearch ",this.props)
        return(
            <div>
                <li key={this.props.bookey}>
                    <div className="book">
                            <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.bookImageLinks})` }}></div>
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
                        <div className="book-title">{this.props.bookTitle}</div>
                        <div className="book-authors">{this.props.bookAuthors}</div>
                    </div>
                    
                </li>
            </div>
        )
    }
}
export default BookList;