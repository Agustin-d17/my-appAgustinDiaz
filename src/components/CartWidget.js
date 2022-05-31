import { Link } from 'react-router-dom';
import './main.css';
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

function CartWidget({icon}) {
    const { totalItems } = useContext(CartContext)

    return <Link to='/cart' className='cart-widget-container'>
                 <div>
                    <span className='contador-items'>{parseInt(totalItems)}</span>
                    <button className="btn-navbar"><span className='material-icons'>{icon}</span></button>    
                </div>
           </Link>
    
}

export default CartWidget;