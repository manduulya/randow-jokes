import './App.css';
import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import GenerateJokes from './Components/generateJokes';
import './Components/Button.css'
import logo from './assets/emoji.png'
import SearchJokes from './Components/SearchJokes';


function App() {
  const [isButtonsActive, setIsButtonActive] = React.useState(false);
  const hideButtons = () => {
    setIsButtonActive(true)
  }
  const showButtons = () => {
    setIsButtonActive(false)
  }
  return (
    <main className="App">
      <section>
        <img src={logo} alt='dad joke logo' className='logo' />
        <nav className='nav-header'>
          "Let's get some dad joke!"
        </nav>
      </section>
      <Link to='/random'>
        <button className={`nav-button ${isButtonsActive ? "hidden" : ""}`} onClick={hideButtons}>Random</button>
      </Link>
      <Link to='/search'>
        <button className={`nav-button ${isButtonsActive ? "hidden" : ""}`} onClick={hideButtons} >Search</button>
      </Link>
      <Link to='..'>
        <span className='X-button' onClick={showButtons}>X</span>
      </Link>
      <section className='main-section'>
        <Routes>
          <Route path='/search/*' element={<SearchJokes />} />
          <Route path='/random/*' element={<GenerateJokes />} />
        </Routes>
      </section>
    </main>

  );
}

export default App;

//https://icanhazdadjoke.com/api