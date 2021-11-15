import React from 'react';
import './Button.css'
import './SearchJokes.css'


export default class SearchJokes extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            jokes: [],
            userInput: ''
        }
    }
    handleChange = (e) => {
        let userValue = e.currentTarget.value;
        this.setState({ userInput: userValue })
    }
    handleSearch = () => {
        const { userInput } = this.state;
        console.log(userInput)
        const searchURL = (`https://icanhazdadjoke.com/search?term=${userInput}`);
        const options = {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        }
        fetch(searchURL, options)
            .then(res => res.json())
            .then(data => {
                this.setState({ jokes: data.results })
                console.log(this.state.jokes);
            })
    }

    render() {
        const { jokes } = this.state;
        return (
            <form>
                <input type='text' placeholder='Enter your term' id='search-input' className='search-input' onChange={this.handleChange} required />
                <br />
                <button type='submit' id='button' onClick={this.handleSearch}>Let me find some!</button>
                <ul className='result-ul'>
                    {jokes.map((joke) => (
                        <li className='li-box' key={joke.id}>{joke.joke}</li>
                    ))}
                </ul>
            </form>
        )
    }
}