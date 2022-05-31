import { createContext, useState } from "react";

export const CartContext = createContext([])

const CartContextProvider = ({children}) => {
    const [cartList, setcartList] = useState([])
    const [precioTotal, setPrecioTotal] = useState(0)
    const [totalItems, setTotalItems] = useState(0)

    const isInCart = (id) => {
        return cartList.some((item) => item.id === id)
    }

    const addToCart = (item) => {
        // setcartList([...cartList, item])
        if (isInCart(item.id)) {
            let index = cartList.findIndex(elem => elem.id === item.id);
            const newCartList = cartList;
            newCartList[index].seleccion += parseInt(item.seleccion);
            actualizarCarrito(newCartList);
        }else {
            actualizarCarrito([...cartList, item]);
        }
    }
    
    const vaciarCarrito = () => {
        setcartList([])
    }

    const actualizarCarrito = (array) => {
        setcartList(array);
        setTotalItems(array.map(el => el.seleccion).reduce((total, item) => total+item, 0));
        setPrecioTotal(array.map(el => el.seleccion*el.precio).reduce((total, item) => total+item, 0));
    }

    const eliminarItem = (id) => {
        const newCartList = [...cartList];
        let index = newCartList.findIndex((product) => product.id ===id);
        newCartList.splice(index,1);

        actualizarCarrito([...newCartList])
    }

    return (
        <CartContext.Provider value={{cartList, totalItems, precioTotal, addToCart, vaciarCarrito, eliminarItem}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;