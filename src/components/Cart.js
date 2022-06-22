import './Cart.css'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from "react-router-dom";
import CartItemContainer from './CartItemContainer.js';
import CartForm from './CartForm';




function Cart() {
    const { cartList, createOrder } = useContext(CartContext)

    const orderManage = (customerData) => {
        createOrder(customerData)
    } 


    if (cartList.length > 0) {
        return <div className="cart">  
                    <CartItemContainer />
                    <CartForm orderManage={orderManage}/>
               </div>
    }else{
        return <div>
                    <h2 className="empty-cart">No hay articulos en el carrito</h2>
                    <Link to="/products"><button className="back-button">Volver los productos</button></Link>    
               </div> 
        
    }
}

export default Cart;