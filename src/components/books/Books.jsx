import { useState } from "react";
import BookItem from "../bookItem/BookItem";

const Books = ({ books }) => {
    const [selectedBook, setSelectedBook] = useState('');
    const handleBookSelected = (bookTitle) => {
        setSelectedBook(bookTitle);
    }
    const booksMapped = books.map((book) =>
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
        <>{
            selectedBook &&
            <p>Usted ha seleccionado el libro: <b>{selectedBook}</b></p>
        }

            <div className="d-flex justify-content-center flex-wrap">
                {booksMapped}
            </div>
        </>)
}

export default Books