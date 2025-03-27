import BookItem from "../bookItem/BookItem";

const Books = ({ books }) => {
    const booksMapped = books.map((book) =>
        <BookItem
            key={book.id}
            title={book.title}
            author={book.author}
            pageCount={book.pageCount}
            rating={book.rating}
            imageUrl={book.imageUrl}
            available={book.available} />);

    return (<div className="d-flex justify-content-center flex-wrap">
        {booksMapped}
    </div>)
}

export default Books