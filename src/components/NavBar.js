import './main.css';
import logoHeader from '../assets/logoHeader.png'
import CartWidget from './CartWidget';
import {Link} from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

function NavBar() {
    const { cartList } = useContext(CartContext)

    return <navbar className="navbar">
        <div>
            <Link to="/">
                <img src={logoHeader} alt="logo" className="logo"/>
            </Link>
        </div>

        <div className="menu">
            <Link to="/" className="menu-link-container"><span className="menu-link">Inicio</span></Link>
            <Link to="/" className="menu-link-container"><span className="menu-link">Productos</span></Link>
            <Link to="/" className="menu-link-container"><span className="menu-link">Nosotros</span></Link>
            <Link to="/" className="menu-link-container"><span className="menu-link">Contacto</span></Link>
        </div>

        {cartList.length > 0 ? <CartWidget icon="shopping_cart" /> : <div className="hidden-cart"></div>}
    </navbar>
}

export default NavBar;