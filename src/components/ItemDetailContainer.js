import './main.css'
import ItemDetail from './ItemDetail'
import products from "../data/products.js"
import { useEffect, useState } from "react";

function ItemDetailContainer(){
    const buscarItems = (id) => {
        return new Promise ((resolve) => {
            setTimeout(() => {
                const productDetail = products.find(prod => prod.id === id);
                resolve(productDetail)
            }, 2000)
        })
    }
    
    const [product, setProduct] = useState([])

    useEffect(() => {
        buscarItems(3)
        .then((res) => setProduct(res))
        .catch((err) => console.log(err))
    })

    return <div class="item-detail-container">
        <ItemDetail item={product}/>
    </div>
}

export default ItemDetailContainer;