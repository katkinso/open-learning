import React, { Component } from "react";


const Button = props => {
    return (
        <button type={props.type} className="btn btn-primary">{props.text}</button>
    )
}

export default Button