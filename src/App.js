import './App.css';
import GenerateJokes from './Components/generateJokes';
import './Components/Button.css'
import logo from './assets/emoji.png'

function App() {

  return (
    <main className="App">
      <section>
        <img src={logo} alt='dad joke logo' className='logo' />
        <nav className='nav-header'>
          "Let's get some dad joke!"
        </nav>
      </section>
      <section>
        <GenerateJokes />
      </section>
    </main>
  );
}

export default App;

//https://icanhazdadjoke.com/api