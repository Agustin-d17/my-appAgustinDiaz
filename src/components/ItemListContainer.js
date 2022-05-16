import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import products from "../data/products.js"

function ItemListContainer() {
    
    const [items, setItems] = useState([])
    
    const obtenerDatos = new Promise((res) => {
        setTimeout(() => {
            res(products);}, 2000);
    })
    

    useEffect(() => {
        obtenerDatos
        .then((res) => {
            setItems(res);
        })
    }, [])


    return <div className="Item-list-container">
                <ItemList database={items}/>
           </div>
}

export default ItemListContainer;