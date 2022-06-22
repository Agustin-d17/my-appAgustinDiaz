import './NavBar.css';
import logoHeader from '../assets/logoHeader.png'
import CartWidget from './CartWidget';
import {Link, NavLink} from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

function NavBar() {
    const { cartList } = useContext(CartContext)

    return <nav className="navbar">
        <div>
            <Link to="/">
                <img src={logoHeader} alt="logo" className="logo"/>
            </Link>
        </div>

        <div className="menu">
            <NavLink to="/" className={ ({isActive}) => isActive ? "menu-link-active" : "menu-link"}>Inicio</NavLink>
            <NavLink to="/products" className={({isActive}) => isActive ? "menu-link-active" : "menu-link"}>Productos</NavLink>
            <NavLink to="/" className="menu-link">Nosotros</NavLink>
            <NavLink to="/" className="menu-link">Contacto</NavLink>
        </div>

        {cartList.length > 0 ? <CartWidget icon="shopping_cart" /> : <div className="hidden-cart"></div>}
    </nav>
}

export default NavBar;