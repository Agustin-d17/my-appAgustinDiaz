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
        {/* <div className="menu">
            <Link to="/"><span>Inicio</span></Link>
            <Link to="/"><span>Productos</span></Link>
            <Link to="/"><span>Nosotros</span></Link>
            <Link to="/"><span>Contacto</span></Link>
        </div> */}

        <CartWidget icon="shopping_cart" />
    </navbar>
}

export default NavBar;