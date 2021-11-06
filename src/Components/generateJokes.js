import React from 'react';
import './GenerateJokes.css'

class GenerateJokes extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            joke: 'Hello Donkey!'
        }
    }

    componentDidMount() {
        const URL = 'https://icanhazdadjoke.com/';
        const options = {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        }
        fetch(URL, options)
            .then(res => res.json())
            .then(data => {
                this.setState({ joke: data.joke })
            })
    }

    render() {

        return (
            <div id='random-joke'>{this.state.joke}</div>
        )
    }
}

export default GenerateJokes;