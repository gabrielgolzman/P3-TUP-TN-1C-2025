import { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Routes, Route, useNavigate } from "react-router";

import { books as dataBooks } from "../../../data/books"

import Books from "../books/Books";
import NewBook from "../newBook/NewBook";
import BookDetails from "../bookDetails/BookDetails";

const Dashboard = ({ onLogout }) => {
    const [books, setBooks] = useState(dataBooks);

    const navigate = useNavigate();

    const handleAddBook = (newBook) => {
        setBooks(prevBooks => [newBook, ...prevBooks]);
    }

    const handleNavigateAddBook = () => {
        navigate("/library/add-book", { replace: true });
    }

    const handleDeleteBook = (bookId) => {
        setBooks(prevBooks =>
            prevBooks.filter(book => book.id !== bookId))
    }
    return (<>
        <Row className="w-100 my-3">
            <Col />
            <Col md={3} className="d-flex justify-content-end ">
                <Button className="me-3" variant="success" onClick={handleNavigateAddBook}>Agregar libro</Button>
                <Button onClick={onLogout}>Cerrar sesión</Button>
            </Col>
        </Row>
        <h2>Book Champions app</h2>
        <p>¡Quiero leer libros!</p>
        <Routes>
            <Route index element={<Books books={books} onDelete={handleDeleteBook} />} />
            <Route path="/add-book" element={<NewBook onAddBook={handleAddBook} />} />
            <Route path="/:id" element={<BookDetails />} />
        </Routes>



    </>
    )
}

export default Dashboard