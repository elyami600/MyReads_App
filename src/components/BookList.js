import React from "react";
import PropTypes from 'prop-types';

function BookList({ bookey, bookImageLinks, bookTitle, bookAuthors , value, handleUpdateShelf}){
        return(
            <div>
                <li key={bookey}>
                    <div className="book">
                            <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193}} >
                            <img src={bookImageLinks && bookImageLinks.thumbnail} alt={bookTitle} />
                            </div>
                            <div className="book-shelf-changer">
                            <select value={value || "none"}   onChange={handleUpdateShelf}>
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
BookList.propTypes = {
    bookey: PropTypes.string.isRequired,
    bookImageLinks: PropTypes.object.isRequired ,
    bookAuthors: PropTypes.any.isRequired,
    bookTitle: PropTypes.string.isRequired,
    handleUpdateShelf: PropTypes.func.isRequired

};
export default BookList;
