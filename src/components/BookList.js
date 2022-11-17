import React from "react";
import PropTypes from 'prop-types';

/**
 * 
 *I suggest defining an array of objects for bookshelf options in the control.
Example of the structure of the object:
const shelves = [{id:”1”, shelfName:”currentReading”, shelfDisplayName:”Currently Reading”}, ….]
Then, use the higher-order function map to loop over the array instead of repeating the same HTML tag - <option>.
 */

const BookList = ({ book, handleUpdateShelf }) => {
        return(
            <div>
                <div className="book">
                        <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193}} >
                        <img src={book.imageLinks ? book.imageLinks.smallThumbnail : undefined} alt={book.title} />
                        </div>
                        <div className="book-shelf-changer">
                        <select value={book.shelf || 'none'}   onChange={handleUpdateShelf}>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                        </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors ? book.authors.join(', ') : "UnKonow Author"} </div>
                </div>                 
            </div>
        )   
}
BookList.propTypes = {
    book: PropTypes.object.isRequired,
    handleUpdateShelf: PropTypes.func.isRequired
};


export default BookList;
