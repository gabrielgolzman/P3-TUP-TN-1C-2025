import { useContext } from "react"
import { Button } from "react-bootstrap"

import { ThemeContext } from "../../../services/themeContext/Theme.context"
import { THEMES } from "../../../services/themeContext/ThemeContextProvider.consts"

const ToggleTheme = () => {
    const { theme, toggleTheme } = useContext(ThemeContext)

    return (
        <Button onClick={toggleTheme} className="me-3 my-3">
            Cambiar tema a {theme === THEMES.LIGHT ? "oscuro" : "claro"}
        </Button>
    )
}

export default ToggleTheme