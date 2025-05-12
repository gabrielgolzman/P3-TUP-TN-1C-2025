import { useContext } from "react";
import { Form } from "react-bootstrap";

import { TranslateContext } from "../../../services/translateContext/Translate.context";
import { useTranslate } from "../../../hooks/useTranslate/useTranslate";

const ComboLanguage = () => {
    const { language, handleChangeLanguage } = useContext(TranslateContext);

    const translate = useTranslate();

    const changeLanguage = (event) => {
        handleChangeLanguage(event.target.value);
    };

    return (
        <Form.Select
            onChange={changeLanguage}
            value={language}
            aria-label="Select Language"
            className="w-50 mb-4"
        >
            <option value="es">{translate("spanish_lang")}</option>
            <option value="en">{translate("english_lang")}</option>
        </Form.Select>
    );
};

export default ComboLanguage;