import logo from './logo.svg';
import './App.css';

function doesWin(firstCardVal, myCardVal, secondCardVal)
{
  const wins = myCardVal > firstCardVal && myCardVal < secondCardVal
  console.log(wins);
}


function App() {
  doesWin(2, 5, 7);
  doesWin(2, 8, 7);
  doesWin(2, 2, 7);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
