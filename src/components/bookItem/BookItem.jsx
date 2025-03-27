import { Card, Button, Badge } from "react-bootstrap";

import './bookItem.css'

const BookItem = ({
    title,
    author,
    rating,
    pageCount,
    imageUrl,
    available
}) => {
    return (
        <Card className="mx-3 card-container">
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
                <div>{rating} estrella{rating > 1 ? 's' : ''}</div>
                <p>{pageCount} páginas</p>
                <Button>Actualizar título</Button>
            </Card.Body>
        </Card>
    )
}

export default BookItem