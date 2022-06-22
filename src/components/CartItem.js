import './CartItem.css';
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

function CartItem ({item}) {
    const { deleteItem } = useContext(CartContext)

    const removeItem = () => {
        deleteItem(item.id)
    }

    return <>
                <div className="cart-item">
                    <div className="cart-item-product">
                        <img src={item.imagenA} alt={item.name}/>
                        <div>
                            <span className="cart-item-product-title">{item.name}</span>
                        </div>
                    </div>
                    <div className="cart-item-quantity">
                        <span>Cantidad: {item.seleccion}</span>
                    </div>
                    <div className="cart-item-price">
                        <span>${item.price}</span>
                    </div>
                    <div className="cart-item-delete">
                        <button onClick={removeItem}><span className="material-icons">delete</span></button>
                    </div>
                </div>
           </>
}

export default CartItem;