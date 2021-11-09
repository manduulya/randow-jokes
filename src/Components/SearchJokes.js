import React from 'react';
import './Button.css'


export default class SearchJokes extends React.Component {

    render() {
        return (
            <section>
                <button type='submit' id='button'>Let me find some!</button>
            </section>
        )
    }
}