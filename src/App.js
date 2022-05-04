// import logo from './logo.svg';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/NavBar.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <main>
        <ItemListContainer greeting="Hola soy un texto provisional :D" />
      </main>
    </div>
  );
}

export default App;
