import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import CartItem from './CartItem.js'
import { Link } from "react-router-dom";

function Cart() {
    const { cartList, precioTotal, vaciarCarrito } = useContext(CartContext)


    if (cartList.length > 0) {
        return <div>
                    {cartList.map(product => <CartItem item={product}/>)}
                    <h2>Total: $ {precioTotal}</h2>
                    <button onClick={vaciarCarrito}>Vaciar carrito</button>
               </div>
    }else{
        return <div>
                    <h2>No hay articulos en el carrito</h2>
                    <Link to="/"><button>Volver los productos</button></Link>    
               </div> 
        
    }
}

export default Cart;