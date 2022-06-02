import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';
import './main.css';
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

function Item({item}) {
    const { addToCart } = useContext(CartContext)
    
    function agregarAlCarrito (seleccion) {
        addToCart({...item, seleccion})
    }

    return <div className="item-card">
                <div className="item-info">
                    <div className="img-container">
                        <img src={item.imagenA} alt={item.nombre} />
                        <img className="img-hover" src={item.imagenB} alt={item.name}/>
                    </div>
                    <span className="item-title">{item.nombre}</span>
                    <div className="item-price">
                        <span>Precio: ${item.precio}</span>
                    </div>
                </div>
                <ItemCount stock={item.stock} initial="1" onAdd={agregarAlCarrito}/>
                <Link className="btn-detail-container" to={`/detalle/${item.id}`}>
                    <button className="btn-detail"> Detalles del producto</button>
                </Link>
                
           </div>

}

export default Item;