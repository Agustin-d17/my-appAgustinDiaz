import "./ItemListContainer.css"
import { useEffect, useState } from "react";
import Select from "react-select";
import ItemList from "./ItemList";
import { getFirestore, getDocs, collection, query, where } from 'firebase/firestore/lite'


function ItemListContainer() {
    
    const [items, setItems] = useState([])
    const [filter, setFilter] = useState("todos")

    const filters = [
        { label: "Todos", value: "todos" },
        { label: "Joystick", value: "joystick" },
        { label: "Auriculares", value: "auriculares" }
    ]

    const handleSelectChange = ({ value }) => {
        setFilter(value)
    }

    useEffect(() => {
        const db = getFirestore()

        const queryCollection = collection(db, 'productos')
        const queryCollectionFilter = filter === "todos" ? queryCollection : query(queryCollection, where("category", "==", filter))

        getDocs(queryCollectionFilter)
        .then(resp => setItems(resp.docs.map(doc => ({ id: doc.id, ...doc.data() }))))
    }, [filter])


    return <div className="item-list-container">
                <div className="select-container">
                    <span>Filtrar por:</span>
                    <Select 
                        className="select-category"
                        options={filters}
                        defaultValue={filters[0]}
                        onChange={ handleSelectChange }
                    />
                </div>
                <ItemList database={items}/>
           </div>
}

export default ItemListContainer;