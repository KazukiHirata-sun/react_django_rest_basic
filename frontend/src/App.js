import logo from './logo.svg';
import './App.css';
import DrtApiFetch from './components/DrtApiFetch';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <DrtApiFetch />
      </header>
    </div>
  );
}

export default App;
