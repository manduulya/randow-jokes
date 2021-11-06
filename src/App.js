import './App.css';
import Button from './Components/Button'

function App() {
  return (
    <main className="App">
      <section>
        <nav>
          Let's get dad joke
        </nav>
      </section>
      <section>
        <Button message='Gimme the random one!' />
        <Button message='Let me see what I can find!' />
      </section>
    </main>
  );
}

export default App;

//https://icanhazdadjoke.com/api