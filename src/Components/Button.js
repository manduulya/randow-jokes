import React from "react";
import './Button.css'

export default function Button(props) {
    return (
        <button type='submit' id='button'>{props.message}</button>
    )
}