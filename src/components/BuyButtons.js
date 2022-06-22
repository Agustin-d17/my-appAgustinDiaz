import  "./BuyButtons.css";
import {Link} from 'react-router-dom'


function BuyButtons() {
    return <div className="buy-buttons">
                <Link to="/cart"><button className="buy-button">Terminar compra</button></Link>
                <Link to="/products"><button className="buy-button">Seguir comprando</button></Link>
           </div>
}

export default BuyButtons;