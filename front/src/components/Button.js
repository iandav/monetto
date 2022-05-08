import React from "react";
import { Link } from "react-router-dom"
// Styles
import styles from "../styles/component-styles/Button.module.css"

function Button({target, text, color, type}) {
    return (
            <Link to={target} className={`${styles[color]} ${styles[type]}`}>
                {text}
            </Link>
    );
}

export default Button;