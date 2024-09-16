import React from "react";
import classes from "./index.module.css";	

function Card ({ children }) {
    return (
        <div className = {classes.card}>
            {children}
        </div>
    );
}

export default Card;