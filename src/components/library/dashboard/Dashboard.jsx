import { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Routes, Route, useNavigate, useLocation } from "react-router";

import { successToast } from "../../../utils/notification";

import Books from "../books/Books";
import BookForm from "../bookForm/BookForm";
import BookDetails from "../bookDetails/BookDetails";

const Dashboard = ({ onLogout }) => {
    const [books, setBooks] = useState([]);

    const location = useLocation();

    useEffect(() => {

        if (location.pathname === "/library")
            fetch("http://localhost:3000/books", {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("book-champions-token")}`
                }
            })
                .then(res => res.json())
                .then(data => setBooks([...data]))
                .catch(err => console.log(err))
    }, [location]);

    const navigate = useNavigate();

    const handleAddBook = (newBook) => {
        fetch("http://localhost:3000/books", {
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify(newBook)
        })
            .then(res => res.json())
            .then(data => {
                setBooks(prevBooks => [data, ...prevBooks])
                successToast("Libro agregado correctamente")
            }
            )
            .catch(err => console.log(err))
    }

    const handleNavigateAddBook = () => {
        navigate("/library/add-book", { replace: true });
    }

    const handleDeleteBook = (bookId) => {
        fetch(`http://localhost:3000/books/${bookId}`, {
            method: "DELETE"
        })
            .then(res => res.text())
            .then(() => {
                successToast(`Se elimino el libro con id ${bookId}`);
                setBooks(prevBooks =>
                    prevBooks.filter(book => book.id !== bookId))
            })
            .catch(err => console.log(err));


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
            <Route path="/add-book" element={<BookForm onAddBook={handleAddBook} />} />
            <Route path="/:id" element={<BookDetails />} />
        </Routes>
    </>
    )
}

export default Dashboard