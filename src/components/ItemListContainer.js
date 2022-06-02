import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { getFirestore, getDocs, collection} from 'firebase/firestore/lite'


function ItemListContainer() {
    
    const [items, setItems] = useState([])

    useEffect(() => {
        const db = getFirestore()

        const queryCollection = collection(db, 'productos')
        getDocs(queryCollection)
        .then(resp => setItems(resp.docs.map(doc => ({ id: doc.id, ...doc.data() }))))
    }, [])


    return <div className="Item-list-container">
                <ItemList database={items}/>
           </div>
}

export default ItemListContainer;