import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import CartItem from './CartItem.js'

function Cart() {
    const { cartList, vaciarCarrito } = useContext(CartContext)


    return <div>
                {cartList.map(product => <CartItem item={product}/>)}
                <button onClick={vaciarCarrito}>Vaciar carrito</button>
           </div>
}

export default Cart;