import React, { Component } from "react";


const Button = props => {

    const classInfo = `btn btn-primary ${props.for}`

    return (
        <button type={props.type} onClick={props.action} className={classInfo}>{props.text}</button>
    )
}

export default Button