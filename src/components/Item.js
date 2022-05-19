import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';
import './main.css';

function Item({item}) {
    return <div className="item-card">
                <div className="item-info">
                    <div className="img-container">
                        <img src={item.imagenA} alt={item.name} />
                        <img className="img-hover" src={item.imagenB} alt={item.name}/>
                    </div>
                    <span className="item-title">{item.name}</span>
                    <div>
                        <span>Stock: {item.stock}</span>
                        <span>Precio: ${item.precio}</span>
                    </div>
                </div>
                <ItemCount stock={item.stock} initial="1" onAdd={(seleccion) => alert(`Agregaste ${seleccion} unidades al carrito`)}/>
                <Link className="btn-detail-container" to={`/detalle/${item.id}`}>
                    <button className="btn-detail"> Detalles del producto</button>
                </Link>
                
           </div>

}

export default Item;