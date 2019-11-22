import React, { Component } from "react";


const Button = props => {
    return (
        <button type={props.type} onClick={props.action} className="btn btn-primary">{props.text}</button>
    )
}

export default Button