// Imports de react

// Librerias externas

// Helpers

// Componentes

// Estilos

import { books } from "./data/books"

import BookItem from "./components/bookItem/BookItem"

const App = () => {

  const booksMapped = books.map((book) =>
    <BookItem
      key={book.id}
      title={book.title}
      author={book.author}
      pageCount={book.pageCount}
      rating={book.rating}
      imageUrl={book.imageUrl}
      available={book.available} />)

  return (
    <>
      <h2>Book Champions app</h2>
      <p>¡Quiero leer libros!</p>
      {booksMapped}
    </>
  )

}

export default App
