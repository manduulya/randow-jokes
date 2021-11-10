import React from 'react';
import './Button.css'


export default class SearchJokes extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            jokes: []
        }
    }

    handleSearch = () => {
        console.log('Search button clicked')
    }
    render() {
        return (
            <section>
                <button type='submit' id='button' onClick={this.handleSearch}>Let me find some!</button>
            </section>
        )
    }
}