import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

function CartItem ({item}) {
    const { eliminarItem } = useContext(CartContext)

    const removerItem = () => {
        eliminarItem(item.id)
    }

    return <>
                <li key={item.id}>{item.name} - ${item.precio} x {item.seleccion} - <button onClick={removerItem}><span class="material-icons">delete</span></button></li>
           </>
}

export default CartItem;