import  "./main.css";
import {Link} from 'react-router-dom'


function BuyButtons() {
    return <div className="buy-buttons">
                <Link to="/cart"><button className="buy-button">Ver carrito</button></Link>
                <Link to="/"><button className="buy-button">Seguir comprando</button></Link>
           </div>
}

export default BuyButtons;