import BuyButtons from './BuyButtons';
import ItemCount from './ItemCount';
import {useState} from 'react'
import './main.css'

function ItemDetail ({item}) {
    const [inputType, setInputType] = useState('itemCount')
    
    function handleInputType() {
        setInputType('buyButtons');
    }

    function infoAgregados (seleccion) {
        alert(`Agregaste ${seleccion} unidades al carrito`)
    }

    return <div className="item-detail">
                <img className="item-detail-img" src={item.imagenB} alt={item.name}/>
                <div className="item-detail-info">
                    <h3>{item.name}</h3>
                    <p className="detalles-producto">{item.detail}</p>
                    <span>${item.precio}</span>
                    {
                        inputType == 'itemCount' ? 
                        <ItemCount stock={item.stock} initial="1" onAdd={infoAgregados} handleInputType={handleInputType}/> : 
                        <BuyButtons />
                    }                    
                </div>
           </div>
}

export default ItemDetail;