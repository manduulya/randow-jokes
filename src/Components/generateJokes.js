import React from 'react';
import './GenerateJokes.css'

class GenerateJokes extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            joke: ''
        }
    }

    handleGenerate = () => {
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
            <section>
                <button type='button' id='button' onClick={this.handleGenerate}>Gimme random one!</button>
                {this.state.joke && <div id='random-joke'>{this.state.joke}</div>}
            </section>
        )
    }
}

export default GenerateJokes;