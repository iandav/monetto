import React from "react";
import { Link } from "react-router-dom"
import "./Button.css"

function Button({target, text, color, name}) {
    return (
            <Link to={target} className={`button ${color} ${name}`}>
                {text}
            </Link>
    );
}

export default Button;