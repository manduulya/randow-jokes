import React from 'react';
import './GenerateJokes.css'
import Button from './Button'

class GenerateJokes extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            joke: ''
        }
    }

    handleGenerate = () => {
        console.log('clicked')
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
                <Button type='button' message='Gimme random one!' generateOne={this.handleGenerate} />
                <div id='random-joke'>{this.state.joke}</div>
            </section>
        )
    }
}

export default GenerateJokes;