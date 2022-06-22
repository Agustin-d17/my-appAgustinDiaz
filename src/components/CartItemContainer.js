import './CartItemContainer.css'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import CartItem from './CartItem.js'

function CartItemContainer () {
    const { cartList, cleanCart } = useContext(CartContext)

    return <div className="cart-item-container">
                {cartList.map(product => <CartItem key={product.id} item={product}/>)}
                <button className="delete-items" onClick={cleanCart}>Vaciar carrito</button>
                <Link to="/products"><button className="back-button">Seguir comprando</button></Link>
            </div>
}

export default CartItemContainer;