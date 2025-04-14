import { useState } from "react";

import { books as dataBooks } from "../../data/books"

import Books from "../books/Books";
import NewBook from "../newBook/NewBook";

const Dashboard = () => {
    const [books, setBooks] = useState(dataBooks);

    const handleAddBook = (newBook) => {
        setBooks(prevBooks => [newBook, ...prevBooks]);
    }

    const handleDeleteBook = (bookId) => {
        setBooks(prevBooks =>
            prevBooks.filter(book => book.id !== bookId))
    }
    return (<>
        <h2>Book Champions app</h2>
        <p>¡Quiero leer libros!</p>
        <NewBook onAddBook={handleAddBook} />
        <Books books={books} onDelete={handleDeleteBook} />
    </>
    )
}

export default Dashboard