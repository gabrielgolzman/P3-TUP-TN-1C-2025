// Imports de react

// Librerias externas

// Helpers

// Componentes

// Estilos

import { books } from "./data/books"

import BookItem from "./components/bookItem/BookItem"

const App = () => {

  const booksMapped = books.map((book, index) =>
    <BookItem
      key={index}
      title={book.title}
      author={book.author}
      pageQty={book.pageQty}
      rating={book.rating}>Texto</BookItem>)

  return (
    <>
      <h2>Book Champions app</h2>
      <p>¡Quiero leer libros!</p>
      {booksMapped}
    </>
  )

}

export default App
