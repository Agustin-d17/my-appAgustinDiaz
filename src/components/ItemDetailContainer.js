import './main.css'
import ItemDetail from './ItemDetail'
import { useEffect, useState } from "react";
import {useParams} from 'react-router-dom'
import { getFirestore, doc, getDoc} from 'firebase/firestore/lite'


function ItemDetailContainer(){
    const [item, setItem] = useState([])
    const { id } = useParams()
    
    
    
    useEffect(() => {
        const db = getFirestore()

        const dbQuery = doc(db, 'productos', id)
        getDoc(dbQuery)
        .then(resp => setItem({ id: resp.id, ...resp.data() } ) )
    },[id]);



    return <div className="item-detail-container">
        <ItemDetail item={item}/>
    </div>
}

export default ItemDetailContainer;