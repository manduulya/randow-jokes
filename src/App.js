import './App.css';
import Button from './Components/Button'
import GenerateJokes from './Components/generateJokes';
import './Components/Button.css'
import logo from './assets/emoji.png'

function App() {

  return (
    <main className="App">
      <section>
        <img src={logo} alt='dad joke logo' className='logo' />
        <nav className='nav-header'>
          "Let's get dad joke!"
        </nav>
      </section>
      <section>
        <Button message='Gimme the random one!' />
        <Button message='Let me see what I can find!' />
        <GenerateJokes />
      </section>
    </main>
  );
}

export default App;

//https://icanhazdadjoke.com/api