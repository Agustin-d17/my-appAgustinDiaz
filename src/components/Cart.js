import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import CartItem from './CartItem.js'
import { Link } from "react-router-dom";
import { getFirestore, addDoc, collection, documentId, writeBatch, getDocs, where, query} from 'firebase/firestore/lite'
import Swal from 'sweetalert2';




function Cart() {
    const { cartList, precioTotal, vaciarCarrito } = useContext(CartContext)

    const generarOrden = async () => {
        let orden = {};

        orden.buyer = {name: 'Agustin Diaz', email: 'lad@gmail.com', phone: '0123456987'};
        orden.total = precioTotal;
        orden.items = cartList.map(cartItem => {
            const id = cartItem.id;
            const precio = cartItem.precio;
            const nombre = cartItem.nombre;
            const seleccion = cartItem.seleccion;

            return {id, precio, nombre, seleccion};
        })

        const db = getFirestore()
        const queryCollection = collection(db, 'orders')
        addDoc(queryCollection, orden)
        .then((response) => Swal.fire({
            icon: 'success',
            title: 'Su pedido fue recibido',
            text: `El id de su compra es: ${response.id}`
        }))
        .finally(() => vaciarCarrito())

        const queryCollectionStock = collection(db, 'productos')
        const queryActualizarStocks = await query(queryCollectionStock, where(documentId(), 'in', cartList.map(el => el.id)))

        const batch = writeBatch(db)

        await getDocs(queryActualizarStocks)
        .then((resp) => resp.docs.forEach(res => batch.update(res.ref, {
            stock: res.data().stock - cartList.find(item => item.id === res.id).seleccion
        })))
        .finally(() => console.log('Stock actualizado'))

        batch.commit()
    }

    

    if (cartList.length > 0) {
        return <div>
                    {cartList.map(product => <CartItem item={product}/>)}
                    <h2>Total: $ {precioTotal}</h2>
                    <button onClick={vaciarCarrito}>Vaciar carrito</button>
                    <Link to="/"><button onClick={generarOrden}>Finalizar compra</button></Link>    

               </div>
    }else{
        return <div>
                    <h2>No hay articulos en el carrito</h2>
                    <Link to="/"><button>Volver los productos</button></Link>    
               </div> 
        
    }
}

export default Cart;