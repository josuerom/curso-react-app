import logo from './logo.svg';
import './App.css';

function App() {

  var nombre = "Josué Romero";

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola Mundo soy {nombre}<br />
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprende React Ya!!
        </a>
      </header>
    </div>
  );
}

export default App;