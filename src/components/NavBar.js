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

        <ul className="menu">
            <li><a href="/#">Inicio</a></li>
            <li><a href="/#">Productos</a></li>
            <li><a href="/#">Nosotros</a></li>
            <li><a href="/#">Contacto</a></li>
        </ul>

        <CartWidget icon="shopping_cart" />
    </navbar>
}

export default NavBar;