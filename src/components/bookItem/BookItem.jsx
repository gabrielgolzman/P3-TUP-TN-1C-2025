import { Card, Button, Badge } from "react-bootstrap";
import { StarFill, Star, } from "react-bootstrap-icons";

import './bookItem.css'

const BookItem = ({
    id,
    title,
    author,
    rating,
    pageCount,
    imageUrl,
    available,
    onBookSelected,
    onDeleteBook
}) => {

    const handleSelectBook = () => {
        onBookSelected(title);
    }

    const handleDeleteBook = () => {
        onDeleteBook(id, title);
    }

    const starsFilled = Array.from(
        { length: rating },
        ((_, i) => <StarFill key={`Fill_${i}`} />));

    const starsEmpty = Array.from(
        { length: 5 - rating },
        ((_, i) => <Star key={`Fill_${i}`} />));

    return (
        <Card className="mx-3 mb-3 card-container">
            <Card.Img
                height={400}
                variant="top"
                src={imageUrl} />
            <Card.Body>
                <div className="mb-2">
                    {available ?
                        <Badge bg="success">Disponible</Badge> :
                        <Badge bg="danger">Reservado</Badge>
                    }
                </div>
                <Card.Title>{title}</Card.Title>
                <Card.Subtitle>{author}</Card.Subtitle>
                <div>{starsFilled}{starsEmpty}</div>
                <p>{pageCount} páginas</p>
                <div className="d-flex justify-content-between">
                    <Button
                        className="me-3"
                        variant="danger"
                        onClick={handleDeleteBook}>
                        Eliminar libro
                    </Button>
                    <Button
                        onClick={handleSelectBook}>
                        Seleccionar libro
                    </Button>
                </div>
            </Card.Body>
        </Card>
    )
}

export default BookItem