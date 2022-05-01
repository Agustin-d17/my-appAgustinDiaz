import './main.css';
import logoHeader from './logoHeader.png'

function Navbar() {
    return <navbar className="navbar">
        <div>
            <img src={logoHeader} alt="logo" className="logo"/>
        </div>

        <ul className="menu">
            <li><a href="/#">Inicio</a></li>
            <li><a href="/#">Productos</a></li>
            <li><a href="/#">Nosotros</a></li>
            <li><a href="/#">Contacto</a></li>
        </ul>
    </navbar>
}

export default Navbar;