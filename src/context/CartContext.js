import { createContext, useState } from "react";
import Swal from 'sweetalert2';
import { getFirestore, addDoc, collection, documentId, writeBatch, getDocs, where, query} from 'firebase/firestore/lite'


export const CartContext = createContext([])

const CartContextProvider = ({children}) => {
    const [cartList, setcartList] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    const [totalItems, setTotalItems] = useState(0)

    const isInCart = (id) => {
        return cartList.some((item) => item.id === id)
    }

    const addToCart = (item) => {
        if (isInCart(item.id)) {
            let index = cartList.findIndex(elem => elem.id === item.id);
            const newCartList = cartList;
            newCartList[index].seleccion += parseInt(item.seleccion);
            
            updateCart(newCartList);
        }else {
            updateCart([...cartList, item]);
        }
    }
    
    const cleanCart = () => {
        setcartList([])
    }

    const updateCart = (array) => {
        setcartList(array);
        setTotalItems(array.map(el => el.seleccion).reduce((total, item) => total+item, 0));
        setTotalPrice(array.map(el => el.seleccion*el.price).reduce((total, item) => total+item, 0));
    }

    const deleteItem = (id) => {
        const newCartList = [...cartList];
        let index = newCartList.findIndex((product) => product.id ===id);
        newCartList.splice(index,1);

        updateCart([...newCartList])
    }

    const createOrder = async (customerData) => {
        let orden = {};

        orden.buyer = customerData;
        orden.total = totalPrice;
        orden.items = cartList.map(cartItem => {
            const id = cartItem.id;
            const price = cartItem.price;
            const name = cartItem.name;
            const seleccion = cartItem.seleccion;

            return {id, price, name, seleccion};
        })

        const db = getFirestore()
        const queryCollection = collection(db, 'orders')
        addDoc(queryCollection, orden)
        .then((response) => Swal.fire({
            icon: 'success',
            title: 'Su pedido fue recibido',
            text: `El id de su compra es: ${response.id}`,
            confirmButtonColor: "#000"
        }))
        .finally(() => cleanCart())

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

    return (
        <CartContext.Provider value={{cartList, totalItems, totalPrice, addToCart, cleanCart, deleteItem, createOrder}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;