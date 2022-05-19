import { useEffect, useState } from "react";
import ItemList from "./ItemList";

function ItemListContainer() {
    
    const [items, setItems] = useState([])
    

    useEffect(() => {
        fetch("./data/products.json")
        .then(response => response.json())
        .then(data => {
            setItems(data)
        })
        .catch(error => console.error(error))
    }, [])


    return <div className="Item-list-container">
                <ItemList database={items}/>
           </div>
}

export default ItemListContainer;