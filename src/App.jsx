// Imports de react

// Librerias externas

// Helpers

// Componentes

// Estilos

import { books } from "./data/books"

import Books from "./components/books/Books"
import NewBook from "./components/newBook/NewBook"

const App = () => {

  return (
    <div className="d-flex flex-column align-items-center">
      <h2>Book Champions app</h2>
      <p>¡Quiero leer libros!</p>
      <NewBook />
      <Books books={books} />
    </div>
  )

}

export default App
