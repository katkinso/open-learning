import React, { Component } from "react";


const TextInput = props => {
    return (
        <input 
            id={props.id}
            type={props.type}
            className="form-control"
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}
         />
    )
}

export default TextInput

