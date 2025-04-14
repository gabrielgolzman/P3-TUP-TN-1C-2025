// Imports de react

// Librerias externas

// Helpers

// Componentes

// Estilos
import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router"

import Login from "./components/login/Login"
import Dashboard from "./components/dashboard/Dashboard"
import NotFound from "./components/routes/notFound/NotFound"
import Protected from "./components/routes/protected/Protected"

const App = () => {

  const [isSignedIn, setIsSignedIn] = useState(false);

  const handleSignIn = () => {
    setIsSignedIn(true);
  }

  return (
    <div className="d-flex flex-column align-items-center">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="login"
            element={<Login onLogin={handleSignIn} />} />
          <Route element={<Protected isSignedIn={isSignedIn} />}>
            <Route path="library" element={<Dashboard />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>

      </BrowserRouter>
    </div>
  )

}

export default App
