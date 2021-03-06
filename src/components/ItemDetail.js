import './ItemDetail.css'
import BuyButtons from './BuyButtons';
import ItemCount from './ItemCount';
import {useState} from 'react'
import {Link} from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'


 
function ItemDetail ({item}) {
    const [inputType, setInputType] = useState('itemCount')
    const { addToCart } = useContext(CartContext)
    
    function handleInputType() {
        setInputType('buyButtons');
    }

    function addItem (seleccion) {
        addToCart({...item, seleccion})
    }

    return <div className="item-detail">
                <img className="item-detail-img" src={item.imagenA} alt={item.name}/>
                <div className="item-detail-info">
                    <div className="btn-close-container">
                        <Link to="/products"><button className="btn-close"><span className="material-icons">close</span></button></Link>
                    </div>
                    <h3>{item.name}</h3>
                    <p className="detalles-producto">{item.detail}</p>
                    <span>${item.price}</span>
                    {
                        inputType === 'itemCount' ? 
                        <ItemCount stock={item.stock} initial="1" onAdd={addItem} handleInputType={handleInputType}/> : 
                        <BuyButtons />
                    }                    
                </div>
           </div>
}

export default ItemDetail;