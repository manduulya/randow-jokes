import React from "react";
import './Button.css'

export default function Button(props) {
    return (
        <button type='button' id='button' onClick={props.generateOne}>{props.message}</button>
    )
}