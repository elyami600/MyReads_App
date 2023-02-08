import BookList from "./BookList";


function ShelfBook({shelf, books, handleUpdateShelf }){
    return(
    <div>
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelf.shelfName}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map((book) => (
              <li>
                   <BookList
                     book={book}  
                    handleUpdateShelf={(event) => handleUpdateShelf(book, event.target.value)} />

              </li>

            ))}
          
          </ol>
        </div>
      </div>

     </div>
       
    )

}
export default ShelfBook;