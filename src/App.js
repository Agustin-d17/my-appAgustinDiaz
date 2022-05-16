// import logo from './logo.svg';
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar.js';
import Title from './components/Title'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <main>
        <Title title="Productos"/>
        <ItemListContainer />
        <ItemDetailContainer />
      </main>
    </div>
  );
}

export default App;
