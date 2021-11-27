import logo from './logo.svg';
import './App.css';
import FreeTime from '../src/components/freetime/FreeTime'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        free time
        <FreeTime />
      </header>
    </div>
  );
}

export default App;
