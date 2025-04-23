import { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Routes, Route, useNavigate } from "react-router";

// import { books as dataBooks } from "../../../data/books"

import Books from "../books/Books";
import NewBook from "../newBook/NewBook";
import BookDetails from "../bookDetails/BookDetails";
import { successToast } from "../../../utils/notification";

const Dashboard = ({ onLogout }) => {
    const [books, setBooks] = useState([]);

    console.log("Se renderizo el Dashboard!");

    useEffect(() => {
        // Acá va la lógica

        console.log("Se ejecuto el efecto de Dashboard");

        fetch("http://localhost:3000/books")
            .then(res => res.json())
            .then(data => setBooks([...data]))
            .catch(err => console.log(err))
    }, [])


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
            <Route path="/add-book" element={<NewBook onAddBook={handleAddBook} />} />
            <Route path="/:id" element={<BookDetails />} />
        </Routes>



    </>
    )
}

export default Dashboard