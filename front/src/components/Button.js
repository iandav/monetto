import React from "react";
import { Link } from "react-router-dom"
// Styles
import "../styles/component-styles/Button.css"

function Button(props) {
    return (
            <Link to="/login">
                Log in
            </Link>
    );
}

export default Button;