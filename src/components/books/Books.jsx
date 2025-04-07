import { useState } from "react";

import BookItem from "../bookItem/BookItem";
import BookSearch from "../bookSearch/BookSearch";


const Books = ({ books }) => {
    const [selectedBook, setSelectedBook] = useState('');
    const [searchBook, setSearchBook] = useState("")

    const handleBookSearch = (value) => {
        setSearchBook(value)
    }
    const handleBookSelected = (bookTitle) => {
        setSelectedBook(bookTitle);
    }
    const booksMapped = books
        .filter(book =>
            book.title?.toUpperCase().includes(searchBook.toUpperCase()))
        .map((book) =>
            <BookItem
                key={book.id}
                title={book.title}
                author={book.author}
                pageCount={book.pageCount}
                rating={book.rating}
                imageUrl={book.imageUrl}
                available={book.available}
                onBookSelected={handleBookSelected} />);

    return (
        <>

            <BookSearch onSearch={handleBookSearch} searchBook={searchBook} />
            {
                selectedBook &&
                <p>Usted ha seleccionado el libro: <b>{selectedBook}</b></p>
            }

            <div className="d-flex justify-content-center flex-wrap">
                {booksMapped.length ?
                    booksMapped :
                    <p>No se encontraron libros</p>}
            </div>
        </>)
}

export default Books