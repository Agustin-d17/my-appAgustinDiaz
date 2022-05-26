import './main.css';
import logoHeader from '../assets/logoHeader.png'
import CartWidget from './CartWidget';
import {Link} from 'react-router-dom'

function NavBar() {
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

        <CartWidget icon="shopping_cart" />
    </navbar>
}

export default NavBar;