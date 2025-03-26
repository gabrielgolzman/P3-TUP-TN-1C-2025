import Button from "../button/Button"

const BookItem = ({
    title,
    author,
    rating,
    pageQty
}) => {
    return (
        <>
            <h2>{title}</h2>
            <h3>{author}</h3>
            <div>{rating} estrellas</div>
            <p>{pageQty} páginas</p>
            <Button text="Actualizar precio" />
        </>
    )
}

export default BookItem