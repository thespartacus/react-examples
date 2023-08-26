import UseCallback from './components/UseCallback/UseCallback';
import './App.css';
import UseMemo from './components/UseMemo/UseMemo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          React Examples
        </p>
        Use Callback Example
        <UseCallback />
        <br></br>
        Use Memo Example
        <UseMemo />
      </header>

    </div>
  );
}

export default App;
