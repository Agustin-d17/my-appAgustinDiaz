// import logo from './logo.svg';
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar.js';
import Cart from './components/Cart.js'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import CartContextProvider from './context/CartContext.js';


function App() {

  return (
    <BrowserRouter>
      <CartContextProvider>
        <div className="App">
            <header className="App-header">
              <NavBar />
            </header>
          <main>
            <Routes>
                <Route path="/" element={<ItemListContainer />}/>
                <Route path="/detalle/:id" element={<ItemDetailContainer />}/>
                <Route path="/*" element={<Navigate to="/" replace />} />
                <Route path="/Cart" element={<Cart />} />
            </Routes>
          </main>
        </div>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
