import './main.css'
import ItemDetail from './ItemDetail'
import { useEffect, useState } from "react";
import {useParams} from 'react-router-dom'

function ItemDetailContainer(){
    const [item, setItem] = useState([])
    const { id } = useParams()
    
    useEffect(() => {
        setTimeout(() => {
            fetch("/data/products.json")
            .then(response => response.json())
            .then(itemsList => itemsList.find(prod => prod.id === id))
            .then(data => setItem(data))
            .catch(err => console.log(err))
        }, 0);
    },[id]);



    return <div className="item-detail-container">
        <ItemDetail item={item}/>
    </div>
}

export default ItemDetailContainer;