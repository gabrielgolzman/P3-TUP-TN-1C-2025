// Imports de react

// Librerias externas

// Helpers

// Componentes

// Estilos
import { useState } from "react"

import { books as dataBooks } from "./data/books"

import Books from "./components/books/Books"
import NewBook from "./components/newBook/NewBook"
import Login from "./components/login/Login"

const App = () => {
  const [books, setBooks] = useState(dataBooks);

  const handleAddBook = (newBook) => {
    setBooks(prevBooks => [newBook, ...prevBooks]);
  }
  return (
    <div className="d-flex flex-column align-items-center">
      {/* <h2>Book Champions app</h2>
      <p>¡Quiero leer libros!</p>
      <NewBook onAddBook={handleAddBook} />
      <Books books={books} /> */}
      <Login />
    </div>
  )

}

export default App
