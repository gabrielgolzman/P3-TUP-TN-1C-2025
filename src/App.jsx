// Imports de react

// Librerias externas

// Helpers

// Componentes

// Estilos
import { useState } from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router"

import Login from "./components/auth/login/Login"
import Dashboard from "./components/library/dashboard/Dashboard"
import NotFound from "./components/routes/notFound/NotFound"
import Protected from "./components/routes/protected/Protected"

const App = () => {

  const [isSignedIn, setIsSignedIn] = useState(false);

  const handleSignIn = () => {
    setIsSignedIn(true);
  }

  const handleLogout = () => {
    setIsSignedIn(false);
  }

  return (
    <div className="d-flex flex-column align-items-center">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to='login' />} />
          <Route
            path="login" element={<Login onLogin={handleSignIn} />} />
          <Route element={<Protected isSignedIn={isSignedIn} />}>
            <Route path="/library/*" element={<Dashboard onLogout={handleLogout} />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>

      </BrowserRouter>
    </div>
  )

}

export default App
